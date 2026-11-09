import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function RoleSelectionScreen({ navigation }) {
  const selectRole = (role) => {
    navigation.navigate('Main', { role });
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="#333" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>I am a...</Text>
      </View>

      <View style={styles.content}>
        <TouchableOpacity 
          style={[styles.roleCard, { borderColor: '#6366F1' }]}
          onPress={() => selectRole('parent')}
        >
          <Ionicons name="people" size={60} color="#6366F1" />
          <Text style={styles.roleTitle}>Parent / Guardian</Text>
          <Text style={styles.roleDesc}>Looking to book trusted sitters and nannies</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={[styles.roleCard, { borderColor: '#8B5CF6' }]}
          onPress={() => selectRole('caregiver')}
        >
          <Ionicons name="heart" size={60} color="#8B5CF6" />
          <Text style={styles.roleTitle}>Sitter / Nanny</Text>
          <Text style={styles.roleDesc}>Set your own rates as an independent contractor</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 60,
    paddingBottom: 20,
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
    paddingTop: 40,
    gap: 20,
  },
  roleCard: {
    borderWidth: 3,
    borderRadius: 16,
    padding: 40,
    alignItems: 'center',
    gap: 12,
    backgroundColor: '#f9f9f9',
  },
  roleTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  roleDesc: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
  },
});
