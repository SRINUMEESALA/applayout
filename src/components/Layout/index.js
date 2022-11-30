import {Component} from 'react'
import './index.css'
import Header from '../Header'
import Body from '../Body'
import Footer from '../Footer'

class Layout extends Component {
  render() {
    return (
      <div className="d-flex flex-column justify-content-between getCls">
        <Header />
        <Body />
        <Footer />
      </div>
    )
  }
}

export default Layout
