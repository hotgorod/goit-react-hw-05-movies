import ReviewItem from 'components/ReviewItem/ReviewItem';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getReview } from 'services/getTrendingMovies';

const Reviews = () => {
  const { id } = useParams();
  const [review, setReview] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState(
    'Something went wrong! Try again later'
  );

useEffect(() => {
  if (!id) return;
  async function fetchReview() {
    try {
      setIsLoading(true);
      const mReview = await getReview(id);
      
      setReview(mReview);
    } catch (error) {
      setError(true);
      setErrorMessage(error.message);
    } finally {
      setIsLoading(false);
    }
  }
  fetchReview();
}, [id]);

  return (
    <>
      {error && (
        <div>
          <p>{errorMessage}</p>
        </div>
      )}
      {isLoading && (
        <div>
          <p>Loading...</p>
        </div>
      )}
      {review.length === 0 ? (
        <p>No review for this movie found</p>
      ) : (
        <ul>
          {review.map(author => {
            return (
              <ReviewItem
                key={author.id}
                author={author.author}
                content={author.content}
              />
            );
          })}
        </ul>
      )}
    </>
  );
}

export default Reviews;
