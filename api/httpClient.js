import axios from 'axios';

const httpClient = axios.create({
  // Emulator
  // AND: 10.0.2.2
  // IOS: local (127.0.0.1)

  baseURL: 'http://10.0.2.2:5001', // ⚠️ Android Emulator
  headers: {
    'Content-Type': 'application/json',
  },
});

export default httpClient;