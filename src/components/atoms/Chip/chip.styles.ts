import { StyleSheet } from 'react-native';
import { colors } from '../../../shared/styles/variables.styles';

const styles = StyleSheet.create({
  chip: {
    backgroundColor: 'transparent',
    borderRadius: 14,
    padding: 8,
    flexDirection: 'row',
    alignItems: 'center'
  },
  dataContainer: {
    flex: 1,
    justifyContent: 'center'
  },
  iconContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 8,
    backgroundColor: colors.WHITE,
    padding: 12,
    borderRadius: 8
  }
});

export default styles;
