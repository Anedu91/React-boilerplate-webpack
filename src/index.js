
import ReactDOM from 'react-dom'
import App from './components/App'
import "./styles/main.css"

if (module.hot) module.hot.accept()
ReactDOM.render(
  <App/>,
  document.getElementById('root')
)