import { StyleSheet } from 'react-native';
import { getColor } from '../../../shared/utils/common.util';
import { EColors } from '../../../shared/styles/variables.styles';

const styles = StyleSheet.create({
  finishTaskScreen: {
    alignItems: 'flex-start'
  },
  modalContainer: {
    flex: 1,
    padding: 16,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
  },
  modalContentBackground: {
    width: '100%',
    height: 352,
    backgroundColor: getColor(EColors.WHITE),
    borderRadius: 22,
    elevation: 5,
  },
  modalContent: {
    flex: 1,
    padding: 16,
    alignItems: 'center',
    top: -40
  }
})

export default styles;
