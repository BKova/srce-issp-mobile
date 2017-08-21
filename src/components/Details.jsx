import React,{Component, PropTypes} from 'react';
import {Page, ContentBlock, Navbar, Pages, GridRow, GridCol, ContentBlockTitle, List, ListButton, Popover} from 'framework7-react';
import Receipts from '../../resources/receipts.json';

export default class Details extends Component {
    constructor(props) {
      super(props);
      this.state = { item: {}};
    }

    render(props) {
        const receipt = Receipts[this.props.index];
        return (
            <Page>
                <Navbar title="Details" backLink="Back" sliding />
                <Pages>
                    <Page>
                        <GridRow style={{marginLeft: '5%'}}>
                            <GridCol>
                                <ContentBlockTitle>Restaurant</ContentBlockTitle>
                                <ContentBlock>{receipt.name}</ContentBlock>
                            </GridCol>
                            <GridCol>
                                <ContentBlockTitle>Time</ContentBlockTitle>
                                <ContentBlock>{receipt.time}</ContentBlock>
                            </GridCol>
                        </GridRow>
                        <GridRow style={{marginLeft: '5%'}}>
                            <GridCol>
                                <ContentBlockTitle>Subvetion</ContentBlockTitle>
                                <ContentBlock>{receipt.subvention}</ContentBlock>
                            </GridCol>
                            <GridCol>
                                <ContentBlockTitle>Price</ContentBlockTitle>
                                <ContentBlock>{receipt.price}</ContentBlock>
                            </GridCol>
                        </GridRow>
                        <Popover onPopoverOpen={() => console.log(this.state)}>
                            <GridRow style={{marginLeft: '20px', marginTop: '15px'}}>
                                <GridCol>
                                    Quantity
                                </GridCol>
                                <GridCol>
                                    Price
                                </GridCol>
                                <GridCol>
                                    Subvention
                                </GridCol>
                                <GridCol>
                                    Total
                                </GridCol>
                            </GridRow>
                            <GridRow style={{marginLeft: '20px', marginBottom: '15px'}}>
                                <GridCol>
                                    {this.state.item.quantity}
                                </GridCol>
                                <GridCol>
                                    {this.state.item.price}
                                </GridCol>
                                <GridCol>
                                    {this.state.item.subvention}
                                </GridCol>
                                <GridCol>
                                    {this.state.item.full}
                                </GridCol>
                            </GridRow>
                        </Popover>
                        <List>
                            {receipt.items.map(item => (
                                <ListButton onClick={() => this.setState({item})} openPopover>
                                    {item.dish}
                                </ListButton>
                            ))}
                        </List>
                    </Page>
                </Pages>
            </Page>
        );
    }
};
