import { useParams } from "react-router-dom"

const Member = () => {
  const params = useParams()
  return (
    <div>
      <h2>Member</h2>
      <p>This is {params.memberId}</p>
    </div>
  )  
}

export default Member