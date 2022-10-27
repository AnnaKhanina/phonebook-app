import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import authOperation from 'redux/auth/operations';
import { MdOutlineLogout } from 'react-icons/md';
import { UserMenuStyled } from './UserMenu.styled';
import defaultAvatar from './defaultAvatar.png';

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
    justifycContent: 'center',
  },
  avatar: {
    marginRight: 4,
  },
  name: {
    fontWeight: 700,
    marginRight: 12,
  },
};

const UserMenu = () => {
  const name = useSelector(state => state.auth.user.name);
  const dispatch = useDispatch();
  const avatar = defaultAvatar;

  return (
    <UserMenuStyled>
      <span>{name}</span>
      <img src={avatar} alt="" width="32" style={styles.avatar} />
      <button type="button" onClick={() => dispatch(authOperation.logOut())}>
      <MdOutlineLogout />
      </button>
    </UserMenuStyled>
  );
};

export default UserMenu;