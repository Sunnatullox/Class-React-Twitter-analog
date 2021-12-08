import "./PostListItem.css";
import React from "react";

export default class  PostListItem extends React.Component{

    render(){
      const {lebel,onDelet,onToggleImportant,onToggleLiked ,important,like}=this.props;
          let classNames= "row app-list-item";  
            if(important){
              classNames += " important"  //bu important btn yulduzga class qo'shyapmiz important qo'yayotganda oldiga bir katak tashlash shart bo'lmasa ishlamaydi. 
            }
      
            if(like){
              classNames += " like";
            }

      return(
        <div className={classNames}>
        <div className="col-9 app-list-item-lebel" onClick={onToggleLiked}>
          {lebel}
        </div>
    <div className="col-3 d-flex align-items-center">
        <button
         className="btn-star btn-sm"
         type="button"
         onClick={onToggleImportant}>
        <i class="fas fa-star"></i>
        </button>
        <button 
        onClick={onDelet}
        className="btn-trash btn-sm"
        type="button">
          <i className="fas fa-trash"></i>
        </button>
        <i className="fas fa-heart"></i>
    </div>
    </div>
      )
    }
}