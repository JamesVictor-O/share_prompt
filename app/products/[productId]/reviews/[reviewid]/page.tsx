import React from 'react'

const ReviewDetails = ({params}:{
  params:{
    productId:string;
    reviewId:string;
  }
}) => {
  return (
    <div>
      <h2>
        Review {params.productId} for product {params.reviewId}
      </h2>
    </div>
  )
}

export default ReviewDetails
