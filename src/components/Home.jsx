import SortAndFilter from "./SortAndFilter";
import Prdoucts from "./Prdoucts";
import { useEffect, useState } from "react";

const Home = () => {
  const [database, setDatabase] = useState([]); // temp
  const [uiData, setUiData] = useState([]);

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

  return (
    <div>
      <SortAndFilter database={database} setUiData={setUiData} />
      <Prdoucts uiData={uiData} />
    </div>
  );
};

export default Home;
