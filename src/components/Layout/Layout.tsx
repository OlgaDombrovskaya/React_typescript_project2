import { useNavigate } from "react-router-dom";
import { v4 } from "uuid";

import { NAVIGATION_MENU_ROUTES } from "constants/routes";

import {
  LayoutWrapper,
  Header,
  Main,
  Footer,
  Logo,
  LogoImg,
  HeaderLink,
  NavigationContainer,
  FooterLogo,
  FooterLink,
  FooterNavigation,
  NavlinkProps,
} from "./styles";
import { type LayoutProps } from "./types";

function Layout({ children }: LayoutProps) {
  const navigate = useNavigate();

  const goToHomePage = () => {
    navigate("/");
  };
  //мэпим NAVIGATION_MENU_ROUTES (преобразовываем каждый элемент массива),
  //  route - это аргумент функции колбэк переданной в мэп (ключи Home,About,Login и тд)
  const footerLinks = Object.keys(NAVIGATION_MENU_ROUTES).map((route) => {
    return (
      <FooterLink
        key={v4()}
        to={
          // достаем value при помощи []
          NAVIGATION_MENU_ROUTES[route as keyof typeof NAVIGATION_MENU_ROUTES]
        }
      >
        {route}
      </FooterLink>
    );
  });

  const headerLinks = Object.keys(NAVIGATION_MENU_ROUTES).map((route) => {
    return (
      <HeaderLink
        key={v4()}
        to={
          NAVIGATION_MENU_ROUTES[route as keyof typeof NAVIGATION_MENU_ROUTES]
        }
        style={({ isActive }) => NavlinkProps(isActive)}
      >
        {route}
      </HeaderLink>
    );
  });

  return (
    <LayoutWrapper>
      <Header>
        <Logo onClick={goToHomePage}>
          <LogoImg
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxOGDYH2tzlcwZSDpjg0qRGgEHAxVhsKHFUg&s"
            alt="Logo"
          />
        </Logo>
        <NavigationContainer>{headerLinks}</NavigationContainer>
      </Header>
      <Main>{children}</Main>
      <Footer>
        <FooterLogo>
          <LogoImg
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxOGDYH2tzlcwZSDpjg0qRGgEHAxVhsKHFUg&s"
            alt="Logo"
          />
        </FooterLogo>
        <FooterNavigation>{footerLinks}</FooterNavigation>
      </Footer>
    </LayoutWrapper>
  );
}

export default Layout;
