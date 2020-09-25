import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';

import SideBar from './Sidebar/index';
import 'bootstrap/dist/css/bootstrap.min.css';
import { theme } from '../styles/theme';
//import '../css/nosnipfooter.css';
//import '../assets/sass/main.scss';
import PageFooter from './PageFooter';
import '../css/main.css'
import './layout.css'
import {navigateTo} from 'gatsby'


class Layout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isPreloaded: true,
    };
  }
  componentDidMount() {
    if (window.Snipcart) {
      window.Snipcart.api.configure('show_continue_shopping', true);
    }
    this.timeoutId = setTimeout(() => {
      this.setState({ isPreloaded: false });
    }, 100);
  }

  /*componentDidMount() {
    this.timeoutId = setTimeout(() => {
      this.setState({ isPreloaded: false });
    }, 100);
  }*/

  componentWillUnmount() {
    if (this.timeoutId) {
      clearTimeout(this.timeoutId);
    }
  }

  render() {
    const { children } = this.props;
    const { isPreloaded } = this.state;
    return (
      <StaticQuery
        query={graphql`
          query SiteTitleQuery {
            site {
              siteMetadata {
                title
              }
            }
          }
        `}
        render={(data) => (
          <>
            <Helmet
              title={data.site.siteMetadata.title}
              meta={[
                {
                  name: 'description',
                  content:
                    "Salem Aziel's Website for Web Coach and Web Development",
                },
                {
                  name: 'keywords',
                  content: 'web, coach, web development, websites, ecommerce',
                },
              ]}
            >
              <html lang="en" />
            </Helmet>
            <div className={isPreloaded ? 'main-body is-preload' : 'main-body'}>
              <SideBar /*sections={sections}*/ />

              {children}
            </div>
            {/*<PageFooter />*/}
          </>
        )}
      />
    );
  }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
