import { SlCalender } from "react-icons/sl";
import type { eventType } from '../type/type.ts'
import { eventData } from '../data/data.ts'
import { useNavigate } from "react-router-dom";
import { MdOutlinePlace } from "react-icons/md";
import { IoPeopleOutline } from "react-icons/io5";

const Home = () => {
  const navigate = useNavigate();

  const openDetail = (id: number) => {
    navigate(`/detail/${id}`);
  }

  return (
    <div className='md:w-2/3 m-auto mb-20'>
      {eventData.map((item: eventType) => (
        <div 
          className='rounded-xl border w-full p-6 space-y-8 bg-gradient-to-br from-slate-50 to-sky-100 border-sky-500 hover:shadow-lg transition-shadow duration-300 mb-5 cursor-pointer'
          key={item.id}
          onClick={() => openDetail(item.id)}
        >
          <p className='text-[24px] font-bold text-left'>{item.title}</p>
          <p className='text-[14px] text-left'>{item.info}</p>
          <div className='md:flex text-[14px] mt-5 font-bold gap-4'>
            <div className='flex items-center md:justify-center justify-left'>
              <SlCalender size={16} className='text-blue-500'/>
              <p className='pl-1'>{item.date}</p>
            </div>
            <div className='flex items-center md:justify-center justify-left'>
              <MdOutlinePlace size={16} className='text-green-500'/>
              <p className='pl-1'>{item.place}</p>
            </div>
            <div className='flex items-center md:justify-center justify-left'>
              <IoPeopleOutline size={18} className='text-purple-500'/>
              <p className='pl-1'>{item.attendee}人参加予定</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Home