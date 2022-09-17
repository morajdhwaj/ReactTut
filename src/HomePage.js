import React from 'react'
import Moraj from './HomePageComponent/Moraj'
import Name from './HomePageComponent/Name'
import Tahsin from './HomePageComponent/Tahsin'

const HomePage = () => {
  return (
    <div>
        <Tahsin/>
        <Name name="tahsin" class="second year" weight="55 kg"/>
        <Name name="Moraj" class="fourth year"/>
        <Name name="mustafa" class="first year"/>

<Name weight="50 kg" />
    </div>
  )
}

export default HomePage