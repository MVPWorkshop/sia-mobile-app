import { StyleSheet } from 'react-native';
import { colors } from '../../../shared/styles/variables.styles';

const styles = StyleSheet.create({
  socialShareButtons: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  linkBtnContainer: {
    borderColor: colors.BLUE,
    borderWidth: 1,
    borderRadius: 26,
    alignItems: 'center',
    justifyContent: 'center',
    width: 52,
    height: 52,
    margin: 7
  }
})

export default styles;
