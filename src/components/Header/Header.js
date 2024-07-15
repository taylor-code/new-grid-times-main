import React from 'react';
import styled from 'styled-components/macro';
import { Menu, Search, User } from 'react-feather';

import { QUERIES } from '../../constants';

import MaxWidthWrapper from '../MaxWidthWrapper';
import Logo from '../Logo';
import Button from '../Button';

const Header = () => {
  return (
    <header>
      <SuperHeader>
        <Row>
          <ActionGroup>
            <button>
              <Search size={24} />
            </button>
            <button>
              <Menu size={24} />
            </button>
          </ActionGroup>
          <ActionGroup>
            <button>
              <User size={24} />
            </button>
          </ActionGroup>
        </Row>
      </SuperHeader>
      <MainHeader>
        <DesktopActionGroup>
          <button>
            <Search size={24} />
          </button>
          <button>
            <Menu size={24} />
          </button>
        </DesktopActionGroup>
        <Logo />
        <SubscribeWrapper>
          <Button>Subscribe</Button>
          <SubLink href="/">Already a subscriber?</SubLink>
        </SubscribeWrapper>
      </MainHeader>
    </header>
  );
};

const SuperHeader = styled.div`
  background: var(--color-gray-900);
  padding: 16px 0;
  color: white;

  @media ${QUERIES.laptopAndUp} {
    display: none;
  }
`;

const Row = styled(MaxWidthWrapper)`
  display: flex;
  justify-content: space-between;
`;

const ActionGroup = styled.div`
  display: flex;
  gap: 24px;

  /*
    FIX: Remove the inline spacing that comes with
    react-feather icons.
  */
  svg {
    display: block;
  }
`;

const DesktopActionGroup = styled(ActionGroup)`
  display: none;

  @media ${QUERIES.laptopAndUp} {
    display: flex;
  }
`;

const SubscribeWrapper = styled.div`
  display: none;

  @media ${QUERIES.laptopAndUp} {
    display: revert;
    justify-self: end;
    position: relative;
  }
`;

const SubLink = styled.a`
  color: var(--color-gray-900);
  font-size: 0.875rem;
  font-style: italic;
  margin-block-start: 8px;
  position: absolute;
  text-align: center;
  text-decoration: underline;
  width: 100%;
`;

const MainHeader = styled(MaxWidthWrapper)`
  align-items: center;
  display: flex;
  justify-content: center;
  margin-block: 32px 48px;

  @media ${QUERIES.tabletAndUp} {
    margin-block: 48px 72px;
  }

  @media ${QUERIES.laptopAndUp} {
    align-items: center;
    display: grid;
    grid-template-columns: 1fr auto 1fr;
    justify-content: revert;
    justify-items: start;
    margin-block: 16px 72px;
  }
`;

export default Header;
