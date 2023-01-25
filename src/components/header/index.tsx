import { Box, chakra } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import primaryTheme from 'theme/primaryTheme';

const Wrapper = chakra(Box, {
  baseStyle: {
    padding: '15px',
    backgroundColor: primaryTheme.colors.black,
    color: primaryTheme.colors.white,
    marginBottom: '10px',
    display: 'flex',
  },
});

const NavWrapper = chakra(Box, {
  baseStyle: {
    marginLeft: '25px',
  },
});

const Header = () => {
  return (
    <Wrapper>
      <NavWrapper marginLeft={0}>
        <Link to='/create-task'>Create Task</Link>
      </NavWrapper>

      <NavWrapper>
        <Link to='/list-tasks'>List All Tasks</Link>
      </NavWrapper>

      <NavWrapper>
        <Link to='/bulk-delete'>Delete Tasks</Link>
      </NavWrapper>
    </Wrapper>
  );
};

export default Header;
