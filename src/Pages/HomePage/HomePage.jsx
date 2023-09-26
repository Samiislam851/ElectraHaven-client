import React, { useEffect, useState } from 'react';
import { useLoaderData, useNavigate, useNavigation } from 'react-router-dom';
import PopularClassesCard from '../../Component/PopularClassesCard/PopularClassesCard';
import ClassesCard from '../../Component/ClassesCard/ClassesCard';
import PopularClassesComponent from '../../Component/HomePageComponents/PopularClassesComponent/PopularClassesComponent';
import PopularInstructor from '../../Component/PopularInstructor/PopularInstructor';
import Contact from '../../Component/Contact/Contact';
import CourseSection from '../../Component/HomePageComponents/CourseSelection';
import Slider from '../../Layout/Slider/Slider';
import MusicGroups from '../../Component/MusicGroups/MusicGroups';
import LetsMakeArt from '../../Component/LetsMakeArt/LetsMakeArt';
import NextEvent from '../../Component/NextEvent/NextEvent';
import FeedBack from '../../Component/FeedBack/FeedBack';
import NumbersCount from '../../Component/NumbersCount/NumbersCount';
import BlogsComponen from '../../Component/BlogsComponent/BlogsComponen';






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
        <PopularClassesComponent />
        <MusicGroups />
        <PopularInstructor />
      
        <LetsMakeArt />
        <NextEvent />
        <FeedBack />
        <NumbersCount/>
        <CourseSection></CourseSection>
<BlogsComponen/>
        <Contact></Contact>
      </div>
    </>



  );
}

export default HomePage;
