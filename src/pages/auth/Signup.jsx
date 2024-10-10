import React from 'react';
import Form from '../../components/molecules/Form';
import Link from '../../components/atoms/Link';
import Text from '../../components/atoms/Text';

const Signup = () => {
  const inputConfigs = [
    { name: 'name', placeholder: 'Enter name', label: 'Your name', type: 'text' },
    { name: 'email', placeholder: 'email@doamin.com', label: 'Your email', type: 'email' },
    { name: 'password', placeholder: '* * * * * * * * *', label: 'Password', type: 'password' },
    { name: 'confirm-password', placeholder: '* * * * * * * * *', label: 'Confirm password', type: 'password' }
  ];

  const handleSignupSubmit = (formData) => {
    console.log('Signup form submitted with:', formData);
    // You can add logic here to handle authentication
  };

  const signupHeader = (
    <div className="w-full flex flex-col items-center mb-4">
      {/* Google Sign-up Button */}
      <button className="w-4/5 flex items-center justify-around bg-white border border-gray-300 rounded-xl px-4 py-2 shadow-sm hover:shadow-lg transition-shadow">
        <img src={`${process.env.PUBLIC_URL}/images/google_logo.png`} alt="Google logo" className="w-5 h-5 mr-2" />
        <span className="text-gray-700">Sign up with Google</span>
      </button>

      {/* OR Divider */}
      <div className="flex items-center w-full mt-4">
        <hr className="flex-grow border-t border-gray-900" />
        <span className="px-2">OR</span>
        <hr className="flex-grow border-t border-gray-900" />
      </div>

      {/* Dropbox to select the country */}

    </div>
  );

  const signupFooter = (
    <div className="text-end space-y-2">
      <div className='w-full text-center inline-flex justify-center items-center'>
        <Text text="Already have an account? &nbsp;" />
        <Link href="/auth/login" text="LogIn" className="text-sm" />
      </div>
    </div>
  );

  return (
    <div>
      <Form
        header={signupHeader}
        inputConfigs={inputConfigs}
        onSubmit={handleSignupSubmit}
        footer={signupFooter}
      />
    </div>
  );
};

export default Signup;
