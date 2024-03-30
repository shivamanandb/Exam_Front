import './App.css';
import { Navbar } from './component/Navbar';
import { Route, Routes } from 'react-router-dom';
import { Signup } from './pages/Signup';
import { Login } from './pages/Login';
import { Home } from './pages/Home';
import { PrivateRoute } from './component/auth/PrivateRoute';
import { Dashboard } from './pages/admin/Dashboard';
import OpenRoute from './component/auth/OpenRoute';
import { UserDashboard } from './pages/user/UserDashboard';
import { useSelector } from 'react-redux';
import { ACCOUNT_TYPE } from './utils/Constants';
import { Error } from './pages/Error';
import { jwtDecode } from 'jwt-decode';
import { Profile } from './pages/Profile';
import { AddCategory } from './pages/admin/AddCategory';
import { ViewCategories } from './pages/admin/ViewCategories';
import { ViewQuizzes } from './pages/admin/ViewQuizzes';
import { AddQuiz } from './pages/admin/AddQuiz';
import { UpdateQuiz } from './pages/admin/UpdateQuiz';
import { ViewQuizQuestions } from './pages/admin/ViewQuizQuestions';
import { AddQuestion } from './pages/admin/AddQuestion';
import { UpdateQuestion } from './pages/admin/UpdateQuestion';
import { LoadQuiz } from './pages/user/LoadQuiz';
import Instructions from './pages/user/Instructions';
import { StartQuiz } from './pages/user/StartQuiz';


function App() {

  const { user } = useSelector((state) => state.profile)
  const { token } = useSelector((state) => state.auth)

  // const user1 = jwtDecode(token);
  // console.log("USER: ", user1)
  const user1 = token ? jwtDecode(token) : null;
  console.log("USER: ", user1);
  console.log("Token: ", token)


  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='*' element={<Error />} />
        <Route path='/' element={<OpenRoute><Home /></OpenRoute>} />
        <Route path='/signup' element={<OpenRoute><Signup /></OpenRoute>} />
        <Route path='/login' element={<OpenRoute><Login /></OpenRoute>} />

        {
          user && user.authorities[0].authority === ACCOUNT_TYPE.NORMAL && (
            <>
              <Route
                path='/user'
                element={
                  <PrivateRoute>
                    <UserDashboard />
                  </PrivateRoute>
                } >

                <Route path='/user/home' element={<PrivateRoute><Home /></PrivateRoute>} />
                <Route path='/user/:cid' element={<PrivateRoute><LoadQuiz /></PrivateRoute>} />
                <Route path='/user/instructions/:quizId' element={<PrivateRoute><Instructions /></PrivateRoute>} />

              </Route>
              <Route path='/start/:quizId' element={<PrivateRoute><StartQuiz/></PrivateRoute>} />

            </>
          )
        }

        {
          user && user.authorities[0].authority === ACCOUNT_TYPE.ADMIN && (
            <>
              <Route
                path='/admin'
                element={
                  <PrivateRoute>
                    <Dashboard />
                  </PrivateRoute>
                } >

                <Route path='/admin/home' element={<PrivateRoute><Home /></PrivateRoute>} />
                <Route path='/admin/myProfile' element={<PrivateRoute><Profile /></PrivateRoute>} />
                <Route path='/admin/addCategory' element={<PrivateRoute><AddCategory /></PrivateRoute>} />
                <Route path='/admin/categories' element={<PrivateRoute><ViewCategories /></PrivateRoute>} />
                <Route path='/admin/quizzes' element={<PrivateRoute><ViewQuizzes /></PrivateRoute>} />
                <Route path='/admin/addQuiz' element={<PrivateRoute><AddQuiz /></PrivateRoute>} />
                <Route path='/admin/updateQuiz/:quizId' element={<PrivateRoute><UpdateQuiz /></PrivateRoute>} />
                <Route path='/admin/viewQuestions/:qId/:title' element={<PrivateRoute><ViewQuizQuestions /></PrivateRoute>} />
                <Route path='/admin/addQuestion/:qId/:title' element={<PrivateRoute><AddQuestion /></PrivateRoute>} />
                <Route path='/admin/updateQuestion/:quesId' element={<PrivateRoute><UpdateQuestion /></PrivateRoute>} />
              </Route>
            </>
          )
        }


      </Routes>
    </div>
  )
}

export default App;
