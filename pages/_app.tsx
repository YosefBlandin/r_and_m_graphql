import type { AppProps } from "next/app";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import "../styles/globals.css";
import { moviesSlice as moviesReducer } from "../store/reducer/moviesReducer";
import { Layout } from "../Layout";
import "bootstrap/dist/css/bootstrap.css";

const store = configureStore({
  reducer: {
    movies: moviesReducer.reducer,
  },
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}

export default MyApp;
