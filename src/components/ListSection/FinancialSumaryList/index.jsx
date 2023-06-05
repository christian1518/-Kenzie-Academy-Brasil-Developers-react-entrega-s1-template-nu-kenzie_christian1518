import FinancialSumaryCard from './FinancialSumaryCard'

function FinancialSumaryList({cardList, setCardList}) {

  function removeCardFromList(cardId) {
    if(confirm('Tem certeza que deseja excluir esse card?')) {
      setCardList((cardList) => cardList.filter(card => card.id !== cardId))
    }
  }
  
  return(
    <ul>
      {cardList.map((card) => <FinancialSumaryCard key={card.id} card={card} removeCardFromList={removeCardFromList} />)}
    </ul>
  )
}

export default FinancialSumaryList