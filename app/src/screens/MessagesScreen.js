import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function MessagesScreen({ navigation }) {
  const conversations = [
    { id: 1, name: "Sarah Johnson", lastMessage: "Yes, I'm available!", time: "2m ago", unread: true },
    { id: 2, name: "Emily Chen", lastMessage: "Thanks for booking!", time: "1h ago", unread: false },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Messages</Text>
      </View>

      <ScrollView style={styles.content}>
        {conversations.map((convo) => (
          <TouchableOpacity 
            key={convo.id} 
            style={styles.convoCard}
            onPress={() => navigation.navigate('Chat', { caregiver: { name: convo.name } })}
          >
            <View style={styles.avatar}>
              <Text style={styles.avatarText}>{convo.name.split(' ').map(n => n[0]).join('')}</Text>
            </View>
            <View style={styles.convoInfo}>
              <View style={styles.convoHeader}>
                <Text style={styles.convoName}>{convo.name}</Text>
                <Text style={styles.convoTime}>{convo.time}</Text>
              </View>
              <Text style={[styles.lastMessage, convo.unread && styles.unreadMessage]}>
                {convo.lastMessage}
              </Text>
            </View>
            {convo.unread && <View style={styles.unreadDot} />}
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
  convoCard: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    marginBottom: 8,
    gap: 12,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#8B5CF6',
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatarText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  convoInfo: {
    flex: 1,
  },
  convoHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 4,
  },
  convoName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
  },
  convoTime: {
    color: '#666',
    fontSize: 13,
  },
  lastMessage: {
    color: '#666',
    fontSize: 15,
  },
  unreadMessage: {
    color: '#333',
    fontWeight: '600',
  },
  unreadDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#6366F1',
  },
});
