import React from 'react';
import {
  PickerModal,
  Toolbar,
  ContentBlock,
  GridRow,
  GridCol,
  Button,
} from 'framework7-react';
import style from './styles/popup.style.jsx';

const toCurrency = (text, currency = 'HRK') => `${text} ${currency}`;

export default function Popup({ item }) {
  return (
    <PickerModal style={ style.popup }>
      <Toolbar theme="red" style={ style.toolbar } />
      <ContentBlock>
        <GridRow style={ style.labelsContainer }>
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
        <GridRow style={ style.itemInfoContainer }>
          <GridCol>
            {item.name}
          </GridCol>
          <GridCol>
            {(item.quantity) ? item.quantity.toString() : ''}
          </GridCol>
          <GridCol>
            {toCurrency(item.price)}
          </GridCol>
        </GridRow>
      </ContentBlock>
      <Button round raised color="red" fill closePicker style={ style.closeButton }>
          Close
      </Button>
    </PickerModal>
  );
}
