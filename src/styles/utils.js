import { css } from 'styled-components'

const sizes = {
  xldesktop: 1170,
  midesktop: 992,
  desktop: 768,
  tablet: 576,
}

export const media = Object.keys(sizes).reduce((accumulator, label) => {  
  accumulator[label] = (...args) => css`
    @media (min-width: ${sizes[label]}px) {
      ${css(...args)};
    }
  `
  return accumulator
}, {})