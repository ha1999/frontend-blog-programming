import Header from '../components/common/Header'
import Footer from '../components/common/Footer'
type ChildrenComponent = {
    children: React.ReactNode
}
function Layout({ children }: ChildrenComponent) {
    return <>
        <Header />
        {children}
        <Footer />
    </>
}

export default Layout