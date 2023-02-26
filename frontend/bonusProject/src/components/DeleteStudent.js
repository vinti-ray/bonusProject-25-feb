import React ,{useEffect}from 'react'
import { useParams } from 'react-router-dom'



const DeleteStudent = () => {
    
const {studentId} = useParams()
// console.log(studentId);
useEffect(()=>{
   
  var token = localStorage.getItem("token")

  axios.delete(`http://localhost:3001/deleteStudent/:${studentId}`,{headers:{'authorization':token}})
  .then(()=>{alert("Deleted Successfully")})
  .catch((res)=>{alert(res.data.data._id)})
})


  return (
    <p>
   <div>hiii</div>
</p>
  )
}

export default DeleteStudent
