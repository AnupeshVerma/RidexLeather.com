import React from 'react';
import Form from '../../components/molecules/Form';
import Link from '../../components/atoms/Link';
import Text from '../../components/atoms/Text';

const Login = () => {
  const inputConfigs = [
    { name: 'email', placeholder: 'email@domain.com', label: 'Your email', type: 'email' },
    { name: 'password', placeholder: '* * * * * * * * *', label: 'Password', type: 'password' }
  ];

  const handleLoginSubmit = (formData) => {
    console.log('Login form submitted with:', formData);
    // You can add logic here to handle authentication
  };

  const loginHeader = (
    <div className="w-full flex flex-col items-center mb-4">
      <button className="w-4/5 flex items-center justify-around bg-white border border-gray-300 rounded-xl px-4 py-2 shadow-sm hover:shadow-lg transition-shadow">
        <img src="images/google_logo.png" alt="Google logo" className="w-5 h-5 mr-2" />
        <span className="text-gray-700">Sign in with Google</span>
      </button>


      <div className="flex items-center w-full mt-4">
        <hr className="flex-grow border-t border-gray-900" />
        <span className="px-2">OR</span>
        <hr className="flex-grow border-t border-gray-900" />
      </div>
    </div>
  );

  const loginFooter = (
    <div className="text-end space-y-2">
      <Link href="/forgot-password" text="Forgot Password?" />
      <div className='w-full text-center inline-flex justify-center items-center'>
        <Text text="Don't have an account? &nbsp;" />
        <Link href="/auth/signup" text="Sign Up" className="text-sm" />
      </div>
    </div>
  );

  return (
    <div>
      <Form
        header={loginHeader}
        inputConfigs={inputConfigs}
        onSubmit={handleLoginSubmit}
        footer={loginFooter}
      />
    </div>
  );
};

export default Login;
