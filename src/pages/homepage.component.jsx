import React from 'react';
import './homepage.styles.scss';
import '../components/directory/directory.component';
import Directory from '../components/directory/directory.component';

const HomePage = () => (
    <div className='homepage'>
        <h1>WELCOME TO CRWN CLOTHING</h1>
        <Directory />
    </div>
);
export default HomePage;