import data from '../data.json'
import ActivityCard from './ActivityCard'
import type { TimeFrame } from './Dashborad'

interface ActivityContainerProps {
    time: TimeFrame,
}


function ActivityContainer({ time }: ActivityContainerProps) {
    return <>{data.map(activity => {
        const current = activity.timeframes[time].current
        const prev= activity.timeframes[time].previous
            return <ActivityCard key={activity.title} title={activity.title} current={current} prev={prev}/>
    })}</>
}

export default ActivityContainer