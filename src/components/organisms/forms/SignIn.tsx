import React, {FC} from 'react';
import {FormContainer} from './FormContainer';
import {Btn, Input} from '@atoms';

export const SignInForm: FC = () => {
  const handleSignUp = () => {};
  return (
    <FormContainer>
      <Input placeholder="Email" />
      <Input placeholder="Password" />
      <Btn onPress={handleSignUp}>Sign In</Btn>
    </FormContainer>
  );
};
