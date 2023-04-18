
function Comment(props) {
return (
  <div>
    <span>{props.name}</span>
    <p>{props.text}</p>
  </div>
)
}

export default Comment;


//1 make a comment component
// export comment component.
// 2. write inside function that returns comments that writes jsx 
// use html tags like <p>or <div></div> for name and comment.
//  3. pass in props to the component (props are objects, give them keys for name and comment) 