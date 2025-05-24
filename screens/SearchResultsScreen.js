import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import ProductCard from '../components/ProductCard';
import BackButton from '../components/BackButton';

const products = [
  { id: '1', title: 'Xe máy Honda', price: '20,000,000 VNĐ', image: 'https://via.placeholder.com/150' },
  { id: '2', title: 'Xe máy Yamaha', price: '25,000,000 VNĐ', image: 'https://via.placeholder.com/150' },
];

export default function SearchResultsScreen({ route, navigation }) {
  const { query } = route.params;

  return (
    <View style={styles.container}>
      <LinearGradient colors={['#00CED1', '#00A1A1']} style={styles.header}>
        <Text style={styles.headerText}>Tìm kiếm</Text>
      </LinearGradient>
      {navigation.canGoBack() && <BackButton onPress={() => navigation.goBack()} />}
      <Text style={styles.query}>Kết quả cho: {query}</Text>
      <FlatList
        data={products}
        renderItem={({ item }) => (
          <ProductCard
            product={item}
            onPress={() => navigation.navigate('ProductDetails', { product: item })}
          />
        )}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
      />
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
  query: {
    padding: 15,
    fontSize: 18,
    color: '#333',
    marginHorizontal: 20,
  },
  list: {
    paddingBottom: 20,
  },
});