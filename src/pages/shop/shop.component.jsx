import React from 'react';

import SHOP_DATA from './shop.data.js';

import CollectionPreview from '../../components/collection-preview/collection-preview';

export default class ShopPage extends React.Component{
    constructor(props){
        super();
        this.state = {
            collections : SHOP_DATA,
            categoryTitle : props.match.params.category
        }
        
    }

    render(){
        const { collections, categoryTitle } = this.state;
        if(typeof categoryTitle !== 'undefined'){
            
            return(
                <div className='shop-page' style={{margin: "0 10px"}}>
                    {collections
                    .filter((collections, index) => collections.routeName === categoryTitle)
                    .map(({id, ...shoplist}) => (
                        <CollectionPreview showall={true} key={id} {...shoplist}/>   
                    ))}
                </div>
            )
            
        }
        return(
            <div className='shop-page' style={{margin: "0 10px"}}>
                {collections.map(({id, ...shoplist}) => (
                    <CollectionPreview key={id} {...shoplist}/>
                ))}
            </div>
        )
    }
}