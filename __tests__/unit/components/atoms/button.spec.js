import React from 'react';
import { shallow } from 'enzyme';
import { TouchableHighlight, Text } from 'react-native';
import Button from '~components/atoms/button';

const initialProps = (props) => ({
  title: 'Test title',
  onPress: () => {},
  disabled: false,
  style: { color: '#0080ff' },
  textStyle: { backgroundColor: '#0080ff' },
  ...props,
});

describe('Button', () => {
  const onPressMock = jest.fn();
  let wrapper = null;

  beforeEach(() => {
    wrapper = shallow(<Button {...initialProps({ onPress: onPressMock })} />);
  });

  it('should match the snapshot', () => {
    expect(wrapper.html()).toMatchSnapshot();
  });

  it('should pass onPress, disabled and style to TouchableHighlight', () => {
    expect(wrapper.find(TouchableHighlight).props()).toEqual(
      expect.objectContaining({
        disabled: false,
        onPress: onPressMock,
        style: expect.arrayContaining([{ color: '#0080ff' }]),
      })
    );
  });

  it('should pass textStyle to Text', () => {
    expect(wrapper.find(Text).props()).toEqual(
      expect.objectContaining({
        style: expect.arrayContaining([{ backgroundColor: '#0080ff' }]),
      })
    );
  });

  it('should pass title to Text body', () => {
    expect(wrapper.find(Text).props().children).toEqual('Test title');
  });
});
