import React from 'react';
import { Link } from 'react-router-dom';

export default function view1() {
  return (
    <div>
      This is view 1
      <div>
        <Link to="/example">Next</Link>
      </div>
    </div>
  )
}
