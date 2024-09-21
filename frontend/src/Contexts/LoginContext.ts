import { createContext } from 'react';

// Define the shape of the context
interface LoginContextType {
  isLoggedIn: boolean;
  setLoggedIn: (value: boolean) => void;
}

// Create the context with a default value of `null` initially
export const LoginContext = createContext<LoginContextType | null>(null);
