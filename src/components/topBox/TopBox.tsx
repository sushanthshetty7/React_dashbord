import { topDealUsers } from "../../data";
import "./TopBox.scss";

function TopBox() {
  return (
    <div className="topbox">
      <h1>Top Deals</h1>
      <div className="list">
        {topDealUsers.map((item) => (
          <div className="listitem" key={item.id}>
            <div className="user">
              <img src={item.img} alt="" />
              <div className="usertext">
                <span className="username">{item.username}</span>
                <span className="email">{item.email}</span>
              </div>
            </div>
            <span className="amount">{item.amount}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TopBox;
