import React from 'react';
import {
  ListButton,
  ListItemContent,
  GridCol,
} from 'framework7-react';
import ellipsize from 'ellipsize';

export default function Item({ item, setItem }) {
  return (
    <ListButton onClick={() => setItem(item)} openPicker>
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
