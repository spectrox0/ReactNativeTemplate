import React from 'react';
import {View, ViewProps} from 'react-native';
import {FCC} from 'types/common';
import {formStyles} from './Form.styles';

interface FormProps extends ViewProps {}
export const FormContainer: FCC<FormProps> = ({children, style, ...rest}) => {
  return (
    <View style={[formStyles.container, style]} {...rest}>
      {children}
    </View>
  );
};
