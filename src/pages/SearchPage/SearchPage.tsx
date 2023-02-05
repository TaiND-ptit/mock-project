import {
    Wrapper,
    ProductSearchHeader,
    ProductSearchTitle,
    ProductSearchLabel,
    ProductSearchList,
    SearchLabelBorder
} from './SearchPage.styled';

const SearchPage = () => {
  return (
    <Wrapper>
    <ProductSearchHeader>
      <ProductSearchTitle>
        <ProductSearchLabel>Kết quả tìm kiếm</ProductSearchLabel>
        <SearchLabelBorder></SearchLabelBorder>
      </ProductSearchTitle>
    </ProductSearchHeader>
    <ProductSearchList>
      {/* {productLoading && (
        <ProductLoading>
          <Spin size='large' />
        </ProductLoading>
      )}
      {!productLoading && (
      <>
      {productData.map((product:any) => (
        <Product 
        key={product.id}
        productId={product.id}
        productImg={product?.images[0].image}
        productPrice={product.price}
        productName={product.name}
        productDescription={product.description}
        />
      ))}
      </>)} */}
    </ProductSearchList>
  </Wrapper>
  )
}

export default SearchPage
