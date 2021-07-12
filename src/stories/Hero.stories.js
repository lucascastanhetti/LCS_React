import React from 'react'

import Hero from '../components/Hero'
import BgFundo from './assets/sea.jpg'
import GlobalStyle from '../components/GlobalStyle'

export default {
  title: 'Hero',
  component: Hero,
}

export const usage = () => (
  <>
    <GlobalStyle />
    <Hero title="Ganhe sua liberdade para ir e Vir" image={BgFundo}>
      <ul>
        <li>Mussum Ipsum, cacilds vidis litro abertis.</li>
        <li>
          Suco de cevadiss, é um leite divinis, qui tem lupuliz, matis, aguis e
          fermentis.
        </li>
        <li>Toma um mé que o mundo vai girarzis! </li>
      </ul>
    </Hero>
  </>
)
