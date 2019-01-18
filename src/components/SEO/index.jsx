import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import config from '../../../config/meta'

function SEO({ description, lang, meta, title }) {
  const metaDescription = description || config.siteDescription
  const schemaOrg = [
    {
      '@context': `http://schema.org`,
      '@type': `WebSite`,
      url: config.siteUrl,
      name: title,
      description: config.siteDescription,
      alternateName: config.siteTitleAlt ? config.siteTitleAlt : '',
      author: {
        '@type': `Person`,
        name: config.schema.author,
      },
    },
  ]

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`%s — ${
        config.siteTitle
      } — Ihr PC-Service-Partner im Rhein-Main-Gebiet`}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          property: `og:image`,
          content: config.defaultMetaImage,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: config.twitter,
        },
        {
          name: `twitter:title`,
          content: title,
        },
      ].concat(meta)}
    >
      <script type="application/ld+json">{JSON.stringify(schemaOrg)}</script>
      <noscript>
        {`Nobody should ever see this. If someone does, something has gone
        horribly wrong and everything is going to explode.`}
      </noscript>
    </Helmet>
  )
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.array,
  title: PropTypes.string.isRequired,
}

SEO.defaultProps = {
  description: config.siteDescription,
  lang: `en`,
  meta: [],
}

export default SEO
