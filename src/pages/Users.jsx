import { useEffect, useState } from "react"
import ShowUsers from "../components/ShowUsers"
import { Outlet, useNavigate } from "react-router-dom"

function Users() {
  const navigate = useNavigate()
  const [user, setUser] = useState([])
  const [search, setSearch] = useState("")
  const [filtered, setFiltered] = useState([])

  const fetchUsers = async() => {
    const res = await fetch('https://freetestapi.com/api/v1/users')
    const data = await res.json()
    setUser(data)
    setFiltered(data)
  }

  useEffect( () => {
    fetchUsers()
  },[])

  const handleSearch = () => {
    const filteredArray = user.filter( (item) => {
      return item.name.toLowerCase().includes(search.toLowerCase())
    })
    setFiltered(filteredArray)
    setSearch("")
    navigate(`/users`)
  }

  return (
    <div className="flex flex-col gap-10 justify-center mt-40">
      <div className="flex justify-center items-center mt-5 gap-4">
        <input 
          onChange={ (event) => {
            setSearch(event.target.value)
          }}
          value={search}
          type="text" 
          className="rounded-2xl outline-none bg-transparent border-[2px] border-gray-600 w-[20%] h-11 px-3 text-[19px]"
          placeholder="Search Names here"
        />
        <button 
        onClick={handleSearch}
          className="bg-red-300 rounded-xl w-32 h-10 text-[18px] font-semibold">Click
        </button>
      </div>

      <div className="flex justify-center items-center gap-4 text-[#000] text-[18px] flex-wrap mx-40">
            {filtered.map( (item, index) => {
                return (
                  <ShowUsers
                    key={index}
                    name={item.name}
                    username={item.username}
                  />
                )
            })}
      </div>
      <Outlet />
    </div>
  )
}

export default Users
