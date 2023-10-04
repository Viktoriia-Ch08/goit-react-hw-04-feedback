import { Title } from './Section.styled';

const Section = ({ title, children }) => (
  <section>
    <Title>{title}</Title>
    {children}
  </section>
);

export default Section;
