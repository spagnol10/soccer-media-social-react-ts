import styles from "./Header.module.css";

// Vou retirar porque a vercel esta bugando para subir
// import igniteLogo from "../assets/Ignitelogo.svg";

export function Header() {
  return (
    <header className={styles.header}>
      <img src="https://help.twitter.com/content/dam/help-twitter/brand/logo.png" alt="Logotipo do Ignite" />
    </header>
  );  
}
