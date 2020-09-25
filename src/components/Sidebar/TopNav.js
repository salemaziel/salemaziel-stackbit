import React from 'react';
import {
  MdMenu
} from 'react-icons/md'

export default function TopNav({ title, onMenuClick = () => {} }) {
  return (
    <div id="headerToggle">
      <a
        href="/#"
        className="toggle"
        onClick={e => {
          e.preventDefault();
          onMenuClick();
        }}
      >
        <MdMenu />
        {' '}
      </a>
    </div>
  );
}
