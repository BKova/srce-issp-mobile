import React, { PropTypes } from 'react';
import {
  View,
  Navbar,
  Pages,
  Page,
  Icon,
  ListItemContent,
  NavRight,
  NavLeft,
  List,
  Views,
  NavCenter,
  GridRow,
  GridCol,
  ListButton,
  Link } from 'framework7-react';
import CoinsIcon from 'mdi-react/CoinsIcon';
import style from './styles/dashboard.style.jsx';

import receipts from '../../../resources/receipts.json';
import user from '../../../resources/user.json';

export default function Dashboard(props, context) {
  return (
    <Views>
      <View id="main-view" navbarThrough dynamicNavbar={true} main url="/">
        {/* Pages */}
        <Pages>
          <Page>
            {context.framework7AppContext.theme.material ? (
              <Navbar style={ style.navbar } theme="red">
                <NavLeft>
                  <Link icon="icon-bars" openPanel="left" />
                </NavLeft>
                <NavCenter sliding style={ style.navCenter}>
                  SRCE ISSP
                </NavCenter>
                <NavRight style={ style.navRight }>
                  <CoinsIcon fill="white" viewBox="0 0 25 25" style={ style.coinsIcon } />
                  {user.balance}
                </NavRight>
              </Navbar>
            ) : null}
            <List style={ style.mealList }>
              {receipts.map((receipt, index) => (
                <ListButton link={`/details/${index}`} right>
                  <ListItemContent>
                    <GridCol>
                      <GridRow>
                        <span style={ style.mealTimeInfo }>
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

Dashboard.contextTypes = {
  framework7AppContext: PropTypes.object,
};
