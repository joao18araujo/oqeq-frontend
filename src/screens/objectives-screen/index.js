import React from 'react';
import PropTypes from 'prop-types';
import { SafeAreaView, Text } from 'react-native';

const ObjectivesScreen = ({ navigation }) => (
  <SafeAreaView>
    <Text>Objectives Screen</Text>
  </SafeAreaView>
);

ObjectivesScreen.propTypes = {
  navigation: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default ObjectivesScreen;
