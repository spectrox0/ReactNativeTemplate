import React, {FC} from 'react';
import {FormContainer} from './FormContainer';
import {Btn, Input} from '@atoms';

export const SignUpForm: FC = () => {
  const handleSignUp = () => {};
  return (
    <FormContainer>
      <Input placeholder="Email" />
      <Input placeholder="Password" />
      <Input placeholder="Confirm Password" />
      <Input placeholder="First Name" />
      <Input placeholder="Last Name" />
      <Input placeholder="Phone Number" />
      <Input placeholder="Address" />
      <Input placeholder="City" />
      <Input placeholder="State" />
      <Input placeholder="Zip Code" />
      <Btn onPress={handleSignUp}>Sign Up</Btn>
    </FormContainer>
  );
};
