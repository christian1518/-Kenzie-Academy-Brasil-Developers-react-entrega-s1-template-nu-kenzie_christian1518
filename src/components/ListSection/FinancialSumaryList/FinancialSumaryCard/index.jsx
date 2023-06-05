import { StyledTitleThreeSmall, StyledText } from '../../../../styles/typography.js'
import { StyledButtonCard} from '../../../../styles/button.js'
import { StyledDivList, StyledList } from '../../../../styles/list.js'

function FinancialSumaryCard({card, removeCardFromList}) {
  return (
    <StyledList>
      <StyledDivList>
        <StyledTitleThreeSmall fontColor='#212529'>{card.description}</StyledTitleThreeSmall>
        <StyledText fontColor='#212529'>{card.typeTransection}</StyledText>
      </StyledDivList>

      <StyledDivList>
        <StyledText fontColor='#212529'>R$ {card.value}</StyledText>
        <StyledButtonCard onClick={() => removeCardFromList(card.id)}>Excluir</StyledButtonCard>
      </StyledDivList>
    </StyledList>
  )
}

export default FinancialSumaryCard