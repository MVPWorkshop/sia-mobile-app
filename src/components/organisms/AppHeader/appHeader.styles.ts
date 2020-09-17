import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  appHeader: {
    backgroundColor: 'transparent',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 8
  },
  imgHamburger: {
    width: 21,
    height: 16,
    resizeMode: 'contain'
  },
  imgSearch: {
    width: 22,
    height: 22,
    resizeMode: 'contain'
  },
  imgLogo: {
    width: 50,
    height: 30,
    resizeMode: 'contain'
  }
});

export default styles;
