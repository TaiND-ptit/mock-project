
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
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterHeading>
          <FooterHeadingContent>Chăm sóc khách hàng</FooterHeadingContent>
          <FooterList>
            <FooterItem>
              <FooterLink>
                <Link to=''>Trung tâm trợ giúp</Link>
              </FooterLink>
            </FooterItem>
            <FooterItem>
              <FooterLink>
                <Link to=''>Liên hệ với chúng tôi qua email</Link>
              </FooterLink>
            </FooterItem>
            <FooterItem>
              <FooterLink>
                {' '}
                <Link to=''>Hướng dẫn mua hàng</Link>
              </FooterLink>
            </FooterItem>
          </FooterList>
        </FooterHeading>

        <FooterHeading>
          <FooterHeadingContent>Về Shopee</FooterHeadingContent>
          <FooterList>
            <FooterItem>
              <FooterLink>
                <Link to=''>Giới thiệu về Shopee</Link>
              </FooterLink>
            </FooterItem>
            <FooterItem>
              <FooterLink>
                <Link to=''>Bạn muốn bán hàng cùng Shopee ?</Link>
              </FooterLink>
            </FooterItem>
            <FooterItem>
              <FooterLink>
                <Link to=''>Điều khoản dịch vụ</Link>
              </FooterLink>
            </FooterItem>
          </FooterList>
        </FooterHeading>

        <FooterHeading>
          <FooterHeadingContent>Theo dõi chúng tôi trên</FooterHeadingContent>
          <FooterList>
            <FooterItem>
              <FooterLink>
                <Link to=''>
                  <FooterLinkIcon className='fab fa-facebook'></FooterLinkIcon>
                  <FooterLinkDes>Facebook</FooterLinkDes>
                </Link>
              </FooterLink>
            </FooterItem>
            <FooterItem>
              <FooterLink>
                <Link to=''>
                  <FooterLinkIcon className='fab fa-youtube'></FooterLinkIcon>
                  <FooterLinkDes>Youtube</FooterLinkDes>
                </Link>
              </FooterLink>
            </FooterItem>
            <FooterItem>
              <FooterLink>
                <Link to=''>
                  <FooterLinkIcon className='fab fa-github'></FooterLinkIcon>
                  <FooterLinkDes>Github</FooterLinkDes>
                </Link>
              </FooterLink>
            </FooterItem>
          </FooterList>
        </FooterHeading>

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
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer;
