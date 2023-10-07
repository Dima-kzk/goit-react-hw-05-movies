import styled from '@emotion/styled';

const Ul = styled.ul`
  display: flex;
  gap: 10px;
  li {
    list-style-type: none;
  }
`;

const Genres = ({ genres }) => {
  if (genres === undefined || genres.length === 0) return <p>No data</p>;
  return (
    <Ul>
      {genres.map(({ id, name }) => (
        <li key={id}>{name}</li>
      ))}
    </Ul>
  );
};

export default Genres;
