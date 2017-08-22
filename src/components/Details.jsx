import React, { Component, PropTypes } from 'react';
import { Page, ContentBlock, Navbar, Pages, GridRow, GridCol, ContentBlockTitle, List, ListButton, ListItemContent, Popover, ListItem } from 'framework7-react';
import ellipsize from 'ellipsize';
import Receipts from '../../resources/receipts.json';

export default class Details extends Component {
  constructor(props) {
    super(props);
    this.state = { item: {} };
  }

  renderPopover() {
    return (<Popover onPopoverOpen={() => console.log(this.state)}>
      <GridRow style={{ marginLeft: '20px', marginTop: '15px' }}>
        <GridCol>
                        Dish
        </GridCol>
        <GridCol>
                        Quantity
        </GridCol>
        <GridCol>
                        Price
        </GridCol>
      </GridRow>
      <GridRow style={{ marginLeft: '20px', marginBottom: '15px' }}>
        <GridCol>
          {this.state.item.dish}
        </GridCol>
        <GridCol>
          {this.state.item.quantity}
        </GridCol>
        <GridCol>
          {this.state.item.price}
        </GridCol>
      </GridRow>
    </Popover>);
  }

  renderItem(item) {
    return (
      <ListButton onClick={() => this.setState({ item })} openPopover>
        <ListItemContent>
          <GridCol>
            <div>
              {ellipsize(item.dish, 10)}
            </div>
          </GridCol>
          <GridCol>
            <div>
              {item.subvention}
            </div>
          </GridCol>
          <GridCol>
            <div>
              {item.full}
            </div>
          </GridCol>
        </ListItemContent>
      </ListButton>);
  }

  render(props) {
    const receipt = Receipts[this.props.index];
    return (
      <Page page-from-right-to-center>
        <Navbar title="Details" backLink="Back" sliding />
        <GridRow style={{ marginLeft: '5%' }}>
          <GridCol>
            <ContentBlockTitle>Restaurant</ContentBlockTitle>
            <ContentBlock>{receipt.name}</ContentBlock>
          </GridCol>
          <GridCol>
            <ContentBlockTitle>Time</ContentBlockTitle>
            <ContentBlock>{receipt.time}</ContentBlock>
          </GridCol>
        </GridRow>
        {this.renderPopover()}
        <List>
          <ListItem style={{ marginLeft: '4%', marginRight: '10%' }}>
            <GridCol>
              <div>
                        Dish
              </div>
            </GridCol>
            <GridCol>
              <div>
                        Subvention
              </div>
            </GridCol>
            <GridCol>
              <div>
                        Total
              </div>
            </GridCol>
          </ListItem>
          {receipt.items.map(item => (this.renderItem(item)))}
        </List>
        <GridRow style={{ marginLeft: '4%', marginRight: '6%' }}>
          <ContentBlockTitle>
                    Total subvention
          </ContentBlockTitle>
          <ContentBlockTitle>
                    Total price
          </ContentBlockTitle>
        </GridRow>
        <List>
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
