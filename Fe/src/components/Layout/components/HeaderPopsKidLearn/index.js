import React from 'react'
import HeaderWrapper from '../HeaderWrapper'
import MenuPopsKidLearn from '../MenuPopsKidLearn'
import ProfileButton from '../../ProfileButton'
import Seacrh from '../../../Layout/components/Header/Seacrh'

function HeaderPopsKidLearn() {

  return (
    <HeaderWrapper>
      <div className="relative flex justify-around items-center w-full">
        {/* logo */}
        <div className="  md:block md:w-20 md:h-14  ">
          <img
            className="w-[70px] h-[46px]"
            src={require('../../../../assets/images/logo.png')}
            alt="Logo"
          />
        </div>
        <Seacrh api = 'http://localhost:8080/api/courses/search/' to='/courseDetails/' />
        <div className=" hidden md:flex">
          <ProfileButton />
        </div>
      </div>

      <MenuPopsKidLearn position={'absolute md:-bottom-12 -bottom-12'} />
    </HeaderWrapper>
  )
}

export default HeaderPopsKidLearn
