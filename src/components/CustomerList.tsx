//CustomerList.tsx
import React, { useState } from 'react';

import Tilt from 'react-parallax-tilt';

interface Customer {
  id: number;
  name: string;
  smallDesc: string;
}

interface Props {
  customers: Customer[];
  onSelect: (customer: Customer) => void;
  selectedCustomerId: number | null;
}

//HTML code to structure the left side customer list
const CustomerList: React.FC<Props> = ({ customers, onSelect, selectedCustomerId }) => {
  return (
    <div className="customer-list">

        {customers.map((customer) => (
            <Tilt
            tiltEnable={false}
            glareEnable={true}
            glareMaxOpacity={0.2}
            glareColor="white"
            glarePosition="all"
            glareBorderRadius="20px"
            >
        <div key={customer.id}
             className={`customer-card ${selectedCustomerId === customer.id ? 'selected' : ''}`}
             onClick={() => onSelect(customer)}>
          <div className='customer-list-name'>{customer.name}</div>
          <div>{customer.smallDesc}</div>

        </div>
        </Tilt>

      ))}



    </div>
  );
};

export default CustomerList;