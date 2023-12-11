import { useSearchParams } from "react-router-dom";
import { useState, useEffect } from "react";

const SortAndFilter = ({ setUiData, database }) => {
  const [searchParasm, setSEarchParams] = useSearchParams();
  const [startPrice, setStartPrice] = useState(0);
  const [endPrice, setEndPrice] = useState(0);

  useEffect(() => {
    const sort = searchParasm.get("sort");
    let filter = searchParasm.get("filter");

    setUiData(() => {
      let newData = database;

      // sort
      if (sort) {
        if (sort === "price") newData = [...database].sort((a, b) => a.price - b.price);
        if (sort === "-price") newData = [...database].sort((a, b) => b.price - a.price);
      }

      // fitler
      if (filter) {
        const { startPrice, endPrice } = JSON.parse(filter);
        newData = newData.filter(
          (item) => +item.price >= +startPrice && +item.price <= +endPrice
        );
      }

      return newData;
    });
  }, [database, searchParasm, setUiData]);

  const filterSubmiter = (e) => {
    e.preventDefault();
    if (endPrice || startPrice) {
      setSEarchParams((prev) => {
        const sort = prev.get("sort");
        if (sort) return { sort, filter: JSON.stringify({ endPrice, startPrice }) };
        else return { filter: JSON.stringify({ endPrice, startPrice }) };
      });
    } else
      setSEarchParams((prev) => {
        const sort = prev.get("sort");
        if (sort) return { sort };
        else return {};
      });
  };

  const sortSubmiter = (value) => {
    setSEarchParams((prev) => {
      const filter = prev.get("filter");
      if (filter) return { filter, sort: value };
      else return { sort: value };
    });
  };

  //

  const handleFirst = (e) => {
    setStartPrice(e.target.value);
  };
  const handleSec = (e) => {
    setEndPrice(e.target.value);
  };

  return (
    <div className="d-flex flex-sm-column mt-3  align-items-center gap-2  p-4 ">
      <div className="d-flex gap-3 ">
        <button onClick={() => sortSubmiter("-price")} className="btn btn-success">
          <span className="h3">-price</span>
        </button>
        <button onClick={() => sortSubmiter("price")} className="btn btn-success">
          <span className="h3">price</span>
        </button>
      </div>
      <form
        style={{ maxWidth: "780px" }}
        className="d-flex gap-4 form-check bg-dark rounded-1 p-4 align-items-center "
      >
        <label className="text-light text-nowrap" htmlFor="to200">
          Price From
        </label>
        <input
          style={{ maxWidth: "100px" }}
          onChange={handleFirst}
          className="input-group p-1"
          type="number"
          name="to200"
          value={startPrice}
        />
        <label className="text-light" htmlFor="to400">
          TO
        </label>
        <input
          onChange={handleSec}
          className="p-1"
          style={{ maxWidth: "100px" }}
          type="number"
          name="to400"
          value={endPrice}
        />
        <button onClick={filterSubmiter} className="btn-info btn form-control">
          Submit
        </button>
      </form>
    </div>
  );
};

export default SortAndFilter;
