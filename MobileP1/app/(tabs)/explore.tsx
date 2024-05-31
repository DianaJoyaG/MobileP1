// Modified second tab to include the Signin Form  
import { StyleSheet, Image, TextInput, Button, View } from 'react-native';
import { Collapsible } from '@/components/Collapsible';
import ParallaxScrollView from '@/components/ParallaxScrollView';
//new
import React, { useState } from 'react';

export default function TabTwoScreen() {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#D0D0D0', dark: '#353636' }}
      headerImage={<Image
        source={require('@/assets/images/nuturing-a-developer.png')} style={styles.headerImage} />}>
      <Collapsible title="Sign In">
  <View style={styles.formContainer}>
    <TextInput
      style={styles.input}
      onChangeText={setUsername}
      value={username}
      placeholder="Username"
      autoCapitalize="none"
    />
    <TextInput
      style={styles.input}
      onChangeText={setPassword}
      value={password}
      placeholder="Password"
      secureTextEntry
      autoCapitalize="none"
    />
    <Button
      title="Sign In"
      onPress={() => console.log('Sign In Pressed')} // Replace with your actual sign-in function
    />
  </View>
</Collapsible>

          </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    height: 200,
    width: 400,
    bottom: 0,
    left: 5,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
  formContainer: {
    padding: 20,
    backgroundColor: '#f0f0f0'
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
