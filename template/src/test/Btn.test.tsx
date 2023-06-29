import React from 'react';
import {Btn} from '@atoms';
import {render, fireEvent} from '@testing-library/react-native';

describe('MyButton', () => {
  it('calls onPress when pressed', () => {
    const onPress = jest.fn();
    const {getByText} = render(<Btn onPress={onPress}>MyButton</Btn>);
    const button = getByText('MyButton');
    fireEvent.press(button);
    expect(onPress).toHaveBeenCalled();
  });
});
