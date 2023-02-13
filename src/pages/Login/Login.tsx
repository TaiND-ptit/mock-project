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
import { Form } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import { User } from 'types/user.type';
import { loginUser } from 'api/login.api';
import { useMutation } from '@tanstack/react-query';
import { useDispatch, useSelector } from 'react-redux';
import { addToken, addUserName } from 'store/authSlice';
import { getAllCarts } from 'store/cartSlice';

type FormStateLogin = Omit<User, 'avatar' | 'name'>;
const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const carts = useSelector(getAllCarts);
  const isItemCart: number = carts.length;
  const loginUserMutation = useMutation({
    mutationFn: (body: FormStateLogin) => {
      return loginUser(body).then(function (response) {
        const accessToken = response.data.authorisation.token;
        const userName: string = response.data.user.name;
        dispatch(addToken(accessToken));
        dispatch(addUserName(userName));
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
        if (isItemCart === 0) {
          navigate('/');
        } else {
          navigate('/cart');
        }
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
    </div>
  );
};

export default Login;
