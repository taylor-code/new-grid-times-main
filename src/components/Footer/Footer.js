import React from 'react';
import { Twitter, Facebook } from 'react-feather';
import styled from 'styled-components/macro';

import { QUERIES } from '../../constants';

import MaxWidthWrapper from '../MaxWidthWrapper';
import VisuallyHidden from '../VisuallyHidden';

const Footer = () => {
  return (
    <Wrapper>
      <MaxWidthWrapper>
        <TopRow>
          <nav>
            <TopNavList>
              <li>
                <a href="/about">About</a>
              </li>
              <li>
                <a href="/press">Press Releases</a>
              </li>
              <li>
                <a href="/contact">Contact Us</a>
              </li>
            </TopNavList>
          </nav>
          <Social>
            <a href="/">
              <VisuallyHidden>Visit The Grid Times on Facebook</VisuallyHidden>
              <Facebook size={20} />
            </a>
            <a href="/">
              <VisuallyHidden>Visit The Grid Times on Twitter</VisuallyHidden>
              <Twitter size={20} />
            </a>
          </Social>
        </TopRow>
        <MainNavArea>
          <nav>
            <MainNavHeading>Discover Content</MainNavHeading>
            <MainNavList>
              <li>
                <a href="/pol">Politics</a>
              </li>
              <li>
                <a href="/wrl">World</a>
              </li>
              <li>
                <a href="/fin">Financial</a>
              </li>
              <li>
                <a href="/spo">Sports and Entertainment</a>
              </li>
              <li>
                <a href="/oped">Opinion and Editorial</a>
              </li>
            </MainNavList>
          </nav>
          <nav>
            <MainNavHeading>Regional Websites</MainNavHeading>
            <MainNavList>
              <li>
                <a href="/us">New Grid United States</a>
              </li>
              <li>
                <a href="/eu">New Grid Europe</a>
              </li>
              <li>
                <a href="/asia">New Grid Asia</a>
              </li>
              <li>
                <a href="/mars">New Grid Mars and Beyond</a>
              </li>
              <li>
                <a href="/au">New Grid Australia</a>
              </li>
            </MainNavList>
          </nav>
          <nav>
            <MainNavHeading>Careers</MainNavHeading>
            <MainNavList>
              <li>
                <a href="/pos">Open Positions</a>
              </li>
              <li>
                <a href="/team">Meet the team</a>
              </li>
              <li>
                <a href="/culture">Company Culture</a>
              </li>
            </MainNavList>
          </nav>
          <nav>
            <MainNavHeading>Legal and Privacy</MainNavHeading>
            <MainNavList>
              <li>
                <a href="/privacy">Privacy Policy</a>
              </li>
              <li>
                <a href="/🍪">Use of cookies</a>
              </li>
              <li>
                <a href="/manage">Manage cookies</a>
              </li>
              <li>
                <a href="/legal">Legal notice</a>
              </li>
              <li>
                <a href="/tos">Terms and Conditions</a>
              </li>
            </MainNavList>
          </nav>
        </MainNavArea>
      </MaxWidthWrapper>
      <SubFooterWrapper>
        <MaxWidthWrapper>
          <SubFooter>
            <Logo href="/">New Grid Times</Logo>
            <Disclaimer>
              © 2021 Fake Company Ltd. All Rights Reserved
            </Disclaimer>
          </SubFooter>
        </MaxWidthWrapper>
      </SubFooterWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.footer`
  background: var(--color-gray-900);
  color: var(--color-white);
  font-family: var(--font-family-sans-serif);
`;

const TopRow = styled.div`
  align-items: center;
  border-bottom: 1px solid var(--color-gray-700);
  color: var(--color-gray-300);
  display: flex;
  flex-direction: column;
  font-size: 0.875rem;
  gap: 16px;
  padding: 24px 0;

  @media ${QUERIES.laptopAndUp} {
    justify-content: flex-end;
  }

  @media ${QUERIES.tabletAndUp} {
    flex-direction: row;
    gap: 48px;
    justify-content: center;
  }
`;

const Social = styled.div`
  display: flex;
  gap: 24px;
  path {
    stroke-width: 1.5px;
  }
  svg {
    display: block;
  }
`;

const TopNavList = styled.ul`
  display: flex;
  gap: 16px;
`;

const MainNavArea = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  padding: 32px 0 48px;
  text-align: center;

  @media ${QUERIES.tabletAndUp} {
    display: grid;
    flex-direction: revert;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    text-align: left;
  }
`;

const MainNavHeading = styled.h2`
  color: var(--color-gray-300);
  font-size: 1.125rem;
  font-weight: var(--font-weight-bold);
  margin-bottom: 8px;

  @media ${QUERIES.laptopAndUp} {
    align-items: flex-start;
  }
`;

const MainNavList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const SubFooterWrapper = styled.div`
  background: var(--color-offblack);
  padding-block: 8px 16px;
  padding-inline: 0;
`;

const SubFooter = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
`;

const Logo = styled.a`
  color: var(--color-gray-100);
  font-family: var(--font-family-logo);
  font-size: 2rem;
`;

const Disclaimer = styled.p`
  color: var(--color-gray-500);
  font-size: 0.875rem;
  margin-top: -4px;
`;

export default Footer;
