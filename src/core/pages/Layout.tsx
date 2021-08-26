import Header from '../components/header'
import Footer from '../components/common/footer/Footer'

type ChildrenComponent = {
    children: React.ReactNode
}
const styles = {
  width: '100%',
  margin: 'auto',
  marginTop: '80px',
  minHeight: '60vh'
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
