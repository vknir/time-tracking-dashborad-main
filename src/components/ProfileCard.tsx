import pfp from '../assets/image-jeremy.png'
import type { TimeFrame } from './Dashborad'

interface ProfileCardProps {
    time: string,
    setTime: React.Dispatch<React.SetStateAction<TimeFrame>>
}

function ProfileCard({ time, setTime }: ProfileCardProps) {

    const changeToDaily = () => {
        setTime("daily")
    }

    const changeToWeekly = () => {
        setTime("weekly")
    }

    const changeToMonthly = () => {
        setTime("monthly")
    }



    return (<>
        <div className="pt-0 bg-navy-900 h-fit w-full rounded-xl">
            <div className="flex justify-center gap-4 items-center py-8  bg-purple-700 rounded-xl">
                <img src={pfp} alt="pfp" className='border-3 border-white rounded-full h-16' />
                <div >
                    <p className='text-[14px] text-navy-200'>Report for </p>
                    <p className='text-2xl text-white font-[100]'>Jeremy Robson</p>
                </div>
            </div>
            <div className='flex justify-around py-6 px-2 text-navy-200'>
                <button className={time == "daily" ? "text-white":"" } onClick={changeToDaily}>Daily</button>
                <button className={time == "weekly" ? "text-white":"" } onClick={changeToWeekly}>Weekly</button>
                <button className={time == "monthly" ? "text-white":"" } onClick={changeToMonthly}>Monthly</button>
            </div>
        </div>
    </>
    );
}

export default ProfileCard;