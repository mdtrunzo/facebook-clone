import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import EmojiFlagsIcon from '@mui/icons-material/EmojiFlags';
import PeopleIcon from '@mui/icons-material/People';
import ChatIcon from '@mui/icons-material/Chat';
import StorefrontIcon from '@mui/icons-material/Storefront';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';
import React from 'react'
import SidebarRow from './SidebarRow'

function Sidebar() {
  return (
    <div className='sidebar'>
        <SidebarRow src='https://png.pngtree.com/element_our/png_detail/20181022/man-avatar-icon-professional-man-character-business-man-avatar-carton-symbol-png_206531.jpg' title='Matías Trunzo' />
        <SidebarRow Icon={LocalHospitalIcon} title='COVID-19 Information Center' />
        <SidebarRow Icon={EmojiFlagsIcon} title="Pages" />
        <SidebarRow Icon={PeopleIcon} title="Friends" />
        <SidebarRow Icon={ChatIcon} title="Messenger" />
        <SidebarRow Icon={StorefrontIcon} title="Marketplace" />
        <SidebarRow Icon={VideoLibraryIcon} title="Videos" />
        <SidebarRow Icon={ExpandMoreOutlinedIcon} title="Marketplace" />
    </div>
  )
}

export default Sidebar