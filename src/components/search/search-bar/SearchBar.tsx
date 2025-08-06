import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import '../styles/SearchBarStyles.css';
import { Select } from '@mui/material';
import useSearchBarLogic from './useSearchBarLogic';

const SearchBar = () => {
    const {
        searchTerm,
        searchType,
        setSearchTerm,
        setSearchType,
        searchTheApi,
    } = useSearchBarLogic();
    return (
        <Box component="form" noValidate autoComplete="off">
            <TextField
                sx={{
                    input: { color: 'white' },
                    label: { color: 'white' },
                    fieldset: {
                        boxShadow: '1px 1px 10px #fff, 1px 1px 10px #ccc',
                    },
                }}
                id="search-bar"
                label="May the force be with you..."
                onChange={(e) => setSearchTerm(e.target.value)}
                variant="outlined"
            />
            <FormControl>
                <InputLabel sx={{ color: 'white' }}>SearchType</InputLabel>
                <Select
                    id="select"
                    value={searchType}
                    label="Search Type"
                    onChange={(e) => setSearchType(e.target.value)}
                >
                    <MenuItem value="characters">Characters</MenuItem>
                    <MenuItem value="vehicles">Vehicles</MenuItem>
                    <MenuItem value="planets">Planets</MenuItem>
                    <MenuItem value="movies">Movies</MenuItem>
                    <MenuItem value="species">Species</MenuItem>
                </Select>
            </FormControl>
            <Button
                id="search-button"
                variant="contained"
                onClick={() => searchTheApi(searchType, searchTerm)}
            >
                Search
            </Button>
        </Box>
    );
};

export default SearchBar;
