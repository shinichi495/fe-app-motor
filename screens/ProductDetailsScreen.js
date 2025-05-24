import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import BackButton from '../components/BackButton';

export default function ProductDetailsScreen({ route, navigation }) {
  const { product } = route.params;

  return (
    <View style={styles.container}>
      <LinearGradient colors={['#00CED1', '#00A1A1']} style={styles.header}>
        <Text style={styles.headerText}>Chi tiết SP</Text>
      </LinearGradient>
      {navigation.canGoBack() && <BackButton onPress={() => navigation.goBack()} />}
      <Image source={{ uri: product.image }} style={styles.image} />
      <View style={styles.content}>
        <Text style={styles.title}>{product.title}</Text>
        <Text style={styles.price}>{product.price}</Text>
        <Text style={styles.description}>Liên hệ ngay: Số máy liên hệ</Text>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Chat')}>
          <Text style={styles.buttonText}>Liên hệ ngay</Text>
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
  image: {
    width: '100%',
    height: 250,
    borderRadius: 10,
    marginVertical: 15,
    marginHorizontal: 20,
  },
  content: {
    padding: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
  },
  price: {
    fontSize: 18,
    color: '#e91e63',
    marginVertical: 10,
  },
  description: {
    fontSize: 16,
    color: '#666',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#00CED1',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});