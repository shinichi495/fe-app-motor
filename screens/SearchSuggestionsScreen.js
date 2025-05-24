import React from 'react';
import { View, Text, TextInput, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import BackButton from '../components/BackButton';

const suggestions = [
  'Xe máy Honda',
  'Xe máy Yamaha',
  'Xe máy Suzuki',
  'Xe máy giá rẻ',
];

export default function SearchSuggestionsScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <LinearGradient colors={['#00CED1', '#00A1A1']} style={styles.header}>
        <Text style={styles.headerText}>Gợi ý tìm kiếm</Text>
      </LinearGradient>
      {navigation.canGoBack() && <BackButton onPress={() => navigation.goBack()} />}
      <TextInput
        style={styles.searchBar}
        placeholder="Tìm kiếm..."
        placeholderTextColor="#888"
      />
      <FlatList
        data={suggestions}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.suggestionItem}
            onPress={() => navigation.navigate('SearchResults', { query: item })}
          >
            <Text style={styles.suggestionText}>{item}</Text>
          </TouchableOpacity>
        )}
        keyExtractor={(item, index) => index.toString()}
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
  searchBar: {
    marginHorizontal: 20,
    marginVertical: 15,
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
  suggestionItem: {
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
  suggestionText: {
    fontSize: 16,
    color: '#333',
  },
  list: {
    paddingBottom: 20,
  },
});