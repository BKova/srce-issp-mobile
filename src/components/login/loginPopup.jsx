import React, { PropTypes, Component } from 'react';
import {
  View,
  Pages,
  Page,
  ContentBlock,
  Button,
  List,
  ListItem,
  ContentBlockTitle,
  GridRow,
  LoginScreen,
  FormLabel,
  FormInput,
} from 'framework7-react';
import ShowPasswordButton from './showPasswordButton.jsx';
import style from './styles/loginPopup.style.jsx';

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
              <ContentBlockTitle style={ style.title }>AAI@Edu Login</ContentBlockTitle>
              <img src={require('../../../resources/logo-srce.jpg')} style={ style.logo }/>
              <List form>
                <ListItem>
                  <FormLabel floating>Username</FormLabel>
                  <FormInput name="username" placeholder="Username" type="text" />
                </ListItem>
                <ListItem>
                  <FormLabel floating>Password</FormLabel>
                  <FormInput name="password" type={this.state.hidePassword ? 'password' : 'text'} placeholder="Password" className="inputPassword" />
                  <ShowPasswordButton
                    hidePassword={this.state.hidePassword}
                    onClick={() => this.setState(state => ({ hidePassword: !state.hidePassword }))}
                  />
                </ListItem>
                <ListItem>
                  <GridRow>
                    <div style={ style.loginButtonContainer }>
                      <Button round raised color="red" fill closeLoginScreen style={ style.loginButton }>
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
