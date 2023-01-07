import { AsyncPaginate } from "react-select-async-paginate";
import { useState } from "react";

const Search = ({ onSearchChange}) => {
    
    const [search, setSearch] =useState(null);

    const handleOnChange = (searchData) => {
        setSearch(searchData);
        onSearchChange(searchData);
    }

    const loadOptions =(inputValue) => {
    return fetch('/adminDivisions', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));
    }

    return (
        <AsyncPaginate
        placeholder="Search for city"
        debounceTimeout={ 600 }
        value={search}
        onChange={handleOnChange}
        loadOptions={loadOptions}
        />
    )
}

export default Search;