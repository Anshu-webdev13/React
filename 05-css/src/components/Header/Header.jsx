import styles from "./Header.module.css";

const Header = () => {
  return (
    <div className={styles.nav}>
      <ul className={styles.menu}>
        <li className={styles.item}>Items</li>
        <li className={styles.item}>Contacts</li>
        <li className={styles.item}>Skill</li>
        <li className={styles.item}>About me</li>
      </ul>
    </div>
  );
};

export default Header;
