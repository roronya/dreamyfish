import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  display: grid;
  grid-column-gap: 8px;
  grid-template-columns: repeat(auto-fill, 140px);
  grid-auto-rows: 140px;
  justify-items: center;
  align-items: center;
`
export default ({ children }) => <Container>{children}</Container>
