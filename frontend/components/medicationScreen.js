import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Import Ionicons
import { useNavigation } from "@react-navigation/native";
const MedicationsScreen = () => {
  const [selectedOption, setSelectedOption] = useState(null); // Tracks the selected option
  const navigation = useNavigation();
  // Options array with Ionicons icons
  const options = [
    { id: 1, label: 'Prescribed Medications', icon: 'medkit' },
    { id: 2, label: 'Over the Counter Supplements', icon: 'nutrition' },
    { id: 3, label: "I'm not taking any", icon: 'remove-circle-outline' },
    { id: 4, label: 'Prefer not to say', icon: 'close-circle-outline' },
  ];

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()} >
          <Ionicons name="chevron-back" size={20} color="#FFF" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Assessment</Text>
        <Text style={styles.pageCount}>9 of 10</Text>
      </View>

      {/* Question */}
      <Text style={styles.question}>Are you taking any medications?</Text>

      {/* Options */}
      <View style={styles.optionsContainer}>
        {options.map((option) => (
          <TouchableOpacity
            key={option.id}
            style={[
              styles.optionCard,
              selectedOption === option.id && styles.selectedOptionCard,
            ]}
            onPress={() => setSelectedOption(option.id)} // Update selected option
          >
            {/* Icon */}
            <Ionicons
              name={option.icon}
              size={24}
              color={selectedOption === option.id ? '#FFF' : '#6B4A3D'}
              style={styles.optionIcon}
            />
            {/* Label */}
            <Text
              style={[
                styles.optionText,
                selectedOption === option.id && styles.selectedOptionText,
              ]}
            >
              {option.label}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Continue Button */}
      <TouchableOpacity style={styles.continueButton}>
        <Text style={styles.continueText} onPress={() => navigation.navigate('StressLevel')} >Continue</Text>
        <Ionicons name="arrow-forward" size={18} color="#FFF" />
      </TouchableOpacity>
    </View>
  );
};

// Styles
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
    marginBottom: 20,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#6B4A3D',
  },
  pageCount: {
    fontSize: 16,
    color: '#926247',
    backgroundColor: '#E8DDD9',
    padding: 6,
    borderRadius: 50,
  },
  question: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#3A2F2F',
    marginBottom: 20,
  },
  optionsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  optionCard: {
    width: '48%',
    height: 120,
    backgroundColor: '#E8DDD9',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
  },
  selectedOptionCard: {
    backgroundColor: '#9BB168',
  },
  optionIcon: {
    marginBottom: 10,
  },
  optionText: {
    fontSize: 16,
    color: '#6B4A3D',
    textAlign: 'center',
  },
  selectedOptionText: {
    color: '#FFF',
    fontWeight: 'bold',
  },
  backButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#E8DDD9',
    justifyContent: 'center',
    alignItems: 'center',
  },
  continueButton: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#6B4A3D',
    width: '80%',
    padding: 15,
    borderRadius: 30,
    alignSelf: 'center',
    marginTop: 20,
  },
  continueText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
    marginRight: 10,
  },
});

export default MedicationsScreen;
