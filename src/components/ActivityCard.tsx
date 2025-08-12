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
                <div className='overflow-hidden h-12 '>
                    <img src={Work} alt="work-img" className='object-top' />
                </div>
                <CardContent current={current} prev={prev} title={title} />
            </div>

        case "Play":

            return <div className='pt-0 bg-blue-300 h-fit w-full rounded-xl'>
                <div className='overflow-hidden h-12'>
                    <img src={Play} alt="play-img" />
                </div>
                <CardContent title={title} current={current} prev={prev} />
            </div>

        case "Study":
            return <div className='pt-0 bg-pink-400 h-fit w-full rounded-xl'>
                <div className='overflow-hidden h-12'>
                    <img src={Study} alt="study-img" />
                </div>
                <CardContent title={title} current={current} prev={prev} />
            </div>

        case "Exercise":
            return <div className='pt-0 bg-green-400 h-fit w-full rounded-xl'>
                <div className='overflow-hidden h-12'>
                    <img src={Exercise} alt="exercise-img" />
                </div>
                <CardContent title={title} current={current} prev={prev} />
            </div>

        case "Social":
            return <div className='pt-0 bg-purple-500 h-fit w-full rounded-xl'>
                <div className='overflow-hidden h-12'>
                    <img src={Social} alt="social-img" />
                </div>
                <CardContent title={title} current={current} prev={prev} />
            </div>

        case "Self Care":
            return <div className='pt-0 bg-yellow-300 h-fit w-full rounded-xl'>
                <div className='overflow-hidden h-12'>
                    <img src={SelfCare} alt="self-care-img" />
                </div>
                <CardContent title={title} current={current} prev={prev} />
            </div>


    }
}


export default ActivityCard