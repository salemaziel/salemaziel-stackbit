import React from 'react';

import Layout from '../../components/Layout';
import PageFooter from '../../components/PageFooter';
import SideBar from '../../components/Sidebar/index'
//import Shoptop from '../assets/images/sdcoast.jpg'


const sections = [
    { id: 'shoptop', name: 'Featured', icon: 'fa-home' },
    { id: 'mygallery', name: 'Gallery', icon: 'fa-th' },
    { id: 'about', name: 'About Me', icon: 'fa-user' },
    { id: 'contact', name: 'Contact', icon: 'fa-envelope' },
  ];

const Automation = () => (
    <Layout>
        <SideBar /*sections={sections}*/ />
        
        <div id="main">
            {/*<section id="shoptop" >
                <div className="container">
                    <div style={{
                        maxWidth: "100%",
                        margin: "1rem 2rem"
                    }} >
                        <img src={Shoptop} 
                        style={{
                            width: "100%",
                        }}/>
                    </div>
                </div>

                    </section>*/}
            <br />

        </div>

    </Layout>
)

export default Automation