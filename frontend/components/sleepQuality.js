import React, { useState } from 'react';
import { View, Text, StyleSheet, PanResponder, Animated ,
    TouchableOpacity,} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";
const SleepQuality = () => {
  const [sliderValue, setSliderValue] = useState(2);
  const panY = new Animated.Value(0); // For tracking vertical movement
  const navigation = useNavigation();
  // Quality levels
  const qualityLevels = [
    { label: 'Excellent', hours: '7-9 HOURS', emoji: '😊', color: '#90EE90' },
    { label: 'Good', hours: '6-7 HOURS', emoji: '🙂', color: '#FFD700' },
    { label: 'Fair', hours: '5 HOURS', emoji: '😐', color: '#D3D3D3' },
    { label: 'Poor', hours: '3-4 HOURS', emoji: '😟', color: '#FFA500' },
    { label: 'Worst', hours: '<3 HOURS', emoji: '😢', color: '#6495ED' },
  ];

  const SLIDER_HEIGHT = 200; // Total height of the slider
  const SLIDER_STEPS = qualityLevels.length - 1; // Steps based on quality levels
  const STEP_HEIGHT = SLIDER_HEIGHT / SLIDER_STEPS; // Height of each step

  const panResponder = PanResponder.create({
    onMoveShouldSetPanResponder: () => true,
    onPanResponderMove: (e, gestureState) => {
      let newY = Math.min(Math.max(gestureState.dy, -SLIDER_HEIGHT / 2), SLIDER_HEIGHT / 2);
      panY.setValue(newY);

      // Map Y position to slider value
      const adjustedValue = Math.round(
        (-newY + SLIDER_HEIGHT / 2) / STEP_HEIGHT
      );
      setSliderValue(adjustedValue);
    },
    onPanResponderRelease: () => {
      // Snap to the nearest step
      const snapValue = sliderValue * STEP_HEIGHT - SLIDER_HEIGHT / 2;
      Animated.spring(panY, {
        toValue: -snapValue,
        useNativeDriver: false,
      }).start();
    },
  });

  // Map the current slider value to the corresponding quality
  const currentQuality = qualityLevels[sliderValue];

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()} >
          <Ionicons name="chevron-back" size={20} color="#FFF" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Assessment</Text>
        <Text style={styles.pageCount}>8 of 10</Text>
      </View>

      {/* Question */}
      <Text style={styles.question}>How would you rate your sleep quality?</Text>

      {/* Slider Section */}
      <View style={styles.sliderSection}>
        <View style={styles.qualityLabels}>
          {qualityLevels.map((quality, index) => (
            <View key={index} style={styles.qualityItem}>
              <Text style={[styles.qualityLabel, { color: quality.color }]}>
                {quality.label}
              </Text>
              <Text style={[styles.qualityHours, { color: quality.color }]}>
                {quality.hours}
              </Text>
            </View>
          ))}
        </View>

        <View style={styles.sliderContainer}>
          {/* Slider Line */}
          <View style={styles.sliderLine}>
            {qualityLevels.map((_, index) => (
              <View
                key={index}
                style={[
                  styles.sliderStep,
                  {
                    backgroundColor: index === sliderValue ? currentQuality.color : '#E5E5E5',
                  },
                ]}
              />
            ))}
          </View>

          {/* Thumb Indicator */}
          <Animated.View
            style={[
              styles.thumbIndicator,
              {
                transform: [{ translateY: panY }],
                backgroundColor: currentQuality.color,
              },
            ]}
            {...panResponder.panHandlers}
          >
            <Text style={styles.thumbEmoji}>{currentQuality.emoji}</Text>
          </Animated.View>
        </View>
      </View>
      <TouchableOpacity style={styles.continueButton} onPress={() => navigation.navigate('MedicationScreen')} >
        <Text style={styles.continueButtonText} >  Continue →</Text>
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
    justifyContent: 'space-between',
    alignItems: 'center',
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
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 50,
  },
  question: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#3A2F2F',
    marginBottom: 20,
    textAlign: 'center',
  },
  sliderSection: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
    paddingBottom: 25,
  },
  qualityLabels: {
    flex: 1,
    justifyContent: 'space-between',
    marginRight: 10,
  },
  qualityItem: {
    marginVertical: 10,
  },
  qualityLabel: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  qualityHours: {
    fontSize: 14,
  },
  sliderContainer: {
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
    width: 50,
    height: 200,
  },
  backButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#E8DDD9',
    justifyContent: 'center',
    alignItems: 'center',
  },
  sliderLine: {
    position: 'absolute',
    width: 10,
    height: '100%',
    backgroundColor: '#E5E5E5',
    borderRadius: 5,
    justifyContent: 'space-between',
  },
  sliderStep: {
    flex: 1,
    width: '100%',
    marginVertical: 5,
    borderRadius: 5,
  },
  thumbIndicator: {
    position: 'absolute',
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  thumbEmoji: {
    fontSize: 24,
    color: '#FFF',
  },
  continueButton: {
    backgroundColor: "#6B4A3D",
    height: 50,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
  },
  continueButtonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "600",
  },
});

export default SleepQuality;
