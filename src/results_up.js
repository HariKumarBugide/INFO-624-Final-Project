
import { Container, Grid, Header, List } from "semantic-ui-react";
import React, { useState ,Component} from 'react';
import { getres, setSession } from './common_serach';

class Results_up extends Component {

  render() {
  const res = getres();
  console.log("Response Object is:"+(res))
    return (
    <div>
    {res}
     </div>
    );
  }
}

export default Results_up;