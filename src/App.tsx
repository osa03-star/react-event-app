import { SlCalender } from "react-icons/sl";
import { Routes, Route } from "react-router-dom"
import Home from './component/Home.tsx'
import Detail from './component/Detail.tsx'
import Apply from './component/Apply.tsx'
import Complete from './component/Complete.tsx'

import './App.css'

function App() {
  return (
    <div className="pl-4 pr-4">
      <div className='flex items-center justify-center  mt-10 mb-10 md:mt-8 md:mb-8 gap-4'>
        <div className='shrink-0 inline-flex items-center justify-center bg-black h-16 w-16 md:h-20 md:w-20 rounded-full'>
          <SlCalender className='h-6 w-6 text-[oklch(86.5%_0.127_207.078)] md:h-9 md:w-9'/>
        </div>
        <p className='text-[26px] md:text-[48px] font-bold leading-none'>React イベントカレンダー</p>
      </div>
      <p className="pb-5">
        定期的に開催されるイベントをチェックして、学習と交流を加速させましょう。<br />
        最新情報を受け取りたい場合は、ぜひフォローしてください。
      </p>
      <a className='inline-block pb-5 text-[oklch(78.9%_0.154_211.53)]' href='#'>Twitter</a>
    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/detail/:id/apply" element={<Apply />} />
        <Route path="/detail/:id/complete" element={<Complete />} />
      </Routes>
    </div>
  )
}

export default App
