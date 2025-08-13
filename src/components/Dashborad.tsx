import ProfileCard from './ProfileCard'
import ActivityContainer from './ActivityContainer'

import data from '../data.json'

import { useState } from 'react';

export type TimeFrame = 'daily' | 'weekly' | 'monthly';

function Dashborad() {
    const [time , setTime]= useState<TimeFrame>("weekly")

    return (<div className={` box-border bg-navy-950 w-screen text-white h-screen min-h-fit py-20 px-5 grid grid-cols-1 grid-rows-${data.length+1} justify-center
     gap-6 font-rubik font-thin `} >
        <ProfileCard time={time} setTime={setTime}/>
        <ActivityContainer time={time}  />
    </div>);
}


export default Dashborad
