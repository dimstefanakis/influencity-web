/* eslint-disable import/no-extraneous-dependencies */
import { useState } from 'react';
import { useRouter } from 'next/router';
import { Formik, Form, Field } from 'formik';
import {
  FormControl,
  FormLabel,
  FormHelperText,
  FormErrorMessage,
} from '@chakra-ui/form-control';
import { useToast } from '@chakra-ui/react';
import { DarkMode } from '@chakra-ui/color-mode';
import { Button } from '@chakra-ui/button';
import { Input } from '@chakra-ui/input';
import styles from './ForgotPassword.module.css';

function ForgotPassword() {
  return (
    <div className={styles.forgotPasswordContainer}>
      <h1>Forgot your password</h1>
      <ForgotPasswordForm />
    </div>
  );
}

function ForgotPasswordForm() {
  const toast = useToast();
  const [loading, setLoading] = useState(false);

  function validateEmail(value) {
    let error;
    if (!value) {
      error = 'Email is required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
      error = 'Invalid email address';
    }
    return error;
  }

  async function postForgotPassword(email) {
    const url = `${process.env.NEXT_PUBLIC_DOMAIN_URL}/rest-auth/password/reset/`;

    try {
      const formData = new FormData();
      formData.append('email', email);
      setLoading(true);
      const response = await fetch(url, {
        method: 'post',
        body: formData,
      });
      if (response.status >= 200 && response.status <= 300) {
        toast({
          title: 'Email sent',
          description:
            "We've sent you an email with instructions on how to reset your password.",
          status: 'success',
          duration: 9000,
          isClosable: true,
        });
      }
      const data = await response.json();
      setLoading(false);
    } catch (e) {
      setLoading(false);
    }
  }
  return (
    <Formik
      initialValues={{ email: '' }}
      onSubmit={(values, actions) => {
        postForgotPassword(values.email);
      }}
    >
      {(props) => (
        <Form>
          <Field name="email" validate={validateEmail}>
            {({ field, form }) => (
              <FormControl isInvalid={form.errors.name && form.touched.name}>
                {/* <FormLabel htmlFor="email">Email</FormLabel> */}
                <Input
                  {...field}
                  mt={10}
                  size="lg"
                  id="email"
                  placeholder="Enter email"
                  variant="filled"
                  isRequired
                />
                <FormErrorMessage>{form.errors.name}</FormErrorMessage>
              </FormControl>
            )}
          </Field>
          <DarkMode>
            <Button
              mt={4}
              colorScheme="orange"
              isLoading={loading}
              type="submit"
            >
              Submit
            </Button>
          </DarkMode>
        </Form>
      )}
    </Formik>
  );
}

export default ForgotPassword;
