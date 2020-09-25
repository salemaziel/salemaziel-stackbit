import React from "react"

import SideBar from './Sidebar/index';



class Layout2 extends React.Component {
  render() {
    const { location, title, children } = this.props
    const { isPreloaded } = this.state;
    const rootPath = `${__PATH_PREFIX__}/`

    if (location.pathname === rootPath) {
      {/**header = (
        <h1
          style={{
            ...scale(1.5),
            marginBottom: rhythm(1.5),
            marginTop: 0,
          }}
        >
          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `inherit`,
            }}
            to={`/`}
          >
            {title}
          </Link>
        </h1>
      )
    } else {**/}
  }
    
    return (
      <>
      <div className={isPreloaded ? 'main-body is-preload' : 'main-body'}>
              <SideBar /*sections={sections}*/ />

              {children}
            </div>
      </>
    )
  }
}

export default Layout2
