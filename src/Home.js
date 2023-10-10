import React from 'react'
import Button from 'react-bootstrap/Button';
import './Home.css'
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className='landingPage d-flex justify-content-center align-items-center' style={{height:'100vh',width:'100vw'}}>
        <div className='container w-100 text-center p-5 home_section'>
            <p className='' style={{fontSize:'5rem',color:'blue'}}>INSTA QUIZ</p>
            <Link to={'/quiz'} >
            <Button className='mt-3 ps-5 pe-5 fs-2 clickPlay'  variant="warning">Let's Play</Button>
            </Link>
        </div>
    </div>
  )
}

export default Home