import React from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import colors from '~styles/_colors';

const TouchableIcon = ({ icon, onPress, size, color }) => (
  <TouchableOpacity onPress={onPress}>
    <Icon name={icon} size={size} color={color} />
  </TouchableOpacity>
);

TouchableIcon.propTypes = {
  icon: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
  color: PropTypes.string,
  size: PropTypes.number,
};

TouchableIcon.defaultProps = {
  color: colors.black,
  size: 30,
};

export default TouchableIcon;
