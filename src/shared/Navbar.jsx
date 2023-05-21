import { Avatar, Dropdown, Navbar } from "flowbite-react";
import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

// import brandImg from '../assets/brand'

const NavigationBar = () => {
  const { user,setUser,setIsLoding, logOut } = useContext(AuthContext);
  const navigate = useNavigate();

  // handle logout
  const handleLogout = () => {
    logOut()
      .then(() => {
        setUser(null);
        Swal.fire({ title: "Success", text: "You are logged out" });
       navigate('/') 
      })
      .catch((err) => console.error);
  };

  return (
    <Navbar
      fluid={true}
      rounded={true}
      className="my-6 relative md:text-xl"
    >
      {/* brand */}
      <Navbar.Brand className="mx-auto md:mx-0" href="/">
        {
          /* brandImg && (
          <img
            src=""
            className="mr-3 h-6 sm:h-9"
            alt="child care"
          />
          */
        }
        <span className="text-blue-700 text-[clamp(1.5rem,3vw+1rem,3.25rem)] self-center whitespace-nowrap font-semibold dark:text-white">
          Child Care
        </span>
      </Navbar.Brand>

      {/* Dropdown */}

      <div className="flex md:order-2">
        {user
          ? (
            <Dropdown
              arrowIcon={false}
              inline={true}
              label={user &&
                (
                  <Avatar
                    img={user?.photoURL}
                    title={user.displayName}
                    rounded={true}
                  />
                )}
            >
              <Dropdown.Header>
                <span className="block text-sm">
                  {user.displayName}
                </span>
                <span className="block truncate text-sm font-medium">
                  {user?.email}
                </span>
              </Dropdown.Header>
              <Dropdown.Item>
                Dashboard
              </Dropdown.Item>
              <Dropdown.Item>
                Settings
              </Dropdown.Item>
              <Dropdown.Item>
                Earnings
              </Dropdown.Item>
              <Dropdown.Divider />

              <Dropdown.Item onClick={handleLogout}>
                Sign out
              </Dropdown.Item>
            </Dropdown>
          )
          : <NavLink to="/login">Login</NavLink>}
        <Navbar.Toggle className="absolute left-0" />
      </div>

      {/* collapse buttom */}
      <Navbar.Collapse>
        {/* Navigation link */}
        <NavLink className="md:text-xl" to="/">
          <Navbar.Link as="span">
            Home
          </Navbar.Link>
        </NavLink>
        <NavLink className="md:text-xl" to="/toys">
          <Navbar.Link as="span">
            All Toys
          </Navbar.Link>
        </NavLink>
        {user &&
          (
            <>
              <NavLink className="md:text-xl" to="/my-toys">
                <Navbar.Link as="span">
                  My Toys
                </Navbar.Link>
              </NavLink>
              <NavLink className="md:text-xl" to="/add-toy">
                <Navbar.Link as="span">
                  Add A Toy
                </Navbar.Link>
              </NavLink>
            </>
          )}
        <NavLink className="md:text-xl" to="/blog">
          <Navbar.Link as="span">
            Blog
          </Navbar.Link>
        </NavLink>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavigationBar;
