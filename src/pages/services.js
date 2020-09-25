import React from 'react'

import Layout from '../components/Layout';
import SideBar from '../components/Sidebar/index'
import Rgallery from '../components/Rgallery'



const Services = () => (
    <Layout>
      <SideBar />

      <div id="main">

            <section id="mygallery" className="mygallery">
                <div className="container">
                  {/*  <Rgallery id="rgallery"/>*/}
                </div>
</section>
        </div>

      </Layout>
)

export default Services