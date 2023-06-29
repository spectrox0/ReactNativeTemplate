import React from 'react';
import {FCC} from '../../../types/common';
import {Button, ButtonProps} from '@ui-kitten/components';

interface Props extends ButtonProps {}
export const Btn: FCC<Props> = ({children, ...rest}) => {
  return <Button {...rest}>{children}</Button>;
};
