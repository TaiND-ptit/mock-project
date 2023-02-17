import CartModal from '../CartModal/CartModal';
import { FooterLinkIcon } from '../Footer/Footer.styled';
import {
  Wrapper,
  NavbarContainer,
  BrandAndToggler,
  SidebarShowBtn,
  NavbarBrand,
  NavbarBrandLogo,
  NavbarCollapse,
  NavbarSearch,
  SearchContainer,
  SearchInput,
  SearchBtn,
  CategoryList,
  CategoryItem,
  CategoryLink,
  NavbarCart,
  CartBtn,
  CartItemValue,
  CartIcon,
  SearchIcon
} from './Navbar.styled';
import HeadlessTippy from '@tippyjs/react/headless';
import { useSelector, useDispatch } from 'react-redux';
import { setSidebarOn } from '../../../store/sidebarSlice';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { getCategorys } from 'api/category.api';
import { getAllCarts, getCartItemsCount, getCartTotal } from 'store/cartSlice';
import React, { useEffect, useState } from 'react';
import Logo from '../SVG/Logo';
import Cart from '../SVG/Cart';
// import { getCategory } from 'store/categorySlice';

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [searchText, setSearchText] = useState<string>('');
  const carts = useSelector(getAllCarts);
  const itemsCount = useSelector(getCartItemsCount);
  const categorysQuery = useQuery({
    queryKey: ['categorys'],
    queryFn: () => getCategorys(),
    keepPreviousData: true
  });

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    setSearchText(event.target.value);
  };
  useEffect(() => {
    dispatch(getCartTotal());
  }, [carts]);

  const handleSearch = () => {
    navigate(`/search/${searchText}`);
  };

  return (
    <Wrapper>
      <NavbarContainer>
        <BrandAndToggler>
          <SidebarShowBtn onClick={() => dispatch(setSidebarOn())}>
            <FooterLinkIcon className='fas fa-bars'></FooterLinkIcon>
          </SidebarShowBtn>
          <NavbarBrand>
            <NavbarBrandLogo>
              <Link to='/'>
                <Logo />
              </Link>
            </NavbarBrandLogo>
          </NavbarBrand>
        </BrandAndToggler>

        <NavbarCollapse>
          <NavbarSearch>
            <SearchContainer>
              <SearchInput
                name='searchText'
                placeholder='Nhập để tìm kiếm sản phẩm...'
                value={searchText}
                onChange={(event) => handleChange(event)}
              />

              <SearchBtn onClick={handleSearch}>
                <SearchIcon className='fa-solid fa-magnifying-glass'></SearchIcon>
              </SearchBtn>
            </SearchContainer>
          </NavbarSearch>

          <CategoryList>
            {categorysQuery?.data?.data?.data?.map((category: any) => (
              <CategoryItem key={category.id}>
                <CategoryLink>
                  <Link to={`/category/${category.id}`}>{category.name}</Link>
                </CategoryLink>
              </CategoryItem>
            ))}
          </CategoryList>
        </NavbarCollapse>
        <NavbarCart>
          <div>
            <HeadlessTippy interactive render={(attrs) => <CartModal carts={carts} />}>
              <CartBtn>
                <Link to='/cart'>
                  <CartIcon>
                    <Cart />
                  </CartIcon>
                  {itemsCount > 0 ? <CartItemValue>{itemsCount}</CartItemValue> : <></>}
                </Link>
              </CartBtn>
            </HeadlessTippy>
          </div>
        </NavbarCart>
      </NavbarContainer>
    </Wrapper>
  );
};

export default Navbar;
