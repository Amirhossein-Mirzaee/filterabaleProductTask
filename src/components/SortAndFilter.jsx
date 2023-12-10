const SortAndFilter = ({
  handleIncrese,
  hanldeDecrese,
  handleFirst,
  handleSec,
  formHandle,
}) => {
  return (
    <div className="d-flex flex-sm-column mt-3  align-items-center gap-2  p-4 ">
      <div className="d-flex gap-3 ">
        <button onClick={hanldeDecrese} className="btn btn-success">
          <span className="h3">100 to 0</span>
        </button>
        <button onClick={handleIncrese} className="btn btn-success">
          <span className="h3">0 to 100</span>
        </button>
      </div>
      <form style={{ maxWidth: "780px" }} className="d-flex gap-4 form-check bg-dark rounded-1 p-4 align-items-center ">
        <label className="text-light text-nowrap" htmlFor="to200">
          Price From
        </label>
        <input
          style={{ maxWidth: "100px" }}
          onChange={handleFirst}
          className="input-group p-1"
          type="number"
          name="to200"
        />
        <label className="text-light" htmlFor="to400">
          TO
        </label>
        <input onChange={handleSec} className="p-1" style={{ maxWidth: "100px" }} type="number" name="to400" />
        <button onClick={formHandle} className="btn-info btn form-control">
          Submit
        </button>
      </form>
    </div>
  );
};

export default SortAndFilter;
