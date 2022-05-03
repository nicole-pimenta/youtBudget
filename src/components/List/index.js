import Card from "../Card";
import "./style.css";

const List = ({ listTransactions }) => {
  return (
    <div className="container-form">
      <div className="container-filter">
        <p>Resumo Financeiro</p>

        <div className="container-btn">
          <button className="btn-padrao">Todos</button>
          <button className="btn-padrao"> Entradas</button>
          <button className="btn-padrao">Despesas</button>
        </div>
      </div>

      {listTransactions.length === 0 ? (
        <div className="description-list">
          <p>Você ainda não possui nenhum lançamento</p>
        </div>
      ) : (
        <ul className="description-list">
          {listTransactions.map((item, index) => {
            return (
              <li key={index}>
                <Card
                  description={item.description}
                  type={item.type}
                  value={item.value}
                />
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default List;
