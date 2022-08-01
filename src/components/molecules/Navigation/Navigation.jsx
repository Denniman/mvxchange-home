import React, { useEffect, useRef, useState } from "react";

import { Icon } from "../../atom";

export const Navigation = () => {
  const [showServices, setShowServices] = useState(false);

  const ref = useRef(null);

  useEffect(() => {
    document.addEventListener("click", close);
    return () => document.removeEventListener("click", close);
  }, []);

  function close(e) {
    setShowServices(e && e.target === ref.current);
  }

  return (
    <nav className='hidden laptop:flex font-[Montserrat-Medium] fixed w-[103rem] -top-7 right-[50%]  left-[50%] -translate-x-1/2 translate-y-1/2 justify-between px-[3rem] items-center rounded-[10px] bg-mainNav py-[1.5rem] text-[1.4rem]'>
      <div>
        <Icon name='logo-main' />
      </div>

      <div>
        <ul className='flex justify-between items-center gap-[1.8rem]'>
          <li className='cursor-pointer'>About</li>
          <li
            ref={ref}
            className='relative group cursor-pointer'
            onClick={() => setShowServices(!showServices)}
          >
            Services
            <div
              className={`${
                showServices
                  ? "visible ease-in-out duration-150"
                  : "invisible ease-out duration-150"
              } absolute top-[2rem] group-hover:block shadow-lg shadow-black-500/50 bg-white rounded-[20px] px-[2rem] py-[3rem]  min-w-[43rem]`}
            >
              <ul className='flex flex-col gap-4'>
                <li className='cursor-pointer p-[1.3rem] rounded-[7px] hover:bg-forwardHover'>
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

                <li className='cursor-pointer p-[1.3rem] rounded-[7px] hover:bg-financeHover'>
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

                <li className='cursor-pointer p-[1.3rem] rounded-[7px] hover:bg-forwardHover'>
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

                <li className='cursor-pointer p-[1.3rem] rounded-[7px] hover:bg-financeHover'>
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
          </li>
          <li className='cursor-pointer'>Resources</li>
          <li className='cursor-pointer'>Partners</li>
          <li className='cursor-pointer'>Speak to us</li>
        </ul>
      </div>

      <div>
        <ul className='flex justify-between items-center gap-[1.8rem]'>
          <li className='cursor-pointer'>Sign in</li>
          <li className='bg-secondary cursor-pointer rounded-[10px] text-white px-[4rem] py-[1.5rem]'>
            Sign up
          </li>
        </ul>
      </div>
    </nav>
  );
};
