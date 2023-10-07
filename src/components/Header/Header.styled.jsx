import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 8px 10px;
  margin-bottom: 16px;
  border-bottom: 1px solid black;

  > nav {
    display: flex;
    gap: 10px;
  }
`;

export const StylishLink = styled(NavLink)`
  color: black;
  font-size: 20px;
  font-weight: 600;
  text-decoration: none;
  &.active {
    color: orangered;
  }

  &:hover {
    text-decoration: underline;
  }
`;
