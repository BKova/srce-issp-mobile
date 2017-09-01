/* global window */
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
import SrceClient from 'srce-issp-client';
import ShowPasswordButton from './showPasswordButton.jsx';
import Spinner from './spinner.jsx';
import style from './styles/loginPopup.style.jsx';

const client = new SrceClient();
const clearCookies = () =>
  new Promise((resolve, reject) =>
    ((window.cookieEmperor) ? window.cookieEmperor.clearAll(resolve, reject) : resolve()));

const showFailToast = () => {
  if (window.plugins) {
    window.plugins.toast.showWithOptions({
      message: 'Login failed',
      duration: 'short', // which is 2000 ms. "long" is 4000. Or specify the nr of ms yourself.
      position: 'bottom',
    },
    );
  }
};

export default class LoginPopup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hidePassword: true,
      loggingIn: false,
      username: '',
      password: '',
    };
    this.login = this.login.bind(this);
  }

  login() {
    if (!this.state.loggingIn) {
      this.setState({ loggingIn: true }, () => {
        clearCookies()
          .then(() => client.login(this.state.username, this.state.password))
          .then(() => client.getReceipts(180))
          .then((receipts) => {
            this.props.setLogedInState(client.user, receipts);
            this.setState({ loggingIn: false });
          })
          .catch(() => {
            this.setState({ loggingIn: false });
            showFailToast();
          });
      });
    }
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
                  <FormInput
                    name="username"
                    placeholder="Username"
                    type="text"
                    onInput={val => this.setState({ username: val })}
                  />
                </ListItem>
                <ListItem>
                  <FormLabel floating>Password</FormLabel>
                  <FormInput
                    name="password"
                    type={this.state.hidePassword ? 'password' : 'text'}
                    placeholder="Password"
                    className="inputPassword"
                    onInput={val => this.setState({ password: val })}
                  />
                  <ShowPasswordButton
                    hidePassword={this.state.hidePassword}
                    onClick={() => this.setState(state => ({ hidePassword: !state.hidePassword }))}
                  />
                </ListItem>
                <ListItem>
                  <GridRow>
                    <div style={ style.loginButtonContainer }>
                      <Button round raised color="red" fill onClick={this.login} style={ style.loginButton }>
                        {this.state.loggingIn ? <Spinner /> : 'Login'}
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
