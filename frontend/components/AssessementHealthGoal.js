import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import { Ionicons, FontAwesome } from '@expo/vector-icons';  // Icons

const AssessmentHealthPage = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  const options = [
    { id: '1', text: 'I wanna reduce stress', icon: 'heart' },
    { id: '2', text: 'I wanna know more about my mental issues', icon: 'info'},
    { id: '3', text: 'I want to cope with trauma', icon: 'flag' },
    { id: '4', text: 'I want to be a better person', icon: 'smile' },
    { id: '5', text: 'Just trying out the app, mate!', icon: 'comment' },
  ];

  const handleSelection = (id) => {
    setSelectedOption(id);
  };

  return (
    <View style={styles.container}>
      
      {/* Header */}
      <View style={styles.header}>
      <View style={styles.iconCircle}>
        <Ionicons name="chevron-back" size={20} color="#FFF" />
     </View>
        <Text style={styles.headerTitle}>Assessment</Text>
        <Text style={styles.pageCount}>1 of 14</Text>
      </View>

      {/* Question */}
      <Text style={styles.question}>What's your health goal?</Text>

      {/* Options List */}
      <FlatList
        data={options}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={[
              styles.option,
              selectedOption === item.id && styles.selectedOption,
            ]}
            onPress={() => handleSelection(item.id) }
                activeOpacity={0.1}       // Control fade opacity
                delayPressIn={0} 
           
          >
            <FontAwesome name={item.icon} size={20} color={selectedOption === item.id ? '#FFF' : '#C9C7C5'} />
            <Text style={[
              styles.optionText,
              selectedOption === item.id && (item.highlight ? styles.highlightedText : styles.selectedText),
            ]}>
              {item.text}
            </Text>
            <Ionicons 
              name={selectedOption === item.id ? "radio-button-on" : "radio-button-off"} 
              size={20} 
              color={selectedOption === item.id ? '#FFF' : '#6B4A3D'} 
            />
          </TouchableOpacity>
        )}
      />

      {/* Continue Button */}
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Continue</Text>
        <Ionicons name="arrow-forward" size={20} color="#FFF" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FDF5EC',
    paddingHorizontal: 20,
    paddingTop: 40,
    justifyContent: 'space-between',
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerTitle: {
    marginRight:120,
    fontSize: 18,
    fontWeight: 'bold',
    color: '#6B4A3D',
  },
  pageCount: {
    fontSize: 16,
    color: '#926247',
    backgroundColor: '#E8DDD9',
    borderRadius: 50,
    padding:6
  },
  question: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#3A2F2F',
    marginVertical: 20,
  },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#EFEFEF',
    padding: 15,
    borderRadius: 30,
    marginVertical: 10,
  },
  optionText: {
    fontSize: 16,
    marginLeft: 10,
    color: '#6B4A3D',
    flex: 1,
    fontWeight : 'bold'
  },
  selectedOption: {
    backgroundColor: '#9BB168',
  },
  selectedText: {
    color: '#FFF',
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
  buttonText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
    marginRight: 10,
  },
  iconCircle: {
    width: 40,                // Circle width
    height: 40,               // Circle height
    borderRadius: 20,         // Ensures the view is a perfect circle
    backgroundColor: '#6B4A3D',  // Circle color
    justifyContent: 'center', // Centers the icon vertically
    alignItems: 'center',     // Centers the icon horizontally
  },
});

export default AssessmentHealthPage;
