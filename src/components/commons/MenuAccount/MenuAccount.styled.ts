import styled from 'styled-components';
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