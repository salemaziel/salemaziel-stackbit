





/*
import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"

//import { rhythm } from "../utils/typography"

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      avatar: file(absolutePath: { regex: "/me-striped-shirt-585x780.jpg/" }) {
        childImageSharp {
          fixed(width: 50, height: 50) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      site {
        siteMetadata {
          author
        }
      }
    }
  `)

  const { author } = data.site.siteMetadata
  return (
    <div
      style={{
        display: `flex`,
        /*marginBottom: rhythm(2.5),* /
        marginBottom: '2rem'
      }}
    >
      <Image
        fixed={data.avatar.childImageSharp.fixed}
        alt={author}
        style={{
          /*marginRight: rhythm(1 / 2),* /
          marginRight: 'auto',
          marginBottom: 0,
          minWidth: 50,
          borderRadius: `100%`,
        }}
        imgStyle={{
          borderRadius: `50%`,
        }}
      />
      <p>
        Written by <strong>{author}</strong>
        {` `}

      </p>
    </div>
  )
}

export default Bio

*/