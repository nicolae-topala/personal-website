import React, { useState } from 'react';

import { Layout } from 'ui/organisms/Layout/Layout';
import { Input } from 'ui/atoms/Input/Input';
import { Textarea } from 'ui/atoms/Textarea/Textarea';
import { Button } from 'ui/atoms/Button/Button';

import './ContactPage.scss';

const defaultErrorState = {
  firstName: '',
  lastName: '',
  subject: '',
  email: '',
  message: '',
  status: 0,
};

export const ContactPage = (): React.ReactElement => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [isButtonLoading, setIsButtonLoading] = useState(false);
  const [errors, setErrors] = useState(defaultErrorState);

  const onSubmit = () => {
    const data = {
      firstName,
      lastName,
      email,
      subject,
      message,
    };

    setIsButtonLoading(true);
    setTimeout(() => setIsButtonLoading(false), 3000);

    const fakeErrors = {
      firstName: 'too short',
      lastName: 'too long',
      subject: '',
      email: 'not an email type',
      message: 'error',
      status: 400,
    };

    setErrors(fakeErrors);
    /*
    The line above is a representation. 
    In reality we would use an API call and after se button state to true
    Example
    post API CALL

    setIsButtonLoading(false)
    */
    console.log(data);
  };

  return (
    <Layout>
      <div className="contact">
        <div className="contact__form">
          <div className="contact__form__title">Shoot me an email</div>
          <div className="contact__form__name">
            <div className="mr-20">
              <Input
                placeholder="First Name"
                className="mr-20"
                value={firstName}
                errorMessage={errors.firstName}
                onChange={setFirstName}
              />
            </div>
            <div>
              <Input
                placeholder="Last Name"
                value={lastName}
                errorMessage={errors.lastName}
                onChange={setLastName}
              />
            </div>
          </div>
          <Input
            placeholder="Subject"
            className="mt-20"
            value={subject}
            errorMessage={errors.subject}
            onChange={setSubject}
          />
          <Input
            placeholder="Email"
            className="mt-20"
            value={email}
            errorMessage={errors.email}
            onChange={setEmail}
          />
          <Textarea
            placeholder="Email"
            className="mt-20"
            value={message}
            errorMessage={errors.message}
            onChange={setMessage}
          />
        </div>
        <Button text="Send" loading={isButtonLoading} onClick={onSubmit} />
      </div>
    </Layout>
  );
};
