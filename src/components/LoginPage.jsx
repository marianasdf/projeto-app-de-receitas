import React from 'react';

/* function saveEmail(email) {
  localStorage.setItem('Email', email);
} */

function loginPage() {
  /* function handleEmail({ target }) {
    setEmail({
      ...email,
      [target.name]: target.value,
    });
  } */

  return (
    <main>
      <label htmlFor="input-email">
        Email:
        <input
          name="input-email"
          placeholder="Digite seu email"
          data-testid="email-input"
          // onChange={ (event) => handleEmail(event) }
        />
      </label>
      <label htmlFor="input-password">
        Senha:
        <input
          name="input-password"
          type="password"
          placeholder="Digite sua senha"
          data-testid="password-input"
        />
      </label>
      <button
        data-testid="login-submit-btn"
        type="button"
      >
        Entrar
      </button>
    </main>
  );
}

export default loginPage;
