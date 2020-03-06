import React from 'react'
import Head from 'next/head'
import MyHeader from '../Header'
import Footer from '../Footer'

class Layout extends React.Component{
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="container">
        <Head>
          <title>依禅的博客</title>
          <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"></meta>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <MyHeader />
        <div className="content">{this.props.children}</div>
        <Footer />
      </div>
    )
  }
}

export default Layout;