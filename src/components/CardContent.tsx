import Ellipsis from '../assets/icon-ellipsis.svg'

interface CardContentProps {
    current: number,
    prev: number,
    title: string
}

function CardContent({ current, prev, title }: CardContentProps) {
    return (<>
        <div className="p-6 bg-navy-900 h-fit w-full rounded-xl flex justify-between">
            <div className='flex flex-col justify-between gap-1'>
                <p className='text-lg font-medium'>{title}</p>
                <p className='text-3xl font-thin'>{current+"hrs"}</p>
            </div>
            <div className='flex flex-col justify-around items-end'>
                <img src={Ellipsis} alt="ellipsis-img" className='h-[5px] w-[21px]'/>
                <p className='text-navy-200 text-md font-normal'>Last Week - {prev}hrs</p>
            </div>
        </div>
    </>)
}

export default CardContent