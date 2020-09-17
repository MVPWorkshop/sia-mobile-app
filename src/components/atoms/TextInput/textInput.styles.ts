import { StyleSheet } from 'react-native';
import { colors } from '../../../shared/styles/variables.styles';
import { EPoppins } from '../../../shared/hooks/usePoppins.hook';

const styles = StyleSheet.create({
  containerStyle: {
    paddingLeft: 0,
    paddingRight: 0,
    maxHeight: 80,
    backgroundColor: colors.WHITE
  },
  inputContainerStyle: {
    width: '100%',
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 5,
    paddingBottom: 5,
    borderWidth: 1,
    borderColor: colors.GRAY_LIGHTER,
    borderRadius: 5
  },
  textStyle: {
    fontFamily: EPoppins.Medium,
    fontSize: 17,
    color: colors.GRAY_DARKEST
  }
})

export default styles;
