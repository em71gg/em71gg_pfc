import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom';
import { PhotoProviderWrapper } from './context/photo.context.jsx';
import { UserProviderWrapper } from './context/user.context.jsx';
import { HeaderProviderWrapper } from './context/header.context.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <UserProviderWrapper>
        <PhotoProviderWrapper>
          <HeaderProviderWrapper>
            <App />
          </HeaderProviderWrapper>
        </PhotoProviderWrapper>
      </UserProviderWrapper> 
    </BrowserRouter> 
  </StrictMode>,
)
