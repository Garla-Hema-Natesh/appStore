import './index.css'

const TabItem = props => {
  const {eachList, setCurrentActiveTab, activeCheck} = props
  const {displayText, tabId} = eachList

  const buttonClicked = () => {
    setCurrentActiveTab(tabId)
  }

  const tabClassName = activeCheck ? 'active' : ''
  return (
    <div>
      <li>
        <button
          type="button"
          className={`button ${tabClassName}`}
          onClick={buttonClicked}
        >
          {displayText}
        </button>
      </li>
    </div>
  )
}
export default TabItem
