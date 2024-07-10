
import React from 'react';

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <p>&copy; 2024 My App. All rights reserved.</p>
    </footer>
  );
};

const styles = {
  footer: {
    padding: '10px',
    backgroundColor: '#282c34',
    color: 'white',
    textAlign: 'center',
    position: 'fixed',
    left: '0',
    bottom: '0',
    width: '100%'
  }
};

export default Footer;
