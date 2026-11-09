import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function SearchScreen({ navigation }) {
  const caregivers = [
    { id: 1, name: "Sarah Johnson", rating: 4.9, reviews: 47, rate: 20, experience: "5+ years", location: "0.8 mi", verified: true, available: true },
    { id: 2, name: "Emily Chen", rating: 4.8, reviews: 32, rate: 18, experience: "3+ years", location: "1.2 mi", verified: true, available: true },
    { id: 3, name: "Maria Garcia", rating: 5.0, reviews: 28, rate: 22, experience: "7+ years", location: "1.5 mi", verified: true, available: false },
    { id: 4, name: "Jessica Park", rating: 4.9, reviews: 41, rate: 19, experience: "4+ years", location: "2.1 mi", verified: true, available: true },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Find Caregivers</Text>
        <TouchableOpacity>
          <Ionicons name="options-outline" size={28} color="#333" />
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.content}>
        <Text style={styles.resultsText}>{caregivers.length} caregivers found near you</Text>
        
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
                  {caregiver.available && (
                    <View style={styles.availableBadge}>
                      <Text style={styles.availableText}>Available</Text>
                    </View>
                  )}
                </View>
                <Text style={styles.experience}>{caregiver.experience} • {caregiver.location}</Text>
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
      </ScrollView>
    </View>
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
  headerTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
  },
  resultsText: {
    color: '#666',
    marginBottom: 16,
    fontSize: 15,
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
    backgroundColor: '#8B5CF6',
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
    flexWrap: 'wrap',
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
  availableBadge: {
    backgroundColor: '#D1FAE5',
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 6,
  },
  availableText: {
    color: '#10B981',
    fontSize: 12,
    fontWeight: '600',
  },
});
