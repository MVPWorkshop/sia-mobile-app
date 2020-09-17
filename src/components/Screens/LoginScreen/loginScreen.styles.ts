import { StyleSheet } from 'react-native';
import { mb } from '../../../shared/styles/util.styles';

const styles = StyleSheet.create({
  loginScreen: {
    justifyContent: 'space-between',
    paddingLeft: 55,
    paddingRight: 55,
    paddingBottom: 10,
    paddingTop: 0
  },
  logoImageContainer: {
    height: 250,
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 1
  },
  mainContentContainer: {
    flex: 1,
    alignItems: 'center'
  },
  socialButtonContainer: {
    ...mb(12)
  },
  logoImage: {
    maxWidth: 85,
    maxHeight: 50
  }
})

export default styles;
