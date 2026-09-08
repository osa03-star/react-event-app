import type { eventType } from '../type/type.ts'
import { eventData } from '../data/data.ts'
import { useNavigate, useParams, Link } from "react-router-dom";

const Complete = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const paramId = Number(id);
  // findで一致する一件だけを返す
  const item = eventData.find((data: eventType) => data.id === paramId);

  return (
    <div className='w-2/3 m-auto text-left rounded-xl border p-6 space-y-8 bg-gradient-to-br from-slate-50 to-sky-100 border-sky-500 mb-20'>
      <p className='text-2xl font-bold mb-4 text-gray-800 pb-6'>🎉 イベント申し込みが完了しました！</p>
      <p className='pb-4'>当日は、下記の時間に余裕を持ってご参加ください！</p>
      <ul className="list-disc pl-4">
        <li>イベント名：{item.title}</li>
        <li>開催日時：{item.date}</li>
        <li>開催場所：{item.place}</li>
        <li>参加状況：{item.attendee}</li>
      </ul>
      <Link 
        to={`/`}
        className='py-4 w-fit bg-sky-600 hover:opacity-80 text-white rounded-xl px-6'>
        トップページに戻る
      </Link>
    </div>
  )
}

export default Complete