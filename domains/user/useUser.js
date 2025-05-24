import { useEffect, useState } from 'react';
import { getUsers } from './userService';

export const useUsers = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    (async () => {
      setLoading(true);
      const data = await getUsers();
      setUsers(data);
      setLoading(false);
    })();
  }, []);

  return { users, loading };
};