import React from 'react';
import styles from './Footer.css';

const Footer = () => {
    return (
        <Navbar className={`${ styles.footer } justify-content-center`}>
            <Navbar.Brand >
                <span className={styles.name}>&copy; 2023, by Jovana Vucetic</span>
            </Navbar.Brand>
        </Navbar>
    );
};

export { Footer };