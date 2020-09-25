import React from 'react';
import Layout from '../../components/Layout';
import SideBar from '../../components/Sidebar/index'
import AutomationResearchPage from '../../components/PageComponents/Contact/Automation/Page.jsx'

//import Rgallery from '../components/Rgallery'
//import { Link } from 'gatsby'

/*const sections = [
  { id: 'top', name: 'Intro', icon: 'fa-home' },
  { id: 'portfolio', name: 'Portfolio', icon: 'fa-th' },
  { id: 'about', name: 'About Me', icon: 'fa-user' },
  { id: 'contact', name: 'Contact', icon: 'fa-envelope' },
];*/

const Automation = () => (
  <Layout>
    <SideBar />
  

    <div id="main">



         <AutomationResearchPage />

    </div>

  </Layout>
);

export default Automation;
