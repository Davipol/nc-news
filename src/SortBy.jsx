import { useSearchParams } from "react-router-dom";

const SortBy = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const handleChange = (e) => {
    const [key, value] =
      e.target.name === "order"
        ? ["order", e.target.value]
        : ["sort_by", e.target.value];

    setSearchParams((prev) => {
      const updated = new URLSearchParams(prev);
      updated.set(key, value);
      return updated;
    });
  };

  return (
    <section className="sort-by">
      <label>
        Sort By:{" "}
        <select
          name="sort_by"
          value={searchParams.get("sort_by") || ""}
          onChange={handleChange}
        >
          <option value="created_at">Date</option>
          <option value="comment_count">Comment count</option>
          <option value="votes">Votes</option>
        </select>
      </label>

      <label>
        Order:{" "}
        <select
          name="order"
          value={searchParams.get("order") || "desc"}
          onChange={handleChange}
        >
          <option value="desc">Descending</option>
          <option value="asc">Ascending</option>
        </select>
      </label>
    </section>
  );
};

export default SortBy;
