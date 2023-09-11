import React from 'react';
import styled from 'styled-components';

const Divider = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  width: 100%;
  margin: 16px 0;
`;

const Line = styled.div`
  flex-grow: 1;
  height: 1px;
  background-color: #ccc;
  margin: 0 16px;
`;

const DividerText = styled.span`
  color: #555;
  font-size: 13px;
  font-weight: 700;
`;

const HorizontalDividerWithText = ({ text }) => {
  return (
    <Divider>
      <Line />
      <DividerText>{text}</DividerText>
      <Line />
    </Divider>
  );
};

export default HorizontalDividerWithText;
