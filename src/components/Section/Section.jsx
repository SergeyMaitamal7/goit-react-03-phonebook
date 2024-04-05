import { Title, Div } from './Section.styled';

export const Section = ({ title, children }) => {
  return (
    <Div>
      <Title> {title}</Title>
      {children}
    </Div>
  );
};
