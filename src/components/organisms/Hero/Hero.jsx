import React from "react";
import { Link } from "react-scroll";
import { Icon } from "../../atom";
import { Navigation } from "../../molecules";

export const Hero = () => {
  return (
    <div className='px-5 laptop:px-[2.7rem] laptop:pt-[1.5rem] pb-[10rem] bg-white'>
      <div className="pb-[3.4rem] pt-[6rem] rounded-b-[1rem] laptop:px-[16rem] rounded-r-[1rem] px-[1.6rem] bg-cover bg-center bg-bgNav bg-[url('https://res.cloudinary.com/dn8vprize/image/upload/v1659093697/subtract_e6ak5a.svg')]">
        <Navigation />
        <main>
          <div className='tablet:max-w-[60rem] tablet:mt-[10rem]' id='access'>
            <h1 className='font-secondary text-[3.4rem] laptop:text-[7rem]'>
              Access <span className='text-tertiary'>Fast Finance</span> and
              <span className='text-secondary'> Easy Shipping</span> Around The
              World
            </h1>
            <p className='text-[1.4rem] mt-[2.3rem] leading-[2.8rem]'>
              MVX offers you freight financing, frieght tracking, door to door
              shipping and more, all at the tip of your fingers. We eliminate
              the headache of global shipping for you.
            </p>
          </div>
          <div className='flex justify-between tablet:gap-[5rem] tablet:justify-start mt-[3.2rem] text-[1.6rem] basis-[100%]'>
            <button className='btn-primary max-w-[14.5rem]'>Move Cargo</button>
            <button className='text-tertiary max-w-[14.5rem] font-[Montserrat-SemiBold] flex items-center'>
              Get Financed
              <Icon name='right-blue' />
            </button>
          </div>

          <div className='fixed laptop:right-[6rem] right-0 text-[2px] top-[45rem] laptop:top-[45rem]'>
            <Icon name='talk' />
          </div>
          <div className='fixed laptop:hidden right-0 text-[2px] top-[40rem] laptop:top-[68rem]'>
            <Link to='access' smooth={true}>
              <Icon name='mobile-up' />
            </Link>
          </div>

          <div className='hidden absolute right-[20rem] top-[58rem] tablet:flex'>
            <Link to='footer' smooth={true}>
              <button className='flex items-center flex-col gap-4 text-[1.6rem]'>
                <Icon name='arrow-down' />
                Scroll down
              </button>
            </Link>
          </div>

          <article className='round mt-[12rem] tablet:mt-[13rem] flex items-center justify-center'>
            <iframe
              className='rounded-[10px] max-h-[315px] tablet:min-h-[45rem]'
              width='100%'
              src='https://www.youtube.com/embed/l2JMaJTFSvw'
              title='YouTube video player'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
              allowFullScreen
            ></iframe>
          </article>

          <article className='mt-[7rem]'>
            <p className='mb-[3rem] text-[1.4rem]'>
              Trusted by global companies
            </p>
          </article>

          <div className='grid grid-cols-2 laptop:grid-cols-5 gap-4 laptop:gap-[1px] text-[1.3rem]'>
            <div className='laptop:order-first'>
              <p className='text-tertiary text-[1.8rem] mb-2 font-[Montserrat-SemiBold]'>
                300+
              </p>
              <p className='text-[1.2rem]'>Companies serviced</p>
            </div>

            <div>
              <p className='text-tertiary mb-2 text-[1.8rem] font-[Montserrat-SemiBold]'>
                5000+
              </p>
              <p>Containers delivered</p>
            </div>

            <div className='laptop:-order-1'>
              <p className='text-tertiary mb-2 text-[1.8rem] font-[Montserrat-SemiBold]'>
                $2.3million+
              </p>
              <p>Generated for partners in revenue</p>
            </div>

            <div>
              <p className='text-tertiary mb-2 text-[1.8rem] font-[Montserrat-SemiBold]'>
                5000+
              </p>
              <p>Trade transactions financed</p>
            </div>

            <div className='laptop:order-last'>
              <p className='text-tertiary mb-2 text-[1.8rem] font-[Montserrat-SemiBold]'>
                80%
              </p>
              <p>Of our customers have returned again</p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};
