import { createContext, useContext } from 'react';

export default const ThemeContext = createContext({
  theme: 'light',
  toggleTheme: ()=>{}
});

export const useTheme = () => useContext(ThemeContext)