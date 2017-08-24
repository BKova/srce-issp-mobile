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
              <Navbar style={{ justifyContent: 'center' }} theme="red">
                <NavLeft>
                  <Link icon="icon-bars" openPanel="left" />
                </NavLeft>
                <NavCenter sliding style={{ textAlign: 'center', width: '100%', justifyContent: 'center' }}>
                  SRCE ISSP
                </NavCenter>
                <NavRight style={{ marginRight: '4%', justifyContent: 'center' }}>
                  <CoinsIcon fill="white" viewBox="0 0 25 25" style={{ marginLeft: '5%', marginTop: '1%' }} />
                  {user.balance}
                </NavRight>
              </Navbar>
            ) : null}
            <List>
              {receipts.map((receipt, index) => (
                <ListButton link={`/details/${index}`} right>
                  <ListItemContent>
                    <GridCol>
                      <GridRow>
                        <span style={{ lineHeight: '24px', display: 'inline-block' }}>
                          <Icon material="access_time"></Icon>
                          {receipt.time}
                        </span>
                      </GridRow>
                    </GridCol>
                    <GridCol>
                      <div>
                        {receipt.price}
                      </div>
                    </GridCol>
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
    <View id="left-panel-view" navbarThrough dynamicNavbar="true" theme="red">
      <Pages>
        <Page>
          {context.framework7AppContext.theme.material ? <Navbar title="User details"></Navbar> : null}
          <GridRow style={{ marginLeft: '5%' }}>
            <GridCol>
              <ContentBlockTitle>Name</ContentBlockTitle>
              <ContentBlock>{user.name}</ContentBlock>
            </GridCol>
            <GridCol>
              <ContentBlockTitle>Surname</ContentBlockTitle>
              <ContentBlock>{user.lastname}</ContentBlock>
            </GridCol>
          </GridRow>
          <GridRow style={{ paddingLeft: '11%', justifyContent: 'left' }}>
            <div style={{ color: 'rgba(0, 0, 0, 0.54)' }}>OIB</div>
            <div style={{ paddingLeft: '11%' }} >{user.oib}</div>
          </GridRow>
          <img src={user.img} style={{ width: '60%', height: 'auto', marginLeft: '20%', paddingTop: '10%' }} />
        </Page>
      </Pages>
    </View>
  </Panel>
);

LeftPanel.contextTypes = {
  framework7AppContext: PropTypes.object,
};
