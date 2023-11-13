'use client';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import axios from 'axios';
import { SearchBar, ButtonNav } from "@/components";
import { svgIcons } from '@/svg/icons';
import './voting.scss';

export default function Voting() {
  const [catData, setCatData] = useState<any>();
  const router = useRouter();
  const goBack = () => router.back();

  useEffect(() => {
    const getImage = async () => {
      try {
        const responce = await axios.get('https://api.thecatapi.com/v1/images/search?api_key=live_0bN0xo8RAniLZxq1Zxct55My1Bw3Xri7xgWQpqMSuP4Bko5LduUzWoOiWKgwRE6M');
        setCatData(responce.data[0]);
        console.log(responce.data[0]);
      } catch (error) {
        console.log(error)
      }
    }

    getImage();
  }, [])
  return (
    <main>
      <section className="voting">
        <SearchBar />
        <div className="voting__inner">
          <div className="voting__nav">
            <ButtonNav
              type='button'
              svg={svgIcons.back}
              bgColor='#FBE0DC'
              handleClick={goBack}
            />
            <h1 className='voting__title'>Voting</h1>
            {/* <Image src={catData.url} alt={catData.id} width={catData.width} height={catData.height} /> */}
          </div>
          {catData && (
              <img src={catData.url} alt="" />
            )}
        </div>
      </section>
    </main>
  )
}