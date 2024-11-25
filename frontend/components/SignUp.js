import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import api from '../api';

const SignUp = () => {
  const navigation = useNavigation();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isPasswordVisible, setPasswordVisible] = useState(false);

  const handleSignUp = async () => {
    if (password !== confirmPassword) {
      return Alert.alert('Error', 'Passwords do not match!');
    }

    try {
      const response = await api.post('/signup', {
        userName: name,
        email,
        password,
      });

      // After successful signup, navigate to the login page
      Alert.alert('Success', 'User registered successfully');
      navigation.navigate('Login'); // Navigate to Login screen

    } catch (error) {
      console.error('SignUp Error:', error);
      Alert.alert('Error', error.response?.data?.message || 'Something went wrong!');
    }
  };

  return (
    <View style={styles.container}>
      {/* Top Logo */}
      <View style={styles.logoContainer}>
        <Image source={require('../assets/logo2.png')} />
      </View>

      {/* Sign Up Title */}
      <Text style={styles.title}>Sign Up</Text>
      <Text style={styles.subtitle}>MindBloom</Text>

      {/* Name Input */}
      <Text style={styles.label}>Full Name</Text>
      <View style={styles.inputContainer}>
        <Icon name="person-outline" size={20} color="#787878" style={styles.inputIcon} />
        <TextInput
          style={styles.input}
          placeholder="Full Name"
          placeholderTextColor="#9E9E9E"
          value={name}
          onChangeText={setName}
        />
      </View>

      {/* Email Input */}
      <Text style={styles.label}>Email Address</Text>
      <View style={styles.inputContainer}>
        <Icon name="mail-outline" size={20} color="#787878" style={styles.inputIcon} />
        <TextInput
          style={styles.input}
          placeholder="Email Address"
          placeholderTextColor="#9E9E9E"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />
      </View>

      {/* Password Input */}
      <Text style={styles.label}>Password</Text>
      <View style={styles.inputContainer}>
        <Icon name="lock-closed-outline" size={20} color="#787878" style={styles.inputIcon} />
        <TextInput
          style={styles.input}
          placeholder="Enter your password..."
          placeholderTextColor="#9E9E9E"
          value={password}
          onChangeText={setPassword}
          secureTextEntry={!isPasswordVisible}
          autoCapitalize="none"
        />
        <TouchableOpacity onPress={() => setPasswordVisible(!isPasswordVisible)}>
          <Icon name={isPasswordVisible ? 'eye-outline' : 'eye-off-outline'} size={20} color="#787878" />
        </TouchableOpacity>
      </View>

      {/* Confirm Password Input */}
      <Text style={styles.label}>Confirm Password</Text>
      <View style={styles.inputContainer}>
        <Icon name="lock-closed-outline" size={20} color="#787878" style={styles.inputIcon} />
        <TextInput
          style={styles.input}
          placeholder="Confirm your password..."
          placeholderTextColor="#9E9E9E"
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          secureTextEntry={!isPasswordVisible}
          autoCapitalize="none"
        />
        <TouchableOpacity onPress={() => setPasswordVisible(!isPasswordVisible)}>
          <Icon name={isPasswordVisible ? 'eye-outline' : 'eye-off-outline'} size={20} color="#787878" />
        </TouchableOpacity>
      </View>

      {/* Sign Up Button */}
      <TouchableOpacity style={styles.signUpButton}>
        <Text style={styles.signUpButtonText} onPress={handleSignUp}>Sign Up</Text>
        <Icon name="arrow-forward-outline" size={20} color="#FFFFFF" />
      </TouchableOpacity>

      {/* Bottom Links */}
      <View style={styles.bottomLinks}>
        <Text style={styles.signInText}>
          Already have an account?{' '}
          <Text style={styles.signInLink} onPress={() => navigation.navigate('Login')}>Sign In</Text>
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F5F0',
  },
  logoContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
    backgroundColor: '#B7C59E',
    height: 120,
    borderBottomLeftRadius: 100,
    borderBottomRightRadius: 100,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#4D351F',
    textAlign: 'center',
    marginTop: 20,
  },
  subtitle: {
    fontSize: 28,
    color: '#4D351F',
    textAlign: 'center',
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    color: '#4D351F',
    marginLeft: 20,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 30,
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginBottom: 15,
    borderWidth: 2,
    borderColor: '#B7C59E',
    marginLeft: 20,
    marginRight: 20,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: '#4D351F',
  },
  inputIcon: {
    marginRight: 10,
    color: '#4D351F',
  },
  signUpButton: {
    backgroundColor: '#4D351F',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 15,
    borderRadius: 30,
    marginTop: 10,
    marginBottom: 20,
    marginLeft: 20,
    marginRight: 20,
  },
  signUpButtonText: {
    color: '#fff',
    fontSize: 18,
    marginRight: 10,
  },
  bottomLinks: {
    alignItems: 'center',
  },
  signInText: {
    fontSize: 14,
    color: '#4D351F',
  },
  signInLink: {
    color: '#F57F17',
    fontWeight: 'bold',
  },
});

export default SignUp;
