import { useState } from "react";
import "../Form/style.css";

const Form = ({ listTransactions, setListTransactions }) => {
  const [userDescription, setUserDescription] = useState("");
  const [userType, setUserType] = useState("");
  const [userValue, setUserValue] = useState("");

  const handleListTransaction = (e) => {
    e.preventDefault();
    setListTransactions([
      ...listTransactions,
      { description: userDescription, type: userType, value: userValue },
    ]);
  };

  return (
    <div className="container-form">
      <form>
        <label>Descricao</label>
        <input
          className="main-input"
          type="text"
          placeholder="Digite aqui sua descrição"
          value={userDescription}
          onChange={(e) => setUserDescription(e.target.value)}
        />

        <span> ex:Compra de roupas</span>

        <div className="container-value">
          <div>
            <label>Valor</label>
            <input
              type="text"
              placeholder="Valor"
              value={userValue}
              onChange={(e) => setUserValue(e.target.value)}
            />
          </div>

          <div>
            <label> Tipo de Valor</label>
            <select
              name="tipo_valor"
              value={userType}
              onChange={(e) => console.log(e.target.value)}
            >
              <option value="-">-</option>
              <option value="entrada">Entrada</option>
              <option value="saida"> Saida</option>
            </select>
          </div>
        </div>

        <button type="submit" onClick={handleListTransaction}>
          Inserir Valor
        </button>
      </form>
    </div>
  );
};

export default Form;
