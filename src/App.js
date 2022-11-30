import {Component} from 'react'

import ConfigurationController from './components/ConfigurationController'
import ConfigurationContext from './context/ConfigurationContext'
import Layout from './components/Layout'

import './App.css'

class App extends Component {
  state = {showContent: true, showLeftNavbar: true, showRightNavbar: true}

  ToggleShowContent = () => {
    this.setState(prevObj => ({showContent: !prevObj.showContent}))
  }

  ToggleShowLeftNavbar = () => {
    this.setState(prevObj => ({showLeftNavbar: !prevObj.showLeftNavbar}))
  }

  ToggleShowRightNavbar = () => {
    this.setState(prevObj => ({showRightNavbar: !prevObj.showRightNavbar}))
  }

  render() {
    const {showContent, showLeftNavbar, showRightNavbar} = this.state
    return (
      <div className="min-vh-100 d-flex flex-column">
        <ConfigurationContext.Provider
          value={{
            showContent,
            showLeftNavbar,
            showRightNavbar,
            onToggleShowContent: this.ToggleShowContent,
            onToggleShowLeftNavbar: this.ToggleShowLeftNavbar,
            onToggleShowRightNavbar: this.ToggleShowRightNavbar,
          }}
        >
          <ConfigurationController />
          <Layout />
        </ConfigurationContext.Provider>
      </div>
    )
  }
}

export default App
