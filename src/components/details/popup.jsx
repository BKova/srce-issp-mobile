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
            {item.dish}
          </GridCol>
          <GridCol>
            {item.quantity}
          </GridCol>
          <GridCol>
            {item.price}
          </GridCol>
        </GridRow>
      </ContentBlock>
      <Button round raised color="red" fill closePicker style={ style.closeButton }>
          Close
      </Button>
    </PickerModal>
  );
}
