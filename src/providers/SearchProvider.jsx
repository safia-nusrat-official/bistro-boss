import { createContext, useContext, useState } from 'react';

const SearchContext = createContext();

export const useSearchContext = () => useContext(SearchContext)

const SearchProvider = ({children}) => {
    const [searchQuery, setSearchQuery] = useState('')

    const handleSearchActive = (query) => {
        setSearchQuery(query)
    }
    const clearSearch = () => {
        setSearchQuery('')
    }
  return (
    <SearchContext.Provider value={{searchQuery, clearSearch, handleSearchActive}}>{children} </SearchContext.Provider>
  )
}

export default SearchProvider