import styled from 'styled-components';

export const AccountWrapper = styled.div`
  display: flex;
  padding: 1.25rem 0 3.125rem;
  margin-right: auto;
  margin-left: auto;
  width: 1200px;

  @media (max-width: 64em) {
    width: 80%;
    margin: auto;
    flex-direction: column;
  }
`;

export const AccountRight = styled.div`
  position: relative;
  flex-grow: 1;
  width: 80%;
  box-sizing: border-box;
  margin-left: 1.6875rem;
  min-width: 0;
  background: #fff;
  box-shadow: 0 1px 2px 0 rgb(0 0 0 / 13%);
  border-radius: 0.125rem;

  @media (max-width: 64em) {
    width: 100%;
    margin-top: 10px;
    margin-left: 0;
  }
`;

export const AccountIfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  min-height: 100%;
`;

export const AccountIfoContentWrapper = styled.div`
  display: contents;
`;

export const AccountIfoContent = styled.div`
  padding: 0 1.875rem 0.625rem;
`;

export const AccountIfoContentHeader = styled.div`
  border-bottom: 0.0625rem solid #efefef;
  padding: 1.125rem 0;
`;

export const AccountIfoContentTitle = styled.h1`
  font-size: 3.125rem;
  font-weight: 500;
  line-height: 5.5rem;
  text-transform: capitalize;
  color: ${({ theme }) => theme.colors.textColor};
`;

export const AccountIfoContentDes = styled.div`
  margin-top: 0.1875rem;
  font-size: 1.875rem;
  line-height: 3.0625rem;
  color: #555;
`;

export const AccountInfoBottom = styled.div`
  padding-top: 1.875rem;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
`;

export const AccountInfoLeft = styled.div`
  flex: 1;
  padding-right: 3.125rem;
`;

export const AccountInfoRight = styled.div`
  display: flex;
  width: 17.5rem;
  overflow: hidden;
  border-left: 0.0625rem solid #efefef;
  justify-content: center;
`;

export const ChooseImg = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
