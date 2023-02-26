import axios from 'axios'
import React,{useEffect,useState} from 'react'
import { Container, Row, Col, Card, Button ,ButtonGroup} from 'react-bootstrap'
import { useParams } from 'react-router-dom'



const HomePage = () => {
const [data,setData] = useState([])
const [studentId,setStudentId] = useState([])
// const {studentId} = useParams()



console.log(studentId);
useEffect(()=>{
  var token = localStorage.getItem("token")
  axios.get("http://localhost:3001/getStudent",{headers:{'authorization':token}})
  .then((res)=>{setStudentId(res.data.data._id);setData(res.data.data)})
},[])


  const onDelete = (e)=>{
    var token = localStorage.getItem("token")
    e.preventDefault()
    axios.delete(`http://localhost:3001/deleteStudent/${studentId}`,{headers:{'authorization':token}})
    .then(()=>{alert("Deleted Successfully")})
    .catch((res)=>{alert(res.data.data._id)})
  }
  


const onEdit = (e)=>{
  var token = localStorage.getItem("token")
  e.preventDefault()
  axios.put(`http://localhost:3001/updateStudent/${studentId}`,{headers:{'authorization':token}})
  
}





return (
  <Container>
    <Row className="my-4">
      <Col>
        <h1>My Blog</h1>
      </Col>
    </Row>
    <Row className="my-4">
      {data.map(post => (
        <Col md={6} key={post._id}>
          <Card>
         
            <Card.Body>
              <Card.Title className="card-title">Name:{post.name}</Card.Title>
              <Card.Text>
                <p style={{color:"blue"}}>Sunject:{post.subject}</p>
              </Card.Text>
              <Card.Text style={{color:"grey"}}>
                Marks: {post.marks}
              </Card.Text>
              <Card.Text className="card-text">
               {post.summary}
              </Card.Text>


             
              {/* <ButtonGroup aria-label="First group"  > */}
              <Button variant="warning" href={`/${post._id}`} onClick ={onEdit}  >Edit</Button> 
              
              <Button variant="danger" className="ml-2 mx-4"  href={`/${post._id}`}  {setStudentId{}} onClick={onDelete}  >Delete</Button>

             {/* </ButtonGroup> */}
           
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
    {/* <Button variant='info' href='/createblog' >Create Your Own Blog</Button> */}
  </Container>

);
}


export default HomePage
