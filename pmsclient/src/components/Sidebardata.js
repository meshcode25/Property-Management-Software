
import React from 'react';
import * as FaIcons from "react-icons/fa"
import * as AiIcons from "react-icons/ai"
import * as IoIcons from "react-icons/io"
import * as BiIcons from "react-icons/bi"
import * as GiIcons from "react-icons/gi"
import * as VscIcons from "react-icons/vsc"
import * as MdIcons from "react-icons/md"
import * as RiIcons from "react-icons/ri"

import * as HiIcons from "react-icons/hi"

const Sidebardata = () => (  
[
  
   {
    title:"Dashboard",
    icon: <AiIcons.AiFillDashboard/>,
    path:"/dashboard",
    iconOpen: <MdIcons.MdExpandMore/>,
    iconClosed:<AiIcons.AiOutlineRight/>,
    submenu: [
      /*{
        title:"Find Properties",
        icon: <GiIcons.GiSpanner/>,
        path:"/attachments/work-orders",
        iconOpen: <MdIcons.MdExpandMore/>,
        title:"Evacuation Notice",
       
      },
      
      {
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
        title:"View All Properties",
        icon: <BiIcons.BiBuildingHouse/>,
        path:"/properties/findnewproperties",
        iconOpen: <MdIcons.MdExpandMore/>,
       
      },
      
      {
        title:"List New Property",
        icon: <AiIcons.AiOutlineApartment/>,
        path:"/properties/listproperty",
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
        title:"All Landlords",
        icon: <FaIcons.FaPersonBooth/>,
        path:"/landlords/All-landlords",
        iconOpen: <MdIcons.MdExpandMore/>,
       
      },
      
      {
        title:"Create New Landlord",
        icon: <MdIcons.MdPersonAddAlt1/>,
        path:"/landlords/create-new-landlord",
        iconOpen: <MdIcons.MdExpandMore/>,
      },

      {
        title:"Find Landlord",
        icon: <FaIcons.FaHouseUser/>,
        path:"/landlords/find-landlord",
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
        title:"All Units",
        icon: <RiIcons.RiHotelFill/>,
        path:"/units/Add-new-unit",
        iconOpen: <MdIcons.MdExpandMore/>,
       
      },
      
      {
        title:"Find Unit",
        icon: <MdIcons.MdFindInPage/>,
        path:"/units/find-unit",
        iconOpen: <MdIcons.MdExpandMore/>,
      },

      {
        title:"Create New Unit",
        icon: <VscIcons.VscSaveAs/>,
        path:"/units/create-new-unit",
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
        title:"All Technicians",
        icon: <GiIcons.GiSpanner/>,
        path:"/maintenance/all-technicians",
        iconOpen: <MdIcons.MdExpandMore/>,
       
      },
      
      {
        title:"Add New Technician",
        icon: <MdIcons.MdHomeRepairService/>,
        path:"/maintenance/add-technician",
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
        title:"All Caretakers",
        icon: <MdIcons.MdRealEstateAgent/>,
        path:"/caretakers/all",
        iconOpen: <MdIcons.MdExpandMore/>,
       
      },
      
      {
        title:"Add New Caretaker",
        icon: <VscIcons.VscPersonAdd/>,
        path:"/caretakers/create-new-caretaker",
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
          icon: <BiIcons.BiMessageAdd/>,
          path:"/attachments/work-orders",
         
        },
        
        {
          title:"Evacuation Notices",
          icon: <FaIcons.FaTruckMoving/>,
          path:"/attachments/evacuation-notice"
        },

        {
          title:"Monthly Rent Invoice",
          icon: <HiIcons.HiDocumentReport/>,
          path:"/attachments/invoices",
         
        },
        
        {
          title:"Monthly Rental Payment Receipt",
          icon: <RiIcons.RiFilePaper2Line/>,
          path:"/attachments/payment-receipt"
        },

        {
          title:"Rental Agreement",
          icon: <IoIcons.IoMdCreate/>,
          path:"/attachments/Rental Agreement"
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
