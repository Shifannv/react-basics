function SortProducts({
  sort,
  setSort,
}) {
  return (
    <div className="sort">

      <select
        value={sort}
        onChange={(e) =>
          setSort(e.target.value)
        }
      >

        <option value="">
          Sort By
        </option>

        <option value="low">
          Price Low → High
        </option>

        <option value="high">
          Price High → Low
        </option>

      </select>

    </div>
  );
}

export default SortProducts;