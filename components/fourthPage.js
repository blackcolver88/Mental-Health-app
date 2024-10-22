import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';  
import { useNavigation } from '@react-navigation/native';
const FourthPage = () => {
  const navigation = useNavigation();

    return (
        <View style={styles.container}>
       
        <View style={styles.stepLabel}>
          <Text style={styles.stepText}>Step Three</Text>
        </View>
  
        
        <View style={styles.illustrationContainer}>
          <Image
            source={require('../assets/happy.png')}  
            style={styles.illustration}
          />
        </View>
  
              
        <View style={styles.textContainer}>
          <Text style={styles.headingText}>
            Mindful <Text style={styles.highlightText}>Resources</Text> That Makes You Happy
          </Text>
        </View>
      
        <TouchableOpacity style={styles.button}  onPress={() => navigation.navigate('Login')} >
          <Ionicons name="arrow-forward" size={24} color="white" />
        </TouchableOpacity>
      </View>
     
      
    );
  };
  
  const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF5E7',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 40,
      },
      stepLabel: {
        backgroundColor: '#FFFFFE',
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
      illustrationContainer: {
        alignItems:'center',
        position:'relative'
      },
      illustration: {
        width: 450,
        height: 450,
        resizeMode: 'contain',
      },
      textContainer: {
        marginVertical: 10,
        paddingHorizontal: 30,
        alignItems: 'center',
        marginTop: 27,
      },
      headingText: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#4E4E4E',
        textAlign: 'center',
      },
      highlightText: {
        color: '#FFB347',
      },
      buttonContainer: {
        backgroundColor: '#FF6B35',
        width: 70,
        height: 70,
        borderRadius: 35,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
      },
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
  
  export default FourthPage;
