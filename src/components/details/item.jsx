import React from 'react';
import {
  ListButton,
  ListItemContent,
  GridCol,
} from 'framework7-react';
import ellipsize from 'ellipsize';

const toCurrency = (text, currency = 'HRK') => `${text} ${currency}`;

export default function Item({ item, setItem }) {
  return (
    <ListButton onClick={() => setItem(item)} openPicker>
      <ListItemContent className="no-background">
        <GridCol>
          <div>
            {ellipsize(item.name, 10)}
          </div>
        </GridCol>
        <GridCol>
          <div>
            {toCurrency(item.subvention)}
          </div>
        </GridCol>
        <GridCol>
          <div>
            {toCurrency(item.totalPrice)}
          </div>
        </GridCol>
      </ListItemContent>
    </ListButton>);
}
