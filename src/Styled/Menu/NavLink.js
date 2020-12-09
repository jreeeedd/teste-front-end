import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

const activeClassName = 'nav-item-active'

export default styled(NavLink).attrs({ activeClassName })`
  &.${activeClassName} {
    color: grey;
  }
  margin: 20px;
  text-decoration: none;
  color: #252525;
`
