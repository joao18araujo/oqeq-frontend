import React from 'react';
import { shallow } from 'enzyme';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import TouchableIcon from '~components/atoms/touchable-icon';

const initialProps = (props) => ({
  icon: 'arrow-left',
  onPress: () => {},
  size: 10,
  color: '#0080ff',
  ...props,
});

describe('TouchableIcon', () => {
  const onPressMock = jest.fn();
  let wrapper = null;

  beforeEach(() => {
    wrapper = shallow(
      <TouchableIcon {...initialProps({ onPress: onPressMock })} />
    );
  });

  it('should match the snapshot', () => {
    expect(wrapper.html()).toMatchSnapshot();
  });

  it('should pass onPress to TouchableOpacity', () => {
    expect(wrapper.find(TouchableOpacity).props()).toEqual(
      expect.objectContaining({
        onPress: onPressMock,
      })
    );
  });

  it('should pass icon, size and color to Icon', () => {
    expect(wrapper.find(Icon).props()).toEqual(
      expect.objectContaining({
        name: 'arrow-left',
        size: 10,
        color: '#0080ff',
      })
    );
  });
});
