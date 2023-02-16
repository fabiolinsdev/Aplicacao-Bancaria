import logoImg from '../../assets/logo.svg';
import MasterImg from '../../assets/Master.svg'

import { Container, Content } from './styles'

interface HeaderPronps {
  onOpenTransactionModal: () => void;
}

export function Header({ onOpenTransactionModal }: HeaderPronps) {
    
  return (
    <Container >
      <Content>
      <img src={logoImg} alt="dt money" />
      <img src={MasterImg} alt="Mask" />
      <button type="button" onClick = {onOpenTransactionModal}>
        nova transação
      </button>

      </Content>
    </Container>
  )
}