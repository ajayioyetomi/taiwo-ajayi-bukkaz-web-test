import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {Button} from '.';

import Logo from '../assets/logo-icon.svg?react';
import SearchIcon from '../assets/search-icon.svg?react';

type LinkType = {
  href: string,
  name: string,
  label: string;
  type: "link" | "dropdown";
  subLinks?:SubLinkType[];
}

type SubLinkType = {
  id: string,
  title:string;
  avatar:string;
}

const linkList: LinkType[] = [
  {
    name:"category",
    href:'/category',
    label:"Category",
    type: "dropdown",
    subLinks:[
      {
        id:crypto.randomUUID(),
        title:"Action",
        avatar:"/assets/category-avatar.webp",
      },
      {
        id:crypto.randomUUID(),
        title:"Comedy",
        avatar:"/assets/category-avatar.webp",
      },
      {
        id:crypto.randomUUID(),
        title:"Sci-Fi",
        avatar:"/assets/category-avatar.webp",
      },
      {
        id:crypto.randomUUID(),
        title:"Horror",
        avatar:"/assets/category-avatar.webp",
      },
      {
        id:crypto.randomUUID(),
        title:"Adventure",
        avatar:"/assets/category-avatar.webp",
      },
      {
        id:crypto.randomUUID(),
        title:"Drama",
        avatar:"/assets/category-avatar.webp",
      },
      {
        id:crypto.randomUUID(),
        title:"Triller",
        avatar:"/assets/category-avatar.webp",
      },


    ]
  },
   {
    name:"following",
    href:'/following',
    label:"Following",
    type: "link",
  },
   {
    name:"schedule-movies",
    href:'/schedule-movies',
    label:"Schedule Movies",
    type:"link",
  },
   {
    name:"saved-list",
    href:'/saved-list',
    label:"Saved List",
    type:"link",
  }

] 

const Header = () => {
  const [active_index, set_active_index] = useState<string>('');
  const handleClickDropDrop = (id:string) =>{
    if(active_index === id){
      set_active_index('');
      return;
    }
    set_active_index(id);
  }

  useEffect(()=>{
    const handleOutsideClick = (e: MouseEvent) =>{
      let el = e?.target as HTMLElement | null;
      console.log(el,'click')
      if(el && el?.classList?.contains('sub-list')){
        return;
        
      }
      set_active_index('');
    }

    window.addEventListener('click',handleOutsideClick);
    return () => window.removeEventListener('click',handleOutsideClick);

  },[])
  return (
    <nav className="px-6 py-3 flex gap-4">
      <Link to="/home">
       <Logo className="w-25" />
      </Link>
      {linkList.map((link:LinkType) =>
        link.type === "link"?
        <Link className="text-gray-600" key={link.name} to={link.href}>{link.label}</Link> :
        <div className="relative z-10" key={link.name}>
          <Button className="sub-list" onClick={()=>handleClickDropDrop(link.name)}>{link.label}</Button>
          <ul className={`${active_index === link.name ? 'grid' :'hidden'} sub-list grid-cols-2 min-w-100 bg-gray-800 absolute z-10 top-8 p-2`}>
            {link.subLinks?.map((eachSubLink:SubLinkType) =>
            <li key={eachSubLink.id} className="w-[calc(50% - 10px)] p-2 sub-list">
              <Link to="" className="flex items-center gap-2 sub-list">
                <img src={eachSubLink.avatar} alt={eachSubLink.title} className="sub-list" />
                <span className="sub-list">{eachSubLink.title}</span>
              </Link>
            </li>
            )}
          </ul>
        </div>
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