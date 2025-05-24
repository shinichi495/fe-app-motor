import React, { useState } from 'react';
import { View, Text, TextInput, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import BackButton from '../components/BackButton';

const conversations = [
  { id: '1', name: 'Người bán A', message: 'Xin chào!', time: 'Hôm qua' },
  { id: '2', name: 'Người bán B', message: 'Bạn cần gì?', time: 'Hôm qua' },
];

export default function ChatScreen({ navigation }) {
  const [message, setMessage] = useState('');

  return (
    <View style={styles.container}>
      <LinearGradient colors={['#00CED1', '#00A1A1']} style={styles.header}>
        <Text style={styles.headerText}>Tin nhắn</Text>
      </LinearGradient>
      {navigation.canGoBack() && <BackButton onPress={() => navigation.goBack()} />}
      <FlatList
        data={conversations}
        renderItem={({ item }) => (
          <View style={styles.chatItem}>
            <View style={styles.avatar} />
            <View style={styles.chatInfo}>
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.message}>{item.message}</Text>
            </View>
            <Text style={styles.time}>{item.time}</Text>
          </View>
        )}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
      />
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Gửi tin nhắn..."
          placeholderTextColor="#888"
          value={message}
          onChangeText={setMessage}
        />
        <TouchableOpacity style={styles.sendButton}>
          <Text style={styles.sendButtonText}>Gửi</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    padding: 40,
    paddingTop: 60,
    alignItems: 'center',
  },
  headerText: {
    color: '#fff',
    fontSize: 28,
    fontWeight: 'bold',
  },
  chatItem: {
    flexDirection: 'row',
    padding: 15,
    marginHorizontal: 20,
    marginVertical: 5,
    backgroundColor: '#fff',
    borderRadius: 10,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#ddd',
  },
  chatInfo: {
    marginLeft: 10,
    flex: 1,
  },
  name: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#333',
  },
  message: {
    color: '#666',
    fontSize: 14,
  },
  time: {
    color: '#888',
    fontSize: 12,
  },
  inputContainer: {
    flexDirection: 'row',
    padding: 15,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderColor: '#ddd',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
  input: {
    flex: 1,
    padding: 15,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    backgroundColor: '#fff',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  sendButton: {
    backgroundColor: '#00CED1',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginLeft: 10,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
  },
  sendButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  list: {
    paddingBottom: 20,
  },
});