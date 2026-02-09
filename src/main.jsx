import { createRoot } from 'react-dom/client'
import './index.module.scss'
import App from './App.jsx'
import HibernateNPlusOneIssuePage from './Pages/HibernateNPlusOneIssuePage/HibernateNPlusOneIssuePage.jsx'

const pathname = window.location.pathname.replace(/\/+$/, '') || '/'
const isHibernateNPlusOnePostPage = pathname === '/blog/n-plus-one-hibernate'
const isDarkTheme = window.localStorage.getItem('theme') === 'dark'

document.body.classList.toggle('dark-theme', isDarkTheme)

createRoot(document.getElementById('root')).render(
    isHibernateNPlusOnePostPage ? <HibernateNPlusOneIssuePage /> : <App />
)
