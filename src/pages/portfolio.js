import React from 'react';

import Layout from '../components/Layout';
import PageFooter from '../components/PageFooter';
import SideBar from '../components/Sidebar/index'
import Rgallery from '../components/Rgallery'
//import Shoptop from '../assets/images/sdcoast.jpg'

import PortfolioPage from '../components/PageComponents/Portfolio/PortfolioPage'


const sections = [
    { id: 'shoptop', name: 'Featured', icon: 'fa-home' },
    { id: 'mygallery', name: 'Gallery', icon: 'fa-th' },
    { id: 'about', name: 'About Me', icon: 'fa-user' },
    { id: 'contact', name: 'Contact', icon: 'fa-envelope' },
  ];

const Portfolio = () => (
    <Layout>
        
        <div id="main">

            <PortfolioPage />

        </div>

    </Layout>
)

export default Portfolio