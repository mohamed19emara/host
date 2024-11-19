import React from "react";

const EcoHostingSection = () => {
  return (
    <section style={styles.section}>
      <div style={styles.container}>
        <h1 style={styles.title}>
          Hosting that's Fast, Secure & Eco-Friendly
        </h1>
        <p style={styles.description}>
          The Internet is a huge polluter of the environment. Start hosting your
          website on the world's leading eco-friendly web hosting provider and
          make a positive impact on the planet.
        </p>
        <button style={styles.button}>Get Started Now</button>
      </div>
    </section>
  );
};

const styles = {
  section: {
    backgroundColor: "#f0f9f5",
    padding: "60px 20px",
    textAlign: "center",
  },
  container: {
    maxWidth: "900px",
    margin: "0 auto",
  },
  title: {
    fontSize: "2.5em",
    fontWeight: "bold",
    color: "#2b9348",
    marginBottom: "20px",
  },
  description: {
    fontSize: "1.2em",
    color: "#555",
    lineHeight: "1.6",
    marginBottom: "30px",
  },
  button: {
    backgroundColor: "#2b9348",
    color: "#fff",
    border: "none",
    padding: "15px 30px",
    fontSize: "1em",
    cursor: "pointer",
    borderRadius: "5px",
    transition: "background-color 0.3s",
  },
};

export default EcoHostingSection;
