import React, { useState } from 'react';
import axios from 'axios';

import { setSession } from './common_serach';



function Searchengine(props) {



        const [loading, setLoading] = useState(false);
        const [statename, setstate] = useState('');
        const [city, setcity] = useState('');
        const [specialization, setspecialization] = useState('');
        const [error, setError] = useState(null);



        // handle button click of login form
          const handlessearch = () => {

      axios.get('http://127.0.0.1:5000/search?k1='+specialization)
           .then(response => {
            setLoading(false);
            console.log("Response Object is:"+JSON.stringify(response));
            console.log("Response Object is:"+JSON.stringify(response.data))
            setSession((response.data));

            props.history.push('/results');

          }).catch(error => {
            setLoading(false);
            props.history.push('/noresults');


            console.log("My Response:"+error);
            setError("Something went wrong. Please try again later.");
          });
        };




        const handleOnspecializationChange = event => {
            console.log("CUrrent event speciality :"+event.target.value);
            setspecialization(event.target.value);
        }

return (
         <div>
         Team Members&nbsp;:&nbsp;scm345,&nbsp;ss4978,&nbsp;cd3266,&nbsp;hkb44
<h1> Finding doctor </h1>

<div2>
<h2> Please select statenames from below:<br></br>
<ul id="menu">
  <li>CT,&nbsp;&nbsp;&nbsp;&nbsp;</li>
  <li>DE,&nbsp;&nbsp;&nbsp;&nbsp;</li>
  <li>FL,&nbsp;&nbsp;&nbsp;&nbsp;</li>
  <li>GA,&nbsp;&nbsp;&nbsp;&nbsp;</li>
  <li>MA,&nbsp;&nbsp;&nbsp;&nbsp;</li>
  <li>ME,&nbsp;&nbsp;&nbsp;&nbsp;</li>
  <li>NC,&nbsp;&nbsp;&nbsp;&nbsp;</li>
  <li>NH,&nbsp;&nbsp;&nbsp;&nbsp;</li>
  <li>NJ&nbsp;&nbsp;&nbsp;&nbsp;<br></br></li>
</ul>
</h2>
</div2>


<input name="text" type="text" placeholder="specialization,city,state" onChange={handleOnspecializationChange} />

<button onClick={handlessearch}>Search</button>
</div>
        );
}



export default Searchengine;