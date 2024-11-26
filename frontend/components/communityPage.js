import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Switch,
} from 'react-native';

const CommunityPage = () => {
  const [filter, setFilter] = useState(false);
  const [communityList, setCommunityList] = useState([
    { id: '1', name: 'ADHD-Girls', joined: false },
    { id: '2', name: 'PTSD-Juniors', joined: false },
    { id: '3', name: 'Engr, Anxiety & me', joined: false },
    { id: '4', name: 'Bipolar Party Gang', joined: false },
    { id: '5', name: 'Autistic Team', joined: false },
  ]);

  const toggleJoin = (id) => {
    setCommunityList((prevList) =>
      prevList.map((community) =>
        community.id === id
          ? { ...community, joined: !community.joined }
          : community
      )
    );
  };

  const renderCommunityItem = ({ item }) => (
    <View style={styles.communityItem}>
      <Text style={styles.communityName}>{item.name}</Text>
      <TouchableOpacity
        onPress={() => toggleJoin(item.id)}
        style={styles.joinButton}>
        <Text style={styles.joinText}>
          {item.joined ? 'Joined' : 'Join'}
        </Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Header Section */}
      <Text style={styles.title}>Community Page</Text>
      <Text style={styles.subtitle}>Join any community pages!</Text>

      {/* Filter Button */}
      <TouchableOpacity style={styles.filterButton} onPress={() => setFilter(!filter)}>
        <Text style={styles.filterText}>Filter By</Text>
      </TouchableOpacity>

      {/* Community List */}
      <View style={styles.listContainer}>
        <FlatList
          data={communityList}
          keyExtractor={(item) => item.id}
          renderItem={renderCommunityItem}
        />
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
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#3A2F2F',
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 16,
    color: '#3A2F2F',
    marginBottom: 20,
  },
  filterButton: {
    alignSelf: 'flex-end',
    backgroundColor: '#D2C1AC',
    paddingHorizontal: 15,
    paddingVertical: 5,
    borderRadius: 10,
    marginBottom: 15,
  },
  filterText: {
    color: '#3A2F2F',
    fontSize: 14,
    fontWeight: 'bold',
  },
  listContainer: {
    backgroundColor: '#9BB168',
    borderRadius: 20,
    padding: 15,
    width: '100%',
    flex: 1,
    maxHeight: 370,
  },
  communityItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#E8E5E1',
    borderRadius: 10,
    padding: 15,
    marginBottom: 10,
  },
  communityName: {
    fontSize: 16,
    color: '#3A2F2F',
    fontWeight: 'bold',
  },
  joinButton: {
    paddingVertical: 5,
    paddingHorizontal: 15,
    backgroundColor: '#F6F2EB',
    borderRadius: 10,
  },
  joinText: {
    color: '#007B7F',
    fontWeight: 'bold',
    fontSize: 14,
  },
});

export default CommunityPage;
