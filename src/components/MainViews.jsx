import React, { PropTypes } from 'react';
import { View, Navbar, Pages, Page, ContentBlock, Icon, ListItemContent, NavRight, NavLeft,
  List, ListItem, Views, NavCenter, ContentBlockTitle, GridRow, GridCol, Panel,
  LoginScreen, LoginScreenTitle, ListButton, ListLabel, FormLabel, FormInput, Link } from 'framework7-react';
import CoinsIcon from 'mdi-react/CoinsIcon';

import receipts from '../../resources/receipts.json';
import user from '../../resources/user.json';

export default function MainViews(props, context) {
  return (
    <Views>
      <View id="main-view" navbarThrough dynamicNavbar={true} main url="/">
        {/* Pages */}
        <Pages>
          <Page>
            {context.framework7AppContext.theme.material ? (
              <Navbar style={{ justifyContent: 'center' }}>
                <NavLeft>
                  <Link icon="icon-bars" openPanel="left" />
                </NavLeft>
                <NavCenter sliding style={{ textAlign: 'center', width: '100%', justifyContent: 'center' }}>
                  SRCE ISSP
                </NavCenter>
                <NavRight style={{ marginRight: '4%', justifyContent: 'center' }}>
                  <CoinsIcon fill="white"/>
                  {user.balance}
                </NavRight>
              </Navbar>
            ) : null}
            <List>
              {receipts.map((receipt, index) => (
                <ListButton link={`/details/${index}`} right>
                  <ListItemContent>
                    <div style={{ lineHeight: '24px' }}>
                      <Icon material="access_time"></Icon>
                      {receipt.time}
                    </div>
                    <div>
                      {receipt.price}
                    </div>
                  </ListItemContent>
                </ListButton>))}
            </List>
          </Page>
        </Pages>
      </View>
    </Views>
  );
}

MainViews.contextTypes = {
  framework7AppContext: PropTypes.object,
};

export const LeftPanel = (props, context) => (
  <Panel left cover layout="white">
    <View id="left-panel-view" navbarThrough dynamicNavbar="true">
      <Pages>
        <Page>
          {context.framework7AppContext.theme.material ?  <Navbar title="User details"></Navbar> : null}
          <GridRow style={{ marginLeft: '13%' }}>
            <GridCol>
              <ContentBlockTitle>Name</ContentBlockTitle>
              <ContentBlock>{user.name}</ContentBlock>
            </GridCol>
          </GridRow>
          <GridRow style={{ marginLeft: '13%' }}>
            <GridCol>
              <ContentBlockTitle>Surname</ContentBlockTitle>
              <ContentBlock>{user.lastname}</ContentBlock>
            </GridCol>
          </GridRow>
          <GridRow style={{ marginLeft: '13%' }}>
            <GridCol>
              <ContentBlockTitle>OIB</ContentBlockTitle>
              <ContentBlock>{user.oib}</ContentBlock>
            </GridCol>
          </GridRow>
        </Page>
      </Pages>
    </View>
  </Panel>
);

LeftPanel.contextTypes = {
  framework7AppContext: PropTypes.object,
};
