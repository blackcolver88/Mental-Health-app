import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Icons
import { useNavigation } from '@react-navigation/native';
const Weight = () => {
  const [unit, setUnit] = useState('kg'); // 'kg' or 'lbs'
  const [selectedWeight, setSelectedWeight] = useState(55); // Default weight
  const navigation = useNavigation();
  // List of weight options based on unit
  const weights = unit === 'kg' 
    ? Array.from({ length: 200 }, (_, i) => i + 1) // 1 to 200 kg
    : Array.from({ length: 440 }, (_, i) => i + 1); // 1 to 440 lbs

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()} >
          <Ionicons name="chevron-back" size={20} color="#FFF" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Assessment</Text>
        <Text style={styles.pageCount}>4 of 10</Text>
      </View>

      {/* Question */}
      <Text style={styles.question}>What’s your weight?</Text>

      {/* Unit Selector */}
      <View style={styles.unitSelector}>
        <TouchableOpacity
          style={[styles.unitOption, unit === 'kg' && styles.selectedUnitOption]}
          onPress={() => setUnit('kg')}
        >
          <Text style={[styles.unitText, unit === 'kg' && styles.selectedUnitText]}>kg</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.unitOption, unit === 'lbs' && styles.selectedUnitOption]}
          onPress={() => setUnit('lbs')}
        >
          <Text style={[styles.unitText, unit === 'lbs' && styles.selectedUnitText]}>lbs</Text>
        </TouchableOpacity>
      </View>

      {/* Weight Picker */}
      <View style={styles.weightPicker}>
        <FlatList
          data={weights}
          keyExtractor={(item) => item.toString()}
          horizontal
          showsHorizontalScrollIndicator={false}
          snapToInterval={50} // Smooth snapping
          decelerationRate="fast"
          contentContainerStyle={{ alignItems: 'center' }}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={[
                styles.weightOption,
                item === selectedWeight && styles.selectedWeightOption,
              ]}
              onPress={() => setSelectedWeight(item)}
            >
              <Text
                style={[
                  styles.weightText,
                  item === selectedWeight && styles.selectedWeightText,
                ]}
              >
                {item}
              </Text>
            </TouchableOpacity>
          )}
        />
      </View>

      {/* Display Selected Weight */}
      <Text style={styles.selectedWeightDisplay}>
        {selectedWeight} {unit}
      </Text>

      {/* Continue Button */}
      <TouchableOpacity style={styles.continueButton}>
        <Text style={styles.continueText} onPress={() => navigation.navigate('Mood')} >Continue</Text>
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
  },
  unitSelector: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  unitOption: {
    padding: 10,
    marginHorizontal: 10,
    borderRadius: 20,
    backgroundColor: '#E8DDD9',
  },
  selectedUnitOption: {
    backgroundColor: '#FF7F3F',
  },
  unitText: {
    fontSize: 16,
    color: '#6B4A3D',
  },
  selectedUnitText: {
    color: '#FFF',
    fontWeight: 'bold',
  },
  weightPicker: {
    height: 100,
    width: '80%',
    justifyContent: 'center',
  },
  weightOption: {
    width: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  selectedWeightOption: {
    backgroundColor: '#9BB168',
    borderRadius: 25,
  },
  weightText: {
    fontSize: 20,
    color: '#A6A6A6',
  },
  selectedWeightText: {
    color: '#FFF',
    fontWeight: 'bold',
  },
  selectedWeightDisplay: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#6B4A3D',
    marginVertical: 20,
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

export default Weight;
