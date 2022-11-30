import React from 'react'
import './Header.css'
import HomeIcon from '@material-ui/icons/Home'
import FlashOnIcon from '@mui/icons-material/FlashOn';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import SearchIcon from '@mui/icons-material/Search';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';

function Header() {
  return (
    <div className='header'>
      <div className='header__icons'>
        {/*All icons here*/}
        <div className='header__icon header__icon--active'>
        <HomeIcon />
        <p>Home</p>
        </div>
        <div className='header__icon'>
        <FlashOnIcon />
        <p>Trending</p>
        </div>
        <div className='header__icon'>
        <LiveTvIcon />
        <p>Verified</p>
        </div>
        <div className='header__icon'>
        <VideoLibraryIcon />
        <p>Collections</p>
        </div>
        <div className='header__icon'>
        <SearchIcon />
        <p>Search</p>
        </div>
        <div className='header__icon'>
        <PersonOutlineIcon />
        <p>Account</p>
        </div>
      </div>
      <img src='https://uploads-ssl.webflow.com/62f521a03143f09333f8ed27/62fd4813bc3b77cc509cbb3f_hulu.png' alt='hulu'/>
    </div>
  )
}

export default Header
