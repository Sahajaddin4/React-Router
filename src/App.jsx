
import { Routes ,Route} from 'react-router-dom'
import Layout from './components/layout/Layout'
import Login from './components/pages/login/Login'
import SignUp from './components/pages/signup/SignUp'

function App() {
 
function Datas(data){
     console.log(data);
     
}
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
          <Route path='/user/login' element={<Login />} />
          <Route path='/user/singup' element={<SignUp getData={Datas} />} />
      </Route>
    </Routes>
  )
}

export default App
