import Work from '../assets/icon-work.svg'
import Play from '../assets/icon-play.svg'
import SelfCare from '../assets/icon-self-care.svg'
import Study from '../assets/icon-study.svg'
import Exercise from '../assets/icon-exercise.svg'
import Social from '../assets/icon-social.svg'

import CardContent from './CardContent'



interface ActivityCardProps {
    title: string,
    current: number,
    prev: number
}

function ActivityCard({ title, current, prev }: ActivityCardProps) {
    switch (title) {
        case "Work":
            return <div className='pt-0 bg-orange-300 h-fit w-full rounded-xl'>
                <div className='overflow-hidden h-10 relative '>
                    <img src={Work} alt="work-img" className='absolute right-4 -top-2.5' />
                </div>
                <CardContent current={current} prev={prev} title={title} />
            </div>

        case "Play":

            return <div className='pt-0 bg-blue-300 h-fit w-full rounded-xl'>
                <div className='overflow-hidden h-10 relative'>
                    <img src={Play} alt="play-img" className='absolute right-4 -top-2.5' />
                </div>
                <CardContent title={title} current={current} prev={prev} />
            </div>

        case "Study":
            return <div className='pt-0 bg-pink-400 h-fit w-full rounded-xl'>
                <div className='overflow-hidden h-10 relative'>
                    <img src={Study} alt="study-img" className='absolute right-4 -top-2.5' />
                </div>
                <CardContent title={title} current={current} prev={prev} />
            </div>

        case "Exercise":
            return <div className='pt-0 bg-green-400 h-fit w-full rounded-xl'>
                <div className='overflow-hidden h-10 relative'>
                    <img src={Exercise} alt="exercise-img" className='absolute right-4 -top-2.5' />
                </div>
                <CardContent title={title} current={current} prev={prev} />
            </div>

        case "Social":
            return <div className='pt-0 bg-purple-500 h-fit w-full rounded-xl'>
                <div className='overflow-hidden h-10 relative'>
                    <img src={Social} alt="social-img" className='absolute right-4 -top-2.5' />
                </div>
                <CardContent title={title} current={current} prev={prev} />
            </div>

        case "Self Care":
            return <div className='pt-0 bg-yellow-300 h-fit w-full rounded-xl'>
                <div className='overflow-hidden h-10 relative'>
                    <img src={SelfCare} alt="self-care-img" className='absolute right-4 -top-2.5' />
                </div>
                <CardContent title={title} current={current} prev={prev} />
            </div>


    }
}


export default ActivityCard