import Card from "../Card";
import "./style.css";

const List = ({ listTransactions }) => {
  return (
    <div className="container-form">
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
