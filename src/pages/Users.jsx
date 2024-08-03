import { useEffect, useState } from "react"
import ShowUsers from "../components/ShowUsers"

function Users() {
  const [user, setUser] = useState([])

  const fetchUsers = async() => {
    const res = await fetch('https://freetestapi.com/api/v1/users')
    const data = await res.json()
    setUser(data)
  }

  useEffect( () => {
    fetchUsers()
  },[])

  return (
    <div className="flex flex-col justify-center items-center gap-4 text-[#000] text-[18px]">
       {user.map( (item, index) => {
        return (
            <ShowUsers
              key={index}
              name={item.name}
              username={item.username}
            />
        )
       })}
    </div>
  )
}

export default Users
