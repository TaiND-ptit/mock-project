import Footer from 'components/commons/Footer/Footer';
import HeaderLogin from 'components/commons/HeaderLogin/HeaderLogin';
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
  FormMenuLink,
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
  FormRegiser
} from './Login.styled';
import images from 'assets/images';
import { Button, Form, Input } from 'antd';

const onFinish = (values: any) => {
  console.log('Success:', values);
};

const onFinishFailed = (errorInfo: any) => {
  console.log('Failed:', errorInfo);
};

const Login = () => {
  return (
    <div>
      <HeaderLogin />

      <Container>
        <FormLoginLeft>
          <FormLoginLeftImg src={images.formLeft.loginImg} alt='background register' />
          {/* <FormLoginLeftImg style={{ backgroundImage: `url(${images.formLeft.loginImg})`}}/> */}
        </FormLoginLeft>
        <FormLoginRight>
          <FormLoginRegister>
            <Form
              // name="basic"
              // labelCol={{ span: 8 }}
              // wrapperCol={{ span: 16 }}
              // style={{ maxWidth: 600 }}
              initialValues={{ remember: true }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              autoComplete='off'
            >
              <FormHeading>Đăng Nhập</FormHeading>
              <FormSpacer></FormSpacer>
              <Form.Item name='username' rules={[{ required: true, message: 'Please input your username!' }]}>
                <InputLogin placeholder='Email/Số điện thoại/Tên đăng nhập' />
              </Form.Item>

              <Form.Item name='password' rules={[{ required: true, message: 'Please input your password!' }]}>
                <InputLogin placeholder='Nhập mật khẩu' />
              </Form.Item>

              <Form.Item>
                <ButtonLogin htmlType='submit'>Đăng Nhập</ButtonLogin>
              </Form.Item>
              <FormMenu>
                <FormMenuLink href=''>Quên mật khẩu </FormMenuLink>
                <FormMenuLink href=''>Đăng nhập với SMS</FormMenuLink>
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
                <FormRegiser href=''>Đăng ký</FormRegiser>
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
