import '../styles/globals.scss';
import { initializeIcons } from '@uifabric/icons';
import CustomTheme from '../context';
import { useReducer } from 'react';

initializeIcons();

const initialTheme = 'dark';
const reducer = (state, action) => {
  switch (action) {
    case "light":
      return "light";
    case "dark":
      return "dark";
    default:
      return "dark";
  }
};

function MyApp({ Component, pageProps }) {
  const [theme, setTheme] = useReducer(reducer, initialTheme);

  return (
    <CustomTheme.Provider value={{ theme, setTheme }}>
      <Component {...pageProps} />
    </CustomTheme.Provider>
  );
}

export default MyApp;
