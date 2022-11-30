import {Component} from 'react'
import './index.css'
import ConfigurationContext from '../../context/ConfigurationContext'

class Body extends Component {
  renderLeftNavbar = () => (
    <div className="bg-danger">
      <h1>Left Navbar Menu</h1>
      <ul className="list-unstyled">
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
        <li>Item 4</li>
      </ul>
    </div>
  )

  renderRightNavbar = () => (
    <div className="bg-info p-2">
      <h1>RIght Navbar</h1>
      <ul className="list-unstyled rightnav">
        <li>Ad 1</li>
        <li>Ad 2</li>
      </ul>
    </div>
  )

  renderContent = () => (
    <div className="text-center">
      <h1>Content</h1>
      <p>
        Lorem ipsum lorem In VS Code if I type and then press enter it will
        generate a paragraph of lorem ipsum.28-Dec-2021 lorem In VS Code if I
        type and then press enter it will generate a paragraph of lorem
        ipsum.28-Dec-2021
      </p>
    </div>
  )

  render() {
    return (
      <ConfigurationContext.Consumer>
        {value => {
          const {showContent, showLeftNavbar, showRightNavbar} = value
          console.log(value)
          return (
            <div className="d-flex justify-content-between">
              {showContent && this.renderLeftNavbar()}
              {showLeftNavbar && this.renderContent()}
              {showRightNavbar && this.renderRightNavbar()}
            </div>
          )
        }}
      </ConfigurationContext.Consumer>
    )
  }
}

export default Body
