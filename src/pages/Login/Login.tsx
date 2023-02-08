import Footer from 'components/commons/Footer/Footer';
import HeaderLoginRegister from 'components/commons/HeaderLoginRegister/HeaderLoginRegister';
import {
  Container,
  FormLoginLeft,
  FormLoginLeftImg,
  FormLoginRight,
  FormLoginRegister,
  FormHeading,
  FormSpacer,
  ButtonLogin,
  InputLogin,
  FormMenu,
  FormOr,
  FormOrFirst,
  FormOrContent,
  FormOrSecond,
  FormLoginSocial,
  FormLoginSocialImgFacebook,
  FormLoginSocialImgGoogle,
  FormLoginSocialImgApple,
  FormLoginSocialImg,
  FormLoginSocialContent,
  FormLoginSocialContainer,
  FormOptions,
  FormOptionsHeading,
  FormRegister,
  MesError
} from './Login.styled';
import images from 'assets/images';
import { Button, Form, Input } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import { User, UserLogin } from 'types/user.type';
import { loginUser } from 'api/login.api';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useState } from 'react';

type FormStateLogin = Omit<User, 'avatar' | 'name'>;

// const initialFormState: FormStateLogin = {
//   email: '',
//   password: ''
// };

const Login = () => {
  const navigate = useNavigate();
  // const [formState, setFormState] = useState<UserLogin>(initialFormState);

  const loginUserMutation = useMutation({
    mutationFn: (body: FormStateLogin) => {
      return loginUser(body).then(function (response) {
        const token = response.data.authorisation.token;
        const user = response.data.user.name;
        localStorage.setItem('login', token);
        localStorage.setItem('userLogin', user);
      });
    }
  });

  const onFinish = (values: any) => {
    const loginData: any = {
      email: values.email,
      password: values.password
    };

    loginUserMutation.mutate(loginData, {
      onSuccess: () => {
        navigate('/');
      }
    });
  };

  return (
    <div>
      <HeaderLoginRegister headingText='Đăng nhập' />
      <Container>
        <FormLoginLeft>
          <FormLoginLeftImg src={images.formLeft.loginImg} alt='background register' />
        </FormLoginLeft>
        <FormLoginRight>
          <FormLoginRegister>
            <Form initialValues={{ remember: true }} onFinish={onFinish} autoComplete='off'>
              <FormHeading>Đăng Nhập</FormHeading>
              <FormSpacer></FormSpacer>
              {loginUserMutation.isError && <MesError>Email hoặc mật khẩu sai</MesError>}

              <Form.Item
                name='email'
                rules={[
                  { required: true, message: 'Please input your email!' },
                  { type: 'email', message: 'The input is not valid email!' }
                ]}
              >
                <InputLogin placeholder='Nhập email của bạn' />
              </Form.Item>

              <Form.Item
                name='password'
                rules={[
                  { required: true, message: 'Please input your password!' },
                  { min: 3, message: 'Mật khẩu nằm trong khoảng 3 đến 8' },
                  { max: 8, message: 'Mật khẩu nằm trong khoảng 3 đến 8' }
                ]}
              >
                <InputLogin placeholder='Nhập mật khẩu' />
              </Form.Item>

              <Form.Item>
                <ButtonLogin htmlType='submit'>Đăng Nhập</ButtonLogin>
              </Form.Item>
              <FormMenu>
                <Link to=''>Quên mật khẩu </Link>
                <Link to=''>Đăng nhập với SMS</Link>
              </FormMenu>
              <FormOr>
                <FormOrFirst></FormOrFirst>
                <FormOrContent>Hoặc</FormOrContent>
                <FormOrSecond></FormOrSecond>
              </FormOr>
              <FormLoginSocial>
                <FormLoginSocialContainer>
                  <FormLoginSocialImgFacebook>
                    <FormLoginSocialImg src={images.formLoginSocialImg.facebookIcon} alt='facebook' />
                    <FormLoginSocialContent>Facebook</FormLoginSocialContent>
                  </FormLoginSocialImgFacebook>
                </FormLoginSocialContainer>

                <FormLoginSocialContainer>
                  <FormLoginSocialImgGoogle>
                    <FormLoginSocialImg src={images.formLoginSocialImg.googleIcon} alt='google' />
                    <FormLoginSocialContent>Google</FormLoginSocialContent>
                  </FormLoginSocialImgGoogle>
                </FormLoginSocialContainer>

                <FormLoginSocialContainer>
                  <FormLoginSocialImgApple>
                    <FormLoginSocialImg src={images.formLoginSocialImg.appleIcon} alt='apple' />
                    <FormLoginSocialContent>Apple</FormLoginSocialContent>
                  </FormLoginSocialImgApple>
                </FormLoginSocialContainer>
              </FormLoginSocial>
              <FormOptions>
                <FormOptionsHeading>Bạn mới biết đến Shopee?</FormOptionsHeading>
                <FormRegister>
                  <Link to='/register'>Đăng ký</Link>
                </FormRegister>
              </FormOptions>
            </Form>
          </FormLoginRegister>
        </FormLoginRight>
      </Container>

      <Footer />
    </div>
  );
};

export default Login;
