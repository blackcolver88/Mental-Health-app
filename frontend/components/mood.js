import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Icons
import Slider from '@react-native-community/slider';
import { useNavigation } from '@react-navigation/native';
const Mood = () => {
  const [moodValue, setMoodValue] = useState(2); // Default mood (2 - Neutral)
  const navigation = useNavigation();
  // Mood data
  const moods = [
    { id: 0, label: 'I feel Angry.', color: '#FF6347', emoji: '😡' },
    { id: 1, label: 'I feel Sad.', color: '#FFA500', emoji: '😟' },
    { id: 2, label: 'I Feel Neutral.', color: '#FFD700', emoji: '😐' },
    { id: 3, label: 'I feel Happy.', color: '#90EE90', emoji: '😊' },
    { id: 4, label: 'I feel Excited.', color: '#6495ED', emoji: '😄' },
  ];

  // Current mood based on slider value
  const currentMood = moods[moodValue];

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()} > 
          <Ionicons name="chevron-back" size={20} color="#FFF" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Assessment</Text>
        <Text style={styles.pageCount}>5 of 10</Text>
      </View>

      {/* Question */}
      <Text style={styles.question}>How would you describe your mood?</Text>

      {/* Mood Display */}
      <View style={styles.moodDisplay}>
        <Text style={[styles.moodEmoji, { color: currentMood.color }]}>{currentMood.emoji}</Text>
        <Text style={styles.moodLabel}>{currentMood.label}</Text>
      </View>

      {/* Mood Slider */}
      <View style={styles.sliderContainer}>
        <Slider
          style={styles.slider}
          minimumValue={0}
          maximumValue={4}
          step={1}
          value={moodValue}
          onValueChange={(value) => setMoodValue(value)}
          minimumTrackTintColor={currentMood.color}
          thumbTintColor={currentMood.color}
        />
        {/* Mood Color Background */}
        <View style={styles.moodBackground}>
          {moods.map((mood, index) => (
            <View
              key={index}
              style={[
                styles.moodSegment,
                { backgroundColor: mood.color, flex: 1 },
              ]}
            />
          ))}
        </View>
      </View>

      {/* Continue Button */}
      <TouchableOpacity style={styles.continueButton} onPress={() => navigation.navigate('ProfessionalHelp')}  >
        <Text style={styles.continueText} >Continue</Text>
        <Text style={styles.arrowIcon}>→</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6F2EB',
    padding: 20,
    alignItems: 'center',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
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
  moodDisplay: {
    alignItems: 'center',
    marginVertical: 20,
  },
  moodEmoji: {
    fontSize: 60,
    marginBottom: 10,
  },
  moodLabel: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#3A2F2F',
  },
  sliderContainer: {
    width: '100%',
    alignItems: 'center',
    marginVertical: 20,
  },
  slider: {
    width: '80%',
    height: 40,
  },
  moodBackground: {
    position: 'absolute',
    width: '80%',
    height: 10,
    flexDirection: 'row',
    borderRadius: 5,
    overflow: 'hidden',
  },
  moodSegment: {
    height: '100%',
  },
  continueButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#6B4A3D',
    width: '80%',
    padding: 15,
    borderRadius: 30,
    marginTop: 20,
  },
  continueText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
    marginRight: 10,
  },
  arrowIcon: {
    fontSize: 18,
    color: '#FFF',
  },
});

export default Mood;
