import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // For bottom navigation icons

const Profile = () => {
  // Mock data for "What makes your week?"
  const weeklyHighlights = [
    {
      id: 1,
      date: '19 Apr',
      activity: 'Completed SEEM3510 Asm 4',
      icon: 'sad-outline',
    },
    {
      id: 2,
      date: '17 Apr',
      activity: 'Completed Final Year Project',
      icon: 'sad-outline',
    },
    {
      id: 3,
      date: '14 Apr',
      activity: 'Working on SEEM3510 Asm 4',
      icon: 'sad-outline',
    },
  ];

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Image
          source={{
            uri: 'https://via.placeholder.com/50',
          }} // Replace with the actual profile picture URL
          style={styles.profileImage}
        />
        <View style={styles.headerTextContainer}>
          <Text style={styles.welcomeText}>Welcome, Ibtihel</Text>
          <TouchableOpacity style={styles.badge}>
            <Text style={styles.badgeText}>Golden</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Greeting */}
      <Text style={styles.greeting}>MindBloom is here with you</Text>

      {/* Weekly Highlights */}
      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>What makes your week?</Text>
          <TouchableOpacity>
            <Text style={styles.viewMore}>View More...</Text>
          </TouchableOpacity>
        </View>
        <FlatList
          data={weeklyHighlights}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={styles.weeklyHighlight}>
              <Text style={styles.highlightDate}>{item.date}</Text>
              <Text style={styles.highlightText}>{item.activity}</Text>
              <Ionicons name={item.icon} size={20} color="#9B9B9B" />
            </View>
          )}
        />
      </View>

      {/* Schedule for the Week */}
      <View>
        <Text style={styles.sectionTitle}>Schedule for the week...</Text>
        <View style={styles.scheduleContainer}>
          <View style={styles.scheduleCard}>
            <Text style={styles.scheduleTime}>Today, 4:30 pm</Text>
            <Text style={styles.scheduleEvent}>Meetings with Dr. Chan</Text>
            <Text style={styles.scheduleLocation}>At CUHK Medical Center</Text>
          </View>
        </View>
      </View>

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        <TouchableOpacity>
          <Ionicons name="home" size={28} color="#6B4A3D" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Ionicons name="heart-outline" size={28} color="#6B4A3D" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Ionicons name="chatbubbles-outline" size={28} color="#6B4A3D" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Ionicons name="person-outline" size={28} color="#6B4A3D" />
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
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  headerTextContainer: {
    flex: 1,
  },
  welcomeText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#3A2F2F',
  },
  badge: {
    backgroundColor: '#FFD700',
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 5,
    alignSelf: 'flex-start',
    marginTop: 5,
  },
  badgeText: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#3A2F2F',
  },
  greeting: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#3A2F2F',
    marginVertical: 20,
  },
  section: {
    marginBottom: 20,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#3A2F2F',
  },
  viewMore: {
    fontSize: 14,
    color: '#9B9B9B',
  },
  weeklyHighlight: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#E8DDD9',
  },
  highlightDate: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#6B4A3D',
  },
  highlightText: {
    flex: 1,
    fontSize: 14,
    color: '#6B4A3D',
    marginHorizontal: 10,
  },
  scheduleContainer: {
    marginTop: 10,
  },
  scheduleCard: {
    backgroundColor: '#E8DDD9',
    borderRadius: 20,
    padding: 15,
    marginBottom: 10,
  },
  scheduleTime: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#3A2F2F',
    marginBottom: 5,
  },
  scheduleEvent: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#6B4A3D',
    marginBottom: 5,
  },
  scheduleLocation: {
    fontSize: 12,
    color: '#9B9B9B',
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: '#E8DDD9',
    marginTop: 20,
    paddingTop: 250,
  },
});

export default Profile;