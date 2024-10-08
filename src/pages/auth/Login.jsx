import React from 'react';
import { GoogleLogin } from 'react-google-login';
import Form from '../../components/molecules/Form';
import Link from '../../components/atoms/Link';
import Text from '../../components/atoms/Text';

const Login = () => {
  const inputConfigs = [
    { name: 'username', placeholder: 'Enter your username', label: 'Username' },
    { name: 'password', placeholder: 'Enter your password', label: 'Password', type: 'password' }
  ];

  // Handle form submission
  const handleLoginSubmit = (formData) => {
    console.log('Login form submitted with:', formData);
    // You can add logic here to handle authentication
  };

  const loginHeader = (
    <div className="w-full flex justify-center mb-4">
      <GoogleLogin
        className='w-full flex justify-evenly items-center'
        clientId="YOUR_GOOGLE_CLIENT_ID"
        buttonText="Login with Google"
        onSuccess={(credentialResponse) => { console.log('Google login success:', credentialResponse); }}
        onError={() => { console.log('Google login failed'); }}
        cookiePolicy={'single_host_origin'}
      />
    </div>
    
    
  );

  const loginFooter = (
    <div className="text-end space-y-2">
      <Link href="/forgot-password" text="Forgot Password?" />
      <div className='w-full text-center inline-flex justify-center items-center'>
        <Text text="Don't have an account? &nbsp;" />
        <Link href="/signup" text="Sign Up" className="text-sm" />
      </div>
    </div>
  );

  return (
    <div>
      <Form
        header={loginHeader}
        inputConfigs={inputConfigs}
        onSubmit={handleLoginSubmit}
        footer={loginFooter} // Pass custom JSX as footer
      />
    </div>
  );
};

export default Login;
