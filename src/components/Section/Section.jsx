import PropTypes from 'prop-types';
import c from './Section.module.css';

const Section = ({ title, children }) => {
  return (
    <section className={c.section}>
      <h2 className={c.title}>{title}</h2>
      {children}
    </section>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
};

export default Section;
