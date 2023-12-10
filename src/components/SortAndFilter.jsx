const SortAndFilter = ({
  handleIncrese,
  hanldeDecrese,
  handleFirst,
  handleSec,
  formHandle,
}) => {
  return (
    <div className="d-flex  align-items-center justify-content-between p-4  ">
      <div className="d-flex gap-3 ">
        <button onClick={hanldeDecrese} className="btn btn-success">
          <span className="h3">100 to 0</span>
        </button>
        <button onClick={handleIncrese} className="btn btn-success">
          <span className="h3">0 to 100</span>
        </button>
      </div>
      <form className="d-flex  gap-4 form-check bg-dark rounded-1 p-5 align-items-center   ">
        <label className="text-light " htmlFor="to200">
          Price From
        </label>
        <input
          onChange={handleFirst}
          className="input-group p-1  "
          type="number"
          name="to200"
        />
        <label className="text-light " htmlFor="to400">
          TO
        </label>
        <input onChange={handleSec} className=" p-1  " type="number" name="to400" />
        <button onClick={formHandle} className="btn-info btn form-control ">
          Submit
        </button>
      </form>
    </div>
  );
};

export default SortAndFilter;
