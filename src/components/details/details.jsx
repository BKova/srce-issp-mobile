import React, { Component, PropTypes } from 'react';
import {
  Page,
  ContentBlock,
  Navbar,
  GridRow,
  GridCol,
  ContentBlockTitle,
  List,
  ListItemContent,
  ListItem,
} from 'framework7-react';
import Item from './item.jsx';
import Popup from './popup.jsx';
import style from './styles/details.style.jsx';

import receipts from '../../../resources/receipts.json';

export default class Details extends Component {
  constructor(props) {
    super(props);
    this.state = { item: {} };
  }

  render(props) {
    const receipt = receipts[this.props.index];
    return (
      <Page page-from-right-to-center>
        <Navbar title="Details" backLink="Back" sliding theme="red"/>
        <GridRow style={ style.mealInfoContainer }>
          <GridCol>
            <ContentBlockTitle>Restaurant</ContentBlockTitle>
            <ContentBlock>{receipt.name}</ContentBlock>
          </GridCol>
          <GridCol>
            <ContentBlockTitle>Time</ContentBlockTitle>
            <ContentBlock>{receipt.time}</ContentBlock>
          </GridCol>
        </GridRow>
        <Popup item={this.state.item} />
        <List style={{ marginTop: '0px', marginBottom: '0px' }}>
          <ListItem style={ style.dishLabels }>
            <GridCol>
              <div>
                <b>Dish</b>
              </div>
            </GridCol>
            <GridCol>
              <div>
                <b>Subvention</b>
              </div>
            </GridCol>
            <GridCol>
              <div>
                <b>Total</b>
              </div>
            </GridCol>
          </ListItem>
          {receipt.items.map(item => (
            <Item item={item} setItem={item => this.setState({ item }) } />
          ))}
        </List>
        <List>
          <ListItem style={ style.priceInfoLabels }>
            <div>
              <b>Total subvention</b>
            </div>
            <div>
              <b>Total price</b>
            </div>
          </ListItem>
          <ListItem>
            <ListItemContent>
              <div>
                {receipt.subvention}
              </div>
            </ListItemContent>
            <ListItemContent>
              <div>
                {receipt.price}
              </div>
            </ListItemContent>
          </ListItem>
        </List>
      </Page>
    );
  }
}
