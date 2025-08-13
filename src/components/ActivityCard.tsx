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
            return <div className=' bg-orange-300 h-fit max-w-full box-border rounded-xl'>
                <div className='overflow-hidden h-10 relative box-border '>
                    <img src={Work} alt="work-img" className='absolute right-4 -top-2.5' />
                </div>
                <CardContent current={current} prev={prev} title={title} />
            </div>

        case "Play":

            return <div className=' bg-blue-300 h-fit max-w-full box-border rounded-xl'>
                <div className='overflow-hidden h-10 relative box-border'>
                    <img src={Play} alt="play-img" className='absolute right-4 -top-2.5' />
                </div>
                <CardContent title={title} current={current} prev={prev} />
            </div>

        case "Study":
            return <div className=' bg-pink-400 h-fit max-w-full box-border rounded-xl'>
                <div className='overflow-hidden h-10 relative box-border'>
                    <img src={Study} alt="study-img" className='absolute right-4 -top-2.5' />
                </div>
                <CardContent title={title} current={current} prev={prev} />
            </div>

        case "Exercise":
            return <div className=' bg-green-400 h-fit max-w-full box-border rounded-xl'>
                <div className='overflow-hidden h-10 relative box-border'>
                    <img src={Exercise} alt="exercise-img" className='absolute right-4 -top-2.5' />
                </div>
                <CardContent title={title} current={current} prev={prev} />
            </div>

        case "Social":
            return <div className=' bg-purple-500 h-fit max-w-full box-border rounded-xl'>
                <div className='overflow-hidden h-10 relative box-border'>
                    <img src={Social} alt="social-img" className='absolute right-4 -top-2.5' />
                </div>
                <CardContent title={title} current={current} prev={prev} />
            </div>

        case "Self Care":
            return <div className=' bg-yellow-300 h-fit max-w-full box-border rounded-xl'>
                <div className='overflow-hidden h-10 relative box-border'>
                    <img src={SelfCare} alt="self-care-img" className='absolute right-4 -top-2.5' />
                </div>
                <CardContent title={title} current={current} prev={prev} />
            </div>


    }
}


export default ActivityCard