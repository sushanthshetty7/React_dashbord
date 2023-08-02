import { Link } from "react-router-dom";
import "./Menu.scss";
import { menu } from "../../data";

function Menu() {
  return (
    <div className="menu">
      {menu.map((item)=>(
        <div className="item" key={item.id}>
        <span className="title">{item.title}</span>
        {item.listItems.map((ele)=>(
          <Link to={ele.url} className="lstItem" key={ele.id}>
          <img src={ele.icon} alt="" />
          <span className="listItem">{ele.title}</span>
        </Link>
        ))}
        
      </div>
      ))}
      
    </div>
  );
}

export default Menu;
