import styled from 'styled-components';

export const FooterContainer = styled.footer`
  border-top: 4px solid ${({ theme }) => theme.colors.mainColor};
  padding: 40px 0;
  background-color: ${({ theme }) => theme.colors.backgroundColor};
  text-align: center;
`;

export const FooterContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  margin: 0 30px;
`;

export const FooterHeading = styled.div`
  margin-top: 27px;

  @media (max-width: 64em) {
    flex: 0 0 47%;
    width: 47%;
  }

  @media (max-width: 46.25em) {
    flex: 0 0 100%;
    width: 100%;
  }
`;

export const FooterHeadingContent = styled.h3`
  font-size: 2.6rem;
  line-height: 3.2rem;
  color: ${({ theme }) => theme.colors.textColor};
  font-weight: 500;
  text-align: center;
`;

export const FooterList = styled.div`
  padding-left: 0;
  list-style: none;
  margin-top: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const FooterItem = styled.div`
  margin-top: 27px;
`;

export const FooterLink = styled.div`
  a {
    color: #737373;
    display: block;
    font-size: 2rem;
    line-height: 2.4rem;
    text-decoration: none;
    padding: 7px 0;
    display: flex;
    align-items: center;
  }
`;

export const FooterLinkIcon = styled.i``;

export const FooterLinkDes = styled.span`
  margin-left: 8px;
`;

export const FooterDownloadApp = styled.div`
  display: flex;
  align-items: center;
  margin-top: 16px;
  justify-content: center;
`;

export const QrImage = styled.img`
  width: 120px;
  height: 120px;
  border: 1px solid #ccc;
`;

export const StoreImage = styled.img`
  height: 28px;
  margin-left: 12px;
  padding: 4px 0;
`;

export const FooterAppImg = styled.div`
  display: flex;
  flex-direction: column;
  object-fit: contain;
  justify-content: center;
`;
export const FooterDownloadAppLink = styled.div`
  color: transparent;
  text-decoration: none;
  padding: 2px 4px;
`;
