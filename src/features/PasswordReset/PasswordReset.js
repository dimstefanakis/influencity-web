/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';
import { useRouter } from 'next/router';
import { LockOutlined } from '@ant-design/icons';
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

import styles from './PasswordReset.module.css';

function PasswordReset() {
  return (
    <div className={styles.passwordResetContainer}>
      <h1>Reset password</h1>
      <PasswordResetChakra />
    </div>
  );
}

const ResetPasswordForm = () => {
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState([]);
  const [status, setStatus] = useState(null);
  const router = useRouter();
  const { uid, token } = router.query;

  function checkForErrors(data) {
    let newErrors = [];
    if (data.new_password2) {
      newErrors = [...newErrors, ...data.new_password2];
    }
    if (data.new_password1) {
      newErrors = [...newErrors, ...data.new_password1];
    }
    if (data.non_field_errors) {
      newErrors = [...newErrors, ...data.non_field_errors];
    }
    if (data.token) {
      newErrors = [...newErrors, 'Your session has expired.'];
    }
    setErrors(newErrors);
  }

  async function resetPassword(values) {
    setLoading(true);
    const url = `${process.env.NEXT_PUBLIC_DOMAIN_URL}/rest-auth/password/reset/confirm/`;
    try {
      const response = await fetch(url, {
        headers: {
          'Content-Type': 'application/json',
        },
        method: 'POST',
        body: JSON.stringify({
          uid,
          token,
          new_password1: values.password1,
          new_password2: values.password2,
        }),
      });
      setStatus(response.status);
      const content = await response.json();
      checkForErrors(content);
      setLoading(false);
    } catch (e) {
      setLoading(false);
    }
  }

  const onFinish = async (values) => {
    await resetPassword(values);
  };

  return (
    <Form name="normal_reset_form" className="reset-form" onFinish={onFinish}>
      <Form.Item
        name="password1"
        hasFeedback
        rules={[{ required: true, message: 'Please input your password' }]}
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password"
        />
      </Form.Item>
      <Form.Item
        name="password2"
        dependencies={['password1']}
        hasFeedback
        rules={[
          {
            required: true,
            message: 'Please confirm your password!',
          },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue('password1') === value) {
                return Promise.resolve();
              }
              return Promise.reject(
                new Error('The two passwords that you entered do not match!'),
              );
            },
          }),
        ]}
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password confirm"
        />
      </Form.Item>
      {errors.length > 0 && <ErrorsFeedback errors={errors} />}
      {status === 200 && <SuccessFeedback />}
      <Form.Item>
        <Button
          loading={loading}
          type="primary"
          htmlType="submit"
          className="reset-password-form-button"
        >
          Reset password
        </Button>
      </Form.Item>
    </Form>
  );
};

function PasswordResetChakra() {
  const toast = useToast();
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState([]);
  const [status, setStatus] = useState(null);
  const router = useRouter();
  const { uid, token } = router.query;

  function checkForErrors(data) {
    let newErrors = [];
    if (data.new_password2) {
      newErrors = [...newErrors, ...data.new_password2];
    }
    if (data.new_password1) {
      newErrors = [...newErrors, ...data.new_password1];
    }
    if (data.non_field_errors) {
      newErrors = [...newErrors, ...data.non_field_errors];
    }
    if (data.token) {
      newErrors = [...newErrors, 'Your session has expired.'];
    }
    setErrors(newErrors);
  }

  const validateConfirmPassword = (pass, value) => {
    let error = '';
    if (pass && value) {
      if (pass !== value) {
        error = 'Password not matched';
      }
    }
    return error;
  };

  const validatePassword = (values) => {
    let error = '';
    const passwordRegex = /(?=.*[0-9])/;
    if (!values) {
      error = '*Required';
    } else if (values.length < 8) {
      error = '*Password must be 8 characters long.';
    } else if (!passwordRegex.test(values)) {
      error = '*Invalid password. Must contain one number.';
    }
    return error;
  };

  async function resetPassword(values) {
    setLoading(true);
    const url = `${process.env.NEXT_PUBLIC_DOMAIN_URL}/rest-auth/password/reset/confirm/`;
    try {
      const response = await fetch(url, {
        headers: {
          'Content-Type': 'application/json',
        },
        method: 'POST',
        body: JSON.stringify({
          uid,
          token,
          new_password1: values.password1,
          new_password2: values.password2,
        }),
      });
      setStatus(response.status);
      const content = await response.json();
      checkForErrors(content);
      setLoading(false);
    } catch (e) {
      setLoading(false);
    }
  }

  useEffect(() => {
    if (errors.length > 0) {
      toast({
        title: 'Something went wrong resetting your password',
        description: errors.reduce((prev, curr) => `${prev} ${curr}`),
        status: 'error',
        duration: 9000,
        isClosable: true,
      });
    }
  }, [errors]);

  return (
    <Formik
      initialValues={{ password1: '', password2: '' }}
      onSubmit={(values, actions) => {
        resetPassword(values);
      }}
    >
      {(props) => (
        <Form>
          <Field type="password" name="password1">
            {({ field, form }) => (
              <FormControl isInvalid={form.errors.name && form.touched.name}>
                <Input
                  {...field}
                  type="password"
                  mt={10}
                  size="lg"
                  id="password1"
                  placeholder="Enter new password"
                  variant="filled"
                  isRequired
                />
              </FormControl>
            )}
          </Field>
          <Field
            type="password"
            name="password2"
            validate={(value) => validateConfirmPassword(props.values.password1, value)}
          >
            {({ field, form }) => (
              <FormControl
                isInvalid={form.errors.password2 && form.touched.password2}
              >
                <Input
                  {...field}
                  type="password"
                  mt={4}
                  size="lg"
                  id="password2"
                  placeholder="Confirm your new password"
                  variant="filled"
                  isRequired
                />
                <FormErrorMessage>{form.errors.password2}</FormErrorMessage>
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

function SuccessFeedback() {
  return (
    <div
      style={{
        padding: 12,
        margin: '15px 0',
        display: 'flex',
        flexFlow: 'column',
        backgroundColor: '#40a9ff',
        borderRadius: 10,
      }}
    >
      <span>Successfully changed password</span>
    </div>
  );
}

function ErrorsFeedback({ errors = [] }) {
  return (
    <div
      style={{
        padding: 12,
        margin: '15px 0',
        display: 'flex',
        flexFlow: 'column',
        backgroundColor: '#ff7875',
        borderRadius: 10,
      }}
    >
      {errors.map((e) => (
        <span style={{ marginTop: 5 }}>{e}</span>
      ))}
    </div>
  );
}

export default PasswordReset;
