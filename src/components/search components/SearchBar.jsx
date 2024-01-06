import { TfiClose } from "react-icons/tfi";
import { CiSearch } from "react-icons/ci";
import React, { useRef, useState } from 'react'
import { useSearchContext } from '../../providers/SearchProvider'

const SearchBar = () => {
  const inputRef = useRef()
  const {searchQuery, clearSearch, handleSearchActive} = useSearchContext()
  const [searchActive, setSearchActive] = useState(false)
  return (
    <div className={`${searchActive?"border-b-0":"border-b-2"} p-4 relative border-gray-200 bg-[#fafafa] md:mx-28 mt-16 mb-0 flex items-center justify-between`}>
      <form onSubmit={(e)=>{
        e.preventDefault(e)
        handleSearchActive(e.target?.input?.value)
      }} 
      className='flex items-center '>
        <button
        type="submit"
        className={`text-2xl ${searchActive?"text-gray-700":"text-gray-400"}`}
        >
      <CiSearch></CiSearch>
      </button>
      <input 
      name="input"
      ref={inputRef}
      onFocus={()=>setSearchActive(true)}
      onBlur={(e)=>{
        setSearchActive(false)
        handleSearchActive(e.target.value)
      }}
      type="text" 
      placeholder='Search' 
      className={`border-none ml-4 bg-transparent outline-none ${searchActive?"text-gray-700":"text-gray-400"}`}/>
      </form>

      <button 
      onClick={()=>{
        inputRef.current.value = ''
        clearSearch()
      }}
      className={`${searchActive?"text-gray-700":"text-gray-400"}`}>
      <TfiClose></TfiClose></button>
      <div className={`absolute ${searchActive?"w-full":"w-0"} border-b-2 bottom-0 left-0 border-gray-700 transition-all transform ease-in-out duration-300 origin-center`}></div>
    </div>
  )
}

export default SearchBar