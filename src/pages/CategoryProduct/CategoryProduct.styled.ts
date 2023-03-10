import styled from 'styled-components';

export const Wrapper = styled.div`
  flex: 0 0 100%;
  width: 100%;
  padding-left: 6px;
  padding-right: 6px;
`;

export const CategoryProductHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: rgba(0, 0, 0, 0.04);
  padding: 12px 22px;
  border-radius: 2px;
`;

export const CategoryProductTitle = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

export const CategoryProductLabel = styled.span`
  font-size: 2.5rem;
  line-height: 3rem;
  color: #f12f09;
  text-transform: uppercase;
  margin-right: 204px;
`;

export const CategoryProductContainer = styled.div`
  margin-left: -6px;
  margin-right: -6px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const CategoryProductBorder = styled.div`
  position: absolute;
  left: -21px;
  bottom: -11px;
  width: 180px;
  height: 3.5px;
  background-color: #f12f09;
`;
