import { StyleSheet } from 'react-native';
import { colors } from '../../../shared/styles/variables.styles';
import { mb } from '../../../shared/styles/util.styles';

const styles = StyleSheet.create({
  volunteerActionPreview: {
    elevation: 8,
    backgroundColor: colors.WHITE,
    width: '100%',
    borderRadius: 24,
    height: 420,
    overflow: 'hidden'
  },
  chipContainer: {
    flexDirection: 'row',
    ...mb(6)
  },
  taskCountContainer: {
    width: '100%',
    padding: 13,
    backgroundColor: colors.BLUE_LIGHTER,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row'
  },
});

export default styles;
