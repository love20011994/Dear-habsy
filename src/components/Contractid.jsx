import React, { useState , useEffect} from 'react';
import axios from "axios";
// import Rules from './Rules';
import Rules from './Rules';
import { useDispatch } from 'react-redux';
 
function Contractid(props){
  const[posts,setPost] = useState([]);
  // const [isLoading, setIsLoading] = useState(true);
const dispatch=useDispatch()
 
  useEffect(() =>{
     axios
     .get(`http://demosrvr2.optipacetech.com:8000/api/v1/category/`)
    .then(res=>{
      console.log(res)
      setPost(res.data)
    })
   .catch(err =>{
     console.log(err)
   })
  }, [])
    return (

      <div class="container">
        <br />
        <br />
        <br /> <br /> <br />
        <div class="row">
          <div class="col-sm">
            <div class="form-group row">
              <label
                for="contractid"
                class="col-sm-3 col-form-label"
                style={{ width: "10px" }}
              >
                ContractId
              </label>
              <div class="col-sm-9">
                <input
                  type="text"
                  style={{ width: "260px" }}
                  class="form-control"
                  placeholder="Enter a value"
                  name="contractid"
                ></input>
              </div>
            </div>
            <div class="form-group row">
              <label for="contractdate" class="col-sm-3 col-form-label">
                StartDate
              </label>

              <div class="col-sm-9">
                <input
                  type="date"
                  class="form-control"
                  style={{ width: "260px" }}
                  placeholder="Enter a value"
                  name="contractdate"
                ></input>
              </div>
            </div>

            <div class="form-group row">
              <label for="contractdate" class="col-sm-3 col-form-label">
                EndDate
              </label>
              <div class="col-sm-9">
                <input
                  type="date"
                  class="form-control"
                  style={{ width: "260px" }}
                  placeholder="Enter a value"
                  name="contractdate"
                ></input>
              </div>
            </div>

            <div class="form-group row">
              <label
                for="inputoption"
                class="col-sm-3 col-form-label"
                style={{ width: "10px" }}
              >

                Category &nbsp;&nbsp;&nbsp;
              </label>

              <div class="col-sm-9">
                <select

                  name="categoryid"
                  class="form-control"
                  style={{ width: "260px" }}
                  id="inputoption"
                  aria-label="Default select example"
                  onChange={(e) =>dispatch({type:"contractid" ,payload:e.target.value})}
                >
                  <option selected style={{backgroundColor:"#13255b",color:"white", width: "160px" , fontSize: "11px"}}>Open this select categorry</option>
                 
                 {posts.map((post,i)=>(
          <option  
     style={{ width: "160px", fontSize: "10px", fontWeight: 'bold' }} 
      value={i+1}>{post.category}
 

 </option>
                 )
                 
                 )}
                              

                      
                     
                </select>


              </div>

            </div></div> </div>


      </div>




    );

  
}
export default Contractid;


































 