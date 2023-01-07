import { AsyncPaginate } from "react-select-async-paginate";


const Search =({ onSearchChange}) => {
    
    const [search, setSearch] =useState(null);

    const handleOnChange = (searchData) => {
        setSearch(searchData);
        onSearchChange(searchData);
    }
}
const Search = () => {
    return (
        <AsyncPaginate
        placeholder="Search for city"
        debounceTimeout={ 600 }
        value={search}
        onChange={handleOnChange}

    )
}

export default Search;