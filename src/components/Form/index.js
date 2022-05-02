import { useState } from "react";
import "./style.css";

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

    setUserDescription("");
    setUserType("");
    setUserValue("");
  };

  return (
    <div className="container-form">
      <form>
        <label>Descrição</label>
        <input
          className="main-input"
          type="text"
          placeholder="ex: Compra de roupas"
          value={userDescription}
          onChange={(e) => setUserDescription(e.target.value)}
        />

        <div className="container-value">
          <div>
            <label>Valor</label>
            <input
              type="text"
              placeholder=" R$ 0.00"
              value={userValue}
              onChange={(e) => setUserValue(e.target.value)}
            />
          </div>

          <div className="select">
            <label> Tipo de Valor</label>
            <select
              name="tipo_valor"
              value={userType}
              onChange={(e) => setUserType(e.target.value)}
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
