import { StyleSheet } from 'react-native';
import { colors } from '../../../shared/styles/variables.styles';

const styles = StyleSheet.create({
  appHeader: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 8,
    elevation: 8
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
  },
  userVerificationBanner: {
    backgroundColor: colors.BLUE_LIGHTER,
    width: '100%',
    paddingVertical: 20,
    paddingHorizontal: 4,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default styles;
