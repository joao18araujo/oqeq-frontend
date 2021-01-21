import React from 'react';
import PropTypes from 'prop-types';
import { SafeAreaView, Text, Button } from 'react-native';

const HomeScreen = ({ navigation }) => (
  <SafeAreaView>
    <Text>Screen: Home</Text>

    <Button
      title="Go to Objectives"
      onPress={() => navigation.navigate('Objectives')}
    />
  </SafeAreaView>
);

HomeScreen.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

export default HomeScreen;
