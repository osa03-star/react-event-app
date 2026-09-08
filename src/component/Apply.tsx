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

  if (!item) {
    return (
      <div>
        <h1>イベントが見つかりません</h1>
        <p>指定されたイベントは存在しないか、削除された可能性があります。</p>
      </div>
    );
  }
  return (
    <div className='md:w-2/3 m-auto text-left rounded-xl border p-6 space-y-8 bg-gradient-to-br from-slate-50 to-sky-100 border-sky-500 mb-20'>
      <Link
        to={`/`}
        className='flex items-center justify-left mb-8'
      >
        <IoIosReturnLeft />
        イベント一覧
      </Link>
      <p className='text-[30px] md:text-4xl font-bold mb-4 text-gray-800 pb-6'>イベントに申し込む</p>
      <p className='pb-2'>参加者のメールアドレス：</p>
      <form onSubmit={applyClick} className='md:flex gap-5 mb-2'>
        <input className='border border-gray-300 rounded-xl p-2 w-full bg-white mb-4' required type='email'/>
        <button 
          className='py-4 md:w-1/3 bg-sky-600 hover:opacity-80 text-white rounded-xl text-[16px] px-6 w-full'
          type="submit"
        >
          申し込みを確定する
        </button>
      </form>
      <p className='font-gray-100 md:text-[12px] pb-4 text-[10px]'>（架空のイベントのため、ダミーのメールアドレスで構いません。）</p>
      <hr className='text-gray-300'/>
      <p className='text-[24px] font-bold pb-6'>👀<span className='pl-2'>確認事項</span></p>
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