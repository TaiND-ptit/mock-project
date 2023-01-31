import styled, { css } from 'styled-components';

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
`;
export const ItemLink = styled.a`
  font-size: 14px;
  text-decoration: none;
  color: unset;
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

export const TopLinkItem = styled.a`
  display: flex;
  align-items: center;
`;
export const TopLinkIconText = styled.span``;

export const NavbarBottom = styled.div``;
