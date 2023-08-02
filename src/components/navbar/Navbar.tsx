import "./Navbar.scss";

function Navbar() {
  return (
    <div className="navbar">
      <div className="logo">
        <img src="logo.svg" alt="" className="logoimg" />
        <span>Dashbord</span>
      </div>
      <div className="icons">
        <img src="search.svg" alt="" className="icon" />
        <img src="app.svg" alt="" className="icon" />
        <img src="expand.svg" alt="" className="icon" />
        <div className="notification">
          <img src="notifications.svg" alt="" className="" />
          <span>1</span>
        </div>
        <div className="user">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQw7zqhlsvdBWWgri5-S6JK95EowJu2-SGJuA&usqp=CAU"
            alt=""
            className=""
          />

          <span>Naruto</span>
        </div>
        <img src="settings.svg" alt="" className="icon" />
      </div>
    </div>
  );
}

export default Navbar;
