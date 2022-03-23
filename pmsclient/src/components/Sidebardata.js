
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
    iconClosed:<AiIcons.AiOutlineRight/>,
    iconOpen: <MdIcons.MdExpandMore/>,
    submenu: [
      /*{
        title:"Find Properties",
        icon: <GiIcons.GiSpanner/>,
        path:"/attachments/work-orders",
        iconOpen: <MdIcons.MdExpandMore/>,
       
      },
      
      {
        title:"Evacuation Notice",
        icon: <IoIcons.IoMdCreate/>,
        path:"/attachments/evacuation-notice",
        iconOpen: <MdIcons.MdExpandMore/>,
      }
      */
    ] 
    },

    {
    title:"Properties",
    icon: <BiIcons.BiBuildingHouse/>,
    path:"/properties",
    iconClosed:<AiIcons.AiOutlineRight/>,
    iconOpen: <MdIcons.MdExpandMore/>,
    submenu: [
      {
        title:"Find Properties",
        icon: <GiIcons.GiSpanner/>,
        path:"/attachments/work-orders",
        iconOpen: <MdIcons.MdExpandMore/>,
       
      },
      
      {
        title:"Evacuation Notice",
        icon: <IoIcons.IoMdCreate/>,
        path:"/attachments/evacuation-notice",
        iconOpen: <MdIcons.MdExpandMore/>,
        
      }
    ]
    },

    {
    title:"Landlords",
    icon:<GiIcons.GiReceiveMoney/>,
    path:"/landlords",
    iconClosed:<AiIcons.AiOutlineRight/>,
    iconOpen: <MdIcons.MdExpandMore/>,
    submenu: [
      {
        title:"Work Orders",
        icon: <GiIcons.GiSpanner/>,
        path:"/attachments/work-orders",
        iconOpen: <MdIcons.MdExpandMore/>,
       
      },
      
      {
        title:"Evacuation Notice",
        icon: <IoIcons.IoMdCreate/>,
        path:"/attachments/evacuation-notice",
        iconOpen: <MdIcons.MdExpandMore/>,
      }
    ]
    },

    { 
    title:"Units",
    icon: <IoIcons.IoIosBed/>,
    path:"/units",
    iconClosed:<AiIcons.AiOutlineRight/>,
    iconOpen: <MdIcons.MdExpandMore/>,
    submenu: [
      {
        title:"Work Orders",
        icon: <GiIcons.GiSpanner/>,
        path:"/attachments/work-orders",
        iconOpen: <MdIcons.MdExpandMore/>,
       
      },
      
      {
        title:"Evacuation Notice",
        icon: <IoIcons.IoMdCreate/>,
        path:"/attachments/evacuation-notice",
        iconOpen: <MdIcons.MdExpandMore/>,
      }
    ]
    },
   
    {
    title:"Maintenance",
    icon: <MdIcons.MdOutlineHandyman/>,
    path:"/maintenance",
    iconClosed:<AiIcons.AiOutlineRight/>,
    iconOpen: <MdIcons.MdExpandMore/>,
    submenu: [
      {
        title:"Work Orders",
        icon: <GiIcons.GiSpanner/>,
        path:"/attachments/work-orders",
        iconOpen: <MdIcons.MdExpandMore/>,
       
      },
      
      {
        title:"Evacuation Notice",
        icon: <IoIcons.IoMdCreate/>,
        path:"/attachments/evacuation-notice",
        iconOpen: <MdIcons.MdExpandMore/>,
      }
    ]
    },  

    {
    title:"Caretakers",
    icon: <FaIcons.FaPersonBooth/>,
    path:"/caretakers",
    iconClosed:<AiIcons.AiOutlineRight/>,
    iconOpen: <MdIcons.MdExpandMore/>,
    submenu: [
      {
        title:"Work Orders",
        icon: <GiIcons.GiSpanner/>,
        path:"/attachments/work-orders",
        iconOpen: <MdIcons.MdExpandMore/>,
       
      },
      
      {
        title:"Evacuation Notice",
        icon: <IoIcons.IoMdCreate/>,
        path:"/attachments/evacuation-notice",
        iconOpen: <MdIcons.MdExpandMore/>,
      }
    ]
    },
                
    {
      title:"Attachements",
      icon: <VscIcons.VscFileSubmodule/>,
      path:"/attachments",
      iconClosed:<AiIcons.AiOutlineRight/>,
      iconOpen: <MdIcons.MdExpandMore/>,
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
        },
      ]
    },
  
        /************************************************************************************* 

   {
    title:"Dashboard",
    icon: <AiIcons.AiFillDashboard/>,
    path:"/dashboard",
    iconClosed:<AiIcons.AiOutlineRight/>,
    iconOpen: <MdIcons.MdExpandMore/>
    },

    {
    title:"Properties",
    icon: <BiIcons.BiBuildingHouse/>,
    path:"/properties",
    iconClosed:<AiIcons.AiOutlineRight/>,
    iconOpen: <MdIcons.MdExpandMore/>
    },

    {
    title:"Landlords",
    icon:<GiIcons.GiReceiveMoney/>,
    path:"/landlords",
    iconClosed:<AiIcons.AiOutlineRight/>,
    iconOpen: <MdIcons.MdExpandMore/>
    },

    { 
    title:"Units",
    icon: <IoIcons.IoIosBed/>,
    path:"/units",
    iconClosed:<AiIcons.AiOutlineRight/>,
    iconOpen: <MdIcons.MdExpandMore/>
    },
   
    {
    title:"Maintenance",
    icon: <MdIcons.MdOutlineHandyman/>,
    path:"/maintenance",
    iconClosed:<AiIcons.AiOutlineRight/>,
    iconOpen: <MdIcons.MdExpandMore/>
    },  

    {
    title:"Caretakers",
    icon: <FaIcons.FaPersonBooth/>,
    path:"/caretakers",
    iconClosed:<AiIcons.AiOutlineRight/>,
    iconOpen: <MdIcons.MdExpandMore/>
    },
                
    {
      title:"Attachements",
      icon: <VscIcons.VscFileSubmodule/>,
      path:"/attachments",
      iconClosed:<AiIcons.AiOutlineRight/>,
      iconOpen: <MdIcons.MdExpandMore/>,
      submenu: [
        {
          title:"Work Orders",
          icon: <GiIcons.GiSpanner/>,
          path:"/attachments/work-orders",
          iconOpen: <MdIcons.MdExpandMore/>,
         
        },
        
        {
          title:"Evacuation Notice",
          icon: <IoIcons.IoMdCreate/>,
          path:"/attachments/evacuation-notice",
          iconOpen: <MdIcons.MdExpandMore/>,
        }
      ]
    }  
    
  
  
  
         
              

  
    */
 
]


);

export default Sidebardata();
