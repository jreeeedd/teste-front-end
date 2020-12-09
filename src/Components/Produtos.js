import React from 'react'
import Container from '../Styled/Container'
import ListItem from '../Styled/ListItem'
import ProductDescription from '../Styled/Produtos/ProductDescription'
import ProductInfo from '../Styled/Produtos/ProductInfo'
import ProductList from '../Styled/Produtos/ProductList'
import ProductTitle from '../Styled/Produtos/ProductTitle'
import ListTitle from '../Styled/ListTitle'
import ProductThumb from '../Styled/Produtos/ProductThumb'
import ProductPrice from '../Styled/Produtos/ProductPrice'
import GlobalContext from '../GlobalContext'
import Search from './Search'

function Produtos () {
  const { data, error, loading, request } = React.useContext(GlobalContext)

  React.useEffect(() => {
    request('https://front-end-test-app.s3.amazonaws.com/menu.json')
  }, [])

  if (error) return <p>Error na requisição</p>
  if (loading) return <p>Carregando...</p>

  return (
    data && (
      <>
        <Search />
        <Container>
          {data.map(({ category_title, products }) => (
            <ProductList key={category_title}>
              <ListTitle>{category_title}</ListTitle>
              {products.map(product => (
                <ListItem key={product.id}>
                  <ProductThumb src={product.thumbnail} alt='thumbnail' />
                  <ProductInfo>
                    <ProductTitle>{product.title}</ProductTitle>
                    <ProductPrice>{`R$ ${product.price}`}</ProductPrice>
                    <ProductDescription>
                      {product.description}
                    </ProductDescription>
                  </ProductInfo>
                </ListItem>
              ))}
            </ProductList>
          ))}
        </Container>
      </>
    )
  )
}

export default Produtos
