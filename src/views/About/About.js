import React from "react";

const styles = {
  containerAbout: {
    padding: 20,
    textAlign: "center",
  },
};

const About = () => {
  return (
    <div style={styles.containerAbout}>
      <h1>About</h1>
      <p>
        We are a page dedicated to the sale of electrical appliances,
        decorations, fragrances, etc. Company that has been committed to the
        client for 10 years
      </p>
    </div>
  );
};

export default About;
