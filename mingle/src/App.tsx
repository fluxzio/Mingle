import { Routes,Route } from 'react-router-dom'
import HomeView from './pages/HomeView'
import LoginView from './pages/LoginView';
import SignupView from './pages/SignupView';
import ProtectedRoute from './components/ProtectedRoute';


function App() {
  return (
		<Routes>
			<Route
				path="/"
				element={
					<ProtectedRoute>
						<HomeView />
					</ProtectedRoute>
				}
			/>
			<Route path="login/" element={<LoginView />} />
			<Route path="signup/" element={<SignupView />} />
		</Routes>
  );
}

export default App
