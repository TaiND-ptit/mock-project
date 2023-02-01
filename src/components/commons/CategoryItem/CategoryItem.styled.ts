import styled from 'styled-components';

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
