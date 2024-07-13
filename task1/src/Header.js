import { useNavigate } from 'react-router-dom';
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {

const navigate = useNavigate();
const handleLogout = () => {
  sessionStorage.removeItem("name");
  sessionStorage.removeItem("email");
  sessionStorage.removeItem("pass");
  sessionStorage.removeItem("signup");
  navigate("/signup");
};

  return (
    <header style={styles.header}>
      <div style={styles.container}>
        <h1 style={styles.logo}>My App</h1>
        <nav>
          <ul style={styles.navList}>
            <li style={styles.navItem}><Link to="/" style={styles.navLink}>Home</Link></li>
            <li style={styles.navItem}><Link to="/about" style={styles.navLink}>About</Link></li>
            <li style={styles.navItem}><Link to="/contact" style={styles.navLink}>Contact</Link></li>
            <li style={styles.navItem}><Link to="/BookCatalog" style={styles.navLink}>BookCatalog</Link></li>
            {/* <li style={styles.navItem}><Link to="/database" style={styles.navLink}>database</Link></li> */}
            <li style={styles.navItem}><button onClick={handleLogout}>
            {sessionStorage.getItem("signup") === "true" ? (<span>Logout</span>) : (<span>Signup</span>)}
          </button></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};


const styles = {
  header: {
    padding: '10px 0',
    backgroundColor: '#282c34',
    color: 'white',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    position: 'sticky',
    top: '0',
    zIndex: '1000'
  },
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 20px'
  },
  logo: {
    margin: '0',
    fontSize: '24px'
  },
  navList: {
    listStyle: 'none',
    display: 'flex',
    padding: '0',
    margin: '0'
  },
  navItem: {
    marginLeft: '20px'
  },
  navLink: {
    color: 'white',
    textDecoration: 'none',
    fontSize: '18px',
    transition: 'color 0.3s',
  }
};

export default Header;








