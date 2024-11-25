import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'; // Importing icons
import FontAwesome from 'react-native-vector-icons/FontAwesome'; // For social icons
import { useNavigation } from '@react-navigation/native';
import api from '../api';

const Login = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isPasswordVisible, setPasswordVisible] = useState(false);

  const handleLogin = async () => {
    try {
      const response = await api.post('/login', { email, password });
      
      // Store the token securely in localStorage, AsyncStorage, or context (depending on your preference)
      const { token } = response.data;

      // Save the JWT token to be used for authenticated routes (localStorage or AsyncStorage)
      // For simplicity, let's just store it in memory for this example
      console.log('Login successful, token:', token);

      // Navigate based on user role
      const { role } = response.data.user;
      if (role === 'DOCTOR') {
        navigation.navigate('firstPage');
      } else {
        navigation.navigate('AssessmentHealthGoal');
      }

    } catch (error) {
      console.error('Login Error:', error);
      Alert.alert('Error', error.response?.data?.message || 'Invalid credentials');
    }
  };


  return (
    <View style={styles.container}>
      {/* Top Logo */}
      <View style={styles.logoContainer}>
      <Image source={require('../assets/logo2.png')} />
      </View>

      {/* Sign In Title */}
      <Text style={styles.title}>Sign In</Text>
      <Text style={styles.subtitle}>MindBloom</Text>

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

      {/* Sign In Button */}
      <TouchableOpacity 
       style={styles.signInButton}
       onPress={handleLogin}
       
      >
        <Text style={styles.signInButtonText}>Sign In</Text>
        <Icon name="arrow-forward-outline" size={20} color="#FFFFFF" />
      </TouchableOpacity>

      {/* Social Icons */}
      <View style={styles.socialIconsContainer}>
        <FontAwesome name="facebook" size={30} color="#3b5998" />
        <FontAwesome name="google" size={30} color="#DB4437" />
        <FontAwesome name="instagram" size={30} color="#C13584" />
      </View>

      {/* Bottom Links */}
      <View style={styles.bottomLinks}>
        <Text style={styles.signUpText}>
          Don't have an account?{' '}
          <Text style={styles.signUpLink} onPress={() => navigation.navigate('SignUp')}>Sign Up</Text>
        </Text>
        <TouchableOpacity>
          <Text style={styles.forgotPassword}>Forgot Password</Text>
        </TouchableOpacity>
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
    marginLeft:20,
    fontWeight:'bold',
    marginBottom: 5,  // Space between label and input field
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
    marginLeft:20,
    marginRight:20
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: '#4D351F',
  },
  inputIcon: {
    marginRight: 10,
    color:'#4D351F',
  },
  signInButton: {
    backgroundColor: '#4D351F',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 15,
    borderRadius: 30,
    marginTop: 10,
    marginBottom: 20,
    marginLeft:20,
    marginRight:20
  },
  signInButtonText: {
    color: '#fff',
    fontSize: 18,
    marginRight: 10,
  },
  socialIconsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 10,
  },
  bottomLinks: {
    marginTop: 20,
    alignItems: 'center',
  },
  signUpText: {
    fontSize: 14,
    color: '#4D351F',
  },
  signUpLink: {
    color: '#F57F17',
    fontWeight: 'bold',
  },
  forgotPassword: {
    marginTop: 10,
    fontSize: 14,
    color: '#F57F17',
  },
});

export default Login;
