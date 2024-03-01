const Post = props => {
  const { userId, id, title, body } = props.data
  return (
    <tr>
      <td>{id}</td>
      <td>{userId}</td>
      <td>{title}</td>
      <td>{body}</td>
    </tr>
  )
}
export default Post
