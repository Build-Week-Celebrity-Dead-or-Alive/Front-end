import React, { Component } from "react";
import { Menu, Segment, Icon } from "semantic-ui-react";
import { Link } from "react-router-dom";
// import styled from 'styled-components';
import "./NavBar.scss";

/*
const BottomNav = styled.div`
    top: 100px;
    width: 100%;
    height: 25em;
    min-width: 100%;
    min-height: 100%;
    background-image: url(https://images.pexels.com/photos/6971/wood-light-summer-lunch.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940);
    background-size: cover;
    
`;

*/
class NavBar extends Component {
  state = { activeItem: "home" };

  handleItemClick = (e, { name }) => {
    this.setState({ activeItem: name });
  };

  render() {
    const { activeItem } = this.state;
    return (
      <Segment.Group className="menu-group">
        <Segment color="black" inverted>
          <Menu pointing secondary inverted stackable>
            <Menu.Menu className="menu-left">
              <Menu.Item>
                <Icon name="coffee" size="big" fitted color="black" />
              </Menu.Item>
              <Menu.Item header className="headliner">
                <span>Dead or Alive </span>

 
      <nav>
        <div className="Home">
         <Link to='/'>Home</Link>
         </div>
         </nav>
         <nav>
         <div className="Sign">
         <Link to='/signup'>Signup</Link>
         <Link to='/login'>LogIn</Link>
         </div>
      </nav>
  
              </Menu.Item>
            </Menu.Menu>

            <Menu.Menu className="menu-right" position="right">
              {/* <Menu.Item
                    as={Link}
                    name="home"
                    to="/"
                    active={activeItem === "home"}
                    onClick={this.handleItemClick}
                  > */}

              {/* </Menu.Item> */}
              {/* <Menu.Item
                    as={Link}
                    name="login"
                    to="/login"
                    active={activeItem === "login"}
                    onClick={this.handleItemClick}
                  > */}

              {/* </Menu.Item> */}
              {/* <Menu.Item
                as={Link}
                name="signup"
                to="/signup"
                active={activeItem === "Signup"}
                onClick={this.handleItemClick}
              > */}
                {/* Signup */}
              {/* </Menu.Item> */}
            </Menu.Menu>
          </Menu>
        </Segment>
        {/*<BottomNav></BottomNav>*/}
      </Segment.Group>
    );
  }
}

export default NavBar;
