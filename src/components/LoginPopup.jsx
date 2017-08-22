import React, { PropTypes, Component } from 'react';
import { View, Navbar, Pages, Page, ContentBlock, Button,
  List, ListItem, Views, NavCenter, ContentBlockTitle, GridRow, GridCol, Panel,
  LoginScreen, LoginScreenTitle, ListButton, ListLabel, FormLabel, FormInput, Link } from 'framework7-react';

export default class LoginPopup extends Component {
  constructor(props) {
    super(props);
    this.state = { showPassword: false };
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
                  <FormInput name="password" type={this.state.showPassword ? 'text' : 'password' } placeholder="Password" />
                </ListItem>
                <ListItem style={{ marginTop: '3%' }}>
                  <GridRow>
                    <div style={{ width: '30%' }}>
                      <FormLabel>Show password</FormLabel>
                      <FormInput type="switch" onChange={() => this.setState({ showPassword: !this.state.showPassword })}></FormInput>
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
