import React, { Component, PropTypes } from 'react';
import {
  Page,
  ContentBlock,
  Navbar,
  Pages,
  GridRow,
  GridCol,
  ContentBlockTitle,
  List,
  ListButton,
  ListItemContent,
  Popove,
  ListItem,
  PickerModal,
  Toolbar,
  NavLeft,
  NavRight,
  Link,
} from 'framework7-react';
import ellipsize from 'ellipsize';
import Receipts from '../../resources/receipts.json';

export default class Details extends Component {
  constructor(props) {
    super(props);
    this.state = { item: {} };
  }

  renderPopup() {
    return (
      <PickerModal style={{ height: '25%' }}>
        <Toolbar>
          <NavLeft />
          <NavRight>
            <Link closePicker>Done</Link>
          </NavRight>
        </Toolbar>
        <ContentBlock>
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
        </ContentBlock>
      </PickerModal>
    );
  }

  renderItem(item) {
    return (
      <ListButton onClick={() => this.setState({ item })} openPicker>
        <ListItemContent className="no-background">
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
        <Navbar title="Details" backLink="Back" sliding theme="red"/>
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
        {this.renderPopup()}
        <List style={{ marginTop: '0px', marginBottom: '0px' }}>
          <ListItem style={{ marginLeft: '4%', marginRight: '10%' }}>
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
          {receipt.items.map(item => (this.renderItem(item)))}
        </List>
        <List>
          <ListItem style={{ marginLeft: '4%', marginRight: '4%' }}>
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
