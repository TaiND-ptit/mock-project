import styled from 'styled-components';

export const Header = styled.header`
  background: ${({ theme }) => theme.colors.whiteColor};
  height: 70px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.09);
`;

export const NavbarMenu = styled.header`
  margin-top: 10px;
`;

export const NavbarMenuContent = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const NavbarMenuLeft = styled.div`
  display: flex;
  align-items: center;
`;

export const NavbarMenuLeftLogo = styled.a`
    text-decoration: none;
        .logo__shopee-cart{
            color: ${({ theme }) => theme.colors.mainColorSecond};
            fill: currentColor;
            width: 160px;
            height: 46px;
        }
}
`;

export const NavbarMenuLeftCart = styled.div`
  color: ${({ theme }) => theme.colors.mainColorSecond};
  font-size: 3.4rem;
  padding: 10px;
  text-transform: capitalize;
  margin: 10px 0 0 6px;
`;

export const NavbarMenuleftCartDes = styled.p`
  color: ${({ theme }) => theme.colors.blackColor};
`;

export const NavbarMenuRight = styled.div`
  display: flex;
  align-items: center;
`;

export const NavbarMenuRightHelp = styled.a`
  font-size: 2.2rem;
  line-height: 2.4rem;
  color: ${({ theme }) => theme.colors.mainColorSecond};
  text-decoration: none;
`;
