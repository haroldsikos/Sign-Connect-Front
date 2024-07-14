// screens/TranslateScreen.js
import React, { useRef } from 'react';
import { View, Button } from 'react-native';
import { RNCamera } from 'react-native-camera';
import axios from 'axios';

const TranslateScreen = () => {
  const cameraRef = useRef(null);

  const handleCapture = async () => {
    if (cameraRef.current) {
      const options = { quality: 0.5, base64: true };
      const data = await cameraRef.current.takePictureAsync(options);

      // Enviar la imagen al backend para reconocimiento
      try {
        const response = await axios.post('http://localhost:5000/translate-sign', {
          image: data.base64,
        });
        console.log(response.data.translated_text);
      } catch (error) {
        console.error('Error translating sign:', error);
      }
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <RNCamera
        ref={cameraRef}
        style={{ flex: 1 }}
        type={RNCamera.Constants.Type.back}
      />
      <Button title="Capture" onPress={handleCapture} />
    </View>
  );
};

export default TranslateScreen;
