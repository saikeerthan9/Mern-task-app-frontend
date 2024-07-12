
import Wrapper from '../assets/wrappers/LandingPage';
import { Link } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import { useAppContext } from '../context/appContext';
import React from 'react';

const Landing = () => {
  const { user } = useAppContext();
  return (
    <React.Fragment>
      {user && <Navigate to='/' />}
      <Wrapper>
        <nav>
          <h2>JobBoard</h2>
        </nav>
        <div className='container page'>
          {/* info */}
          <div className='info'>
            <h1>
              Welcome to New Gen Job Searching Platform
            </h1>
            <p>
            Welcome to our First Mern Stack project this is a job searching platform clone focusing on the topics of authentication and CRUD operations
            </p>
            <Link to='/register' className='btn btn-hero'>
              Login/Register
            </Link>
          </div>
          <img src="https://th.bing.com/th/id/R.1b81a209d7737716bc73c4e1063c4396?rik=VAoi9gGDnZ5CMw&riu=http%3a%2f%2fclipart-library.com%2fimg1%2f1163576.png&ehk=u74razhpMaOvrAsk%2boo1YPtcPl4d8MAlPfLllw4gsDg%3d&risl=&pid=ImgRaw&r=0&sres=1&sresct=1" alt='job hunt' className='img main-img' />
        </div>
      </Wrapper>
    </React.Fragment>
  );
};

export default Landing;
