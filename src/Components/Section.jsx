import { ReactTyped } from "react-typed";
import { useRef,useEffect } from "react";
const Section = () => {
    const el = useRef(null);
    const typedRef = useRef(null);
    useEffect(() => {
        if (!el.current) return;

        typedRef.current = new Typed(el.current, {
        strings: ['Welcome to Brew Coffee'],
        typeSpeed: 50,
        showCursor: true,
        });

        return () => {
        typedRef.current && typedRef.current.destroy();
        };
    }, []);
  return (
    <div className="relative w-full bg-[url('https://png.pngtree.com/thumb_back/fh260/background/20240715/pngtree-morning-coffee-with-beans-and-steam-image_16013137.jpg')] bg-no-repeat bg-cover py-[50px] h-[660px] ">
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent z-10"></div>
        <section className="w-[50%] mx-auto mt-[150px]">
            <ReactTyped
                strings={['Hello !','Welcome to Brew Coffee','Mid Year Sale 50% OFF!']}
                typeSpeed={80}
                backSpeed={80}
                loop={true}
                className=" text-6xl text-center font-bold flex justify-center text-white"
                />
                <p className="text-white  text-center mt-[30px] text-xl ">At Brew Coffee, we source only the finest beans and roast them with passion and precision. But our story isn’t just about coffee — it’s about people. Our café is a space where creativity brews, friendships grow, and community thrives. </p>            
        </section>
    </div>
  )
}

export default Section