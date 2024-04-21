import React from 'react'
import UserOrder from '../order/UserOrder'
import UserDetailForm from '../shared/UserDetailForm'

import { adminUser } from '../../dummy/users';
import { orders } from '../../dummy/orders';

const UserProfile = () => {

  return (
    <div className='grid grid-cols-3 p-4 gap-10'>
      <div>
        <UserDetailForm user={adminUser} />
      </div>

      <div className='col-span-2'>
        <UserOrder data={orders} />
      </div>



    </div>
  )
}

export default UserProfile