import React from 'react';
import styles from './Navigation.module.css';
import { Link } from 'react-router-dom';
import ChatBubbleIcon from "@material-ui/icons/ChatBubble";

const Navigation = () => {
    const brandStyle = {
        color: 'white',
        textDecoration: 'none',
        fontWeight: 'bold',
        fontSize : '22px',
        display: 'flex',
        alignItems: 'center',
    };

    const logoText = {
        marginLeft: '10px',
    }
  return (
    <nav className={`${styles.navbar} container`}>
        <Link to="/" style={brandStyle}>
            <ChatBubbleIcon style={{color: 'yellow'}} />
            <span style={logoText}>Voice Realm</span>
        </Link>
    </nav>
  );
}

export default Navigation