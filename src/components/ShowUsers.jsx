/* eslint-disable react/prop-types */

import { useNavigate } from "react-router-dom"
import UserInfo from "./UserInfo"

function ShowUsers({name,username}) {
  let navigate = useNavigate()
  return (
    <div>
      <div 
        onClick={ () => navigate(`/users/${username}`)}
        className="text-[#000] hover:cursor-pointer">{name}
      </div>
      <UserInfo 
         pName={name}
         pUsername={username}  
      />
    </div>
  )
}

export default ShowUsers
