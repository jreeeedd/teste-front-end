import React from 'react'
import Form from '../Styled/Form/Form'
import Inputs from '../Styled/Form/Inputs'
import Label from '../Styled/Form/Label'
import Select from '../Styled/Form/Select'
import Button from '../Styled/Form/Button'

function Gerenciador () {
  const [select, setSelect] = React.useState('')
  const [form, setForm] = React.useState({
    title: '',
    description: '',
    price: ''
  })

  function handleChange ({ target }) {
    const { id, value } = target
    setForm({ ...form, [id]: value })
  }

  function handleSubmit (e) {
    e.preventDefault()
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Select
        value={select}
        onChange={({ target }) => setSelect(target.value)}
        id=''
      >
        <option value='' disabled>
          Selecione
        </option>
        <option value='Burger'>Burger</option>
        <option value='Pizza'>Pizza</option>
      </Select>
      <Label htmlFor='title'>Nome do Prato</Label>
      <Inputs
        type='text'
        id='title'
        name='title'
        onChange={handleChange}
        value={form.title}
      />
      <Label htmlFor='description'>Descrição</Label>
      <Inputs
        type='text'
        id='description'
        name='description'
        onChange={handleChange}
        value={form.description}
      />
      <Label htmlFor='price'>Preço</Label>
      <Inputs
        type='text'
        id='price'
        name='price'
        onChange={handleChange}
        value={form.price}
      />
      <Button>Enviar</Button>
    </Form>
  )
}

export default Gerenciador
