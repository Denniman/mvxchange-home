import React from "react";
import { Icon } from "../../../../../atom";

export const Services = () => {
  return (
    <div className='bg-bgNav text-primary px-8 py-5 tablet:hidden z-50 inset-0 absolute '>
      <div className=''>
        <div className='mr-5'>
          <Icon name='left' />
        </div>

        <h2>Services</h2>
        <div className='divide-y' />
      </div>
      <ul>
        <li>
          <p>Freight Forwarding</p>
          <p>Easy Freight Forwarding Service</p>
        </li>
        <li>
          <p>Freight Finance</p>
          <p>Get finance for your freight forwarding needs</p>
        </li>
        <li>
          <p>Haulage</p>
          <p>Overland Logistics You Can Rely On</p>
        </li>
        <li>
          <p>Customs</p>
          <p>Clear your cargo fast</p>
        </li>
      </ul>
    </div>
  );
};
