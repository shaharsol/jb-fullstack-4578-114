import Followers from '../followers/Followers'
import Following from '../following/Following'
import Footer from '../footer/Footer'
import Header from '../header/Header'
import './Layout.css'

export default function Layout() {
    return (
        <div className='Layout'>
            <header>
                <Header />                
            </header>                
            <aside>
                <Following />
            </aside>
            <aside>
                <Followers />
            </aside>
            <main>
                main
            </main>
            <footer>
                <Footer />
            </footer>
        </div>
    )
}