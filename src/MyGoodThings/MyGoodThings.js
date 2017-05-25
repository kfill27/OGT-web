import React from 'react';

import CreateGoodThing from './CreateGoodThing';
import GoodThing from './GoodThing';

class MyGoodThings extends React.Component {

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