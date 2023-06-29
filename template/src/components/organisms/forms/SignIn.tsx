import React, {FC} from 'react';
import {FormContainer} from './FormContainer';
import {Btn, Input} from '@atoms';
import {useFormik} from 'formik'
import {z} from 'zod';
const schema = z.object({
  email: z
    .string({
      required_error: 'Email is required',
    })
    .email('Invalid email format'),
  password: z
    .string({
      required_error: 'Password is required',
    })
    .min(6, 'Password must be at least 6 characters'),
});

export type FormType = z.infer<typeof schema>;
export const SignInForm: FC = () => {
  const handleSignUp = () => {};
  const { } = useFormik({
     
  })
  return (
    <FormContainer>
      <Input placeholder="Email" />
      <Input placeholder="Password" />
      <Btn onPress={handleSignUp}>Sign In</Btn>
    </FormContainer>
  );
};
