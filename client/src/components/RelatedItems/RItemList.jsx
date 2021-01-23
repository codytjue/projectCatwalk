import React from 'react';
import StarRatings from 'react-star-ratings';
import RelatedModalContainer from '../../containers/RelatedItems/RelatedModal.js';
import { Modal, Backdrop } from '@material-ui/core';
import Fade from '@material-ui/core/Fade';

const RItemList = ({
  product,
  image,
  currentProduct,
  relatedProductStarModal,
  handleItemToCurrentItemClick,
  handleStarModalClick,
  saveTimeList,
  relatedProductList
})=>{

  // console.log('saveSpaceList:', saveSpaceList);
  // console.log('relatedProductList:', relatedProductList);

  let comparingList = [];
  let updatedNeedList = [];
  let oldList = Object.keys(saveTimeList);

  if ( oldList.length !== 0 ) {
    for ( let i = 0; i < oldList.length; i++ ) {
      comparingList.push(Number.parseInt( oldList[i] ));
    }
    for ( let i = 0; i < relatedProductList.length; i++ ) {
      var checkingId = Number.parseInt( relatedProductList[i] );
      if ( !comparingList.includes(checkingId) ) {
        updatedNeedList.push(checkingId);
      }
    }
  }
  // console.log('updatedNeedList:', updatedNeedList)

  let starRating = product.avgStarRating !== undefined ? product.avgStarRating : 3.5;

  // console.log('RItemItem:', product);
  // console.log('avgStarRating:', product.avgStarRating, starRating);

  let modalRender =
  <Modal
    open={relatedProductStarModal}
    onClose={ ()=> handleStarModalClick( relatedProductStarModal ) }>
    <Fade in={relatedProductStarModal}>
      <div>
        <RelatedModalContainer
          close={ ()=> handleStarModalClick( relatedProductStarModal ) }
          ref={null}/>
      </div>
    </Fade>
  </Modal>;

  let oriPrice = <div className='carousel_item_oriPrice'> &#36; { product.default_price } </div>;

  let disCountPrice = <><span className='carousel_item_disCountPrice_1'> &#36; {product.default_price} </span><span className='carousel_item_disCountPrice_2'> &#36; { product.default_price } </span></>;

  let price = product.styles[0].sale_price === null ? <>{ oriPrice }</> : <>{ disCountPrice }</>;

  let reviewStars =
  <StarRatings
    rating={starRating}
    starDimension='18px'
    starSpacing='0px'
    starRatedColor='#fb9b1c'
    starEmptyColor='#767676'/>;

  // console.log('updatedNeedList:', updatedNeedList);

  return (
    <div className='carousel_item' >
      <div className="carousel_item_image">
        <img src={ image }
          alt='PRODUCT defaultIMG'
          onClick={ ()=> handleItemToCurrentItemClick( product.id, updatedNeedList, saveTimeList, relatedProductList) } /><br /></div>

      <div className="carousel_item_body">
        <span className='carousel_item_smallText'>
          { product.category } </span> <br />
        <div className='carousel_item_title'>
          { product.name }
        </div><br />
        {price}
        <br />
        { reviewStars }<br />
        <button
          className='modalButton'
          onClick={ ()=> handleStarModalClick( relatedProductStarModal, product.id ) }>
          <svg
            width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
            <path fillRule="evenodd" d="M0 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v2h2a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-2H2a2 2 0 0 1-2-2V2zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H2z"/>
          </svg>
        </button>
        { modalRender }
      </div>
    </div>

  );
};

export default RItemList;