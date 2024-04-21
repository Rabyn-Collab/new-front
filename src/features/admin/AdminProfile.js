import React from 'react'
import UserDetailForm from '../shared/UserDetailForm';
import UserOrder from '../order/UserOrder';
import { regUser } from '../../dummy/users';
import { orders } from '../../dummy/orders';

const AdminProfile = () => {

  return (
    <div className='grid grid-cols-3 p-4 gap-10'>
      <div>
        <UserDetailForm user={regUser} />
      </div>

      <div className='col-span-2'>
        <UserOrder data={orders} />
      </div>



    </div>
  )
}

export default AdminProfile