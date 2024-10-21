import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';  

const SecondPage = () => {
  return (
    <View style={styles.container}>
      
      
      <View style={styles.stepLabel}>
        <Text style={styles.stepText}>Step Two</Text>
      </View>

    
      
      <View style={styles.imageContainer}>
        <Image source={require('../assets/Group.png')} style={styles.characterImage} />
      </View>

      
     <View>
        
     </View>
      <View style={styles.textContainer}>
        <Text style={styles.title}>Personalize Your Mental</Text>
        <Text style={styles.highlightedTitle}>Health State With Us</Text>
      </View>

    
      <TouchableOpacity style={styles.button}>
        <Ionicons name="arrow-forward" size={24} color="white" />
      </TouchableOpacity>
    </View>
   
    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E5EAD7',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 20,  },
  stepLabel: {
    backgroundColor: '#EFEFEF',
    paddingVertical: 8,
    paddingHorizontal: 25,
    borderRadius: 25,
    marginTop: 20,
    borderColor: '#88888'
  },
  stepText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#6B4A3D',
  },
  imageContainer: {
    alignItems: 'center',
    position: 'relative',
    
  },
  characterImage: {
    width: 470,
    height: 470,
    resizeMode: 'contain',
  },
  textContainer: {
    alignItems: 'center',
    marginTop: 20,
},
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#6B4A3D',
    textAlign: 'center',
  },
  highlightedTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#6FCF97',  // Highlighted color for "Health State"
    textAlign: 'center',
  },
  /*all: {
    alignItems:'center',
    backgroundColor:'#ffffff',
    padding: 50,
    width:'100%',
    height:'100%',
    borderRadius: 500,
    marginBottom:50
  },*/
  button: {
    backgroundColor: '#6B4A3D',
    padding: 15,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom:30,
    width: 60,
    height: 60,
  },
});

export default SecondPage;