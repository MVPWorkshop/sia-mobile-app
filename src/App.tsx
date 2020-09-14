import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import Router from './router';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function App() {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <Router />
      </SafeAreaProvider>
    </Provider>
  );
}
