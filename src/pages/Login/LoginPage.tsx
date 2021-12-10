import React, { useState } from 'react';
import { auth } from 'libs/http/auth/auth';
import { save } from 'react-cookies';

import { history } from 'libs/history';
import { UserContext } from 'contexts/UserContext';
import { Button } from 'ui/atoms/Button/Button';
import { Input } from 'ui/atoms/Input/Input';

import './LoginPage.scss';

export const LoginPage = (): React.ReactElement => {
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const { setIsUserLogged } = React.useContext(UserContext);

  const onLogin = async () => {
    const { data } = await auth.login({ username, password });
    console.log(data);

    if (data?.accessToken) {
      save('token', data.accessToken, { path: '/' });
      setIsUserLogged(true);
      history.push('/');
    }
  };

  return (
    <div className="login">
      <div className="login__items">
        <div className="login__items__title">Hello, log in</div>
        <Input
          value={username}
          placeholder="username"
          className="login__items__input"
          onChange={setUserName}
        />
        <Input
          value={password}
          placeholder="password"
          type="password"
          className="login__items__input"
          onChange={setPassword}
        />
        <Button text="Login" onClick={onLogin} />
      </div>
    </div>
  );
};
