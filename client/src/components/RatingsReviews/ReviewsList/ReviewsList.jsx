import React from 'react';

const ReviewsList = ({currentProductId, reviewsList, reviewDisplayLimiter, reviewFeedback, reviewHelpful, reviewImageModal, reviewReported, reviewScroll, reviewSort, handleReviewsListChange}) => {

  return (
    <div>
      <pre>{JSON.stringify(reviewsList, null, 2)}</pre>
    </div>
  );
};

export default ReviewsList;