import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';  
import { useNavigation } from '@react-navigation/native';
const FourthPage = () => {
  const navigation = useNavigation();

    return (
        <View style={styles.container}>
       
        <View style={styles.stepContainer}>
          <Text style={styles.stepText}>Step Three</Text>
        </View>
  
        
        <View style={styles.illustrationContainer}>
          <Image
            source={require('../assets/happy.png')}  
            style={styles.illustration}
          />
        </View>
  
      
        <View style={styles.roundedSection}>
        
        <View style={styles.textContainer}>
          <Text style={styles.headingText}>
            Mindful <Text style={styles.highlightText}>Resources</Text> That Makes You Happy
          </Text>
        </View>
      
        <TouchableOpacity style={styles.button}  onPress={() => navigation.navigate('FifthPage')} >
          <Ionicons name="arrow-forward" size={24} color="white" />
        </TouchableOpacity>
      </View>
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
      stepContainer: {
        backgroundColor: 'rgba(255, 107, 53, 0.1)',
        paddingHorizontal: 15,
        paddingVertical: 5,
        borderRadius: 20,
        position: 'absolute',
        top: 40,
        zIndex: 10,
      },
      stepText: {
        color: '#FF6B35',
        fontWeight: 'bold',
        fontSize: 16,
      },
      illustrationContainer: {
        flex: 1,
        justifyContent: 'center',
      },
      illustration: {
        width: 500,
        height: 500,
        resizeMode: 'contain',
      },
      roundedSection: {
        width:'100%',
        backgroundColor: 'white',
        borderTopLeftRadius: 110,
        borderTopRightRadius: 110,
        paddingTop: 30,
        paddingBottom: 20,
        alignItems: 'center',
        justifyContent: 'space-between',
      },
      textContainer: {
        marginVertical: 10,
        paddingHorizontal: 20,
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