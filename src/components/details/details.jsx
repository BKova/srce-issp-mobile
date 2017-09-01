/* global window */
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
import fecha from 'fecha';
import SrceClient from 'srce-issp-client';
import Item from './item.jsx';
import Popup from './popup.jsx';
import Spinner from '../login/spinner.jsx';
import style from './styles/details.style.jsx';

const toCurrency = (text, currency = 'HRK') => `${text} ${currency}`;

export default class Details extends Component {
  constructor(props) {
    super(props);
    this.state = {
      receipt: window.receipts[Number(this.props.index)],
      items: [],
      item: {},
    };
  }

  componentDidMount() {
    const client = new SrceClient();
    client.getReceiptDetails(this.state.receipt)
      .then(receipt => this.setState({ items: receipt.items }));
  }

  render(props) {
    return (
      <Page page-from-right-to-center>
        <Navbar title="Details" backLink="Back" sliding theme="red"/>
        <GridRow style={ style.mealInfoContainer }>
          <GridCol>
            <ContentBlockTitle>Restaurant</ContentBlockTitle>
            <ContentBlock>{this.state.receipt.restaurant}</ContentBlock>
          </GridCol>
          <GridCol>
            <ContentBlockTitle>Time</ContentBlockTitle>
            <ContentBlock>{fecha.format(this.state.receipt.time, 'DD/MM/YYYY')}</ContentBlock>
          </GridCol>
        </GridRow>
        <Popup item={this.state.item} />
        {(this.state.items.length) ? <List style={{ marginTop: '0px', marginBottom: '0px' }}>
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
          {this.state.items.map(item => (
            <Item item={item} setItem={item => this.setState({ item }) } />
          ))}
        </List> :
          <div style={style.spinner}>
            <Spinner />
          </div>}
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
                {toCurrency(this.state.receipt.subvention)}
              </div>
            </ListItemContent>
            <ListItemContent>
              <div>
                {toCurrency(this.state.receipt.price)}
              </div>
            </ListItemContent>
          </ListItem>
        </List>
      </Page>
    );
  }
}
