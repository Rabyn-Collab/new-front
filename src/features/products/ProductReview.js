import { Button, Rating, Textarea } from '@material-tailwind/react'
import { useFormik } from 'formik'
import React from 'react'
import { toast } from 'react-toastify';
import * as Yup from 'yup';

import { useNavigate } from 'react-router';
import { useAddReviewMutation } from './productApi';


const ProductReview = ({ user, id, reviews }) => {
  console.log(id);
  const [addReview, { isLoading }] = useAddReviewMutation();
  const nav = useNavigate();
  const commentSchema = Yup.object({
    rating: Yup.number().required('required'),
    comment: Yup.string().min(5).required(),
  });

  const { handleChange, handleSubmit, values, setFieldValue } = useFormik({
    initialValues: {
      rating: 0,
      comment: ''
    },
    onSubmit: async (val) => {
      if (!user) nav('/login');
      try {
        const response = await addReview({
          body: {
            comment: val.comment,
            rating: val.rating,
            username: user.fullname
          },
          id,
          token: user.token
        }).unwrap();

        toast.dismiss();
        toast.success(response.message);

      } catch (err) {
        toast.dismiss();
        toast.error(err.data.message);
      }

    },
    validationSchema: commentSchema
  });

  return (
    <div className='space-y-2'>

      {!user?.isAdmin && <div>
        <h1>Add Review here</h1>
        <form onSubmit={handleSubmit}>
          <div className="w-96 space-y-2" >
            <Rating onChange={(e) => setFieldValue('rating', e)} name="rating" />
            <Textarea label="Message" name='comment' onChange={handleChange} />
          </div>
          <Button loading={isLoading} type='submit' className="mt-6" fullWidth>
            Submit
          </Button>
        </form>
      </div>
      }

      <div className='mt-5'>
        {reviews.map(({ _id, comment, rating, username }) => {
          return <div key={_id} className=' space-y-1'>
            <h1>{username}</h1>
            <Rating value={rating} readonly />
            <p>{comment}</p>
          </div>
        })}
      </div>

    </div>
  )
}

export default ProductReview