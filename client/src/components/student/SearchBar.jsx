import React, { useState } from 'react'
import { assets } from '../../assets/assets'
import { useNavigate } from 'react-router-dom'

const SearchBar = ({ data }) => { 
  const navigate = useNavigate() // to navigate to the search page or other pages

  // to store the input field data entered in the search bar
  const [input, setInput] = useState(data ? data : '') // if data is passed, set the input to the data, else set it to an empty string

  const onSearchHandler = (e) => {
    e.preventDefault()                 // when we submit the form, the page should not reload
    navigate('/course-list/' + input) // navigate to the course-list page with the input
  }

  return (
    <form onSubmit={onSearchHandler} className='max-w-xl w-full md:h-14 h-12 flex items-center bg-white border border-gray-500/20 rounded'>
      <img src={assets.search_icon} alt="search icon" className='md:w-auto w-10 px-3' />
      <input
        onChange={(e) => setInput(e.target.value)}
        value={input}
        type="text"
        placeholder='Search for courses'
        className='w-full h-full outline-none text-grey-500/80'
      />
           
            <button type='submit'  className='bg-blue-600 rounded text-white md:px-10 px-7 md:py-3 py-2 mx-1 transition-transform duration-300 hover:bg-blue-700 hover:shadow-lg hover:scale-105'> Search </button> 
        </form>
   
)
}

export default SearchBar

