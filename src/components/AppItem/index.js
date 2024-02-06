// Write your code here
import './index.css'

const AppItem = props => {
  const {appDetails} = props
  const {appId, appName, imageUrl} = appDetails

  return (
    <>
      <li className="app-item-container">
        <img
          className="app-item-image"
          src={imageUrl}
          alt={`app-item ${appId}`}
        />
        <div className="app-item-details-container">
          <h1 className="app-item-name">{appName}</h1>
        </div>
      </li>
    </>
  )
}

export default AppItem
