import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import authOperation from 'redux/auth/operations';
import { MdOutlineLogout } from 'react-icons/md';
import { UserMenuStyled } from './UserMenu.styled';

const UserMenu = () => {
  const name = useSelector(state => state.auth.user.name);
  const dispatch = useDispatch();
  return (
    <UserMenuStyled>
      <span>{name}</span>
      

      <button type="button" onClick={() => dispatch(authOperation.logOut())}>
      <MdOutlineLogout />
      </button>
    </UserMenuStyled>
  );
};

export default UserMenu;