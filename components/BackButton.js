import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function BackButton({ onPress }) {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Icon name="arrow-back" size={24} color="#fff" />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    position: 'absolute',
    top: 40,
    left: 20,
    backgroundColor: '#00CED1',
    borderRadius: 20,
    padding: 8,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
  },
});