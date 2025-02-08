import React from 'react';
import { FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan } from './FooterStyles';
import { IoMail, IoCall } from "react-icons/io5";
import useTranslation from "next-translate/useTranslation";

const Footer = () => {
  let { t } = useTranslation();

  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle><IoCall size="3rem" /></LinkTitle>
          <LinkItem href="+1 514 799 4194 ">+1 514 799 4194</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle><IoMail size="3rem" /></LinkTitle>
          <LinkItem href="mailto:contact@yannickobe.dev">ndogsuga@hotmail.com</LinkItem>
        </LinkColumn>
      </LinkList>
        <Slogan>Copyright 2025 | All Right Reserved Petit Déménagement Express</Slogan>
    </FooterWrapper>
  );
};

export default Footer;
