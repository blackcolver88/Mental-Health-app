import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
const Therapy = () => {
    const navigation = useNavigation();
  return (
    <View style={styles.container}>
      {/* First Card */}
      <View style={styles.card}>
        <Image
          source={require('../assets/network.png')} // Replace with the actual path to your icon
          style={styles.icon}
        />
        <Text style={styles.cardTitle}>Chat with a Group Therapy</Text>
        <Text style={styles.cardDescription}>
          Trained Mental-Supportive Volunteers are waiting to chat and discuss with you.
        </Text>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('CommunityPage')}  >
          <Text style={styles.buttonText}>Join the community</Text>
        </TouchableOpacity>
      </View>

      {/* Second Card */}
      <View style={styles.card}>
        <Image
          source={require('../assets/advice.png')} // Replace with the actual path to your icon
          style={styles.icon}
        />
        <Text style={styles.cardTitle}>Consult with Psychologist</Text>
        <Text style={styles.cardDescription}>
          Trained Mental-Supportive Volunteers are waiting to chat and discuss with you.
        </Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Contact Your Therapist</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6F2EB',
    padding: 20,
    alignItems: 'center',
    marginTop: 30,
  },
  card: {
    backgroundColor: '#9BB168',
    borderRadius: 20,
    padding: 20,
    marginBottom: 20,
    width: '90%',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  icon: {
    width: 120,
    height: 120,
    marginBottom: 15,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFF',
    textAlign: 'center',
    marginBottom: 10,
  },
  cardDescription: {
    fontSize: 14,
    color: '#F6F2EB',
    textAlign: 'center',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#F5ECCD',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 15,
  },
  buttonText: {
    color: '#3A2F2F',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Therapy;
