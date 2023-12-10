import "bootstrap/dist/css/bootstrap.min.css";
import Prdoucts from "./components/Prdoucts";
import "./styles/app.css";
import SortAndFilter from "./components/SortAndFilter";
import { useEffect, useState } from "react";

const App = () => {
  const [data, setData] = useState([]);
  const [newData, setNewData] = useState(...data);
  const [startPrice, setStartPrice] = useState(0);
  const [endPrice, setEndPrice] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://api.escuelajs.co/api/v1/products");
        const result = await response.json();
        setData(result.slice(0, 20));
        
      } catch (err) {
        console.error(err);
      }
    };
    fetchData();
  }, []);

  const handleIncrese = () => {
    const sortedData = [...data].sort((a, b) => a.price - b.price);
    setData(sortedData);
  };
  const hanldeDecrese = () => {
    const sortedData = [...data].sort((a, b) => b.price - a.price);
    setData(sortedData);
  };
  const handleFirst = (e) => {
    setStartPrice(e.target.value);
    console.log(startPrice);
  };
  const handleSec = (e) => {
    setEndPrice(e.target.value);
    console.log(endPrice);
  };
  const formHanlde = (e) => {
    e.preventDefault();
    if (endPrice && startPrice) {
      const filteredData = data.filter(
        (item) => +item.price >= +startPrice && +item.price <= +endPrice
      );
      setNewData(filteredData);
      console.log(newData);
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
      <Prdoucts data={newData ? newData : data} />
    </div>
  );
};

export default App;
