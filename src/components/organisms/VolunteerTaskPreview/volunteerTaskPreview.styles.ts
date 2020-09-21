import { StyleSheet } from 'react-native';

const styles = (mainColor: string) =>
  StyleSheet.create({
    volunteerTaskPreview: {
      width: '100%',
      borderColor: mainColor,
      borderWidth: 1,
      borderRadius: 25,
    },
    contentContainer: {
      flexGrow: 1,
      height: 330,
      padding: 16
    },
  })

export default styles;
