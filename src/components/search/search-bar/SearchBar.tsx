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
        sx={{
          // keep input text white
          "& .MuiInputBase-input": { color: "white" },
          // apply outline styles ONLY to this TextField's own notched outline
          "& > .MuiOutlinedInput-root > fieldset": {
            boxShadow: "1px 1px 10px #fff, 1px 1px 10px #ccc",
            borderColor: "rgba(255,255,255,0.5)",
          },
          "& > .MuiOutlinedInput-root:hover > fieldset": {
            borderColor: "rgba(255,255,255,0.5)",
          },
          "& > .MuiOutlinedInput-root.Mui-focused > fieldset": {
            borderColor: "rgba(255,255,255,0.5)",
          },
        }}
        id="search-bar"
        onChange={(e) => setSearchTerm(e.target.value)}
        variant="outlined"
        placeholder="Try the name of your favorite Star Wars character, vehicle, planet,movie or species - or hit search to see all"
        InputProps={{
          startAdornment: (
            <FormControl
              id="form-control"
              sx={{
                // keep label white on focus
                "& .MuiInputLabel-root": {
                  color: "white",
                  "&.Mui-focused": { color: "white" },
                },
                // keep select text and icon white
                "& .MuiSelect-select": { color: "white" },
                "& .MuiSvgIcon-root": { color: "white" },
                // keep select outline consistent without boxShadow
                "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
                  borderColor: "rgba(255,255,255,0.5)",
                },
                "&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline":
                  {
                    borderColor: "rgba(255,255,255,0.5)",
                  },
                "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                  { borderColor: "rgba(255,255,255,0.5)" },
              }}
            >
              <InputLabel
                sx={{
                  color: "white",
                  "&.Mui-focused": { color: "white" },
                }}
              >
                SearchType
              </InputLabel>
              <Select
                id="select"
                value={searchType}
                label="Search Type"
                MenuProps={{
                  PaperProps: {
                    sx: { backgroundColor: "black" },
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
