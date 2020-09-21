import { StyleSheet } from 'react-native';

const styles = (mainColor: string) =>
  StyleSheet.create({
    volunteerTaskPreview: {
      width: '100%',
      borderColor: mainColor,
      borderWidth: 1,
      borderRadius: 25,
      overflow: 'hidden'
    },
    contentContainer: {
      flexGrow: 1,
      height: 330,
      padding: 16
    },
    projectLabelContainer: {
      backgroundColor: mainColor,
      width: '100%',
      paddingHorizontal: 16,
      paddingVertical: 8
    }
  })

export default styles;
