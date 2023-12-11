import "bootstrap/dist/css/bootstrap.min.css";
import Prdoucts from "./components/Prdoucts";
import "./styles/app.css";
import SortAndFilter from "./components/SortAndFilter";
import { useEffect, useState } from "react";

const App = () => {
  const [database, setDatabase] = useState([]); // temp
  const [uiData, setUiData] = useState([]);
  const [startPrice, setStartPrice] = useState(0);
  const [endPrice, setEndPrice] = useState(0);

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch("https://api.escuelajs.co/api/v1/products");
        const result = await response.json();
        const myProducts = result.slice(0, 20);
        setDatabase(myProducts);
        setUiData(myProducts);
      } catch (err) {
        console.error(err);
      }
    })();
  }, []);

  const handleIncrese = () => {
    const sortedData = [...database].sort((a, b) => a.price - b.price);
    setUiData(sortedData);
  };
  const hanldeDecrese = () => {
    const sortedData = [...database].sort((a, b) => b.price - a.price);
    setUiData(sortedData);
  };

  const handleFirst = (e) => {
    setStartPrice(e.target.value);
    // console.log(startPrice);
  };

  const handleSec = (e) => {
    setEndPrice(e.target.value);
    console.log(endPrice);
  };

  const formHanlde = (e) => {
    e.preventDefault();
    if (endPrice && startPrice) {
      const filteredData = database.filter(
        (item) => +item.price >= +startPrice && +item.price <= +endPrice
      );
      setUiData(filteredData);
    }
  };
  return (
    <div className="App">
      <SortAndFilter
        handleIncrese={handleIncrese}
        hanldeDecrese={hanldeDecrese}
        handleFirst={handleFirst}
        handleSec={handleSec}
        formHandle={formHanlde}
      />
      <Prdoucts uiData={uiData} />
    </div>
  );
};

export default App;
