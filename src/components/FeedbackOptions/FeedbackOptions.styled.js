import styled from 'styled-components';

const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 40px;
`;

const Button = styled.button`
  display: inline-flex;
  flex-shrink: 0;
  justify-content: center;
  align-items: center;
  gap: 8px;
  grid-gap: 8px;

  width: 120px;
  height: 100px;
  padding: 12px 16px;

  font-family: inherit;
  font-size: 24px;
  font-weight: 700;
  line-height: 1.5;
  text-transform: uppercase;

  overflow: hidden;
  outline: 0;
  background-color: #ff90e8;
  color: #000;
  border: 3px solid #000;
  border-radius: 50%;
  cursor: pointer;

  text-decoration: none;
  text-overflow: ellipsis;
  transition: all 0.14s ease-out;
  white-space: nowrap;
  &:hover,
  &:focus {
    box-shadow: 4px 4px 0 #000;
    transform: translate(-4px, -4px);
  }
  &:focus-visible {
    outline-offset: 1px;
  }
`;

export { ButtonWrapper, Button };
