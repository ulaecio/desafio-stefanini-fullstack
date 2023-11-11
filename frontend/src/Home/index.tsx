import Header from 'Header';
import './styles.css'
import { useState } from 'react';

const Home = () => {
  const [nome, setNome] = useState('');
  const [telefone, setTelefone] = useState('');
  const [modalVisible, setModalVisible] = useState(false);

  const validarNome = () => {
    // Implementa a lógica de validação para o nome (tamanho e tipo de caractere)
    // Retorna true se válido, false caso contrário
    return nome.length <= 30 && /^[a-zA-Z]+$/.test(nome);
  };

  const validarTelefone = () => {
    // Implementa a lógica de validação para o telefone (tamanho e tipo de caractere)
    // Retorna true se válido, false caso contrário
    return telefone.length === 10 && /^\d+$/.test(telefone);
  };

  const handleSalvar = () => {
    if (validarNome()) {
      // Exibe os valores em uma janela modal ou tabela (neste exemplo, será uma janela modal)
    } else {
      alert('Preencha o nome com até 30 caracteres.');
    }
    if (validarTelefone()) {
        // Exibe os valores em uma janela modal ou tabela (neste caso, será uma usado janela modal)
        setModalVisible(true);
      } else {
        alert('Preencha o telefone com 10 digitos numéricos');
      }
  };

  const handleLimpar = () => {
    setNome('');
    setTelefone('');
  };

  return (
    <>
    <Header/>
    <div className='stefanini-container stefanini-card'>
      <h1 className='stefanini-cadastro-title'>Cadastro de Clientes</h1>
      <label>
        Nome:
        <input 
        className="stefanini-form-control"
          type="text"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />
      </label>
      <br />
      <label>
        Telefone:
        <input className="stefanini-form-control"
          type="tel"
          value={telefone}
          onChange={(e) => setTelefone(e.target.value)}
        />
      </label>
      <br />
      <button className='home-btn' onClick={handleSalvar}>Salvar</button>
      <button className='home-btn' onClick={handleLimpar}>Limpar</button>

      {modalVisible && (
        <div className='stefanini-container'>
          <h2 className='stefanini-title-response'>Valores do Formulário:</h2>
          <p>Nome: {nome}</p>
          <p>Telefone: {telefone}</p>
          <button className='button-fechar' onClick={() => setModalVisible(false)}>Fechar</button>
        </div>
      )}
    </div>

    </>
  );
};

export default Home;
