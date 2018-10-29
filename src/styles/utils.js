import { css } from 'styled-components'

const sizes = {
  xldesktop: 1170,
  midesktop: 992,
  desktop: 768,
  tablet: 576,
}

const sizesHeight = {
  tablet: 568
}

export const media = Object.keys(sizes).reduce((accumulator, label) => {  
  accumulator[label] = (...args) => css`
    @media (min-width: ${sizes[label]}px) {
      ${css(...args)};
    }
  `
  return accumulator
}, {})

export const mediaHeight = Object.keys(sizesHeight).reduce((accumulator, label) => {  
  accumulator[label] = (...args) => css`
    @media (min-height: ${sizesHeight[label]}px) {
      ${css(...args)};
    }
  `
  return accumulator
}, {})