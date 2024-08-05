/* eslint-disable react/prop-types */

import { useNavigate } from "react-router-dom"

function ShowUsers({name}) {
  let navigate = useNavigate()
  return (
    <div className="bg-red-300">
      <div 
        onClick={ () => navigate(`/users/${name}`)}
        className="text-[#000] hover:cursor-pointer">{name}
      </div>
    </div>
  )
}

export default ShowUsers
