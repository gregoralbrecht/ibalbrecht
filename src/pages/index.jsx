import React from 'react'

import Layout from 'components/Layout'
import SEO from 'components/SEO'
import Hero from 'components/Hero'
import H1 from 'components/H1'
import { Flex } from 'components/Grid'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero>
      <H1>
        <span className="first-line">Ihr PC-Service-Partner im</span> <br />{' '}
        <span className="second-line">Rhein-Main-Gebiet</span>
      </H1>
    </Hero>
    <Flex ml={5} pr={3} flexDirection="column">
      <p>
        Wir sind seit 1985 für Privatpersonen und kleine bis mittelständige
        Unternehmen der ideale Partner in einer sich stets entwickelnden
        IT-Welt. Neben dem Vertrieb von Hard- und Software liegt unser Fokus auf
        Services wie Beratung, Planung, und Wartung sowie Reparatur- und
        Vor-Ort-Service.
      </p>
      <p>
        Bei uns steht der persönliche Kontakt und die individuelle Betreuung
        stets im Vordergrund.
      </p>
    </Flex>
  </Layout>
)

export default IndexPage
