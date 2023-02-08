import styled from 'styled-components';

export const HeaderContainer = styled.div`
  padding: 0 2rem;
`;

export const Wrapper = styled.header`
  background: linear-gradient(0, #fe6232, #f6422e);
  color: ${({ theme }) => theme.colors.whiteColor};
`;

export const NavbarTop = styled.div`
  border-bottom: 1px solid lighten(${({ theme }) => theme.colors.mainColor}, 10%);
  display: flex;
  text-align: center;
  justify-content: space-between;
  padding-top: 8px;
  padding-bottom: 8px;

  @media (max-width: 64em) {
    flex-direction: column;
    .navbar-left {
      margin-bottom: 4px;
    }
  }
`;

export const ListTopLink = styled.ul`
  display: flex;
  align-items: center;
  list-style-type: none;
`;
export const ListLinkItem = styled.li`
  font-size: 14px;
  &.vert-line {
    width: 2px;
    background-color: ${({ theme }) => theme.colors.whiteColor};
    height: 16px;
    margin: 0 12px;
  }

  &.social-link {
    display: flex;
    align-items: center;
  }

  &.icon-support {
    margin-left: 8px;
    margin-right: 8px;
  }

  a {
    font-size: 14px;
    text-decoration: none;
    color: unset;
  }
`;
export const ItemLink = styled.div`
  a {
    font-size: 14px;
    text-decoration: none;
    color: unset;
  }
`;

export const ItemLinkDes = styled.span`
  font-size: 14px;
`;

export const SocialListLinks = styled.ul`
  display: flex;
  align-items: center;
  list-style-type: none;
`;

export const SocialItem = styled.li`
  margin-left: 8px;
  margin-right: 8px;

  i {
    font-size: 15px;
  }
`;

export const NavbarRight = styled.div``;

export const TopLinkItem = styled.div`
  a {
    display: flex;
    align-items: center;
  }
`;
export const TopLinkIconText = styled.span``;

export const NavbarBottom = styled.div``;
export const ListLinkItemUserLogin = styled.li`
  position: relative;
  display: flex;
  align-items: center;
  cursor: pointer;
  animation: fadeIn ease-in 0.2s;
`;

export const UserLogin = styled.div`
  display: flex;
  align-items: center;
  margin-left: 8px;
`;
export const ListItemUserImg = styled.img`
  width: 22px;
  height: 22px;
  border-radius: 50%;
  border: 1px solid rgba(0, 0, 0, 0.1);
`;
export const ListItemUserName = styled.span`
  color: ${({ theme }) => theme.colors.whiteColor};
  font-size: 2rem;
  margin-left: 4px;
`;

export const UserUser = styled.div``;

export const InfoUser = styled.ul`
  width: 166px;
  // position: absolute;
  // list-style: none;
  // padding-left: 0;
  // // top: 28px;
  // right: 0;
  background-color: ${({ theme }) => theme.colors.whiteColor};
  border-radius: 2px;
  box-shadow: 0 1px 6px #ccc;
  overflow: hidden;
`;
export const InfoListUser = styled.li`
  padding: 12px 16px;
  color: ${({ theme }) => theme.colors.textColor};
  cursor: pointer;
  font-size: 2rem;
  a {
    display: block;
    color: ${({ theme }) => theme.colors.textColor};
    text-decoration: none;
  }
`;
