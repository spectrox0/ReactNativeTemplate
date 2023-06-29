import React, {FC} from 'react';
import {CheckBoxProps, CheckBox as KittenCheckbox} from '@ui-kitten/components';
export const Checkbox: FC<CheckBoxProps> = props => {
  return <KittenCheckbox {...props} />;
};
