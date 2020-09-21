import { StatusBar, StyleSheet } from 'react-native';
import { getColor } from '../../../shared/utils/common.util';
import { EAccents, EColors } from '../../../shared/styles/variables.styles';

const paddingTop = 15 + (StatusBar.currentHeight || 0);
const paddingHorizontal = 24

const styles = StyleSheet.create({
  appDrawer: {
    flex: 1,
    backgroundColor: getColor(EColors.WHITE),
    paddingHorizontal: paddingHorizontal,
    paddingTop: paddingTop,
    paddingBottom: 8
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
  closeBtn: {
    position: 'absolute',
    top: paddingTop,
    right: paddingHorizontal,
    padding: 8
  }
});

export default styles;
