import styled from 'styled-components';

export const NotFoundcontainer = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const ErrorImgWrapper = styled.div`
  width: 30rem;
  max-width: 100%;
  margin: 0 auto;
`;

export const NotFoundImg = styled.img``;

export const NotFoundTitle = styled.h2`
    color: rgba(0,0,0,.54);
    margin: 0;
    word-wrap: break-word;
    font-size: 15px;
}
`;

export const BackHome = styled.button`
  background: #ee4d2d;
  border-radius: 4px;
  border: none;
  margin-top: 2rem;
  padding: 1.5rem;
  a {
    display: inline-block;
    text-decoration: none;
    color: #fff !important;
    overflow: hidden;
  }
`;
// export const NotFoundTitle = styled.h2`
// `;
// export const NotFoundTitle = styled.h2`
// `;
