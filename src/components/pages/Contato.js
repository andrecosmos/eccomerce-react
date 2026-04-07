import styles from './Contato.module.css';
import Container from '../layout/Container';
import Card from '../ui/Card';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from 'react-icons/fa';

function Contato() {
  const email = 'andrecosmos.1992@gmail.com';
  const phone = '(11) 97192-7935';
  const github = 'https://github.com/andrecosmos';
  const linkedin = 'https://www.linkedin.com/in/andre-cosmos-b95480a1/';

  return (
    <Container>
      <h1>Contato</h1>
      <p className={styles.intro}>Entre em contato conosco através dos canais abaixo:</p>

      <div className={styles.contactGrid}>
        <Card>
          <h3>Informações de Contato</h3>
          <div className={styles.contactInfo}>
            <div className={styles.item}>
              <FaEnvelope className={styles.icon} />
              <div>
                <p className={styles.label}>Email</p>
                <a href={`mailto:${email}`}>{email}</a>
              </div>
            </div>
            <div className={styles.item}>
              <FaPhone className={styles.icon} />
              <div>
                <p className={styles.label}>Telefone</p>
                <a href={`tel:+5511971927935`}>{phone}</a>
              </div>
            </div>
          </div>
        </Card>

        <Card>
          <h3>Redes Sociais</h3>
          <div className={styles.socialLinks}>
            <a href={github} target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
              <FaGithub className={styles.socialIcon} />
              <span>GitHub</span>
            </a>
            <a href={linkedin} target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
              <FaLinkedin className={styles.socialIcon} />
              <span>LinkedIn</span>
            </a>
          </div>
        </Card>
      </div>
    </Container>
  );
}

export default Contato;