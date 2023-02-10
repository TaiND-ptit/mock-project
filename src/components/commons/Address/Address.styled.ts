import styled from 'styled-components';
export const AddressContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-center: center;
  justify-content: center;
  position: relative;
`;

export const AddressContentWrapper = styled.div`
  display: contents;
`;

export const AddressContent = styled.div`
  padding: 0 1.875rem 0.625rem;
`;

export const AddressContentHeader = styled.div`
  border-bottom: 0.0625rem solid #efefef;
  padding: 1.125rem 0;
`;

export const AddressContentTitle = styled.h1`
  font-size: 3.125rem;
  font-weight: 500;
  line-height: 5.5rem;
  text-transform: capitalize;
  color: ${({ theme }) => theme.colors.textColor};
`;

export const AddressContentDes = styled.div`
  margin-top: 0.1875rem;
  font-size: 1.875rem;
  line-height: 3.0625rem;
  color: #555;
`;

export const AddressBottom = styled.div`
  padding-top: 1.875rem;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
`;

export const AddressLeft = styled.div`
  flex: 1;
  padding-right: 3.125rem;
`;
