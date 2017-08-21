import React, {PropTypes} from 'react';
import { View, Navbar, Pages, Page, ContentBlock,
	List, ListItem, Views, NavCenter, ContentBlockTitle,GridRow, GridCol, Panel,
	LoginScreen, LoginScreenTitle, ListButton, ListLabel, FormLabel, FormInput, Link } from 'framework7-react';

import receipts from '../../resources/receipts.json';
import user from '../../resources/user.json';

export default function MainViews (props, context) {
	return (
		<Views>
			<View id="main-view" navbarThrough dynamicNavbar={true} main url="/">
				{/* Pages */}
				<Pages>
					<Page>
						{context.framework7AppContext.theme.material ? (
							<Navbar>
								<NavCenter sliding style={{textAlign: 'center', width: '100%'}}>
									SRCE ISSP
								</NavCenter>
							</Navbar>
						) : null}
						<GridRow style={{marginLeft: '13%'}}>
							<GridCol>
								<ContentBlockTitle>Name</ContentBlockTitle>
								<ContentBlock>{user.name}</ContentBlock>
							</GridCol>
							<GridCol>
							<ContentBlockTitle>Surname</ContentBlockTitle>
							<ContentBlock>{user.lastname}</ContentBlock>
							</GridCol>
						</GridRow>
						<GridRow style={{marginLeft: '13%'}}>
							<GridCol>
							<ContentBlockTitle>OIB</ContentBlockTitle>
							<ContentBlock>{user.oib}</ContentBlock>
							</GridCol>
							<GridCol>
							<ContentBlockTitle>Balance</ContentBlockTitle>
							<ContentBlock>{user.balance}</ContentBlock>
							</GridCol>
						</GridRow>
						<List inset>
							{receipts.map((receipt, index) => (<ListButton link={`/details/${index}`}>{receipt.name}</ListButton>))}
						</List>
					</Page>
				</Pages>
			</View>
		</Views>
	);
};

MainViews.contextTypes = {
	framework7AppContext: PropTypes.object
};