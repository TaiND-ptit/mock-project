import styled from 'styled-components';

export const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 300px;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.whiteColor};
  box-shadow: rgba(0, 0, 0, 0.1) 1.95px 1.95px 7px;
  padding: 2rem;
  transform: translateX(-100%);
  z-index: 1000;
  transition: all 300ms ease-in-out;

  &.hide-sidebar {
    transform: translateX(0);
  }
`;

export const SidebarHideBtn = styled.button`
  position: absolute;
  right: 2rem;
  transition: all 300ms ease-in-out;
  cursor: pointer;
  outline: 0;
  border: none;
  background-color: transparent;
  &:hover {
    color: ${({ theme }) => theme.colors.mainColorSecond};
  }
`;

export const SidebarHideIcon = styled.i``;

export const SidebarContainer = styled.div``;

export const CategoryTitle = styled.div`
  padding-bottom: 1rem;
  font-size: 17px;
  letter-spacing: 0.5px;
  text-transform: uppercase;
`;

export const CategoryList = styled.ul`
  overflow-y: scroll;
  height: calc(100vh - 60px);
  list-style-type: none;

  &::-webkit-scrollbar {
    width: 5px;
  }
  &::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background-color: lighten(#ff6433, 5%);
    outline: 1px solid #ff6433;
  }
`;

export const CategoryItem = styled.li`
  padding: 0.8rem 0;
  margin-right: 1.2rem;
  border-bottom: 0.5px solid rgba(0, 0, 0, 0.1);
`;

export const CatListLink = styled.a`
  font-size: 14px;
  letter-spacing: 0.3px;
  line-height: 1.6;
  text-decoration: none;
  text-transform: capitalize;
  transition: all 300ms ease-in-out;

  &:hover {
    color: #ff6433;
    margin-left: 10px;
  }
`;
