import {Component} from 'react'
import ConfigurationContext from '../../context/ConfigurationContext'
import './index.css'

class ConfigurationController extends Component {
  render() {
    return (
      <ConfigurationContext.Consumer>
        {value => {
          const {
            onToggleShowContent,
            onToggleShowLeftNavbar,
            onToggleShowRightNavbar,
          } = value

          return (
            <div className="bg-secondary text-white p-2">
              <div className="ml-5">
                <h1>Layout</h1>
                <ul className="list-unstyled d-flex flex-column">
                  <li>
                    <input
                      type="checkbox"
                      id="content"
                      className="mr-2"
                      defaultChecked
                      onChange={() => {
                        onToggleShowContent()
                      }}
                    />
                    <label htmlFor="content">Content</label>
                  </li>
                  <li>
                    <input
                      type="checkbox"
                      id="leftNavbar"
                      className="mr-2"
                      defaultChecked
                      onChange={() => {
                        onToggleShowLeftNavbar()
                      }}
                    />
                    <label htmlFor="leftNavbar">Left Navbar</label>
                  </li>
                  <li>
                    <input
                      type="checkbox"
                      id="rightNavbar"
                      className="mr-2"
                      defaultChecked
                      onChange={() => {
                        onToggleShowRightNavbar()
                      }}
                    />
                    <label htmlFor="rightNavbar">Right Navbar</label>
                  </li>
                </ul>
              </div>
            </div>
          )
        }}
      </ConfigurationContext.Consumer>
    )
  }
}

export default ConfigurationController
