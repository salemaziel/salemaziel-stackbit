import React from 'react';

import Layout from '../components/Layout';
/*
import PageFooter from '../components/PageFooter';
import SideBar from '../components/Sidebar/index'

import pic2 from '../assets/images/pic02.jpg';
import pic3 from '../assets/images/pic03.jpg';
import pic4 from '../assets/images/pic04.jpg';
import pic5 from '../assets/images/pic05.jpg';
import pic6 from '../assets/images/pic06.jpg';
import pic7 from '../assets/images/pic07.jpg';
import pic8 from '../assets/images/pic08.jpg';
import Scroll from '../components/Scroll';

import ScrollToTop from 'react-router-scroll-top'

//import HomeHeader from '../components/HomeHeader'
import { Link } from 'gatsby';*/
import HomePage from '../components/PageComponents/Home/Page'
//import Rgallery from '../components/Rgallery'
//import { Link } from 'gatsby'

/*const sections = [
  { id: 'top', name: 'Intro', icon: 'fa-home' },
  { id: 'portfolio', name: 'Portfolio', icon: 'fa-th' },
  { id: 'about', name: 'About Me', icon: 'fa-user' },
  { id: 'contact', name: 'Contact', icon: 'fa-envelope' },
];*/

const IndexPage = () => (
  <Layout>

      <HomePage />

  </Layout>
);

export default IndexPage;
