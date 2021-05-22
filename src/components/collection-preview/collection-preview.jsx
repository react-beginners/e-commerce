import React from 'react';
import '../collection-preview/collection-preview.styles.scss';

import CollectionItem from '../collection-item/collection-item.component';

const CollectionPreview = ({title, items}) => {
    return(
        <div className='collection-preview'>
    <h1 className='title'>{title.toUpperCase()}</h1>
    <div className='preview'>
   {/* {items.map(item => (
     <div key={item.id}>{item.name}</div>
   ))} */}

{/* { items
  .filter((item, idx) => idx < 4)
  .map(item => (
<div key={item.id}>{item.name} </div>
))} */}

{items
        .filter((item, index) => index < 4)
        .map(({ id, ...otherItemProps }) => (
          <CollectionItem key={id} {...otherItemProps} />
        ))}
    </div>
  </div>
    );
}

export default CollectionPreview;