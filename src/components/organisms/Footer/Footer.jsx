import React from "react";
import { Icon } from "../../atom";

export const Footer = () => {
  return (
    <footer className='px-[3rem] py-[4rem] bg-footer laptop:pt-[17rem] laptop:px-[16rem]'>
      <div
        className='flex justify-center laptop:justify-between items-center laptop:flex-row gap-[3.2rem] flex-col'
        id='footer'
      >
        <div>
          <h3 className='text-[2rem] text-center laptop:text-left font-[Montserrat-SemiBold]'>
            Ready to Unlock Supply Chain Opportunities?
          </h3>
          <p className='text-[1.4rem] text-center mt-[1.5rem] laptop:text-left'>
            Join 300+ top brands that have trusted us with their freight
            forwarding
          </p>
        </div>
        <button className='btn-secondary text-[1.8rem] rounded-[2rem] max-w-[21rem]'>
          Get started
        </button>
      </div>

      <div className='grid grid-cols-2 gap-10  laptop:grid-cols-5 mt-[9.2rem] laptop:mt-[16rem] text-[1.4rem]'>
        <div className='hidden tablet:flex flex-col mr-[20px]'>
          <div className='mb-[2.6rem]'>
            <Icon name='logo-main' />
          </div>
          <ul>
            <li className='mb-5 font-[Montserrat-SemiBold] '>
              T: +2347040119703
            </li>
            <li className='mb-5 font-[Montserrat-SemiBold] underline'>
              E: hello@mvx.trade
            </li>
            <li className='font-[Montserrat-SemiBold] mb-[8px]'>Austin:</li>
            <li className='mb-5 font-[Montserrat-Regular] text-[#767676]'>
              7000 North Mopac Expressway, Austin, TX, 78731 T: +1 512 514 6221
            </li>

            <li className='font-[Montserrat-SemiBold] mb-[8px]'>Lagos:</li>
            <li className='font-[Montserrat-Regular] text-[#767676]'>
              19 Dr. S Ezekuse Close, Lekki Phase 1, Lagos
            </li>
          </ul>
        </div>

        <ul>
          <li className='mb-[2.6rem]'>
            <h3 className='text-tertiary text-[1.6rem] font-[Montserrat-SemiBold]'>
              Home
            </h3>
          </li>
          <li className='mb-5'>Home</li>
          <li className='mb-5'>About</li>
          <li className='mb-5'>Partners</li>
          <li>Careers</li>
        </ul>

        <ul>
          <li className='mb-[2.6rem]'>
            <h3 className='text-tertiary text-[1.6rem] font-[Montserrat-SemiBold]'>
              Services
            </h3>
          </li>
          <li className='mb-5'>Freight Forwarding</li>
          <li className='mb-5'>Customs</li>
          <li className='mb-5'>Trade Finance</li>
          <li className='mb-5'>Land Haulage</li>
          <li>Track Shipment</li>
        </ul>

        <ul>
          <li className='mb-[2.6rem]'>
            <h3 className='text-tertiary text-[1.6rem] font-[Montserrat-SemiBold]'>
              Resources
            </h3>
          </li>
          <li className='mb-5'>Help & Support</li>
          <li className='mb-5'>Feedback</li>
          <li>Referral</li>
        </ul>

        <ul>
          <li className='mb-[2.6rem]'>
            <h3 className='text-tertiary text-[1.6rem] font-[Montserrat-SemiBold]'>
              Legal
            </h3>
          </li>
          <li className='mb-5'>Privacy policy</li>
          <li className='mb-5'>Cookie policy</li>
          <li>Terms & Conditions</li>
        </ul>
      </div>
      <div className='flex tablet:hidden justify-between mt-[6.8rem] text-[1.4rem] font-[Montserrat-SemiBold]'>
        <p>T: +2347040119703</p>
        <p className='underline'>E: hello@mvx.trade</p>
      </div>

      <div className='flex laptop:hidden justify-center gap-7  flex-col items-center mt-[1.7rem] tablet:mt-[3.5rem] text-[1.4rem]'>
        <p className='font-[Montserrat-SemiBold]'>Lagos:</p>
        <p>19 Dr. S Ezekuse Close, Lekki Phase 1, Lagos</p>
      </div>

      <div className='flex laptop:hidden justify-center gap-7  flex-col items-center mt-[1.8rem] text-[1.4rem]'>
        <p className='font-[Montserrat-SemiBold]'>Austin:</p>
        <p className='text-center'>
          7000 North Mopac Expressway, Austin, TX, 78731 T: +1 512 514 6221
        </p>
      </div>

      <div className='flex laptop:justify-between  justify-center gap-7 laptop:flex-row  flex-col items-center mt-[10rem] text-[1.4rem]'>
        <div className='flex flex-col items-center justify-center gap-4 laptop:flex-row'>
          <div>
            <Icon name='logo-black' />
          </div>
          <p className='text-center'>&copy; MVXchange Technologies Limited</p>
        </div>

        <div className='flex flex-row gap-5'>
          <div>
            <a
              href='https://facebook.com/mvxhq/'
              target='_blank'
              rel='noreferrer'
            >
              <Icon name='facebook' />
            </a>
          </div>
          <div>
            <a
              href='https://www.instagram.com/mvx_hq/'
              target='_blank'
              rel='noreferrer'
            >
              <Icon name='instagram' />
            </a>
          </div>
          <div>
            <a
              href='https://www.linkedin.com/company/mvx-hq/'
              target='_blank'
              rel='noreferrer'
            >
              <Icon name='medium' />
            </a>
          </div>
          <div>
            <a
              href='https://www.linkedin.com/company/mvx-hq/'
              target='_blank'
              rel='noreferrer'
            >
              <Icon name='linkedin' />
            </a>
          </div>

          <div>
            <a
              href='https://twitter.com/mvx_hq'
              target='_blank'
              rel='noreferrer'
            >
              <Icon name='twitter' />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
