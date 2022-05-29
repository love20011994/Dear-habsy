import { BsPlusLg } from "react-icons/bs"
import React, { useState, useEffect } from 'react';
import axios from "axios";
import { useSelector } from "react-redux";
// import axios from "axios";
function Rules() {
  const [set, setRules] = useState([]);
  const [send ,sendCondition]=useState([]);
  const contractid = useSelector(state => state)
  var contractInitialState = {
    categoryid: "",
    contractid: "",
    contractdate: "",
    ruleName: "",

    priorityValue: "",
    frequencyValue: "",
    penaltyValue: "",
    condition: "",
    days: "",
    contractkpi: "",
  };
  useEffect(() => {
    axios
      .get(`http://demosrvr2.optipacetech.com:8000/api/v1/rule/?category_id=${contractid}`)
      .then(res => {
        console.log(res)
        // setIsLoading(false);
        setRules(res.data)
      })
      .catch(err1 => {
        console.log(err1)

      })
  }, [])

  // const dispatch=useDispatch()
 
  // useEffect(() =>{
  //    axios
  //    .get(`http://demosrvr2.optipacetech.com:8000/api/v1/formula1/?rule_id=${condition}`)
  //   .then(res=>{
  //     console.log(res)
  //     sendCondition(res.data)
  //   })
  //  .catch(err =>{
  //    console.log(err)
  //  })
  // }, [])

   
  return (
    <div class="container1">
 <div class="panel panel-primary" id="result_panel"  style={{marginTop:'111px',marginLeft:'-258px',width:'220px'}}>
    <div class="panel-heading"><h6 class="panel-title">Rule</h6>
    </div>
    <div class="panel-body">
 
        <ul class="list-group">
        {set.map((set, i) => (
            <li class="list-group-item"  value={i + 1}> 
            {set.rule_name}
            </li>
               ))}
            </ul>
  
            </div>
            </div> 
      {/* <div class="vertical-menu">
        <a style={{ height: '35px'  }} href="#" class="active">Rule</a>
        {set.map((set, i) => (
          <a  style={{fontSize:'15px'}}  href="#"  value={i + 1}
          // onChange={(e) =>dispatch({type:"Condition" ,payload:e.target.value})}
          >
            {set.rule_name}

          </a>
        )

        )}

      </div> */}

      <div className="col-sm">
        <div class="form-group row">

        </div>

      </div>
      <div class="row">
        <div class="col-sm" style={{ marginTop: '-274px', marginLeft: '16px' }}>
          <div class="form-group row">
            <label
              for="contractid"
              class="col-sm-3 col-form-label"
              style={{ width: "10px" }}
            >
              Priority
            </label>
            <div class="col-sm-9">
              <input
                type="text"
                style={{ width: "260px" }}
                class="form-control"
                placeholder="Enter a value priority"
                name="contractid"
              ></input>
            </div>
          </div>
          <div class="form-group row">
            <label
              for="inputoption"
              class="col-sm-3 col-form-label"
              style={{ width: "10px" }}
            >

              Frequency
            </label>

            <div class="col-sm-9">
              <select
                id="form-control1"
                class="form-control"
                style={{ width: "260px" }}
                placeholder="Enter a value"
                name="contractdate"
              >
                <option selected>Open this select Frequency</option>
                <option value="1 day">1 day</option>
                <option value="2 day">2 day</option>
                <option value="3 day">3 day</option>
              </select>
            </div>
          </div>
          <div class="form-group row">
            <label for="contractdate" class="col-sm-3 col-form-label">
              Penalty
            </label>

            <div class="col-sm-9">
              <input

                class="form-control"
                style={{ width: "260px" }}
                placeholder="Enter a value penalty"
                name="contractdate"
              ></input>
            </div>
          </div>
          <div class="form-group row">
            <label for="contractdate" class="col-sm-3 col-form-label">
              Condition
            </label>

            <div class="col-sm-9">
              <div class="form-row"
                style={{ width: "368px" }}>
                <div class="col">
                {send.map((send,i)=>(
                  <input

                    class="form-control"
                    style={{ width: "260px" }}
                    placeholder=" "
                    name="contractdate"
                    >{send.rule_id}</input>

                ))}
                </div>
                <div class="col" style={{ width: '12px' }} >
                  <input type="text" class="form-control"></input>
                </div>
              </div>
              <div style={{ marginTop: '-10%', marginLeft: '115%' }}>

                <BsPlusLg style={{ marginLeft: "-13px" }} size='1em' backgroundColor='lavender' onClick={""} />


              </div>
            </div>
          </div>





        </div></div> </div>







  );

}
export default Rules;
























