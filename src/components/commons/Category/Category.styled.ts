import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  // margin-left: -6px;
  // margin-right: -6px;
  display: flex;
  flex-wrap: wrap;
  margin: 15px -6px;
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

export const CategoryBoxItem = styled.li`
  width: 100px;
  height: 81px;
  user-select: none;
  &:hover {
    transform: translateY(-1px);
  }
`;

export const CategoryBoxLink = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-decoration: none;
  text-align: center;
`;

export const CategoryBoxImg = styled.img`
  width: 45px;
  height: 45px;
`;

export const CategoryBoxText = styled.span`
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
  font-size: 2rem;
  line-height: 2.4rem;
  color: $black-color;
  text-transform: capitalize;
  margin-top: 5px;
`;

// export const SliderContainer = styled.div`

// `;

// export const SliderContainer = styled.div`

// `;

// export const SliderContainer = styled.div`

// `;

// export const SliderContainer = styled.div`

// `;

// export const SliderContainer = styled.div`

// `;
