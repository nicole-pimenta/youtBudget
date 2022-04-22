import "../Form/style.css";

const Form = () => {
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
            <input type="text" placeholder="Entrada" />
          </div>
        </div>

        <button>Inserir Valor</button>
      </form>
    </div>
  );
};

export default Form;
