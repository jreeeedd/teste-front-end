import React from 'react'
import GlobalContext from '../GlobalContext'
import Container from '../Styled/Search/Container'
import Form from '../Styled/Search/Form'
import InputText from '../Styled/Search/InputText'
import List from '../Styled/Search/List'
import ListItem from '../Styled/Search/ListItem'
import ProductThumb from '../Styled/Produtos/ProductThumb'
import ProductPrice from '../Styled/Produtos/ProductPrice'
import ProductTitle from '../Styled/Search/ProductTitle'

function Search () {
  const { data } = React.useContext(GlobalContext)
  const [foodName, setFoodName] = React.useState('')
  const [resultado, setResultado] = React.useState([])

  function handleSubmit (e) {
    e.preventDefault()
    const search = []

    data.map(({ products }, i) => {
      search.push(
        products.filter(({ title }) => {
          const regex = new RegExp(foodName, 'gi')

          return title.match(regex)
        })
      )
    })

    setResultado(search.reduce((arr, e) => arr.concat(e)))
  }

  function handleChange ({ target }) {
    setFoodName(target.value)
  }

  console.log(resultado)

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <InputText type='text' value={foodName} onChange={handleChange} />
      </Form>
      <Container>
        <List>
          {resultado.map(food => (
            <ListItem>
              <ProductThumb src={food.thumbnail} />
              <ProductTitle>{food.title}</ProductTitle>
              <ProductPrice>{`R$ ${food.price}`}</ProductPrice>
            </ListItem>
          ))}
        </List>
      </Container>
    </>
  )
}

export default Search
