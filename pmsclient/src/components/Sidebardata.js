
import React from 'react';
import * as FaIcons from "react-icons/fa"
import * as AiIcons from "react-icons/ai"
import * as IoIcons from "react-icons/io"
import * as BiIcons from "react-icons/bi"
import * as GiIcons from "react-icons/gi"
import * as VscIcons from "react-icons/vsc"
import * as MdIcons from "react-icons/md"
/*import * as RiIcons from "react-icons/ri"*/



const Sidebardata = () => (  
[
  
   {
    title:"Dashboard",
    icon: <AiIcons.AiFillDashboard/>,
    path:"/dashboard",
    iconClosed:<BiIcons.BiRightArrow/>,
    iconOpen: <BiIcons.BiDownArrow/>
    },

    {
    title:"Properties",
    icon: <BiIcons.BiBuildingHouse/>,
    path:"/properties",
    iconClosed:<BiIcons.BiRightArrow/>,
    iconOpen: <BiIcons.BiDownArrow/>
    },

    {
    title:"Landlords",
    icon:<GiIcons.GiReceiveMoney/>,
    path:"/landlords",
    iconClosed:<BiIcons.BiRightArrow/>,
    iconOpen: <BiIcons.BiDownArrow/>
    },

    { 
    title:"Units",
    icon: <IoIcons.IoIosBed/>,
    path:"/units",
    iconClosed:<BiIcons.BiRightArrow/>,
    iconOpen: <BiIcons.BiDownArrow/>
    },
   
    {
    title:"Maintenance",
    icon: <MdIcons.MdOutlineHandyman/>,
    path:"/maintenance",
    iconClosed:<BiIcons.BiRightArrow/>,
    iconOpen: <BiIcons.BiDownArrow/>
    },  

    {
    title:"Caretakers",
    icon: <FaIcons.FaPersonBooth/>,
    path:"/caretakers",
    iconClosed:<BiIcons.BiRightArrow/>,
    iconOpen: <BiIcons.BiDownArrow/>
    },
                
    {
      title:"Attachements",
      icon: <VscIcons.VscFileSubmodule/>,
      path:"/attachments",
      iconClosed:<BiIcons.BiRightArrow/>,
      iconOpen: <BiIcons.BiDownArrow/>,
      submenu: [
        {
          title:"Work Orders",
          icon: <GiIcons.GiSpanner/>,
          path:"/attachments/work-orders",
         
        },
        
        {
          title:"Evacuation Notice",
          icon: <IoIcons.IoMdCreate/>,
          path:"/attachments/evacuation-notice"
        }
      
      ]
    }
  
  
  
         
              

  
 
]


);
export default Sidebardata();
