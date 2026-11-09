import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function ReviewsScreen({ navigation }) {
  const reviews = [
    { id: 1, parent: "Lisa M.", rating: 5, date: "Dec 2024", comment: "Sarah was amazing with our kids! Very punctual and engaging." },
    { id: 2, parent: "Mike R.", rating: 5, date: "Nov 2024", comment: "Great experience, would definitely book again!" },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="#333" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Reviews</Text>
      </View>

      <ScrollView style={styles.content}>
        <View style={styles.ratingSummary}>
          <Text style={styles.averageRating}>4.9</Text>
          <View style={styles.starsRow}>
            {[1,2,3,4,5].map((i) => (
              <Ionicons key={i} name="star" size={24} color="#F59E0B" />
            ))}
          </View>
          <Text style={styles.reviewCount}>Based on 47 reviews</Text>
        </View>

        {reviews.map((review) => (
          <View key={review.id} style={styles.reviewCard}>
            <View style={styles.reviewHeader}>
              <Text style={styles.parentName}>{review.parent}</Text>
              <Text style={styles.reviewDate}>{review.date}</Text>
            </View>
            <View style={styles.starsRowSmall}>
              {[...Array(review.rating)].map((_, i) => (
                <Ionicons key={i} name="star" size={16} color="#F59E0B" />
              ))}
            </View>
            <Text style={styles.reviewComment}>{review.comment}</Text>
          </View>
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
    alignItems: 'center',
    paddingHorizontal: 20,
    marginBottom: 20,
    gap: 15,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
  },
  ratingSummary: {
    alignItems: 'center',
    padding: 24,
    backgroundColor: '#f9f9f9',
    borderRadius: 16,
    marginBottom: 24,
  },
  averageRating: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#333',
  },
  starsRow: {
    flexDirection: 'row',
    gap: 4,
    marginVertical: 8,
  },
  reviewCount: {
    color: '#666',
    fontSize: 16,
  },
  reviewCard: {
    padding: 16,
    backgroundColor: '#fff',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#eee',
    marginBottom: 12,
  },
  reviewHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  parentName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
  },
  reviewDate: {
    color: '#666',
  },
  starsRowSmall: {
    flexDirection: 'row',
    gap: 2,
    marginBottom: 8,
  },
  reviewComment: {
    color: '#666',
    fontSize: 15,
    lineHeight: 22,
  },
});
