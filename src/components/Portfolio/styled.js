import styled from 'styled-components'
import media from 'styled-media-query'

import transitions from '../../styles/transitions'

export const ImageWrapper = styled.div`
  .gatsby-image-wrapper {
    border-radius: 50%;
    display: flex;
    max-width: 120px;
    max-height: 120px;

    ${media.lessThan('large')`
    margin-bottom: 5px;
  `}
  }
`

export const PortfolioWrapper = styled.section`
  align-items: center;
  border-bottom: 1px solid var(--borders);
  display: flex;
  padding: 2rem 3rem;
  width: 100%;

  ${media.lessThan('large')`
    flex-direction: column;
    padding: 2rem 1rem;
  `}
`

export const PortfolioLink = styled.a`
  color: var(--texts);
  display: flex;
  text-decoration: none;
  transition: ${transitions.COLOR};

  &:hover {
    color: var(--highlight);
  }
`

export const PortfolioInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 1.5rem;

  ${media.lessThan('large')`
    margin: 0;
  `}
`

export const PortfolioTitle = styled.h1`
  font-size: 1.6rem;
  font-weight: 700;
  margin: 0.2rem 0 0.5rem;
`

export const PortfolioDescription = styled.h2`
  font-size: 1.2rem;
  font-weight: 300;
  line-height: 1.2;
`
