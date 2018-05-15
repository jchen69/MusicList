import React from 'react';
import { Button } from 'reactstrap';

import Sidebar from '../shared/Sidebar';

export default function HomePage(props) {
  return (
    <div className="row">
      <div className="col-sm-12 col-md-8">
        <Button onClick={props.incrementFunction}>Increment</Button>
        <Button onClick={props.decrementFunction}>Decrement</Button>
      </div>
      <Sidebar />
    </div>
  );
}
