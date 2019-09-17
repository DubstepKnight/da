import React from 'react'
import { Link } from 'react-router-dom';

export default function view2() {
  return (
    <div>
      This is component view 2
      <div>
        <Link to="/">Next again</Link>
      </div>
    </div>
  )
}
