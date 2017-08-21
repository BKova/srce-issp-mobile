import React, {PropTypes} from 'react';
import { View, Navbar, Pages, Page, ContentBlock,
	List, ListItem, Views, NavCenter, ContentBlockTitle,GridRow, GridCol, Panel,
	LoginScreen, LoginScreenTitle, ListButton, ListLabel, FormLabel, FormInput, Link } from 'framework7-react';

export default (props) => (
	<LoginScreen id="login-screen" opened={props.opened}>
		<View>
			<Pages>
				<Page loginScreen>
					<LoginScreenTitle>AAI@Edu Login</LoginScreenTitle>
					<List form>
						<ListItem>
							<FormLabel>Username</FormLabel>
							<FormInput name="username" placeholder="Username" type="text" />
						</ListItem>
						<ListItem>
							<FormLabel>Password</FormLabel>
							<FormInput name="password" type="password" placeholder="Password" />
						</ListItem>
					</List>
					<List>
						<ListButton title="Sign In" closeLoginScreen />
						<ListLabel>
							<p>Click Sign In to close Login Screen</p>
						</ListLabel>
					</List>
					<ContentBlock>
					</ContentBlock>
				</Page>
			</Pages>
		</View>
	</LoginScreen>
);