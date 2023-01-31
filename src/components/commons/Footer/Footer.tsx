import { Col, Row } from 'antd';
import {
  FooterContainer,
  FooterContent,
  FooterHeading,
  FooterHeadingContent,
  FooterList,
  FooterItem,
  FooterLink,
  FooterLinkIcon,
  FooterLinkDes,
  FooterDownloadApp,
  QrImage,
  FooterAppImg,
  FooterDownloadAppLink,
  StoreImage
} from './Footer.styled';
import images from 'assets/images';
const Footer = () => {
  return (
    <FooterContainer>
      <Row>
        {/* <FooterContent> */}
        <Col lg={{ span: 6 }} xl={{ span: 6 }}>
          <FooterHeading>
            <FooterHeadingContent>Chăm sóc khách hàng</FooterHeadingContent>
            <FooterList>
              <FooterItem>
                <FooterLink>Trung tâm trợ giúp</FooterLink>
              </FooterItem>
              <FooterItem>
                <FooterLink>Liên hệ với chúng tôi qua email</FooterLink>
              </FooterItem>
              <FooterItem>
                <FooterLink>Hướng dẫn mua hàng</FooterLink>
              </FooterItem>
            </FooterList>
          </FooterHeading>
        </Col>
        <Col lg={{ span: 6 }} xl={{ span: 6 }}>
          <FooterHeading>
            <FooterHeadingContent>Về Shopee</FooterHeadingContent>
            <FooterList>
              <FooterItem>
                <FooterLink>Giới thiệu về Shopee</FooterLink>
              </FooterItem>
              <FooterItem>
                <FooterLink>Bạn muốn bán hàng cùng Shopee ?</FooterLink>
              </FooterItem>
              <FooterItem>
                <FooterLink>Điều khoản dịch vụ</FooterLink>
              </FooterItem>
            </FooterList>
          </FooterHeading>
        </Col>
        <Col lg={{ span: 6 }} xl={{ span: 6 }}>
          <FooterHeading>
            <FooterHeadingContent>Theo dõi chúng tôi trên</FooterHeadingContent>
            <FooterList>
              <FooterItem>
                <FooterLink>
                  <FooterLinkIcon className='fab fa-facebook'></FooterLinkIcon>
                  <FooterLinkDes>Facebook</FooterLinkDes>
                </FooterLink>
              </FooterItem>
              <FooterItem>
                <FooterLink>
                  <FooterLinkIcon className='fab fa-youtube'></FooterLinkIcon>
                  <FooterLinkDes>Youtube</FooterLinkDes>
                </FooterLink>
              </FooterItem>
              <FooterItem>
                <FooterLink>
                  <FooterLinkIcon className='fab fa-github'></FooterLinkIcon>
                  <FooterLinkDes>Github</FooterLinkDes>
                </FooterLink>
              </FooterItem>
            </FooterList>
          </FooterHeading>
        </Col>
        <Col lg={{ span: 6 }} xl={{ span: 6 }}>
          <FooterHeading>
            <FooterHeadingContent>Vào cửa hàng trên ứng dụng</FooterHeadingContent>
            <FooterDownloadApp>
              <QrImage src={images.app.qrCode} alt='QR code' />
              <FooterAppImg>
                <FooterDownloadAppLink>
                  <StoreImage src={images.app.googlePlay} alt='Google play' />
                </FooterDownloadAppLink>

                <FooterDownloadAppLink>
                  <StoreImage src={images.app.appStore} alt='AppStore' />
                </FooterDownloadAppLink>
              </FooterAppImg>
            </FooterDownloadApp>
          </FooterHeading>
        </Col>
        {/* </FooterContent> */}
      </Row>
    </FooterContainer>
  );
};

export default Footer;
