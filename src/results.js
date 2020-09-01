import React, { useState ,Component} from 'react';
import { getres, setSession } from './common_serach';




function Results(props) {


  const [loading, setLoading] = useState(false);
  const res = getres();
  console.log("Response Object is:"+(res))






return (
<div1 className="items">



{res.map((item) => (

        <h3>

        First Name: {item._source.First_Name} &nbsp;&nbsp;&nbsp;&nbsp;
        Last Name : {item._source.Last_Name}<br></br>
        Gender:{item._source.Gender}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        Graduation Year :{item._source.Graduation_year}<br></br>
        Primary Specialty:{item._source.Primary_specialty}<br></br>
        Hospital Name: {item._source.Hospital_affiliation_LBN_1}<br></br>
        Organization Name:{item._source.Organization_legal_name}<br></br>
        Address:{item._source.Line_1_Street_Address},&nbsp;&nbsp;{item._source.Line_2_Street_Address}<br></br>
        City:{item._source.City}<br></br>
        State:{item._source.State}<br></br>
        zip_code:{item._source.Zip_Code}<br></br>


        </h3>

      ))}


</div1>


        );
}



export default Results;




