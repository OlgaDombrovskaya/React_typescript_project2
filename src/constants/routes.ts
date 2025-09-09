interface POUTES_DATA {
  HOME: string;
  CONTACT_US: string;
  ABOUT: string;
  LOGIN: string;
  CLIENTS: string;
  ZARA: string;
  LE_PETIT_CHEF: string;
  NETFLIX: string;
  NOT_FOUND: string;
}

//общий ROUTES
export const ROUTES: POUTES_DATA = {
  HOME: "/",
  CONTACT_US: "/contactUs",
  ABOUT: "/about",
  LOGIN: "/login",
  CLIENTS: "/clients",
  ZARA: "/clients/zara",
  NETFLIX: "/clients/netflix",
  LE_PETIT_CHEF: "/clients/le_petit_chef",
  NOT_FOUND: "*",
};

//enum уже типизирован по умолчанию,
// здесь уже часть от ROUTES -  только те что в навигационном меню, далее пропишем все Layout.tsx
export enum NAVIGATION_MENU_ROUTES {
  Home = "/",
  Contact_Us = "/contactUs",
  About = "/about",
  Login = "/login",
  Clients = "/clients",
}
