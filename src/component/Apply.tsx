import type { eventType } from '../type/type.ts'
import { eventData } from '../data/data.ts'
import { useNavigate, useParams, Link } from "react-router-dom";
import { IoIosReturnLeft } from "react-icons/io";

const Apply = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const paramId = Number(id);
  // findで一致する一件だけを返す
  const item = eventData.find((data: eventType) => data.id === paramId);

  const applyClick = () => {
    confirm("（テスト）確認メールを送信しました!");
    navigate(`/detail/${id}/complete`);
  }

  return (
    <div className='w-2/3 m-auto text-left rounded-xl border p-6 space-y-8 bg-gradient-to-br from-slate-50 to-sky-100 border-sky-500 mb-20'>
      <Link
        to={`/`}
        className='flex items-center justify-left mb-8'
      >
        <IoIosReturnLeft />
        イベント一覧
      </Link>
      <p className='text-4xl font-bold mb-4 text-gray-800 pb-6'>イベントに申し込む</p>
      <p className='pb-2'>参加者のメールアドレス：</p>
      <form onSubmit={applyClick} className='flex gap-5 mb-2'>
        <input className='border border-gray-300 rounded-xl p-2 w-full bg-white' required type='email'/>
        <button 
          className='py-4 w-1/3 bg-sky-600 hover:opacity-80 text-white rounded-xl text-[16px]'
          type="submit"
        >
          申し込みを確定する
        </button>
      </form>
      <p className='font-gray-100 text-[12px] pb-4'>（架空のイベントのため、ダミーのメールアドレスで構いません。）</p>
      <hr className='text-gray-300'/>
      <p className='text-[24px] font-bold pb-6'>👀確認事項</p>
      <ul className="list-disc pl-4">
        <li>イベント名：{item.title}</li>
        <li>開催日時：{item.date}</li>
        <li>開催場所：{item.place}</li>
        <li>参加状況：{item.attendee}</li>
      </ul>
    </div>
  )
}

export default Apply