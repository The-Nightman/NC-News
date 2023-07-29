import { useSearchParams } from "react-router-dom";
import { ArticlesContainer } from "../components";
import FilterListOutlinedIcon from "@mui/icons-material/FilterListOutlined";
import {
  InputLabel,
  Select,
  MenuItem,
  FormControl,
  Button,
  createTheme,
  ThemeProvider,
} from "@mui/material";
import { useState } from "react";

const Home = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { sort_by, topic, order } = Object.fromEntries(searchParams);
  const [filterMenu, setFilterMenu] = useState(false);
  const [sortFilter, setSortFilter] = useState("created_at");
  const [orderFilter, setOrderFilter] = useState("desc");

  const toggleFilters = () => {
    setFilterMenu(!filterMenu);
  };

  const handleSort = (e) => {
    setSortFilter(e.target.value);
  };
  const handleOrder = (e) => {
    setOrderFilter(e.target.value);
  };

  const handleFilter = () => {
    searchParams.delete("sort_by");
    searchParams.delete("order");
    searchParams.set("sort_by", sortFilter);
    searchParams.set("order", orderFilter);
    setSearchParams(searchParams);
    window.location.reload(false);
  };

  const theme = createTheme({
    palette: {
      primary: {
        main: "#eeeeee",
      },
    },
  });

  return (
    <>
      <ThemeProvider theme={theme}>
        {filterMenu ? (
          <div className="filter-buttons">
            <FormControl className="filter">
              <InputLabel id="sort_by-label">Sort By</InputLabel>
              <Select
                labelId="sort_by-label"
                id="sort_by-select"
                value={sortFilter}
                label="Sort By"
                onChange={handleSort}
              >
                <MenuItem value={"author"}>Title</MenuItem>
                <MenuItem value={"author"}>Author</MenuItem>
                <MenuItem value={"created_at"}>Date</MenuItem>
                <MenuItem value={"votes"}>Votes</MenuItem>
              </Select>
            </FormControl>
            <FormControl className="filter">
              <InputLabel id="order-label">Order</InputLabel>
              <Select
                labelId="order-label"
                id="order-select"
                value={orderFilter}
                label="Order"
                onChange={handleOrder}
              >
                <MenuItem value={"asc"}>Ascending</MenuItem>
                <MenuItem value={"desc"}>Descending</MenuItem>
              </Select>
            </FormControl>
            <Button variant="outlined" size="small" onClick={handleFilter}>
              show results
            </Button>
          </div>
        ) : null}
        <Button
          variant="outlined"
          size="small"
          endIcon={<FilterListOutlinedIcon />}
          onClick={toggleFilters}
          fullWidth
        >
          open filters
        </Button>
      </ThemeProvider>
      <ArticlesContainer sort_by={sort_by} topic={topic} order={order} />
    </>
  );
};

export default Home;
