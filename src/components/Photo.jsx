const Photo = props => {
  const { id, title, url } = props.data
  return (
    <tr>
      <td>
        <div class='card-body'>
          <h5 class='card-title'>{id}</h5>
        </div>
      </td>
      
      <td>
        <div class='card-body'>
          <h5 class='card-title'>{title}</h5>
        </div>
      </td>
      <td>
        <div class='col-sm-2'>
          <div class='card'>
            <img src={url} class='card-img-top' alt={title} />
          </div>
        </div>
      </td>
    </tr>
  )
}
export default Photo
