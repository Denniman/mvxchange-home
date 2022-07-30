import React, { Fragment, useState } from "react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";

import { Icon } from "../../atom";
import { MobileMenu } from "./MobileMenu";

export const Navigation = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <Fragment>
      <nav
        className={`${
          showMenu ? "bg-bgNav" : "bg-white"
        } flex justify-between  px-2 py-5 tablet:bg-white`}
      >
        <div className='flex flex-1'>
          <div>
            <Icon name='logo' />
          </div>

          <div className='hidden tablet:flex flex-1 justify-between'>
            <ul className='tablet:grid place-items-center'>
              <li>About</li>
              <li>Services</li>
              <li>Resources</li>
              <li>Partners</li>
              <li>Speak to us</li>
            </ul>

            <div>
              <ul>
                <li>Sign in</li>
                <li>Sign up</li>
              </ul>
            </div>
          </div>
        </div>
        <div className='phone:hidden' onClick={() => setShowMenu(!showMenu)}>
          {showMenu ? <XIcon className='w-5' /> : <MenuIcon className='w-5' />}
        </div>
      </nav>
      {showMenu && <MobileMenu />}
    </Fragment>
  );
};
