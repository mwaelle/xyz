import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import './index.css'

import App from './App.tsx'
import { TweetsMasterPage } from './pages/TweetsMasterPage.tsx'
import { TweetDetailsPage } from './pages/TweetDetailsPage.tsx'
import { NotFoundPage } from './pages/NotFoundPage.tsx'
import { AboutPage } from './pages/AboutPage.tsx'
import { AuthorPage } from './pages/AuthorPage.tsx'
import { LikedTweetsPage } from './pages/LikedTweetsPage.tsx'


createRoot(document.getElementById('root')!).render( //routes
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App/>}>
      <Route index element={<TweetsMasterPage/>} />
      <Route path="a-propos" element={<AboutPage/>} />
      <Route path="tweets/:id" element={<TweetDetailsPage/>} />
      <Route path="author/:handle" element={<AuthorPage/>} />
      <Route path="likes" element={<LikedTweetsPage/>} />
      <Route path="*" element={<NotFoundPage/>} />
      </Route>
    </Routes>
  </BrowserRouter>,
)