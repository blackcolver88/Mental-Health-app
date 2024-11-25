import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Icons
import { useNavigation } from '@react-navigation/native';

const Age = () => {
  const navigation = useNavigation();
  const [selectedAge, setSelectedAge] = useState(22); // Default age

  // List of age options
  const ages = Array.from({ length: 100 }, (_, i) => i + 1); // Ages from 1 to 100

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.iconCircle}>
          <Ionicons name="chevron-back" size={20} color="#FFF" />
        </View>
        <Text style={styles.headerTitle}>Assessment</Text>
        <Text style={styles.pageCount}>3 of 14</Text>
      </View>

      {/* Question */}
      <Text style={styles.question}>What’s your age?</Text>

      {/* Age Picker */}
      <View style={styles.agePicker}>
        <FlatList
          data={ages}
          keyExtractor={(item) => item.toString()}
          showsVerticalScrollIndicator={false}
          snapToInterval={50} // Makes scrolling smooth
          decelerationRate="fast"
          contentContainerStyle={{ alignItems: 'center' }}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={[
                styles.ageOption,
                item === selectedAge && styles.selectedAgeOption, // Highlight selected
              ]}
              onPress={() => setSelectedAge(item)} // Update selected age
            >
              <Text
                style={[
                  styles.ageText,
                  item === selectedAge && styles.selectedAgeText, // Highlight selected text
                ]}
              >
                {item}
              </Text>
            </TouchableOpacity>
          )}
        />
      </View>

      {/* Continue Button */}
      <TouchableOpacity style={styles.continueButton} >
        <Text style={styles.continueText} onPress={() => navigation.navigate('Weight')} >Continue</Text>
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
  backIcon: {
    fontSize: 20,
    color: '#6B4A3D',
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
  agePicker: {
    height: 200,
    width: '80%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  ageOption: {
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 5,
  },
  selectedAgeOption: {
    backgroundColor: '#9BB168',
    width: 150,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
  },
  ageText: {
    fontSize: 20,
    color: '#A6A6A6',
  },
  selectedAgeText: {
    color: '#FFF',
    fontWeight: 'bold',
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

export default Age;
