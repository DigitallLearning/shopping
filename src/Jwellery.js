import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import {
    MDBCard,
    MDBCardImage,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBRow,
    MDBBtn,
    MDBCol
  } from 'mdb-react-ui-kit';
import Footer from "./Footer";
function Jwellery()
{
    const [apidata,setdata]=useState([])
    const navigate=useNavigate()
    useEffect(()=>{
           getData()
    },[])
    async function getData()
    {
var result=await fetch("https://fakestoreapi.com/products/category/jewelery")
//console.log(result)
var data=await result.json()
setdata(data)
    }
    function hello(pid)
    {
       const data={pid:pid}
       navigate("/item",{state:data})
    }
    return(
        <div>
            <br></br>
          <MDBRow className='row-cols-1 row-cols-md-3 g-4' >
           {
                apidata.map((item)=>
                <MDBCol>
        <MDBCard>
         <center> <MDBCardImage
            src={item.image} style={{width:"100px", height:"150px"}}
            alt='...'
            position='top'
          /></center>
          <MDBCardBody>
            <MDBCardTitle>{item.title}</MDBCardTitle>
        <MDBCardTitle style={{color:"red"}}>{item.price*80} Rs</MDBCardTitle>
        <MDBCardTitle style={{color:"green"}}>{item.category}</MDBCardTitle>
        <MDBCardTitle style={{color:"blue"}}>{item.rating.rate}</MDBCardTitle>
            <MDBCardText>
              {item.description}
            </MDBCardText>
            <center><MDBBtn onClick={()=>hello(item.id)}>View Deatils {item.id}</MDBBtn></center>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
            )}
      
      
      
    </MDBRow>  
    <Footer></Footer>
        </div>
    )
}
export default Jwellery