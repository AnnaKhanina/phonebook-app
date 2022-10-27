import defaultAvatar from 'components/UserMenu/defaultAvatar.png';

const styles = {
  container: {
    minHeight: 'calc(100vh - 50px)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontWeight: 500,
    fontSize: 48,
    textAlign: 'center',
  },
};

export default function Home() {
  const avatar = defaultAvatar;
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>
      Вітаю в додатку PhoneBook{' '}
        <span role="img" aria-label="Greeting icon">
          <img src={avatar} alt="" width="60" />
        </span>
      </h1>
    </div>
  );
}

