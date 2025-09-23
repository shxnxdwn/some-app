import styles from './LayoutHeader.module.css';
import { useCallback, useState } from 'react';
import { Link } from 'react-router-dom';
import ThemeSwitcher from '@/features/ThemeSwitcher';
import Button from '@/shared/ui/Button';
import Modal from '@/shared/ui/Modal';

const LayoutHeader = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const openModal = useCallback(() => {
    setIsModalOpen(true);
  }, []);

  const closeModal = useCallback(() => {
    setIsModalOpen(false);
  }, []);

  return (
    <>
      <header className={styles.header}>
        <div className={styles.container}>
          <Link to="/" className={styles.logo}>
            Some App
          </Link>
          <div className={styles.controls}>
            <nav className={styles.nav}>
              <Link to="/posts">Посты</Link>
              <Link to="/albums">Альбомы</Link>
              <Link to="/todos">Задачи</Link>
              <Link to="/users">Пользователи</Link>
            </nav>
            <Button variant="ghost" onClick={openModal}>
              О проекте
            </Button>
            <ThemeSwitcher />
          </div>
        </div>
      </header>

      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <div className={styles.modalContent}>
          <Modal.Header>
            <h2>О проекте</h2>
          </Modal.Header>
          <Modal.Body>
            <p>Учебное приложение для обучения на курсе. Создано на TS + React + Vite</p>
          </Modal.Body>
          <Modal.Footer className={styles.modalFooter}>
            <Button variant="primary" onClick={closeModal} className={styles.modalButton}>
              ОК
            </Button>
          </Modal.Footer>
        </div>
      </Modal>
    </>
  );
};

export default LayoutHeader;
