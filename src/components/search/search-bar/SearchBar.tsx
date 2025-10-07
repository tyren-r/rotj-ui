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
      noValidate
      autoComplete="off"
    >
      <TextField
        className="searchbar-textfield"
        id="search-bar"
        onChange={(e) => setSearchTerm(e.target.value)}
        variant="outlined"
        placeholder="Try the name of your favorite Star Wars character, vehicle, planet,movie or species - or hit search to see all"
        InputProps={{
          startAdornment: (
            <FormControl id="form-control" className="searchbar-select-control">
              <InputLabel>SearchType</InputLabel>
              <Select
                id="select"
                value={searchType}
                label="Search Type"
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
        onClick={() => searchTheApi()}
      >
        Search
      </Button>
    </Box>
  );
};

export default SearchBar;
