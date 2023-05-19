import { Avatar, Dropdown, Navbar } from "flowbite-react";
import { NavLink } from "react-router-dom";
// import brandImg from '../assets/brand'

const NavigationBar = () => {
  return (
    <Navbar
      fluid={true}
      rounded={true}
      className="md:my-10 relative md:text-xl"
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
        <span className="text-[clamp(1.5rem,3vw+1rem,3.25rem)] self-center whitespace-nowrap font-semibold dark:text-white">
          Child Care
        </span>
      </Navbar.Brand>

      {/* Dropdown */}
      <div className="flex md:order-2">
        <Dropdown
          arrowIcon={false}
          inline={true}
          label={
            <Avatar
              className="w-12 h-12"
              alt="User settings"
              img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
              rounded={true}
            />
          }
        >
          <Dropdown.Header>
            <span className="block text-sm">
              Bonnie Green
            </span>
            <span className="block truncate text-sm font-medium">
              name@flowbite.com
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
          <Dropdown.Item>
            Sign out
          </Dropdown.Item>
        </Dropdown>
        <Navbar.Toggle className="absolute left-0" />
      </div>

      {/* collapse buttom */}
      <Navbar.Collapse>
        
        {/* Navigation link */}
        <NavLink className='md:text-xl' to="/">
          <Navbar.Link
            active={true}
            as='span'
          >
            Home
          </Navbar.Link>
        </NavLink>
        <NavLink className='md:text-xl' >
          <Navbar.Link as='span'>
            About
          </Navbar.Link>
        </NavLink>
        <NavLink className='md:text-xl ' >
          <Navbar.Link as='span'>
            Services
          </Navbar.Link>
        </NavLink>
        <NavLink className='md:text-xl' >
          <Navbar.Link as='span'>
            Pricing
          </Navbar.Link>
        </NavLink>
        <NavLink className='md:text-xl' >
          <Navbar.Link as='span'>
            Contact
          </Navbar.Link>
        </NavLink>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavigationBar;
