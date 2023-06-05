import { useState } from 'react'
import { StyledSelect, StyledLabel, StyledForm, StyledOption, StyledInput, StyledP } from '../../styles/form.js'
import { v4 as uuidv4 } from 'uuid'
import { StyledButtonForm } from '../../styles/button.js';

function Form({setCardList}) {
  const [description, setDescription] = useState('');
  const [value, setValue] = useState('');
  const [typeTransection, setTypeTransection] = useState('');

  function addCardToList() {
    const newCard = {id: uuidv4(), description, value, typeTransection}
    return(
      setCardList((cardList) => [...cardList, newCard])
    )
  }

  function submit(e) {
    e.preventDefault()
    addCardToList()
    setDescription('')
    setValue('')
    setTypeTransection('')
  }

  return (
    <StyledForm onSubmit={submit}>
      
      <StyledLabel htmlFor='description'>Descrição</StyledLabel>
      <StyledInput type='text' id='description' placeholder='Digite aqui sua descrição' value={description} onChange={(e) => setDescription(e.target.value)} required/>
      <StyledP>Ex: Compra de roupas</StyledP>

      <StyledLabel htmlFor='inputValue'>Valor (R$)</StyledLabel>
      <StyledInput type='number' id='inputValue' placeholder='Digite aqui o valor' value={value} onChange={(e) => setValue(e.target.value)} required/>

      <StyledLabel htmlFor='selectTransection'>Tipo de valor</StyledLabel>
      <StyledSelect name='typeValue' id='selectTransection' value={typeTransection} onChange={(e) => setTypeTransection(e.target.value)} required>
        <StyledOption value=''>Selecione o tipo de transação</StyledOption>
        <StyledOption value='Entrada'>Entrada</StyledOption>
        <StyledOption value='Despesas'>Despesas</StyledOption>
      </StyledSelect>

      <StyledButtonForm type='submit'>Inserir valor</StyledButtonForm>
    </StyledForm>
  )       
}

export default Form