import { AuthProvider } from '@/contexts/FirebaseAuthContext';
import '@/styles/globals.css';
import { ChakraProvider } from '@chakra-ui/react';

const App = ({ Component, pageProps }) => {
  return (
    <AuthProvider>
      <ChakraProvider>
        <Component {...pageProps} />
      </ChakraProvider>
    </AuthProvider>
  );
}

export default App;
