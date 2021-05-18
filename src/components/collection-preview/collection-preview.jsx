import React from 'react';

const CollectionPreview = ({title, items}) => {
    return(
        <div className='collection-preview'>
    <h1 className='title'>{title.toUpperCase()}</h1>
    <div className='preview'>
    {/*    {items.map(item => (
        <div key={item.id}>{item.name} </div>
        ))}  */}

{/*  { items
  .filter((item, idx) => idx < 4)
  .map(item => (
<div key={item.id}>{item.name} </div>
))}   */}

{items
        .filter((item, idx) => idx < 4)
        .map(({ id, ...otherItemProps }) => (
          <div key={id} {...otherItemProps} />
        ))}  
    </div>
  </div>
    );
}

export default CollectionPreview;