import React from 'react'
import { useParams } from 'react-router'
const users = ['ram','ram1','ram11']
const SerachParamEx2 = () => {
    const [searchParams,setSearchParams] = useParams()
    const searchTerm = searchParams.get('name')
    const handleSearch = event =>{
        const name = event.target.value;
        if (name) {
            setSearchParams({name})
        } else {
            setSearchParams({})
        }
    }
  return (
    <div>
      <input type="text" value={searchTerm} onChange={handleSearch} />
      <ul>
        {users.filter(user.toLowerCase()).map((user,i)=>(key={i}
            ))}
      </ul>
    </div>
  )
}

export default SerachParamEx2
