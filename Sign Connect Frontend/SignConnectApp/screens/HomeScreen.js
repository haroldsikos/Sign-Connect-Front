// screens/HomeScreen.js
import React from 'react';
import { View, Text, Button } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text>Welcome to the Sign Language App</Text>
      <Button
        title="Start Translation"
        onPress={() => navigation.navigate('Translate')}
      />
    </View>
  );
};

export default HomeScreen;
