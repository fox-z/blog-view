import Layout from '../components/Layout'
import 'antd/dist/antd.css'
import '../public/style/common.css'

function app({ Component, pageProps }) {
  return <Layout><Component {...pageProps} /></Layout>
}

export default app
