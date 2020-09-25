import React from 'react';

import Layout from '../../components/Layout';
import PageFooter from '../../components/PageFooter';
import SideBar from '../../components/Sidebar/index'
import Rgallery from '../../components/Rgallery'
//import Shoptop from '../assets/images/sdcoast.jpg'


const sections = [
    { id: 'shoptop', name: 'Featured', icon: 'fa-home' },
    { id: 'mygallery', name: 'Gallery', icon: 'fa-th' },
    { id: 'about', name: 'About Me', icon: 'fa-user' },
    { id: 'contact', name: 'Contact', icon: 'fa-envelope' },
  ];

const Webdesign = () => (
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
            <section id="mygallery" className="mygallery">
                <div className="container">
                    <Rgallery id="rgallery"/>
                </div>
            </section>
        </div>

    </Layout>
)

export default Webdesign