import { createContext, useContext, useEffect, useState } from 'react';
import { auth } from '@/libs/firebase';
import { onAuthStateChanged } from 'firebase/auth';

const AuthContext = createContext({ account: undefined });

export const useAuthContext = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [account, setAccount] = useState();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setAccount(user);
      } else {
        setAccount(null);
      }
    }, (error) => {
      console.error("failed", error);
      setAccount(null);
    });
  }, []);

  return (
    <AuthContext.Provider value={{ account }}>
      {children}
    </AuthContext.Provider>
  );
}
