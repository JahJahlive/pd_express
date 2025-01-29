import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { FaTruck } from "react-icons/fa6";
import useTranslation from "next-translate/useTranslation";
import { Container, Div1, Div2, Div3, NavLink, Span } from './HeaderStyles';
import { useRouter } from "next/router";
import { US, FR } from 'country-flag-icons/react/3x2';

const Header = () => { 
  let router = useRouter();
  let { t, lang } = useTranslation();
  
  return (
  <Container>
    <Div1>
      <Link href="/">
        <a style={{ display: "flex", alignItems: "center", color: "blue", marginBottom: "10px", justifyContent: "space-between"}}>
          <img src='/images/logo-petit-demenagements-1.png' width='80%' />
        </a>
      </Link>
    </Div1>
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
    <Div3>
      <Link href={router.asPath} locale={lang === 'en' ? 'fr' : 'en'}>
        <a style={{ color: 'white'}}>{
          lang === 'en' ? <FR title="fr" className="..." height="1rem" /> 
          : <US title="en" className="..." height="1rem" /> }</a></Link>
    </Div3>
  </Container>
)};

export default Header;
