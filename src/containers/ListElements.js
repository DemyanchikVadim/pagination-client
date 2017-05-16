import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 500px;
`;

const Title = styled.p`
  border: 1px solid black;
  background: papayawhip;
  &:hover {
    background: #337ab7;
  }
`;

const ListElements = ({ elements }) => (
  <Wrapper>
    { elements.map((e, i) => <Title key={i}>{e}</Title> ) }
  </Wrapper>
);

export default ListElements;