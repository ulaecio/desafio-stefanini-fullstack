import Header from "Header";
import "./styles.css";
import { useState } from "react";

const Home = () => {
  const [nome, setNome] = useState("");
  const [telefone, setTelefone] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  const [nomeValido, setNomeValido] = useState(true);
  const [telefoneValido, setTelefoneValido] = useState(true);

  const validarNome = (value: any) => {
    return value.length <= 30 && /^([a-zA-Z]+\s){0,4}[a-zA-Z]+$/.test(value);
  };

  const formatarTelefone = (input: string) => {
    const desformatado = input.replace(/\D/g, "");
    const formatar = desformatado.match(/^(\d{2})(\d{4})(\d{4})$/);

    if (formatar) {
      return `(${formatar[1]}) ${formatar[2]}-${formatar[3]}`;
    }
    return input;
  };

  const handleTelefoneChange = (e: { target: { value: string } }) => {
    const telefoneFormatado = formatarTelefone(e.target.value);

    if (telefoneFormatado) {
      setTelefoneValido(true);
      setTelefone(telefoneFormatado);
    } else {
      setTelefoneValido(false);
    }
  };

  const handleSalvar = () => {
    const nomeValido = validarNome(nome);
    const telefoneValido = telefone.length === 14;

    setNomeValido(nomeValido);
    setTelefoneValido(telefoneValido);

    if (nomeValido && telefoneValido) {
      setModalVisible(true);
    }
  };

  const handleLimpar = () => {
    setNome("");
    setTelefone("");
    setNomeValido(true);
    setTelefoneValido(true);
  };

  return (
    <>
      <Header />
      <div className="stefanini-container">
        <div className="stefanini-cadastro-input">
          <h1 className="stefanini-cadastro-title">Cadastro de Clientes</h1>
          <label>
            Nome:
            <input
              className={`stefanini-form-control ${
                nomeValido ? "" : "invalido"
              }`}
              type="text"
              value={nome}
              onChange={(e) => {
                const value = e.target.value;
                setNome(value);
                setNomeValido(validarNome(value));
              }}
            />
          </label>
          {!nomeValido && (
            <p className="mensagem-erro ">
              Preencha o nome corretamente sem espaço final e com 30 caracteres.
            </p>
          )}
          <br />
          <label>
            Telefone:
            <input
              className={`stefanini-form-control ${
                telefoneValido ? "" : "invalido"
              }`}
              type="tel"
              value={telefone}
              onChange={handleTelefoneChange}
            />
          </label>
          {!telefoneValido && (
            <p className="mensagem-erro">
              Preencha o telefone no formato (DD) DDDD-DDDD com 10 dígitos.
            </p>
          )}
          <br />
          <button className="home-btn" onClick={handleSalvar}>
            Salvar
          </button>
          <button className="home-btn" onClick={handleLimpar}>
            Limpar
          </button>
        </div>
        {modalVisible && (
          <div className="stefanini-div-response">
            <div className="stefanini-div2-response">
              <h2 className="stefanini-title-response">
                Valores do Formulário:
              </h2>
              <p>Nome: {nome}</p>
              <p>Telefone: {telefone}</p>
              <button
                className="button-fechar"
                onClick={() => setModalVisible(false)}
              >
                Fechar
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Home;
