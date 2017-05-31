import React from 'react';

import CreateGoodThing from './CreateGoodThing';
import GoodThing from './GoodThing';

class MyGoodThings extends React.Component {

  constructor(){
    super();
    this.getGoodThings = this.getGoodThings.bind(this);
  }
  
  getGoodThings(){
    .ajax({
        type: "GET",
        url: "https://onegoodthing-api.herokuapp.com/authenticate",
        dataType: 'json',
        data: {"auth_token":"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxLCJleHAiOjE0OTYyNzUxODh9.vm2b_B25l2CtzaiVcjDHfXif6zEYr5SRXDU3bz9ZEsE"},
        beforeSend: function (xhr) {
            xhr.setRequestHeader('Authorization', 'Basic ');
            xhr.setRequestHeader('Accept-Language', 'en_US');
        }
    });
  }
  
  componentWillMount(){
    this.getGoodThings();
  }
  
  render() {
    return (
      <div style={{textAlign: 'center'}}>
        <h1>All of My Good Things</h1>
        
        <GoodThing />
        <CreateGoodThing />
      </div>
    );
  }

}

export default MyGoodThings;