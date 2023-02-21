import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'flowbite-react';
import NavigationBar from '../components/NavigationBar';




const PageRouter = () => {
  return (
    <div className='h-screen gap-5  flex flex-row justify-center items-center '>
        <NavigationBar  />
      <Link to='/audio'>
        <Button className='' size='lg'>
          Audio Player
        </Button>
      </Link>
      <Link to='/blog'>
        <Button className='px-2.5' size='lg'>
          Blog Page
        </Button>
      </Link>
    </div>
  );
};

export default PageRouter;
