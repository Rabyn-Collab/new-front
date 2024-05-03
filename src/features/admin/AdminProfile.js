import React from 'react'
import UserDetailForm from '../shared/UserDetailForm';
import UserOrder from '../order/UserOrder';
import { useSelector } from 'react-redux';
import { useGetAllOrdersQuery } from '../order/orderApi';

const AdminProfile = () => {
  const { user } = useSelector((state) => state.userSlice);

  const { isLoading, error, data } = useGetAllOrdersQuery(user);
  return (
    <div className='grid grid-cols-3 p-4 gap-10'>
      <div>
        <UserDetailForm user={user} />
      </div>

      <div className='col-span-2'>
        <UserOrder isLoading={isLoading} error={error} data={data} />
      </div>



    </div>
  )
}

export default AdminProfile