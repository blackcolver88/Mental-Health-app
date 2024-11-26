import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
const StressLevel = () => {
  const [stressLevel, setStressLevel] = useState(5); // Default stress level
  const navigation = useNavigation();
  // Stress level descriptions
  const descriptions = [
    'You are Calm and Relaxed.',
    'You are Slightly Stressed.',
    'You are Somewhat Stressed.',
    'You are Very Stressed.',
    'You Are Extremely Stressed Out.',
  ];

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()} >
          <Ionicons name="chevron-back" size={20} color="#FFF" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Assessment</Text>
        <Text style={styles.pageCount}>10 of 10</Text>
      </View>

      {/* Question */}
      <Text style={styles.question}>How would you rate your stress level?</Text>

      {/* Stress Level Value */}
      <Text style={styles.stressLevel}>{stressLevel}</Text>

      {/* Stress Level Selector */}
      <View style={styles.selectorContainer}>
        {[1, 2, 3, 4, 5].map((level) => (
          <TouchableOpacity
            key={level}
            style={[
              styles.circleButton,
              stressLevel === level && styles.selectedCircle,
            ]}
            onPress={() => setStressLevel(level)} // Update stress level
          >
            <Text
              style={[
                styles.circleText,
                stressLevel === level && styles.selectedCircleText,
              ]}
            >
              {level}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Stress Level Description */}
      <Text style={styles.description}>{descriptions[stressLevel - 1]}</Text>

      {/* Continue Button */}
      <TouchableOpacity style={styles.continueButton} onPress={() => navigation.navigate('Profile')}  >
        <Text style={styles.continueText} >Finish</Text>
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
  backButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#E8DDD9',
    justifyContent: 'center',
    alignItems: 'center',
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
    textAlign: 'center',
  },
  stressLevel: {
    fontSize: 64,
    fontWeight: 'bold',
    color: '#3A2F2F',
    textAlign: 'center',
    marginBottom: 10,
  },
  selectorContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 40,
    marginVertical: 20,
  },
  circleButton: {
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E8DDD9',
  },
  selectedCircle: {
    backgroundColor: '#F4A261',
  },
  circleText: {
    fontSize: 18,
    color: '#6B4A3D',
  },
  selectedCircleText: {
    color: '#FFF',
    fontWeight: 'bold',
  },
  description: {
    fontSize: 16,
    color: '#6B4A3D',
    textAlign: 'center',
    marginBottom: 30,
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

export default StressLevel;