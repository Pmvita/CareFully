import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function HomeScreen({ navigation }) {
  const caregivers = [
    { id: 1, name: "Sarah Johnson", rating: 4.9, reviews: 47, rate: 20, experience: "5+ years", verified: true },
    { id: 2, name: "Emily Chen", rating: 4.8, reviews: 32, rate: 18, experience: "3+ years", verified: true },
    { id: 3, name: "Maria Garcia", rating: 5.0, reviews: 28, rate: 22, experience: "7+ years", verified: true },
  ];

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <View>
          <Text style={styles.greeting}>Hello! 👋</Text>
          <Text style={styles.subGreeting}>Find trusted care near you</Text>
        </View>
        <TouchableOpacity>
          <Ionicons name="notifications-outline" size={28} color="#333" />
        </TouchableOpacity>
      </View>

      <TouchableOpacity 
        style={styles.searchBar}
        onPress={() => navigation.navigate('Search')}
      >
        <Ionicons name="search" size={20} color="#666" />
        <Text style={styles.searchText}>Search for sitters, nannies...</Text>
      </TouchableOpacity>

      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Top Rated Near You</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Search')}>
            <Text style={styles.seeAll}>See All</Text>
          </TouchableOpacity>
        </View>

        {caregivers.map((caregiver) => (
          <TouchableOpacity 
            key={caregiver.id}
            style={styles.caregiverCard}
            onPress={() => navigation.navigate('CaregiverProfile', { caregiver })}
          >
            <View style={styles.caregiverHeader}>
              <View style={styles.avatar}>
                <Text style={styles.avatarText}>{caregiver.name.split(' ').map(n => n[0]).join('')}</Text>
              </View>
              <View style={styles.caregiverInfo}>
                <View style={styles.nameRow}>
                  <Text style={styles.caregiverName}>{caregiver.name}</Text>
                  {caregiver.verified && <Ionicons name="checkmark-circle" size={18} color="#10B981" />}
                </View>
                <Text style={styles.experience}>{caregiver.experience} experience</Text>
                <View style={styles.ratingRow}>
                  <Ionicons name="star" size={16} color="#F59E0B" />
                  <Text style={styles.rating}>{caregiver.rating}</Text>
                  <Text style={styles.reviews}>({caregiver.reviews} reviews)</Text>
                </View>
              </View>
              <View style={styles.rateContainer}>
                <Text style={styles.rate}>${caregiver.rate}/hr</Text>
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Quick Actions</Text>
        <View style={styles.quickActions}>
          <TouchableOpacity style={styles.actionCard} onPress={() => navigation.navigate('Search')}>
            <Ionicons name="calendar-outline" size={32} color="#6366F1" />
            <Text style={styles.actionText}>Book Now</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionCard}>
            <Ionicons name="time-outline" size={32} color="#8B5CF6" />
            <Text style={styles.actionText}>Last Minute</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionCard}>
            <Ionicons name="heart-outline" size={32} color="#EC4899" />
            <Text style={styles.actionText}>Favorites</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 60,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  greeting: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
  },
  subGreeting: {
    fontSize: 16,
    color: '#666',
    marginTop: 4,
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    marginHorizontal: 20,
    padding: 16,
    borderRadius: 12,
    gap: 10,
    marginBottom: 30,
  },
  searchText: {
    color: '#666',
    fontSize: 16,
  },
  section: {
    paddingHorizontal: 20,
    marginBottom: 30,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
  },
  seeAll: {
    color: '#6366F1',
    fontSize: 16,
    fontWeight: '600',
  },
  caregiverCard: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 16,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#eee',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  caregiverHeader: {
    flexDirection: 'row',
    gap: 12,
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#6366F1',
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatarText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  caregiverInfo: {
    flex: 1,
    gap: 4,
  },
  nameRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  caregiverName: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
  },
  experience: {
    color: '#666',
    fontSize: 14,
  },
  ratingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  rating: {
    fontWeight: '600',
    color: '#333',
  },
  reviews: {
    color: '#666',
  },
  rateContainer: {
    alignItems: 'flex-end',
  },
  rate: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#6366F1',
  },
  quickActions: {
    flexDirection: 'row',
    gap: 12,
    marginTop: 16,
  },
  actionCard: {
    flex: 1,
    backgroundColor: '#f9f9f9',
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
    gap: 8,
  },
  actionText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#333',
  },
});
