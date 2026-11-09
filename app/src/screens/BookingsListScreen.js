import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function BookingsListScreen({ navigation }) {
  const bookings = [
    { id: 1, caregiver: "Sarah Johnson", date: "Dec 25, 2024", time: "6:00 PM", hours: 3, status: "pending", rate: 20 },
    { id: 2, caregiver: "Emily Chen", date: "Dec 28, 2024", time: "2:00 PM", hours: 4, status: "confirmed", rate: 18 },
  ];

  const getStatusColor = (status) => {
    if (status === 'confirmed') return '#10B981';
    if (status === 'pending') return '#F59E0B';
    return '#666';
  };

  const getStatusText = (status) => {
    if (status === 'confirmed') return 'Confirmed';
    if (status === 'pending') return 'Pending Approval';
    return status;
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>My Bookings</Text>
      </View>

      <ScrollView style={styles.content}>
        {bookings.map((booking) => (
          <View key={booking.id} style={styles.bookingCard}>
            <View style={styles.bookingHeader}>
              <Text style={styles.caregiverName}>{booking.caregiver}</Text>
              <View style={[styles.statusBadge, { backgroundColor: getStatusColor(booking.status) + '20' }]}>
                <Text style={[styles.statusText, { color: getStatusColor(booking.status) }]}>
                  {getStatusText(booking.status)}
                </Text>
              </View>
            </View>
            <View style={styles.bookingDetails}>
              <View style={styles.detailRow}>
                <Ionicons name="calendar-outline" size={18} color="#666" />
                <Text style={styles.detailText}>{booking.date} at {booking.time}</Text>
              </View>
              <View style={styles.detailRow}>
                <Ionicons name="time-outline" size={18} color="#666" />
                <Text style={styles.detailText}>{booking.hours} hours @ ${booking.rate}/hr</Text>
              </View>
              <View style={styles.detailRow}>
                <Ionicons name="cash-outline" size={18} color="#666" />
                <Text style={styles.detailText}>Total: ${booking.hours * booking.rate}</Text>
              </View>
            </View>
            {booking.status === 'confirmed' && (
              <TouchableOpacity style={styles.messageButton} onPress={() => navigation.navigate('Chat', { caregiver: { name: booking.caregiver } })}>
                <Text style={styles.messageButtonText}>Message Caregiver</Text>
              </TouchableOpacity>
            )}
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
  bookingCard: {
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
  bookingHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  caregiverName: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
  },
  statusBadge: {
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 8,
  },
  statusText: {
    fontSize: 12,
    fontWeight: '600',
  },
  bookingDetails: {
    gap: 8,
    marginBottom: 12,
  },
  detailRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  detailText: {
    color: '#666',
    fontSize: 15,
  },
  messageButton: {
    backgroundColor: '#6366F1',
    paddingVertical: 10,
    borderRadius: 8,
    alignItems: 'center',
  },
  messageButtonText: {
    color: 'white',
    fontWeight: '600',
  },
});
