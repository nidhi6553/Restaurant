import React,{useState} from 'react';
import "./style.css";
import Menu from "./menuApi.js";
import Menucard from './Menucard';
import Navbar from './Navbar';

const uniqueList = [
  ...new Set(
    Menu.map((curElem) => {
      return curElem.category;
    })
  ),
   "All",
];

console.log(uniqueList);

const Restaurant = () => {
  const [menuData, setMenuData] = useState(Menu);
 // eslint-disable-next-line
 const [menuList, setMenuList] = useState(uniqueList);

 const filterItem = (category) => {

if(category ==="All") {
  setMenuData(Menu);
  return;
}

  const updatedList = Menu.filter((curElem) =>{
    return curElem.category === category;
   })

   setMenuData(updatedList);
 };
return(
  <>
  <Navbar filterItem={filterItem} menuList={menuList}/>
  <Menucard menuData={menuData}/>
  </>
)
 
};

export default Restaurant;
