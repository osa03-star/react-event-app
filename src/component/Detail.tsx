import type { eventType } from '../type/type.ts'
import { eventData } from '../data/data.ts'
import { useParams, Link } from "react-router-dom";
import { SlCalender } from "react-icons/sl";
import { MdOutlinePlace } from "react-icons/md";
import { IoPeopleOutline } from "react-icons/io5";

const Detail = () => {
  const { id } = useParams();
  const paramId = Number(id);
  // findで一致する一件だけを返す
  const item = eventData.find((data: eventType) => data.id === paramId);

  if (!item) {
    return (
      <div>
        <h1>イベントが見つかりません</h1>
        <p>指定されたイベントは存在しないか、削除された可能性があります。</p>
      </div>
    );
  }

  return (
    <div className='md:flex md:gap-8 mb-20'>
      <div className='md:flex-2 rounded-xl border w-full p-6 space-y-8 bg-gradient-to-br from-slate-50 to-sky-100 border-sky-500 mb-10'>
        <p className='text-[36px] font-bold text-left pb-8 leading-none'>{item.title}</p>
        <p className="whitespace-pre-line text-left pb-8 font-medium">{item.info}</p>
        <img src='../community1.jpg' className='rounded-md'></img>
      </div>
      <div className='md:flex-1 rounded-xl border w-full p-6 space-y-8 bg-gradient-to-br from-slate-50 to-sky-100 border-sky-500 h-fit'>
        <p className='text-[24px] font-bold text-left pb-8'>イベントの詳細</p>
        <div className='flex items-center justify-left gap-2 mb-4'>
          <SlCalender className='text-blue-500'/>
          <p>{item.date}</p>
        </div>
        <div className='flex items-center justify-left gap-4'>
          <div className='flex items-center justify-center gap-2'>
            <MdOutlinePlace className='text-green-500' size={22}/>
            <p>{item.place}</p>
          </div>
          <div className='flex items-center justify-center gap-2'>
            <IoPeopleOutline className='text-purple-500' size={22}/>
            <p>{item.attendee}人参加予定</p>
          </div>
        </div>
        <Link 
          to={`/detail/${paramId}/apply`}
          className='block py-4 w-full bg-sky-600 hover:opacity-80 text-white rounded-xl'>
          申し込む
        </Link>
      </div>
    </div>
  )
}

export default Detail