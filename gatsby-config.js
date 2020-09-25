const config = require('./config');

module.exports = {
  pathPrefix: config.pathPrefix,
  siteMetadata: {
    title: config.siteTitle,
    author: config.author,
    social: {
      twitter: config.twitter,
    }
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
    'gatsby-plugin-sass',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content`,
        name: `content`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    {
        resolve: `gatsby-source-filesystem`,
        options: {
          path: `${__dirname}/content/blog`,
          name: `blog`,
        },
      },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages`,
        name: "pages",
      },
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://salemaziel.com',
        sitemap: 'https://salemaziel.com/sitemap.xml',
      }
    },
    //{
      //resolve: `gatsby-plugin-purgecss`,
      //options: {
        //printRejected: true, // Print removed selectors and processed file names
        //develop: false, // Enable while using `gatsby develop`
        // tailwind: true, // Enable tailwindcss support
        // whitelist: ['whitelist'], // Don't remove this selector
        //ignore: ['/navbar.css', 'navbar.js/'], // Ignore files/folders
        //purgeOnly : ['bootstrap/'], // Purge only these files/folders
      //}
    //},
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-plugin-feed`,
//    {
//      resolve: `gatsby-plugin-google-analytics`,
//      options: {
        //trackingId: `ADD YOUR TRACKING ID HERE`,
//      },
//    },
//    {
//      resolve: 'gatsby-plugin-snipcart',
//      options: {
        //replace with own Snipcart API key
//        apiKey: 'ZjVkN2M3YzEtOGU0Yy00ZTUzLWFiZGQtNTNkZjY3NGM2YThkNjM3MDg5MjIyODA1Nzg2OTk5',
//        autopop: true,
//          }
//    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: config.manifestName,
        short_name: config.manifestShortName,
        start_url: config.manifestStartUrl,
        background_color: config.manifestBackgroundColor,
        theme_color: config.manifestThemeColor,
        display: config.manifestDisplay,
        icon: config.manifestIcon, // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-offline',
  ],
};
