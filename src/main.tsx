import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import './index.css'

import App from './App.tsx'
import { TweetsMasterPage } from './pages/TweetsMasterPage.tsx'
import { TweetDetailsPage } from './pages/TweetDetailsPage.tsx'
import { NotFoundPage } from './pages/NotFoundPage.tsx'


createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App/>}>
      <Route index element={<TweetsMasterPage/>} />
      <Route path="tweets/:id" element={<TweetDetailsPage/>} />
      <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  </BrowserRouter>,
)