import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import ProductCard from '../components/ProductCard';
import BackButton from '../components/BackButton';
import axios from 'axios';

export default function HomeScreen({ navigation }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/products');
        setProducts(response.data);
      } catch (err) {
        console.error('Error fetching products:', err);
      }
    };
    fetchProducts();
  }, []);
  

  return (
    <View style={styles.container}>
      <LinearGradient colors={['#00CED1', '#00A1A1']} style={styles.header}>
        <Text style={styles.headerText}>Trang chủ</Text>
      </LinearGradient>
      {navigation.canGoBack() && <BackButton onPress={() => navigation.goBack()} />}
      <TextInput
        style={styles.searchBar}
        placeholder="Tìm kiếm..."
        placeholderTextColor="#888"
        onFocus={() => navigation.navigate('SearchSuggestions')}
      />
      <View style={styles.categories}>
        <TouchableOpacity style={styles.categoryButton}>
          <Text style={styles.categoryText}>Xe máy</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.categoryButton}>
          <Text style={styles.categoryText}>Ô tô</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.categoryButton}>
          <Text style={styles.categoryText}>Đồ điện tử</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={products}
        renderItem={({ item }) => (
          <ProductCard
            product={item}
            onPress={() => navigation.navigate('ProductDetails', { product: item })}
          />
        )}
        keyExtractor={(item) => item._id}
        contentContainerStyle={styles.list}
      />
      <View style={styles.footer}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Text style={styles.footerText}>Trang chủ</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Chat')}>
          <Text style={styles.footerText}>Tin nhắn</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.footerText}>Tôi</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2F4F8',
  },
  header: {
    paddingVertical: 50,
    paddingTop: 70,
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  headerText: {
    color: '#fff',
    fontSize: 30,
    fontWeight: '600',
    fontFamily: 'Poppins_600SemiBold',
  },
  searchBar: {
    marginHorizontal: 20,
    marginTop: -20,
    marginBottom: 10,
    padding: 14,
    backgroundColor: '#fff',
    borderRadius: 14,
    fontSize: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
  },
  categories: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    marginTop: 10,
  },
  categoryButton: {
    flex: 1,
    backgroundColor: '#E3F2FD',
    paddingVertical: 10,
    marginHorizontal: 5,
    borderRadius: 12,
    alignItems: 'center',
    elevation: 2,
  },
  categoryText: {
    fontSize: 15,
    color: '#1976D2',
    fontFamily: 'Poppins_500Medium',
  },
  list: {
    paddingHorizontal: 16,
    paddingBottom: 80,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 14,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderColor: '#eee',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.05,
    shadowRadius: 5,
    elevation: 6,
  },
  footerText: {
    color: '#1565C0',
    fontSize: 14,
    fontWeight: '600',
    fontFamily: 'Poppins_600SemiBold',
  },
});