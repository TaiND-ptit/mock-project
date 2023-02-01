import styled from 'styled-components';

export const Wrapper = styled.nav`
  padding-top: 12px;
  padding-bottom: 25px;
`;

export const NavbarContainer = styled.div`
  display: flex;
  text-align: center;
`;

export const BrandAndToggler = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SidebarShowBtn = styled.button`
  margin-right: 12px;
  margin-top: 4px;
  transition: all 300ms ease-in-out;
  height: 30px;
  width: 33px;
  cursor: pointer;
  outline: 0;
  border: none;
  background-color: transparent;
  font-size: 4rem;
  color: ${({ theme }) => theme.colors.whiteColor};
  &:hover {
    opacity: 0.9;
  }
`;

export const NavbarBrand = styled.a`
  display: flex;
  text-align: center;
  font-size: 2.4rem;
`;

export const NavbarBrandIcon = styled.span``;

export const NavbarBrandLogo = styled.a`
  margin-left: 8px;
  margin-right: 8px;
  text-decoration: none;
  .logo_shopee {
    color: ${({ theme }) => theme.colors.whiteColor};
    fill: currentColor;
    width: 160px;
    height: 46px;
  }
`;

export const NavbarCollapse = styled.div`
  width: 100%;
  border-radius: 2px;
  margin: 0 16px 10px;
  position: relative;
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  flex: 1;
  height: 40px;
`;

export const NavbarSearch = styled.div`
  height: 100%;
  flex: 1;
  background-color: ${({ theme }) => theme.colors.whiteColor};
  //    padding: 4px;
  //    margin-left: 32px;
  //    border-radius: 2px;
  //    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
`;

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
`;

export const SearchInput = styled.input`
height: 100%;
width: 100%;
padding: 0 16px;
border: none;
outline: none;
font-size: 2.4rem;
border-radius: 2px;
padding: 0 8px;
}
// width: 100%;
// padding: 0 16px;
// color: rgba(0, 0, 0, 0.8);
// font-size: 14px;
// outline: 0;
//     border: none;
//     resize: none;
// caret-color: ${({ theme }) => theme.colors.mainColorSecond};
// &::placeholder{
//     font-size: 13.5px;
//     letter-spacing: 0.5px;
// }
// @media screen and (max-width: 576px){
//     display: none;
// }
`;

export const SearchBtn = styled.button`
  border: none;
  background-color: ${({ theme }) => theme.colors.mainColorSecond};
  outline: none;
  height: 34px;
  width: 60px;
  border-radius: 2px;
  margin-right: 3px;

  &:hover {
    cursor: pointer;
    background-color: rgba(251, 85, 51, 0.9);
  }
`;

export const SearchIcon = styled.i`
  color: ${({ theme }) => theme.colors.whiteColor};
`;

export const CategoryList = styled.ul`
  // margin-left: 32px;
  // margin-top: 8px;
  // list-style-type: none;
  // display: flex;
  // align-items: center;
  // font-size: 12px;
  // font-weight: 400;
  position: absolute;
  left: 0;
  bottom: -28px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  list-style: none;
  padding-left: 0;
  z-index: 2;
`;

export const CategoryItem = styled.li`
  margin-right: 16px;
  white-space: nowrap;
`;

export const CategoryLink = styled.a`
  transition: all 300ms ease-in-out;
  &:hover {
    opacity: 0.95;
  }
  color: ${({ theme }) => theme.colors.whiteColor};
  font-size: 1.8rem;
  text-decoration: none;
  text-transform: capitalize;
`;

export const NavbarCart = styled.div`
  // margin-left: 32px;
  // height: 30px;
  // border-radius: 50%;
  // font-size: 2rem;
  width: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  -webkit-tap-highlight-color: transparent;
`;

export const CartBtn = styled.a`
  // text-decoration: none;
  // &:hover{
  //     .cart-modal{
  //         opacity: 1;
  //         visibility: visible;
  //     }
  // }
  display: inline-block;
  position: relative;
  cursor: pointer;
`;
export const CartIcon = styled.div`
  width: 28px;
  height: 30px;
  margin: -7px 70px 0 0;
  color: ${({ theme }) => theme.colors.whiteColor};
  fill: currentColor;
`;

export const CartItemValue = styled.div`
  position: absolute;
  background-color: ${({ theme }) => theme.colors.whiteColor};
  font-size: 14px;
  top: -20px;
  left: 15px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.mainColorSecond};
  padding: 6px 0.5rem;
  width: 22px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
