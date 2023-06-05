import { StyledContainer } from '../../styles/grid.js'
import { StyledHeader } from './header.js'
import Logo from '../../assets/nukenzie.svg'

function Header() {
  return(
    <StyledHeader>
      <StyledContainer>
        <img src={Logo} alt='Logo da empresa Nu Kenzie' />
      </StyledContainer>
    </StyledHeader>
  )
}

export default Header