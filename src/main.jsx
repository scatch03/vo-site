import { createRoot } from 'react-dom/client'
import './index.module.scss'
import App from './App.jsx'
import HibernateNPlusOneIssuePage from './Pages/HibernateNPlusOneIssuePage/HibernateNPlusOneIssuePage.jsx'
import AsyncAwaitJavaScriptPage from './Pages/AsyncAwaitJavaScriptPage/AsyncAwaitJavaScriptPage.jsx'
import PostgreSQLIndexesPage from './Pages/PostgreSQLIndexesPage/PostgreSQLIndexesPage.jsx'
import JwtSpringBootPage from './Pages/JwtSpringBootPage/JwtSpringBootPage.jsx'
import MongoDbTimeSeriesPage from './Pages/MongoDbTimeSeriesPage/MongoDbTimeSeriesPage.jsx'

const pathname = window.location.pathname.replace(/\/+$/, '') || '/'
const isDarkTheme = window.localStorage.getItem('theme') === 'dark'
const blogPagesByPath = {
  '/blog/n-plus-one-hibernate': <HibernateNPlusOneIssuePage />,
  '/blog/async-await-javascript': <AsyncAwaitJavaScriptPage />,
  '/blog/postgresql-index-types': <PostgreSQLIndexesPage />,
  '/blog/jwt-spring-boot': <JwtSpringBootPage />,
  '/blog/mongodb-time-series-data': <MongoDbTimeSeriesPage />
}

document.body.classList.toggle('dark-theme', isDarkTheme)

createRoot(document.getElementById('root')).render(
    blogPagesByPath[pathname] ?? <App />
)
