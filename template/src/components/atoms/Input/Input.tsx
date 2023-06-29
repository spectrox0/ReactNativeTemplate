import React, {FC} from 'react';
import {
  Input as KittenInput,
  InputProps as KittenInputProps,
} from '@ui-kitten/components';
interface InputProps extends KittenInputProps {}
export const Input: FC<InputProps> = props => {
  return <KittenInput {...props} />;
};
