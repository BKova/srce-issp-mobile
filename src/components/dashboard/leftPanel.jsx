import React, { PropTypes } from 'react';
import {
  Panel,
  View,
  Pages,
  Page,
  Navbar,
  GridCol,
  GridRow,
  ContentBlock,
  ContentBlockTitle,
} from 'framework7-react';
import style from './styles/leftPanel.style.jsx';

import user from '../../../resources/user.json';

export default function LeftPanel(props, context) {
  return (
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
            <GridRow style={ style.oibContainer }>
              <div style={ style.oibTitle}>OIB</div>
              <div style={ style.oibInfo } >{user.oib}</div>
            </GridRow>
            <img src={user.img} style={ style.userImg } />
          </Page>
        </Pages>
      </View>
    </Panel>);
}

LeftPanel.contextTypes = {
  framework7AppContext: PropTypes.object,
};
