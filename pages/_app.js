import Layout from "../components/layout";
import "../styles/globals.css";
//*global style must import this page
//*wrapper all components
//?import tailwind
//themeContext ThemProvider
import { Provider } from "react-redux";
import { ThemProvider } from "../components/ThemeContext";
//themeContext
//Redux
import { createStore } from "redux";
import AllReducers from "../reducers";
const store = createStore(AllReducers);
//Redux
function MyApp({ Component, pageProps }) {
  return (
    // redux
    <Provider store={store}>
      {/* //ThemeContext */}
      <ThemProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemProvider>
    </Provider>
  );
}

export default MyApp;
