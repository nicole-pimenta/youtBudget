import { useState } from "react";
import Header from "./components/Header";
import Form from "./components/Form";
import List from "./components/List";
import "./App.css";

function App() {
  const [listTransactions, setListTransactions] = useState([
    { description: "Salário recebido", type: "entrada", value: 2500 },
    { description: "Conta de luz", type: "saída", value: -150 },
  ]);
  return (
    <div className="App">
      <Header />
      <div className="main-container">
        <Form
          listTransactions={listTransactions}
          setListTransactions={setListTransactions}
        />
        <List listTransactions={listTransactions} />
      </div>
    </div>
  );
}

export default App;
