import React from 'react'
import { Switch, Route, withRouter } from 'react-router-dom'
import AllEvents  from '../Events/AllEvents/index';
import NavBar from '../Console/NavBar/index';
import CheckAuthToken from '../HOC/checkTokenHOC';

function Console(props) {

  const {
   match:{ path },
  } = props;

  const allEventsPath = `${path}/allevents`;
 return (
  <div>
   <NavBar/>
   <Switch>
     <Route
      path = {allEventsPath}
      component = {AllEvents}
     />
   </Switch>
  </div>
 )
}

export default withRouter(Console);
