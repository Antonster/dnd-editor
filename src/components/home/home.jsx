import React from 'react';
import * as S from './styles';

const textsData = [
  `
    HelpTap is a startup community and platform that provides all the resources
    — knowledge, tools, experts, and capital — to talented entrepreneurs looking to
    validate, build, and grow their business ideas.
  `,
  `
    It's 2021 and yet starting up seems to be a dreadful thought for a lot of folks.
    From idea validation to product development to marketing & fundraising,
    there are a number of things that can - and do - go wrong at the early stages.
  `,
  `
    Yes, there are a number of incubators, tools, funds, that have popped up over
    the years but none have been able to become a go-to startup platform.
  `,
  `
    We want to change this. Our mission is to democratize entrepreneurship by making
    it easier for people to start up and build successful ventures. With startup DNA
    in our roots, we understand what it takes to deal with failures and capitalize on the successes.
  `
];

const Home = () => (
  <S.Container>
    <S.Space>
      <S.Title>
        Helping Entrepreneurs Help the World! 🚀
      </S.Title>
      {textsData.map(elem => (
        <S.Text key={elem}>
          {elem}
        </S.Text>
      ))}
    </S.Space>
    <S.Space>
      <S.Title>
        Helping Entrepreneurs Help the World! 🚀
      </S.Title>
      {textsData.map(elem => (
        <S.Text key={elem}>
          {elem}
        </S.Text>
      ))}
    </S.Space>
  </S.Container>
);

export default Home;
