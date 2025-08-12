import ProfileCard from './ProfileCard'
import ActivityContainer from './ActivityContainer'

import { useState } from 'react';

export type TimeFrame = 'daily' | 'weekly' | 'monthly';

function Dashborad() {
    const [time , setTime]= useState<TimeFrame>("weekly")

    return (<div className='bg-navy-950 w-screen text-white h-screen min-h-fit py-20 px-5 grid grid-cols-1 font-rubik font-thin'>
        <ProfileCard time={time} setTime={setTime}/>
        <ActivityContainer time={time}  />
    </div>);
}


export default Dashborad
