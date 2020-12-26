import React from 'react'

function Blog(props) {
  const sidebar = (
    <ul>
      {props.posts.map((post) =>
        <li key={post.id}>
          {post.title}
        </li>
      )}
    </ul>
  );
  // map 这里可以写{return}， 也可以直接写
  const content = props.posts.map((post) => {
    return (
      <div key={post.id}>
      <h3>{post.title}</h3>
      <p>{post.content}</p>
    </div>
    )
  }
    
  );
  return (
    <div>
      {sidebar}
      <hr />
      {content}
    </div>
  );
}

const posts = [
  { id: 1, title: 'Hello World', content: 'Welcome to learning React!' },
  { id: 2, title: 'Installation', content: 'You can install React from npm.' }
];
class List2 extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <Blog posts={posts}></Blog>
    )
  }
}


export default List2;