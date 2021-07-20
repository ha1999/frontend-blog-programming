import Header from '../components/common/Header'
import Footer from '../components/common/Footer'

type ChildrenComponent = {
    children: React.ReactNode
}
const styles = {
  width: '80%',
  margin: 'auto'
}
function Layout({ children }: ChildrenComponent) {
  return (
    <>
      <Header />
      <div style={styles}>
        {children}
      </div>
      <Footer />
    </>
  )
}

export default Layout
