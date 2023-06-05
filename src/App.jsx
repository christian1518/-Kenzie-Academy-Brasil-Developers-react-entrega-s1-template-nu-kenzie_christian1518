import { useState } from 'react'
import Header from './components/Header'
import ListSection from './components/ListSection'
import { GlobalReset } from './styles/reset.js'
import { GlobalStyle } from './styles/global'
import Form from './components/Form'
import CashBalance from './components/CashBalance'
import { StyledContainer } from './styles/grid.js'
import { StyledFlexBox } from './styles/app'


function App() {
  const [cardList, setCardList] = useState([])
  return ( 
    <div className='App'>
      <GlobalReset />
      <GlobalStyle />
      <Header />
      <main>       
        <StyledContainer>
          <StyledFlexBox>
            <div>
              <Form setCardList={setCardList} />
              {cardList.length > 0 ? (
              <CashBalance cardList={cardList}/>
              ) : (  
                null
              )} 
            </div>
            <ListSection cardList={cardList} setCardList={setCardList} />
          </StyledFlexBox>    
        </StyledContainer>
      </main>
    </div>
  )
}

export default App


