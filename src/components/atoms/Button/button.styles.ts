import { StyleSheet } from 'react-native';
import { accentColor } from '../../../shared/styles/variables.styles';

export const btnIconSize = 20;
const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 14,
    flexDirection: 'row'
  },
  buttonRegular: {
    backgroundColor: accentColor.PRIMARY,
    borderRadius: 18,
  },
  buttonFlat: {
  },
  buttonOutlined: {
    borderWidth: 1,
    borderRadius: 18,
    borderColor: accentColor.PRIMARY
  },
  iconContainer: {
    width: btnIconSize,
    height: btnIconSize,
    alignItems: 'center',
    justifyContent: 'center'
  },
  disabled: {
    opacity: 0.6
  }
})

export default styles;
