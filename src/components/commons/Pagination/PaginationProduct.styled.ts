import styled from 'styled-components';

export const Wrapper = styled.div`

`;

export const PaginationPage = styled.ul`
display: flex;
align-items: center;
justify-content: center;
margin: 50px auto 40px;
`
export const PaginationList = styled.li`
padding: 0 16px;
`

export const PaginationLink = styled.div`
 a{
    display: block;
    color: #939393;
    font-size: 3rem;
    font-weight: 300;
    text-decoration: none;
    min-width: 40px;
    height: 30px;
    line-height: 30px;
    text-align: center;
    border-radius: 2px;
 }

`

export const PaginationIcon = styled.div`
   svg {
    color: ${({ theme }) => theme.colors.textColor};
    fill: currentColor
    margin-top: 7px;
   }
`
export const PaginationLinkOne = styled.div`
color: ${({ theme }) => theme.colors.whiteColor};
background-color: ${({ theme }) => theme.colors.mainColor};

a{
  display: block;
  font-size: 3rem;
  font-weight: 300;
  text-decoration: none;
  min-width: 30px;
  height: 30px;
  line-height: 30px;
  text-align: center;
  border-radius: 2px;
}
`
// export const Wrapper = styled.div`

// `
// export const Wrapper = styled.div`

// `
// export const Wrapper = styled.div`

// `
// export const Wrapper = styled.div`

// `
// export const Wrapper = styled.div`

// `
// export const Wrapper = styled.div`

// `
// export const Wrapper = styled.div`

// `
// export const Wrapper = styled.div`

// `
// export const Wrapper = styled.div`

// `
// export const Wrapper = styled.div`

// `
// export const Wrapper = styled.div`

// `
// export const Wrapper = styled.div`

// `