
import Hometoy2 from '@/assets/img/Hometoy2.png'
import SparklesText from "@/components/magicui/sparkles-text";
import { Button } from "@/components/ui/button";
import BoxReveal from "@/components/magicui/box-reveal";
import React, { useEffect } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import '@/assets/css/Loginstyle.css'

const Home = () => {
  const [emblaRef] = useEmblaCarousel({ loop: false }, [Autoplay()])
    return (
      <>
      
        <div className='h-full w-100 flex justify-center items-center pt-14 pl-8 '>
        <div className="h-full w-full max-w-[32rem] items-center justify-center overflow-hidden pt-8">
      <BoxReveal boxColor={"#5046e6"} duration={0.5}>
        <p className="text-[3.5rem] font-semibold">
          TOYLAND<span className="text-[#5046e6]">.</span>
        </p>
      </BoxReveal>
 
      <BoxReveal boxColor={"#5046e6"} duration={0.5}>
        <h2 className="mt-[.5rem] text-[1rem]">
        Toys for every age{" "}
          {/* <span className="text-[#5046e6]">Design Engineers</span> */}
        </h2>
      </BoxReveal>
 
      <BoxReveal boxColor={"#5046e6"} duration={0.5}>
        <div className="mt-[1.5rem]">
          <p>
            -&gt; 20+ free and open-source animated components built with
            <span className="font-semibold text-[#5046e6]"> Toys for every age</span>,
            <span className="font-semibold text-[#5046e6]"> Typescript</span>,
            <span className="font-semibold text-[#5046e6]"> Tailwind CSS</span>,
            and
            <span className="font-semibold text-[#5046e6]"> Framer Motion</span>
            . <br />
            -&gt; 100% open-source, and customizable. <br />
          </p>
        </div>
      </BoxReveal>
 
      <BoxReveal boxColor={"#5046e6"} duration={0.5}>
        <Button className="mt-[1.6rem] bg-[#5046e6]">Explore</Button>
      </BoxReveal>
    </div>
           {/* <label className='text-2xl font-bold'>First Smlie !!</label> */}

           <div className="embla" ref={emblaRef}>
      <div className="embla__container">
        <div className="embla__slide"><img src='https://toyzone.in/cdn/shop/files/99-store_0ac2798c-09fa-4c4e-99f1-7241d0ded53d.jpg?v=1672121636'/></div>
        <div className="embla__slide"><img src='https://toyzone.in/cdn/shop/files/199-store-banner_3ef4af54-489b-44e7-b0ca-904877c63956.jpg?v=1670236638'/></div>
        <div className="embla__slide"><img src='https://toyzone.in/cdn/shop/files/magic-car-banner_171f3762-e6e5-4e34-a1df-f93f88ac3f62.jpg?v=1686133287'/></div>
        <div className="embla__slide"><img src='https://toyzone.in/cdn/shop/files/149-store_73c76dba-6ef8-4408-bc1d-ae34539be2ff.jpg?v=1672122090'/></div>
      </div>
     
    </div>
     </div>  
   
    </>    
    )
}

export default Home