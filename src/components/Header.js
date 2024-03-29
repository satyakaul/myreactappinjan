import HelloHeader from './HelloHeader'

const Header = () => {
  return (
    <div class='jumbotron'>
      <h1 class='display-4'>Hello, world!</h1>
      <p class='lead'>
        This is a simple jumbotron-style component for calling extra attention
        to featured content or information.
      </p>
      <hr class='my-4' />
      <HelloHeader />
    </div>
  )
}
export default Header
