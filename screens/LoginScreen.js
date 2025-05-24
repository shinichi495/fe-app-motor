import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import BackButton from '../components/BackButton';
import { loginUser, registerUser } from '../domains/user/userService';

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    if (!email || !password) {
      Alert.alert('Lỗi', 'Vui lòng nhập đầy đủ email và mật khẩu.');
      return;
    }
    console.log('Login payload:', { email, password });

    try {
      const responseData = await loginUser({ email, password });
      console.log('Response from server:', responseData);
      Alert.alert('Đăng nhập thành công!');
      navigation.navigate('Home');
    } catch (err) {
      console.log('Login error:', err.response?.data || err.message);
      const message = err.response?.data?.message || 'Đăng nhập thất bại';
      Alert.alert('Lỗi', message);
    }
  };
  
  return (
    <View style={styles.container}>
      <LinearGradient colors={['#00CED1', '#00A1A1']} style={styles.header}>
        <Text style={styles.headerText}>Đăng nhập</Text>
      </LinearGradient>
      
      {navigation.canGoBack() && <BackButton onPress={() => navigation.goBack()} />}
      
      <View style={styles.formContainer}>
        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="#888"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />
        <TextInput
          style={styles.input}
          placeholder="Mật khẩu"
          placeholderTextColor="#888"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Đăng nhập</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Register')}>
          <Text style={styles.link}>Bạn chưa có tài khoản? Đăng ký tại đây</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f5f5f5' },
  header: { padding: 40, paddingTop: 60, alignItems: 'center' },
  headerText: { color: '#fff', fontSize: 28, fontWeight: 'bold' },
  formContainer: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 },
  input: {
    width: '100%', padding: 15, borderWidth: 1, borderColor: '#ddd',
    borderRadius: 10, marginBottom: 15, backgroundColor: '#fff',
    elevation: 2, shadowColor: '#000', shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2, shadowRadius: 2,
  },
  button: {
    backgroundColor: '#00CED1', paddingVertical: 15, borderRadius: 10,
    width: '100%', alignItems: 'center',
    elevation: 5, shadowColor: '#000', shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3, shadowRadius: 3,
  },
  buttonText: { color: '#fff', fontSize: 18, fontWeight: 'bold' },
  link: { color: '#00CED1', marginTop: 20, fontSize: 16 },
});
