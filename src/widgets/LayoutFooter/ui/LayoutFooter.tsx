import styles from './LayoutFooter.module.css';

const LayoutFooter = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p>{new Date().getFullYear()} &copy; Все права защищены</p>
      </div>
    </footer>
  );
};

export default LayoutFooter;
