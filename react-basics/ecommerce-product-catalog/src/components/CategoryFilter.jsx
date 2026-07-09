function CategoryFilter({
  category,
  setCategory,
}) {
  return (
    <div className="category-filter">

      <select
        value={category}
        onChange={(e) =>
          setCategory(e.target.value)
        }
      >
        <option value="all">
          All Categories
        </option>

        <option value="men's clothing">
          Men's Clothing
        </option>

        <option value="women's clothing">
          Women's Clothing
        </option>

        <option value="electronics">
          Electronics
        </option>

        <option value="jewelery">
          Jewelery
        </option>

      </select>

    </div>
  );
}

export default CategoryFilter;