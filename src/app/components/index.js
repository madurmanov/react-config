import React, { PureComponent } from 'react'
import injectSheet from 'react-jss'

const debug = require('debug')(`${__dirname}`)

const styles = {
  root: {
    '& p': {
      margin: 0,
    },
  },
}

class App extends PureComponent {
  render() {
    const {
      classes,
      width,
      height,
      children,
    } = this.props

    debug('render')

    return (
      <div
        className={classes.root}
      >
        <p>App</p>
        <p>App width: {width}</p>
        <p>App height: {height}</p>
        {children}
      </div>
    )
  }
}


export default injectSheet(styles)(App)
