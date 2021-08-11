/* eslint-disable no-unused-vars */
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import {
  Form, Input, Button,
} from 'antd';
import { LockOutlined } from '@ant-design/icons';
import './password_reset.css';

function PasswordReset() {
  return (
    <div className="password-reset-container">
      <h1>Reset password</h1>
      <ResetPasswordForm />
    </div>
  );
}

const ResetPasswordForm = () => {
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState([]);
  const [status, setStatus] = useState(null);
  const { uid, token } = useParams();

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
    const url = `${process.env.REACT_APP_DOMAIN_URL}/rest-auth/password/reset/confirm/`;
    try {
      const response = await fetch(
        url,
        {
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
        },
      );
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
    <Form
      name="normal_reset_form"
      className="reset-form"
      onFinish={onFinish}
    >
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
              return Promise.reject(new Error('The two passwords that you entered do not match!'));
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
        <Button loading={loading} type="primary" htmlType="submit" className="reset-password-form-button">
          Reset password
        </Button>
      </Form.Item>
    </Form>
  );
};

function SuccessFeedback() {
  return (
    <div style={{
      padding: 12, margin: '15px 0', display: 'flex', flexFlow: 'column', backgroundColor: '#40a9ff', borderRadius: 10,
    }}
    >
      <span>Successfully changed password</span>
    </div>
  );
}

function ErrorsFeedback({ errors = [] }) {
  return (
    <div style={{
      padding: 12, margin: '15px 0', display: 'flex', flexFlow: 'column', backgroundColor: '#ff7875', borderRadius: 10,
    }}
    >
      {errors.map((e) => <span style={{ marginTop: 5 }}>{e}</span>)}
    </div>
  );
}

export default PasswordReset;
