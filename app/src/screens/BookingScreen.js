import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function BookingScreen({ route, navigation }) {
  const { caregiver } = route.params;
  const [hours, setHours] = useState('3');
  const [date, setDate] = useState('2024-12-25');
  const [startTime, setStartTime] = useState('18:00');
  
  const hourlyRate = caregiver.rate;
  const total = hours * hourlyRate;
  const deposit = Math.round(total * 0.25); // 25% deposit
  const platformFee = Math.round(total * 0.1);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="#333" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Book Care</Text>
      </View>

      <View style={styles.caregiverInfo}>
        <View style={styles.avatar}>
          <Text style={styles.avatarText}>{caregiver.name.split(' ').map(n => n[0]).join('')}</Text>
        </View>
        <View style={styles.caregiverDetails}>
          <Text style={styles.caregiverName}>{caregiver.name}</Text>
          <Text style={styles.rate}>${caregiver.rate}/hour</Text>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Booking Details</Text>
        
        <View style={styles.inputGroup}>
          <Text style={styles.label}>Date</Text>
          <TextInput
            style={styles.input}
            value={date}
            onChangeText={setDate}
            placeholder="YYYY-MM-DD"
          />
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Start Time</Text>
          <TextInput
            style={styles.input}
            value={startTime}
            onChangeText={setStartTime}
            placeholder="HH:MM"
          />
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Number of Hours</Text>
          <TextInput
            style={styles.input}
            value={hours}
            onChangeText={setHours}
            keyboardType="numeric"
            placeholder="e.g., 3"
          />
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Payment Summary</Text>
        
        <View style={styles.summaryRow}>
          <Text style={styles.summaryLabel}>Subtotal ({hours} hrs @ ${hourlyRate}/hr)</Text>
          <Text style={styles.summaryValue}>${total}</Text>
        </View>
        
        <View style={styles.summaryRow}>
          <Text style={styles.summaryLabel}>Platform Fee</Text>
          <Text style={styles.summaryValue}>${platformFee}</Text>
        </View>
        
        <View style={styles.divider} />
        
        <View style={styles.summaryRow}>
          <Text style={styles.totalLabel}>Total</Text>
          <Text style={styles.totalValue}>${total + platformFee}</Text>
        </View>
      </View>

      <View style={styles.depositSection}>
        <View style={styles.depositHeader}>
          <Ionicons name="shield-checkmark" size={24} color="#F59E0B" />
          <Text style={styles.depositTitle}>Deposit Required</Text>
        </View>
        <Text style={styles.depositText}>
          A non-refundable deposit of ${deposit} is required to secure this booking.
          The remaining balance of ${total + platformFee - deposit} will be due after the service.
        </Text>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity 
          style={styles.payButton}
          onPress={() => {
            alert('Booking request sent! Deposit payment of $' + deposit + ' processed.');
            navigation.navigate('Bookings');
          }}
        >
          <Text style={styles.payButtonText}>Pay Deposit ${deposit} & Request Booking</Text>
        </TouchableOpacity>
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
  caregiverInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    padding: 16,
    backgroundColor: '#f9f9f9',
    marginHorizontal: 20,
    borderRadius: 12,
    gap: 12,
    marginBottom: 30,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#6366F1',
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatarText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  caregiverDetails: {
    flex: 1,
  },
  caregiverName: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
  },
  rate: {
    color: '#6366F1',
    fontWeight: '600',
  },
  section: {
    paddingHorizontal: 20,
    marginBottom: 30,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 16,
  },
  inputGroup: {
    gap: 8,
    marginBottom: 16,
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 12,
    padding: 16,
    fontSize: 16,
  },
  summaryRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  summaryLabel: {
    color: '#666',
    fontSize: 16,
  },
  summaryValue: {
    color: '#333',
    fontSize: 16,
  },
  divider: {
    height: 1,
    backgroundColor: '#eee',
    marginVertical: 12,
  },
  totalLabel: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  totalValue: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  depositSection: {
    marginHorizontal: 20,
    padding: 16,
    backgroundColor: '#FEF3C7',
    borderRadius: 12,
    marginBottom: 30,
  },
  depositHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 8,
  },
  depositTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#92400E',
  },
  depositText: {
    color: '#92400E',
    fontSize: 15,
    lineHeight: 22,
  },
  buttonContainer: {
    paddingHorizontal: 20,
    paddingBottom: 40,
  },
  payButton: {
    backgroundColor: '#6366F1',
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
  },
  payButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
});
