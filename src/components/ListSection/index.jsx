import FinancialSumaryList from './FinancialSumaryList'
import { StyledTitleThreeSmall, StyledTitleTwoMedium } from '../../styles/typography'
import { StyledContainer } from '../../styles/grid.js'


function ListSection({cardList, setCardList}) {
  return (
    <section>
      <StyledContainer>
        <StyledTitleThreeSmall fontColor='#212529' >Resumo Financeiro</StyledTitleThreeSmall>
        {cardList.length > 0 ? (
          <FinancialSumaryList cardList={cardList} setCardList={setCardList} />
        ) : (  
          <StyledTitleTwoMedium fontColor='#212529' >Você ainda não possui nem um lançamento</StyledTitleTwoMedium>
        )} 
      </StyledContainer>
    </section>
  )
}

export default ListSection