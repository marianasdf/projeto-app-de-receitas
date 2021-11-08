import React from 'react';

function loginPage() {
  return (
    <main>
      <label htmlFor="input-email">
        Email:
        <input
          name="input-email"
          placeholder="Digite seu email"
          data-testid="email-input"
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
      <button data-testid="login-submit-btn" type="button">
        Entrar
      </button>
    </main>
  );
}

export default loginPage;
