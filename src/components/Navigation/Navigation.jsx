import InfoUser from '../InfoUser/InfoUser';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectToken, selectUser } from '../../redux/dataUser/userSelect';

const Navigation = () => {
  const user = useSelector(selectUser);
  const token = useSelector(selectToken) ?? '';
  return (
    <>
      <Navbar bg="black" variant="dark">
        <Container>
          <Navbar.Brand href="/goit-react-hw-08-phonebook/contacts">
            Phonebook
          </Navbar.Brand>
          {!user && (
            <Nav>
              {token && (
                <Nav.Link to="/contacts" as={Link}>
                  Contacts
                </Nav.Link>
              )}
              <Nav.Link to="/signup" as={Link}>
                Sign Up
              </Nav.Link>
              <Nav.Link to="/login" as={Link}>
                Login
              </Nav.Link>
            </Nav>
          )}

          <InfoUser className="d-flex flex-column" />
        </Container>
      </Navbar>
      <Container className="align-items-center d-flex flex-column justify-content-center">
        {user ? (
          <h1>Welcome '{user.name}' your contacts</h1>
        ) : (
          <h1>Welcome guest please login</h1>
        )}
      </Container>
    </>
  );
};

export default Navigation;