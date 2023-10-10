import React, { useEffect, useState } from 'react';
import { useLoaderData, useNavigate, useNavigation } from 'react-router-dom';

import Slider from '../../Layout/Slider/Slider';
import InverterComponent from '../../Component/InverterComponent/InverterComponent';
import SolarPanelComponent from '../../Component/SolarPanelComponent/SolarPanelComponent';






const HomePage = ({ setTitle }) => {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (loading) {
      setTitle("Homepage")
      setLoading(false)
    }


  }, []);



  return (


    <>
      <div className=''>
        <Slider />
        {/* <PopularClassesComponent /> */}
        <InverterComponent/>
        {/* <MusicGroups /> */}
        <SolarPanelComponent/>
        {/* <PopularInstructor /> */}

        {/* <LetsMakeArt /> */}
        {/* <NextEvent /> */}
        {/* <FeedBack /> */}
        {/* <NumbersCount /> */}
        {/* <CourseSection></CourseSection> */}
        {/* <BlogsComponen /> */}
   
      </div>
    </>



  );
}

export default HomePage;
