import { StyleSheet } from 'react-native';
import ScreenUtil from '../../../shared/utils/screen.util';

const screenPaddingX = 25;

const styles = StyleSheet.create({
  registerScreen: {
    paddingHorizontal: screenPaddingX,
  },
  logoContainer: {
    marginBottom: 20,
    alignItems: 'center',
    justifyContent: 'center'
  },
  logo: {
    width: 50,
    height: 30
  },
  stepImageContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  stepImage: {
    maxWidth: 180,
    resizeMode: 'contain'
  },
  flatListItem: {
    flexGrow: 1,
    width: ScreenUtil.width - (screenPaddingX * 2)
  },
  stickyButtonContainer: {
    flexDirection: 'row',
    alignSelf: 'stretch',
  }
});

export default styles;
