import Card from "../Card";

const List = ({ listTransactions }) => {
  console.log(listTransactions)
  return (
    <>
      <ul>
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
    </>
  );
};

export default List;
