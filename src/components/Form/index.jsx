import "../Form/style.css";

const Form = ({ listTransactions, setListTransactions }) => {
  return (
    <div className="container-form">
      <form action="">
        <label>Descricao</label>
        <input
          className="main-input"
          type="text"
          placeholder="Digite aqui sua descrição"
        />

        <span> ex:Compra de roupas</span>

        <div className="container-value">
          <div>
            <label>Valor</label>
            <input type="text" placeholder="Valor" />
          </div>

          <div>
            <label> Tipo de Valor</label>
            <select name="tipo_valor">
              <option value="entrada">Entrada</option>
              <option value="saida"> Saida</option>
            </select>
          </div>
        </div>

        <button type="submit">Inserir Valor</button>
      </form>
    </div>
  );
};

export default Form;
