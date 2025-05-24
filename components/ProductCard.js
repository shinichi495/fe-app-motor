import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

export default function ProductCard({ product, onPress }) {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Image source={{ uri: product.image }} style={styles.image} />
      <View style={styles.info}>
        <Text style={styles.title}>{product.title}</Text>
        <Text style={styles.price}>{product.price}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
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
  image: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  info: {
    marginLeft: 15,
    justifyContent: 'center',
    flex: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  price: {
    fontSize: 16,
    color: '#e91e63',
    marginTop: 5,
  },
});