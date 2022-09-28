import React from "react";
import styled from "styled-components/macro";
import { Menu, Search, User } from "react-feather";

import { COLORS, QUERIES } from "../../constants";

import MaxWidthWrapper from "../MaxWidthWrapper";
import Logo from "../Logo";
import Button from "../Button";

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
        <ActionGroupDesktop>
          <button>
            <Search size={24} />
          </button>
          <button>
            <Menu size={24} />
          </button>
        </ActionGroupDesktop>
        <Logo />
        <SunscriptionGroup>
          <Button>Subscribe</Button>
          <SubscribeLink href="#">Already a subscriber?</SubscribeLink>
        </SunscriptionGroup>
      </MainHeader>
    </header>
  );
};

const SuperHeader = styled.div`
  padding: 16px 0;
  background: var(--color-gray-900);
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

const ActionGroupDesktop = styled(ActionGroup)`
  display: none;
  @media ${QUERIES.laptopAndUp} {
    display: flex;
  }
`;

const SunscriptionGroup = styled.div`
  display: none;

  @media ${QUERIES.laptopAndUp} {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
    align-self: flex-end;
  }
`;

const SubscribeLink = styled.a`
  font-style: italic;
  font-size: 14px;
  line-height: 22px;
  text-decoration-line: underline;
  color: ${COLORS.gray[900]};
`;

const MainHeader = styled(MaxWidthWrapper)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 32px;
  margin-bottom: 48px;

  @media ${QUERIES.laptopAndUp} {
    justify-content: space-between;
    margin-top: 16px;
    margin-bottom: 72px;
  }
`;

export default Header;
