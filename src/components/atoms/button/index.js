import React from 'react';
import PropTypes from 'prop-types';
import { TouchableHighlight, Text } from 'react-native';

import styles from './styles';

const Button = ({ title, onPress, disabled, style, textStyle }) => (
  <TouchableHighlight
    style={[styles.button, disabled && styles.disabled, style]}
    disabled={disabled}
    onPress={onPress}
  >
    <Text style={[styles.buttonText, textStyle]}>{title}</Text>
  </TouchableHighlight>
);

Button.propTypes = {
  title: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
  style: PropTypes.objectOf(PropTypes.any),
  textStyle: PropTypes.objectOf(PropTypes.any),
};

Button.defaultProps = {
  disabled: false,
  style: {},
  textStyle: {},
};

export default Button;
