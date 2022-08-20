import React from "react";
import { Outlet, Link } from "react-router-dom";
import styled from "styled-components";

const Layout = styled.div`
  max-width: 500px;
  background: #997950;
  border-radius: 10px;
  overflow: hidden;
  margin: 10% auto;
`;

const Header = styled.h1`
  text-align: center;
  color: #2b1700;
`;

const Tabs = styled.ul`
  list-style: none;
  padding: initial;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-evenly;
`;

const Tab = styled.li`
  display: inline-block;
  width: 100px;
  text-align: center;
  padding-bottom: 0.1em;
  line-height: 2em;
  font-size: 1.5em;
  font-weight: bold;
  border: 3px solid #351e10;
  border-radius: 10px;
  &:hover {
    background: #613613;
  }
`;

const LinkStyle = {
  display: "block",
  textDecoration: "none",
  color: "#3a1f04",
  width: "100%",
  height: "100%",
};

// TODO: handle padding between img and layout tag

const MainPage = () => {
  const animals = ["cat", "dog", "fish"];

  return (
    <Layout>
      <Header>I'm not tabUI</Header>
      <Tabs>
        {animals.map((animal) => (
          <Tab key={animal}>
            <Link to={`/${animal}`} style={LinkStyle}>
              {animal}
            </Link>
          </Tab>
        ))}
      </Tabs>
      <Outlet />
    </Layout>
  );
};

export default MainPage;
