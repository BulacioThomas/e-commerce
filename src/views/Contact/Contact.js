import React from "react";

const styles = {
  containerContact: {
    padding: 20,
    textAlign: "center",
  },
};

const Contact = () => {
  return (
    <div style={styles.containerContact}>
      <h1>Contact</h1>
      <p>
        To contact us you can write directly to our email address
        musimundo@gmail.com detailing the problem in the subject line and you
        will get a response shortly!
      </p>
    </div>
  );
};

export default Contact;
