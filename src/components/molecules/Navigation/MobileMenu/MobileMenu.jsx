import React from "react";
import { Icon } from "../../../atom";

export const MobileMenu = ({ setShow }) => {
  return (
    <div className='bg-bgNav text-[1.6rem] tablet:hidden px-2 top-10 inset-x-0 absolute z-50 last:px-8 py-5 w-full opacity-17'>
      <ul className='mt-[7.3rem] '>
        <li className='mb-[2.6rem]'>About</li>
        <li className='mb-[2.6rem] flex justify-between'>
          <div>Services</div>
          <div>
            <Icon name='right' />
          </div>
        </li>
        <li className='mb-[2.6rem]'>Resources</li>
        <li className='mb-[2.4rem]'>Partners</li>
        <li className='mb-[2.4rem]'>Speak to us</li>
        <li className='mb-[2.4rem] text-secondary'>Sign in</li>
      </ul>
      <div>
        <button className='btn-primary'>Sign up</button>
      </div>
    </div>
  );
};
