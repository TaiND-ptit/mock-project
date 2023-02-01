import styled from 'styled-components';

export const AccountWrapper = styled.div`
  display: flex;
  padding: 1.25rem 0 3.125rem;
  margin-right: auto;
  margin-left: auto;
  width: 1200px;
`;

export const AccountLeft = styled.div`
  display: block;
  width: 20%;
  flex-shrink: 0;
`;

export const AccountTop = styled.div`
  display: flex;
  padding: 15px 0;
  border-bottom: 1px solid #efefef;
`;

export const ShopeeAvatar = styled.div`
  width: 50px;
  height: 50px;
  display: inline-block;
  position: relative;
  border-radius: 50%;
  border: 0.0625rem solid rgba(0, 0, 0, 0.09);
  box-sizing: border-box;
`;

export const AccountImg = styled.img`
  width: 100%;
  position: relative;
  background-color: ${({ theme }) => theme.colors.backgroundColor};
  border-radius: 50%;
  overflow: hidden;
`;

export const AccountContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 15px;
  overflow: hidden;
`;

export const AccountText = styled.div`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  min-height: 2rem;
  font-weight: 600;
  margin-bottom: 5px;
  font-size: 13px;
  color: ${({ theme }) => theme.colors.textColor};
`;

export const AccountEdit = styled.div`
  a {
    color: #888;
    font-size: 12px;
    text-transform: capitalize;
  }

  svg {
    margin-right: 4px;
  }
`;

export const AccountBottom = styled.div`
  list-style: none;
  padding: 0;
  margin: 27px 0 0;
  cursor: pointer;
`;

export const AccountItem = styled.div`
  position: relative;
  cursor: pointer;
`;

export const AccountItemHeader = styled.div`
  margin-top: 30px;
  a {
    color: rgba(0, 0, 0, 0.87);
    display: flex;
    align-items: center;
    margin-bottom: 0.9375rem;
    text-transform: capitalize;
    transition: color 0.1s cubic-bezier(0.4, 0, 0.2, 1);
  }
`;

export const AccountItemContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 3.25rem;
  height: 3.25rem;
  line-height: 1.25rem;
  text-align: center;
  border-radius: 50%;
  color: ${({ theme }) => theme.colors.whiteColor};
  flex-shrink: 0;
  margin-right: 0.625rem;
  text-transform: capitalize;
`;

export const AccountItemImg = styled.img`
  width: 100%;
  height: 100%;
`;

export const AccountContentTitle = styled.div`
  line-height: 1rem;

  &:hover {
    color: ${({ theme }) => theme.colors.mainColorSecond};
  }
`;

export const AccountContentText = styled.span`
  font-weight: 500;
  margin-right: 0.3125rem;
  font-size: 14px;
  line-height: 2.5rem;
`;

export const AccountContentTextImg = styled.span`
  vertical-align: middle;
  position: absolute;
  line-height: 1rem;
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

// export const AccountInfoRight = styled.div`
// display: flex;
// width: 17.5rem;
//     overflow: hidden;
//     border-left: 0.0625rem solid #efefef;
//     justify-content: center;
// `;

// export const ChooseImg = styled.div`
// display: flex;
// align-items: center;
// justify-content: center;
// `;
