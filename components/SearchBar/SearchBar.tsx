'use client';
import { useState } from 'react';
import { ButtonNav } from '..';
import { svgIcons } from '@/svg/icons';
import './SearchBar.scss';

function SearchBar() {
  const [text, setText] = useState<string>('');

  return (
    <div className="search-bar">
      <div className="search-bar__input-container">
        <input
          type='text'
          className='search-bar__input'
          value={text}
          placeholder='Search for breeds by name'
          onChange={(e) => setText(e.target.value)}
        />
        <div className="search-bar__icon">
          <ButtonNav
            type='button'
            svg={svgIcons.search}
            bgColor='#FBE0DC'
          />
        </div>
      </div>
    </div>
  )
}

export default SearchBar