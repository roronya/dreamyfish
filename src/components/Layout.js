import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 100px);
`
export default ({ children }) => <Container>{children}</Container>
