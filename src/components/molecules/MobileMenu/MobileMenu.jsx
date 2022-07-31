import React, { Fragment, useState } from "react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";

import { Icon } from "../../atom";

export const MobileMenu = () => {
  const [showMenu, setShowMenu] = useState(false);

  const [showServices, setShowServices] = useState(false);

  return (
    <nav className='laptop:hidden text-[1.8rem] mb-[7rem] font-[Montserrat-Medium]'>
      {!showServices && (
        <Fragment>
          <div
            className={`${
              showMenu ? "bg-[#fffdfb]" : "bg-white"
            } pt-4 px-[2rem] pb-[4rem] top-0 right-0 left-0 w-full z-[999] fixed`}
          >
            <div className='mt-[7px]'>
              <Icon name='logo' />
            </div>

            {showMenu && (
              <div className='mt-[7.3rem] h-screen'>
                <ul>
                  <li className='mb-[2.6rem]'>About</li>
                  <li
                    className='mb-[2.6rem] flex items-center justify-between'
                    onClick={() => setShowServices(true)}
                  >
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
            )}
          </div>

          <div
            className='laptop:hidden fixed right-8 top-7 text-3xl z-[999]'
            onClick={() => setShowMenu(!showMenu)}
          >
            {showMenu ? (
              <XIcon className='w-5 scale-150' />
            ) : (
              <MenuIcon className='w-5 scale-150' />
            )}
          </div>
        </Fragment>
      )}

      {showServices && (
        <div className='pb-[10rem] top-0 right-0 left-0 w-full z-[999] fixed bg-[#fffdfb] h-screen'>
          <div
            className='flex gap-4 border-b-[1px] pb-[3rem] px-[2rem] pt-[2rem]'
            onClick={() => setShowServices(false)}
          >
            <div>
              <Icon name='left' />
            </div>
            <p className='font-[Montserrat-Medium]'>Services</p>
          </div>
          <ul className='flex flex-col gap-7 mt-[5rem] px-[2rem]'>
            <li className='cursor-pointer py-[5px] rounded-[7px] hover:bg-forwardHover'>
              <div className='flex items-center gap-5'>
                <div>
                  <Icon name='freight' />
                </div>
                <div>
                  <p>Freight Forwarding</p>
                  <p className='font-[Montserrat-Regular] text-[1.2rem]'>
                    Easy Freight Forwarding Service
                  </p>
                </div>
              </div>
            </li>
            <li className='cursor-pointer py-[5px] rounded-[7px] hover:bg-financeHover'>
              <div className='flex items-center gap-5'>
                <div>
                  <Icon name='house' />
                </div>

                <div>
                  <p>Freight Finance</p>
                  <p className='font-[Montserrat-Regular] text-[1.2rem]'>
                    Get finance for your freight forwarding needs
                  </p>
                </div>
              </div>
            </li>
            <li className='cursor-pointer py-[5px] rounded-[7px] hover:bg-forwardHover'>
              <div className='flex items-center gap-5'>
                <div>
                  <Icon name='delivery-truck' />
                </div>

                <div>
                  <p>Haulage</p>
                  <p className='font-[Montserrat-Regular] text-[1.2rem]'>
                    Overland Logistics You Can Rely On
                  </p>
                </div>
              </div>
            </li>
            <li className='cursor-pointer py-[5px] rounded-[7px] hover:bg-financeHover'>
              <div className='flex items-center gap-5'>
                <div>
                  <Icon name='receipt' />
                </div>

                <div>
                  <p>Customs</p>
                  <p className='font-[Montserrat-Regular] text-[1.2rem]'>
                    Clear your cargo fast
                  </p>
                </div>
              </div>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};
