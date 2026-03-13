import React, { useState } from 'react';

interface AdminLoginProps {
  onLoginSuccess: () => void;
}

export default function AdminLogin({ onLoginSuccess }: AdminLoginProps) {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === 'drogariasbaraorio2019') {
      onLoginSuccess();
    } else {
      setError('Senha incorreta!');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-xl shadow-2xl max-w-md w-full border-t-4 border-red-600">
        <div className="text-center mb-6">
          <h2 className="text-3xl font-oswald font-bold text-gray-800 uppercase">Acesso Restrito</h2>
          <p className="text-gray-500 text-sm mt-1">Painel Administrativo - Barão Drogarias</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2">Senha de Acesso</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-red-500"
              placeholder="Digite a senha..."
            />
          </div>
          
          {error && <p className="text-red-500 text-sm font-semibold">{error}</p>}
          
          <button
            type="submit"
            className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-4 rounded-lg transition duration-200"
          >
            Entrar no Painel
          </button>
        </form>
      </div>
    </div>
  );
}
