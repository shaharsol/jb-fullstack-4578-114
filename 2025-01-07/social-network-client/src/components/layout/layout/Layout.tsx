import Feed from '../../posts/feed/Feed'
import Profile from '../../posts/profile/Profile'
import Followers from '../followers/Followers'
import Following from '../following/Following'
import Footer from '../footer/Footer'
import Header from '../header/Header'
import Routing from '../routing/Routing'
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
                <Routing />
            </main>
            <footer>
                <Footer />
            </footer>
        </div>
    )
}