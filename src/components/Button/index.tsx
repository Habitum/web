import { iButton } from './types'

import { StyledButton } from './styles'

const Button = ({ onClick, name, variant }:iButton) => {
  return (
    <StyledButton variant={variant} onClick={onClick}>
      {name}
    </StyledButton>
  )
}

export default Button
