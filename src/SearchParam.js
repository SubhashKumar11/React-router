import React from 'react'
import { useSearchParams } from 'react-router-dom'
const SearchParam = () => {
    const[searchParam,setSearchParam] = useSearchParams()
    const age = searchParam.get('age')
    const city = searchParam.get('city')
    
  return (
    <div>
      <h2>{age}</h2>
    <h2>{city}</h2>
    <input type="text"  />
   <div>
   <button onClick={()=>setSearchParam({age:40})} >setAge</button>
   </div>
    </div>
  )
}

export default SearchParam
