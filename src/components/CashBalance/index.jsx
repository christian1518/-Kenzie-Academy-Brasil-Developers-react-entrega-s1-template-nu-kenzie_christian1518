import { StyledTitleThreeSmall, StyledText, StyledSpan } from '../../styles/typography.js'
import { StyledTotalValueDiv, StyledSectionCashValue } from './totalValue.js'


function CashBalance({cardList}) {

  function calculateCashBalance () {
    const totalValue = cardList.reduce((accValue, card) => {
        if (card.typeTransection === 'Entrada') {
          return accValue + parseFloat(card.value)
        }
        return accValue - parseFloat(card.value)
    }, 0)
    return totalValue
  }

  const cashBalance = calculateCashBalance().toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})

  return (
    <StyledSectionCashValue>
      <StyledTotalValueDiv>
        <div>
          <StyledTitleThreeSmall fontColor='#212529'>Valor total:</StyledTitleThreeSmall>
          <StyledText fontColor='#868E96'>O valor se refere ao saldo</StyledText>
        </div>
          <StyledSpan fontColor='#FD377E'>{cashBalance}</StyledSpan>
      </StyledTotalValueDiv>
    </StyledSectionCashValue>
  )
}

export default CashBalance