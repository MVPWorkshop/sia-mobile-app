import { StyleSheet } from 'react-native';
import { getColor } from '../../../shared/utils/common.util';
import { EAccents, EColors } from '../../../shared/styles/variables.styles';

const styles = StyleSheet.create({
  accountDetailsScreen: {
    alignItems: 'flex-start'
  },
  userImageContainer: {
    width: 75,
    height: 75,
    overflow: 'hidden',
    borderRadius: 40,
    backgroundColor: getColor(EColors.GRAY),
    borderColor: getColor(EAccents.PRIMARY),
    borderWidth: 3,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16
  },
})

export default styles;
