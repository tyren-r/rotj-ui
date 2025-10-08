import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import "./SearchBarStyles.css";
import { Select } from "@mui/material";
import useSearchBarLogic from "./useSearchBarLogic";

const SearchBar = () => {
  const { searchType, setSearchTerm, setSearchType, searchTheApi } =
    useSearchBarLogic();
  return (
    <Box
      component="form"
      id="search-bar-container"
      role="search"
      aria-label="Search the Star Wars API"
      noValidate
      autoComplete="off"
    >
      <TextField
        className="searchbar-textfield"
        id="search-bar"
        onChange={(e) => setSearchTerm(e.target.value)}
        variant="outlined"
        placeholder="Try the name of your favorite Star Wars character, vehicle, planet, movie or species - or hit search to see all"
        inputProps={{
          "aria-label": "Search term",
          "aria-describedby": "subtitle",
        }}
        InputProps={{
          startAdornment: (
            <FormControl className="searchbar-select-control">
              <InputLabel id="search-type-label">Search type</InputLabel>
              <Select
                id="select"
                labelId="search-type-label"
                value={searchType}
                name="searchType-select"
                label="Search type"
                aria-label="Search type"
                MenuProps={{
                  PaperProps: {
                    className: "searchbar-menu-paper",
                  },
                }}
                onChange={(e) => setSearchType(e.target.value as string)}
              >
                <MenuItem value="characters">Characters</MenuItem>
                <MenuItem value="vehicles">Vehicles</MenuItem>
                <MenuItem value="planets">Planets</MenuItem>
                <MenuItem value="movies">Movies</MenuItem>
                <MenuItem value="species">Species</MenuItem>
              </Select>
            </FormControl>
          ),
        }}
      />
      <Button
        id="search-button"
        variant="contained"
        aria-label="Execute search"
        aria-controls="table-container"
        onClick={() => searchTheApi()}
      >
        Search
      </Button>
    </Box>
  );
};

export default SearchBar;
