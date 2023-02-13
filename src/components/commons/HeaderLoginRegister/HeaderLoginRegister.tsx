import { Link } from 'react-router-dom';
import {
  Header,
  NavbarMenu,
  NavbarMenuContent,
  NavbarMenuLeft,
  NavbarMenuLeftLogo,
  NavbarMenuLeftCart,
  NavbarMenuleftCartDes,
  NavbarMenuRight,
  NavbarMenuRightHelp
} from './HeaderLoginRegister.styled';
import ShopeeLogo from '../SVG/ShopeeLogo';

interface Props {
  headingText: string;
}

const HeaderLoginRegister: React.FC<Props> = (props) => {
  const { headingText } = props;
  return (
    <Header>
      <NavbarMenu>
        <NavbarMenuContent>
          <NavbarMenuLeft>
            <NavbarMenuLeftLogo>
              <Link to=''>
                <ShopeeLogo />
              </Link>
            </NavbarMenuLeftLogo>
            <NavbarMenuLeftCart>
              <NavbarMenuleftCartDes>{headingText}</NavbarMenuleftCartDes>
            </NavbarMenuLeftCart>
          </NavbarMenuLeft>

          <NavbarMenuRight>
            <NavbarMenuRightHelp>
              <Link to=''>Cần trợ giúp?</Link>
            </NavbarMenuRightHelp>
          </NavbarMenuRight>
        </NavbarMenuContent>
      </NavbarMenu>
    </Header>
  );
};

export default HeaderLoginRegister;
