import { useState } from 'react'
import { SlCalender } from "react-icons/sl";
import type { eventType } from './type/type.ts'
import { eventData } from './data/data.ts'
import { Routes, Route } from "react-router-dom"
import Home from './component/Home.tsx'
import Detail from './component/Detail.tsx'
import Apply from './component/Apply.tsx'
import Complete from './component/Complete.tsx'

import './App.css'

function App() {
  return (
    <div>
      <div className='flex items-center justify-center mt-8 mb-8 gap-4'>
        <div className='inline-flex items-center justify-center bg-black h-20 w-20 rounded-full'>
          <SlCalender className='text-[oklch(86.5%_0.127_207.078)]' size={36}/>
        </div>
        <p className='text-[48px] font-bold'>React イベントカレンダー</p>
      </div>
      <p>
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
