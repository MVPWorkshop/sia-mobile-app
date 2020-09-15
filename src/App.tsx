import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import Router from './router';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import usePoppins from './shared/hooks/usePoppins.hook';
import { AppLoading } from 'expo';
import useCachedImages from './shared/hooks/useCachedImages.hook';

export default function App() {

  const { isPoppinsLoading } = usePoppins();
  const areFontsLoading = isPoppinsLoading;

  const { isCachingImages } = useCachedImages();

  const isAppLoading =
    areFontsLoading &&
    isCachingImages

  if (isAppLoading) {
    return (
      <AppLoading />
    )
  }

  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <Router />
      </SafeAreaProvider>
    </Provider>
  );
}
