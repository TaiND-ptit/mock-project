import styled from 'styled-components';

export const Wrapper = styled.div`
  // margin-left: -6px;
  // margin-right: -6px;
  display: flex;
  flex-wrap: wrap;
  margin: 15px -6px;
  @media (max-width: 64em) {
    padding: 15px 0;
    width: 90%;
    margin: 0 auto;
    overflow: hidden;
  }
`;

export const CategoryContainer = styled.div`
  flex: 0 0 100%;
  width: 100%;
  padding-left: 6px;
  padding-right: 6px;
`;

export const CategoryBox = styled.div``;

export const CategoryBoxList = styled.ul`
  list-style: none;
  padding-left: 0;
  display: flex;
  justify-content: space-evenly;
`;
