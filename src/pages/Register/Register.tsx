import HeaderLoginRegister from 'components/commons/HeaderLoginRegister/HeaderLoginRegister';
import { Button, Form, Input } from 'antd';
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
  FormRegister
} from './Register.styled';
import Footer from 'components/commons/Footer/Footer';
import images from 'assets/images';
import { Link, useNavigate } from 'react-router-dom';
import { useMutation } from '@tanstack/react-query';
import { User } from 'types/user.type';
import { addUser } from 'api/register.api';

type FormStateRegister = Omit<User, 'avatar'>;

const Register = () => {
  const navigate = useNavigate();

  const registerUserMutation = useMutation({
    mutationFn: (body: FormStateRegister) => {
      return addUser(body);
    }
  });

  const onFinish = (values: any) => {
    const registerData: any = {
      name: values.name,
      email: values.email,
      password: values.password
    };

    registerUserMutation.mutate(registerData, {
      onSuccess: () => {
        navigate('/login');
      }
    });
  };

  return (
    <>
      <HeaderLoginRegister headingText='Đăng kí' />
      <Container>
        <FormLoginLeft>
          <FormLoginLeftImg src={images.formLeft.loginImg} alt='background register' />
        </FormLoginLeft>
        <FormLoginRight>
          <FormLoginRegister>
            <Form initialValues={{ remember: true }} onFinish={onFinish} autoComplete='off'>
              <FormHeading>Đăng kí</FormHeading>
              <FormSpacer></FormSpacer>
              <Form.Item
                name='name'
                rules={[
                  { required: true, message: 'Please input your name!' },
                  {
                    min: 3,
                    message: 'Tên nằm trong khoảng 3 đến 20'
                  },
                  {
                    max: 20,
                    message: 'Tên nằm trong khoảng 3 đến 20'
                  }
                ]}
              >
                <InputLogin placeholder='Tên đầy đủ' />
              </Form.Item>

              <Form.Item
                name='email'
                rules={[
                  { type: 'email', message: 'The input is not valid email!' },
                  { required: true, message: 'Please input your email!' }
                ]}
              >
                <InputLogin placeholder='Nhập email' />
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
                <ButtonLogin htmlType='submit'>Đăng kí</ButtonLogin>
              </Form.Item>

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
                <FormOptionsHeading>Bạn đã có tài khoản?</FormOptionsHeading>
                <FormRegister>
                  <Link to='/login'>Đăng nhập</Link>
                </FormRegister>
              </FormOptions>
            </Form>
          </FormLoginRegister>
        </FormLoginRight>
      </Container>
    </>
  );
};

export default Register;
