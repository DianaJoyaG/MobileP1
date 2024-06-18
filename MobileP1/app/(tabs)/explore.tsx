import React, { useState } from 'react';
import { StyleSheet, Image, TextInput, Button, View, Alert } from 'react-native';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import userData from '@/assets/userslogin.json';  // Ensure this path is correct

export default function TabTwoScreen() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = () => {
    // Find user in the JSON file
    const user = userData.users.find(user => user.login === username && user.password === password);

    if (user) {
      Alert.alert("Login Successful", `Welcome ${user.login}!`);
    } else {
      Alert.alert("Login Failed", "Incorrect username or password.");
    }
  };

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#D0D0D0', dark: '#353636' }}
      headerImage={<Image
        source={require('@/assets/images/icon-web-dev.jpg')} style={styles.headerImage} />}>
      <ThemedText type="subtitle">Sign in with your Github Account</ThemedText>
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
          onPress={handleSignIn}
        />
      </View>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    height: 210,
    width: 400,
    bottom: 0,
    left: 5,
    position: 'absolute',
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
