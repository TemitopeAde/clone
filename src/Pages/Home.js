import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import Card from '../Component/Card';
import Request from '../Component/Request';
import Start from '../Component/Start';

const Home = () => {
  return (
    <div className='mt-5'>
        {/* <Card /> */}
        {/* <Request /> */}
        <Start />
    </div>
  )
}

export default Home