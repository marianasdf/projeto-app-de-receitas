import React, { useContext } from 'react';
import RecipesContext from '../context/RecipesContext';

function LoginPage({ history }) {
  const { email, setEmail, disable,
    setDisable, password, setPassword } = useContext(RecipesContext);

  function loginVerification() {
    const minLengthPassword = 6;
    const emailSplit = email.split('');
    if (emailSplit
      .includes('@') && emailSplit[emailSplit.length - 1] !== '@' && emailSplit
      .includes('.') && emailSplit[emailSplit.length - 1] !== '.'
      && password.length + 1 >= minLengthPassword) {
      setDisable(false);
    } else {
      setDisable(true);
    }
  }

  function handleEmail({ target }) {
    setEmail(target.value);
  }

  function handlePassword({ target }) {
    setPassword(target.value);
    loginVerification();
  }

  function handleClick() {
    localStorage.setItem('user', JSON.stringify({
      email,
    }));
    history.push('/comidas');
  }

  return (
    <main>
      <label htmlFor="input-email">
        Email:
        <input
          name="email"
          placeholder="Digite seu email"
          data-testid="email-input"
          onChange={ handleEmail }
        />
      </label>
      <label htmlFor="input-password">
        Senha:
        <input
          name="input-password"
          type="password"
          placeholder="Digite sua senha"
          data-testid="password-input"
          onChange={ handlePassword }
        />
      </label>
      <button
        data-testid="login-submit-btn"
        type="button"
        disabled={ disable }
        onClick={ handleClick }
      >
        Entrar
      </button>
    </main>
  );
}

export default LoginPage;
