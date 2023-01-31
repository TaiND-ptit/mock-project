import { Button, Input } from 'antd';
import images from 'assets/images';
import styled, { css } from 'styled-components';
export const Container = styled.div`
  width: 100%;
  display: flex;
  background-color: ${({ theme }) => theme.colors.mainColorSecond};
  padding: 50px 0;
  justify-content: space-between;
`;

export const FormLoginLeft = styled.div``;

export const FormLoginLeftImg = styled.img`
  // padding-top: 50%;
  background-repeat: no-repeat;
  background-position: center center;
  // transform: translateX(-100px);
`;

export const FormLoginRight = styled.div`
  width: 560px;
  height: 460px;
  background-color: ${({ theme }) => theme.colors.whiteColor};
  box-shadow: 0 2px 6px rgb(0 0 0 / 20%);
  transform: translateX(-162px);
  border-radius: 4px;

  @media (min-width: 64em) and (max-width: 77.4375em) {
    transform: translate(-100px, 140px);
  }
`;
export const FormLoginRegister = styled.div`
  padding: 30px;
`;
export const FormHeading = styled.div`
  font-size: 3rem;
  line-height: 3.2rem;
  font-weight: 500;
  color: rgba(0, 0, 0, 0.8);
`;

export const FormSpacer = styled.div`
  margin-top: 36px;
`;

export const InputLogin = styled(Input)`
  height: 40px;
  font-size: 2.2rem;
  line-height: 2.4rem;
  color: rgba(0, 0, 0, 0.8);
  padding: 8px 12px;
  border: 1px solid #b3b3b3;
  border-radius: 3px;
  outline: none;
  user-select: none;
`;

export const ButtonLogin = styled(Button)`
  font-size: 2.3rem;
  line-height: 2.6rem;
  text-transform: uppercase;
  width: 100%;
  user-select: none;
  text-decoration: none;
  border: none;
  border-radius: 2px;
  height: 42px;
  background-color: ${({ theme }) => theme.colors.mainColor};
  color: ${({ theme }) => theme.colors.whiteColor};
`;

export const FormMenu = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 10px;
  user-select: none;
`;

export const FormMenuLink = styled.a`
  font-size: 2rem;
  line-height: 2.2rem;
  color: #05a;
  text-decoration: none;
`;

export const FormOr = styled.div`
  width: 100%;
  margin-top: 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const FormOrFirst = styled.div`
  width: 45%;
  height: 1px;
  background-color: ${({ theme }) => theme.colors.borderColor};
`;

export const FormOrContent = styled.div`
  font-size: 2rem;
  line-height: 2.2rem;
  color: #ccc;
  padding: 0 10px;
  text-transform: uppercase;
`;

export const FormOrSecond = styled.div`
  width: 45%;
  height: 1px;
  background-color: ${({ theme }) => theme.colors.borderColor};
`;

export const FormLoginSocial = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 16px;
`;

export const FormLoginSocialContainer = styled.div`
  width: 32%;
  height: 40px;
  padding-left: 5px;
  border-radius: 2px;
`;

export const FormLoginSocialImgFacebook = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-right: 5px;
  font-size: 2rem;
  color: ${({ theme }) => theme.colors.whiteColor};
  background-color: #1877f2;
`;

export const FormLoginSocialImg = styled.img`
  width: 24px;
  height: 24px;
  margin: 10px;
  object-fit: contain;
`;

export const FormLoginSocialImgGoogle = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-right: 5px;
  font-size: 2rem;
  color: ${({ theme }) => theme.colors.whiteColor};
  background-color: #4285f4;
`;
export const FormLoginSocialImgApple = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-right: 5px;
  font-size: 2rem;
  color: ${({ theme }) => theme.colors.whiteColor};
  background-color: ${({ theme }) => theme.colors.blackColor};
`;

export const FormLoginSocialContent = styled.p`
  font-size: 2.1rem;
  line-height: 2.3rem;
  color: ${({ theme }) => theme.colors.whiteColor};
  padding-left: 7px;
`;

export const FormOptions = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 32px;
`;

export const FormOptionsHeading = styled.p`
  font-size: 2.2rem;
  line-height: 2.4rem;
  color: rgba(0, 0, 0, 0.3);
`;

export const FormRegiser = styled.a`
  font-size: 2.3rem;
  line-height: 2.5rem;
  color: ${({ theme }) => theme.colors.mainColorSecond};
  padding-left: 6px;
  text-decoration: none;
`;
