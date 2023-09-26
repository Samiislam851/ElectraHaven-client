import React, { useEffect, useState } from 'react';
import { useSpring, animated } from 'react-spring';

const FeedBack = () => {
    const [scrollY, setScrollY] = useState(0);
    useEffect(() => {
        const handleScroll = () => {

            const windowHeight = window.innerHeight;
            const documentHeight = document.documentElement.scrollHeight;
            const maxScroll = documentHeight - windowHeight;

            setScrollY(window.scrollY);
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    console.log(scrollY);
    const spring = useSpring({
        from: { opacity: 0, transform: 'translateY(500px)' },
        to: { opacity: 1, transform: 'translateY(0px)' },
        config: { tension: 200, friction: 80 },
        delay: 100,
        reverse: scrollY < 4500,
    });
    const spring2 = useSpring({
        from: { opacity: 0, transform: 'translateY(500px)' },
        to: { opacity: 1, transform: 'translateY(0px)' },
        config: { tension: 180, friction: 80 },
        delay: 100,
        reverse: scrollY < 4500,
    });
    const spring3 = useSpring({
        from: { opacity: 1, transform: 'scale(0.02)' },
        to: { opacity: 1, transform: 'scale(1)' },
        config: { tension: 160, friction: 80 },
        delay: 100,
        reverse: scrollY < 5000,
    });
    return (
        <div className='max-w-[1600px] md:px-12 px-5 py-40  mx-auto'>
            <div>
                <animated.div style={spring}>
                    <h1 className='text-center md:text-6xl text-3xl font-semibold py-4 text-gray-700 '>Our Clients' Feedbacks</h1>

                </animated.div>

                <animated.div style={spring2}>
                    <p className='text-center py-4 md:w-[60%] w-[80%] mx-auto text-gray-500 md:text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa est iste perspiciatis tempora dolorem veniam beatae ipsam dolor molestias? Corrupti placeat veniam mollitia quia nemo nisi, temporibus ab animi error repellat ea corporis, tempore quibusdam, magnam consectetur cum ipsam a.</p>
                </animated.div>
            </div>
            <div className='grid md:grid-cols-3 gap-10 pt-20'>
                <div>
                    <div className='flex flex-col justify-center items-center gap-9 w-fit'>
                        <animated.div style={spring3}>
                            <div className="">
                                <div className="feedback rounded-lg text-gray-600 text-xl px-16 p-10">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius minima temporibus distinctio atque expedita nobis ea, provident voluptatem consectetur rerum!</div>
                            </div>
                        </animated.div>
                        <div className='flex flex-col gap-2'>
                            <div className=' rounded-full ms-10 overflow-hidden border h-[120px] border-[3px] border-[#59C6BC]
                         w-[120px]'>
                                <img src="https://star-learn.mhrtheme.com/wp-content/uploads/2021/10/team-8.jpg" className='image-full' alt="" />
                            </div>
                            <div className=''>
                                <h3 className='text-2xl font-bold text-center ps-7'>Tim Lee <span className='text-base text-gray-500 font-normal'> <br />  Math Professor</span> </h3>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className='flex flex-col justify-center items-center gap-9 w-fit'>
                        <animated.div style={spring3}>
                            <div className="">
                                <div className="feedback rounded-lg text-gray-600 text-xl px-16 p-10">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius minima temporibus distinctio atque expedita nobis ea, provident voluptatem consectetur rerum!</div>
                            </div>
                        </animated.div>
                        <div className='flex flex-col gap-2'>
                            <div className=' rounded-full ms-10 overflow-hidden border h-[120px] border-[3px] border-[#59C6BC]
                         w-[120px]'>
                                <img src="https://star-learn.mhrtheme.com/wp-content/uploads/2021/10/team-5.jpg" className='image-full' alt="" />
                            </div>
                            <div className=''>
                                <h3 className='text-2xl font-bold text-center ps-7'>Erin Gurella <span className='text-base text-gray-500 font-normal'> <br />  Music & Art</span> </h3>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className='flex flex-col justify-center items-center  gap-9 w-fit'>
                        <animated.div style={spring3}>
                            <div className="">
                                <div className="feedback rounded-lg text-gray-600 text-xl px-16 p-10">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius minima temporibus distinctio atque expedita nobis ea, provident voluptatem consectetur rerum!</div>
                            </div>
                        </animated.div>
                        <div className='flex flex-col gap-2'>
                            <div className=' rounded-full ms-10 overflow-hidden border h-[120px] border-[3px] border-[#59C6BC]
                         w-[120px]'>
                                <img src="https://star-learn.mhrtheme.com/wp-content/uploads/2021/10/team-1.jpg" className='image-full' alt="" />
                            </div>
                            <div className=''>
                                <h3 className='text-2xl font-bold text-center ps-7'>Jamie Lannister <span className='text-base text-gray-500 font-normal'> <br />  Doctor</span> </h3>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default FeedBack;