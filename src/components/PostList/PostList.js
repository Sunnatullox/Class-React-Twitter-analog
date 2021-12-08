import PostListItem from "../PostListItem.js/PostListitem";
import "./PostList.css";

const PostList = ({ posts, onDelet,onToggleImportant,onToggleLiked }) => {
  const element = posts.map((item) => {
    const { id, ...itemProps } = item;
    return (
      <li key={id} className="list-group-item">
        <PostListItem 
        {...itemProps} 
        onDelet={() => onDelet(id)}
        onToggleImportant={()=> onToggleImportant(id)}
        onToggleLiked={()=> onToggleLiked(id)}
         />
      </li>
    );
  });
  return <ul className="app-list list-group">{element}</ul>;
};

export default PostList;
