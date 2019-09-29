import React from 'react'
import styled from 'styled-components'

const A = styled.a`
  width: 100%;
  height: 100%;
`
const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`
export default ({ game }) => (
  <A
    href={`https://erogamescape.dyndns.org/~ap2/ero/toukei_kaiseki/game.php?game=${
      game.id
    }`}
  >
    <Img src={game.image_url} alt={game.name} />
  </A>
)
