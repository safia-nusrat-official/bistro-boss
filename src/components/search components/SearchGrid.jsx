import React, { useEffect, useState } from 'react'
import { useSearchContext } from '../../providers/SearchProvider'
import { api } from '../../main'
import MenuCard from '../menu components/MenuCard'

const SearchGrid = () => {
    const {searchQuery} = useSearchContext()
    const [searchResults, setSearchResults] = useState([])

    useEffect(()=>{
        if(searchQuery){
            api.get(`/search?query=${searchQuery}`)
            .then(res=>{
                setSearchResults(res.data)
            })
            .catch(err=>console.log(err))
        }else{
            setSearchResults([])
        }
    }, [searchQuery])

  return (
    <div className={`${searchResults.length?"p-8 pt-0":"px-8"} md:px-28 md:py-0`}>
        {
            searchQuery && searchResults.length > 0  && <div className='italic my-2'>{searchResults.length} results.</div>
        }
        {
            searchQuery && searchResults.length < 1 && <span>No item found</span>
        }
        {
            searchResults.length > 0 && <div className='md:grid-cols-3 grid gap-4'>
                {
                    searchResults.map(item=><MenuCard data={item} key={item?._id}></MenuCard>)
                }
            </div>
        }
    </div>
  )
}

export default SearchGrid