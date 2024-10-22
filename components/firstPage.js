import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';  
import { useNavigation } from '@react-navigation/native';
const FirstPage = () => {

  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      
      
      <View style={styles.header}>
        <Image source={require('../assets/frame.png')} style={styles.logo} />
        <Text style={styles.title}>Welcome to MindBloom</Text>
        <Text style={styles.subtitle}>
        Your mindful mental health companion for everyone, anywhere{' '}
          <Text style={styles.emoji}>🌿</Text>
        </Text>
      </View>

      
      <View style={styles.mascotSection}>
        <Image source={require('../assets/unframe.png')} style={styles.mascot} />
      </View>

      
      <TouchableOpacity 
        style={styles.button} 
        onPress={() => navigation.navigate('SecondPage')} 
      >
        <Text style={styles.buttonText}>Get Started</Text>
        <Ionicons name="arrow-forward-outline" size={20} color="white" style={styles.icon} />
      </TouchableOpacity>
      <View style={styles.signInContainer}>
        <Text style={styles.signInText}>
          Already have an account?{' '}
          <Text style={styles.signInLink}>Sign In</Text>
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FDF5EC', 
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 20,
  },
  header: {
    alignItems: 'center',
    marginTop: 50,
  },
  logo: {
    width: 50,
    height: 50,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#3A2F2F',
  },
  subtitle: {
    fontSize: 16,
    color: '#6B6B6B',
    textAlign: 'center',
    paddingHorizontal: 40,
  },
  emoji: {
    fontSize: 18,
  },
  mascotSection: {
    alignItems: 'center',
  },
  mascot: {
    width: 300,
    height: 300,
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#6B4A3D',
    flexDirection: 'row',  
    alignItems: 'center',  
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 30,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
    marginRight: 10, 
  },
  icon: {
    marginLeft: 10,  
  },
  signInContainer: {
    marginBottom: 20, 
  },
  signInText: {
    fontSize: 14,
    color: '#6B6B6B',
  },
  signInLink: {
    color: '#D17A5A',  
    fontWeight: 'bold',
  },
});

export default FirstPage;
