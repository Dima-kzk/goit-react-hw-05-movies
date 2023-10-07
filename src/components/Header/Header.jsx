import { StyledHeader, StylishLink } from './Header.styled';

const Header = () => {
  return (
    <StyledHeader>
      <nav>
        <StylishLink to="/">Home</StylishLink>
        <StylishLink to="/movies">Movies</StylishLink>
      </nav>
    </StyledHeader>
  );
};

export default Header;
