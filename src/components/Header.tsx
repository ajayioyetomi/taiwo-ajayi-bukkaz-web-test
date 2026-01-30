import { Link } from "react-router-dom";
import {Button} from '.';

import Logo from '../assets/logo-icon.svg?react';
import SearchIcon from '../assets/search-icon.svg?react';

type LinkType = {
  href: string,
  name: string,
  label: string;
}

const linkList: LinkType[] = [
  {
    name:"category",
    href:'/category',
    label:"Category"
  },
   {
    name:"following",
    href:'/following',
    label:"Following"
  },
   {
    name:"schedule-movies",
    href:'/schedule-movies',
    label:"Schedule Movies"
  },
   {
    name:"saved-list",
    href:'/saved-list',
    label:"Saved List"
  }

] 

const Header = () => {
  return (
    <nav className="px-6 py-3 flex gap-4">
      <Link to="/home">
       <Logo className="w-25" />
      </Link>
      {linkList.map((link:LinkType) =>
        <Link className="text-gray-600" key={link.name} to={link.href}>{link.label}</Link>
      )}
      
      <div className="flex gap-2 ml-auto">
        <Button>
          <SearchIcon />
        </Button>
        <Button>
          <img src="/assets/avatar-thumbnail.webp" alt="Avatar" />
        </Button>
        

      </div>
    </nav>
  )
}

export default Header