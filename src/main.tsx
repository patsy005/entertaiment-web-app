import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.scss'
import App from './App.tsx'
import { Provider } from 'react-redux'
import { store } from './store.tsx'

createRoot(document.getElementById('root')!).render(
	<Provider store={store}>
		<StrictMode>
			<App />
		</StrictMode>
	</Provider>
)
