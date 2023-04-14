import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#5636b3',
      padding: 40
    },
    eventName: {
      color: '#fdfcfe',
      fontSize: 26,
      fontWeight: 'bold',
      marginTop: 48
    },
    eventDate: {
      color: '#fff',
      fontSize: 16
    },
    input: {
      height: 56,
      backgroundColor: '#606',
      borderRadius: 5,
      color: '#ccc',
      padding: 16,
      fontSize: 16,
      flex: 1,
    },
    buttonText: {
      color: '#fff',
      fontSize: 40,
    },
    button: {
      width: 56,
      height: 56,
      backgroundColor: '#c9f',
      borderRadius: 50,
      justifyContent: 'center',
      alignItems:'center'
    },
    form: {
      width: '100%',
      flexDirection: 'row',
      marginTop: 36,
      marginBottom:42,
    }
})