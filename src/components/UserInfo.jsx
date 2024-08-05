/* eslint-disable react/prop-types */

import { useParams } from "react-router-dom"

function UserInfo() {
  const {id} = useParams()

  return (
    <div>
      <div className="flex justify-center font-bold text-[40px] playwrite">{id}</div>
    </div>
  )
}

export default UserInfo
