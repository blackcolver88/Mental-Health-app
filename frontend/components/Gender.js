import React, { useState } from 'react';
import { Ionicons } from '@expo/vector-icons'; // Icons
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Gender = () => {
    const navigation = useNavigation();
  const [selectedGender, setSelectedGender] = useState(null); // Track selected option

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
      <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Ionicons name="chevron-back" size={20} color="#FFF" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Assessment</Text>
        <Text style={styles.pageCount}>2 of 10</Text>
      </View>

      <Text style={styles.question}>What’s your official gender?</Text>

      <View style={styles.optionsContainer}>
        {/* Male Option */}
        <TouchableOpacity
          style={[
            styles.option,
            selectedGender === 'male' && styles.selectedOption, // Apply selected style
          ]}
          onPress={() => setSelectedGender('male')} // Set selected gender
        >
          <Image source={require('../assets/male.png')} style={styles.image} />
          <Text style={styles.optionText}>I am Male</Text>
        </TouchableOpacity>

        {/* Female Option */}
        <TouchableOpacity
          style={[
            styles.option,
            selectedGender === 'female' && styles.selectedOption, // Apply selected style
          ]}
          onPress={() => setSelectedGender('female')} // Set selected gender
        >
          <Image source={require('../assets/female.png')} style={styles.image} />
          <Text style={styles.optionText}>I am Female</Text>
        </TouchableOpacity>
      </View>

      {/* Skip and Continue Buttons */}
      <TouchableOpacity style={styles.skipButton}>
        <Text style={styles.skipText} onPress={() => navigation.navigate('Age')}>Prefer to skip, thanks</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Age')} >
        <Text style={styles.buttonText} >Continue</Text>
        <Ionicons name="arrow-forward" size={20} color="#FFF" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6F2EB',
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerTitle: {
    marginRight: 120,
    fontSize: 18,
    fontWeight: 'bold',
    color: '#6B4A3D',
  },
  pageCount: {
    fontSize: 16,
    color: '#926247',
    backgroundColor: '#E8DDD9',
    borderRadius: 50,
    padding: 6,
  },
  question: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#3A2F2F',
    marginVertical: 20,
  },
  optionsContainer: {
    marginVertical: 10,
  },
  option: {
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    padding: 20,
    marginVertical: 10,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: '#EAEAEA',
    elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
  },
  selectedOption: {
    backgroundColor: '#DDEEDB', // Highlight color for selected option
    borderColor: '#9BB168', // Border color for selected option
  },
  image: {
    width: 150,
    height: 90,
    resizeMode: 'contain',
  },
  optionText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#383838',
    marginTop: 10,
  },
  skipButton: {
    marginTop: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#E5EAD7',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 30,
    marginBottom: 47,
  },
  skipText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginRight: 10,
    color: '#9BB168',
  },
  button: {
    backgroundColor: '#6B4A3D',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 30,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 120,
  },
  backButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#E8DDD9",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
    marginRight: 10,
  },
  iconCircle: {
    width: 40, // Circle width
    height: 40, // Circle height
    borderRadius: 20, // Ensures the view is a perfect circle
    backgroundColor: '#6B4A3D', // Circle color
    justifyContent: 'center', // Centers the icon vertically
    alignItems: 'center', // Centers the icon horizontally
  },
});

export default Gender;
