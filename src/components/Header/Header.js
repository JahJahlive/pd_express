import Link from 'next/link';
import React, { useState } from 'react';
import useTranslation from "next-translate/useTranslation";
import { Container, Div1, Div2, Div3, NavLink, Img, BurgerMenu } from './HeaderStyles';
import { useRouter } from "next/router";
import { US, FR } from 'country-flag-icons/react/3x2';
import { IoMdMenu } from "react-icons/io";

const Header = () => { 
  let router = useRouter();
  let { t, lang } = useTranslation();
  const [showMenu, setShowMenu] = useState(true);

  const toggleMenu = () => {
    setShowMenu(value => !value);
  };

  return (
  <Container>
    <Div1>
      <Link href="/">
        <a style={{ display: "flex", alignItems: "center", color: "blue", marginBottom: "10px", justifyContent: "space-between"}}>
          <Img src='/images/logo-petit-demenagements-1.png' width='80%' />
        </a>
      </Link>
    </Div1>
    {showMenu && (
      <Div2>
          <Link href="#projects">
            <NavLink>{t("common:accueil")}</NavLink>
          </Link>
          <Link href="#technologies">
            <NavLink>{t("common:a_propos")}</NavLink>
          </Link>
          <Link href="#services">
            <NavLink>{t("common:service_et_tarif")}</NavLink>
          </Link>
          <Link href="#contact">
            <NavLink>CONTACT</NavLink>
          </Link>
      </Div2>
    )}
    <Div3>
      <Link href={router.asPath} locale={lang === 'en' ? 'fr' : 'en'}>
        <a style={{ color: 'white'}}>{
          lang === 'en' ? <FR title="fr" className="..." height="1rem" /> 
          : <US title="en" className="..." height="1rem" /> }</a></Link>
    </Div3>
    <BurgerMenu href="javascript:void(0);">
      <IoMdMenu size={30} color='black' onClick={toggleMenu}/>
    </BurgerMenu>
  </Container>
)};

export default Header;
