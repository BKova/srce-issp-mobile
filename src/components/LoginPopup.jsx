import React, { PropTypes, Component } from 'react';
import { View, Navbar, Pages, Page, ContentBlock, Button,
  List, ListItem, Views, NavCenter, ContentBlockTitle, GridRow, GridCol, Panel,
  LoginScreen, LoginScreenTitle, ListButton, ListLabel, FormLabel, FormInput, Link } from 'framework7-react';
import RoundButton from './RoundButton.jsx';

export default class LoginPopup extends Component {
  constructor(props) {
    super(props);
    this.state = { hidePassword: true };
  }

  render() {
    return (
      <LoginScreen id="login-screen" opened={this.props.opened}>
        <View>
          <Pages>
            <Page loginScreen>
              <ContentBlockTitle style={{ fontSize: '175%', paddingBottom: '5%' }}>AAI@Edu Login</ContentBlockTitle>
              <img src={require('../../resources/logo-srce.jpg')} style={{ width: '15%', marginLeft: '5%' }}/>
              <List form>
                <ListItem>
                  <FormLabel floating>Username</FormLabel>
                  <FormInput name="username" placeholder="Username" type="text" />
                </ListItem>
                <ListItem>
                  <FormLabel floating>Password</FormLabel>
                  <FormInput name="password" type={this.state.hidePassword ? 'password' : 'text'} placeholder="Password" className="inputPassword" />
                  <RoundButton hidePassword={this.state.hidePassword} onClick={() => this.setState(state => ({ hidePassword: !state.hidePassword }))} />
                </ListItem>
                <ListItem style={{ marginTop: '3%' }}>
                  <GridRow>
                    <div style={{ width: '30%' }}>
                    </div>
                    <div style={{ width: '60%' }}>
                      <Button round raised color="red" fill closeLoginScreen style={{ width: '50%', marginTop: '10%', marginLeft: '40%' }}>
                        Login
                      </Button>
                    </div>
                  </GridRow>
                </ListItem>
              </List>
              <ContentBlock>
              </ContentBlock>
            </Page>
          </Pages>
        </View>
      </LoginScreen>);
  }
}
