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
        <div className="pt-0 bg-navy-900 h-fit  rounded-xl max-w-full box-border">
            <div className="flex justify-center gap-4 items-center py-8  bg-purple-700 rounded-xl box-border">
                <img src={pfp} alt="pfp" className='border-3 border-white rounded-full h-16' />
                <div >
                    <p className='text-[14px] text-navy-200'>Report for </p>
                    <p className='text-2xl text-white font-[100]'>Jeremy Robson</p>
                </div>
            </div>
            <div className='flex justify-around py-6 px-2 text-navy-200 box-border'>
                <button className={time == "daily" ? "text-white ":"hover:text-white hover:cursor-pointer" } onClick={changeToDaily}>Daily</button>
                <button className={time == "weekly" ? "text-white ":"hover:text-white hover:cursor-pointer" } onClick={changeToWeekly}>Weekly</button>
                <button className={time == "monthly" ? "text-white ":"hover:text-white hover:cursor-pointer" } onClick={changeToMonthly}>Monthly</button>
            </div>
        </div>
    </>
    );
}

export default ProfileCard;