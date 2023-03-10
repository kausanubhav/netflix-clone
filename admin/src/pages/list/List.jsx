import "./list.css";
import { Link, useLocation } from "react-router-dom";
import Chart from "../../components/chart/Chart";
import { Publish } from "@mui/icons-material";
export default function List() {


  const location=useLocation();
  const list=location.state.list;
  //console.log(list);

  return (
    <div className="product">
      <div className="productTitleContainer">
        <h1 className="productTitle">Movie</h1>
        <Link to="/new-list">
          <button className="productAddButton">Create</button>
        </Link>
      </div>

      <div className="productTop">
        <div className="productTopRight">
          <div className="productInfoTop">
            <span className="productName">{list.title}</span>
          </div>
          <div className="productInfoBottom">
            <div className="productInfoItem">
              <span className="productInfoKey">id:</span>
              <span className="productInfoValue">{list._id}</span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">genre:</span>
              <span className="productInfoValue">{list.genre}</span>
            </div>{" "}
            
            <div className="productInfoItem">
              <span className="productInfoKey">type:</span>
              <span className="productInfoValue">{list.type}</span>
            </div>{" "}
          </div>
        </div>
      </div>
      <div className="productBottom">
        <form className="productForm">
          <div className="productFormLeft">
            <label>List Title</label>
            <input type="text" placeholder={list.title} />
            <label>Genre</label>
            <input type="text" placeholder={list.genre} />
            
            <label>Type</label>
            <input type="text" placeholder={list.type} />
            
          </div>
          <div className="productFormRight">
            
            <button className="productButton">Update</button>
          </div>
        </form>
      </div>
    </div>
  );
}
