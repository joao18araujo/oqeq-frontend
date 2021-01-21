import { StyleSheet } from 'react-native';
import colors from '~styles/_colors';

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.primary,
    borderRadius: 5,
    margin: 10,
    padding: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: colors.white,
  },
  disabled: {
    backgroundColor: colors.disabled,
  },
});

export default styles;
