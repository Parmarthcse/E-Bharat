import {
  BrowserRouter as Router,
  Route,
  Routes,

} from 'react-router-dom';
import HomePage from './pages/home/HomePage'
import NoPage from './pages/nopage/NoPage';
import ProductInfo from './pages/productinfo/ProductInfo';
import ScrollTop from './components/scrolltop/ScrollTop';
import CartPage from './pages/cart/CartPage';
import AllProduct from './pages/allProduct/AllProduct';
import SignUp from './pages/registration/Signup';
import Login from './pages/registration/Login';
import UserDashboard from './pages/user/UserDashboard';
import AdminDashboard from './pages/admin/AdminDashboard';
import AddProductPage from './pages/admin/AddProductPage';
import UpdateProductPage from './pages/admin/UpdateProductPage';
import MyState from './context/myState';
import {Toaster} from "react-hot-toast"
import { ProtectedRouteForUser } from './prodectedRoute/ProtectedRouteForUser';
import { ProtectedRouteForAdmin } from './prodectedRoute/ProtectedRouteForAdmin';
import CategoryPage from "./pages/category/CategoryPage";




const App = () => {
  return (
 <MyState>
     <Router >
      <ScrollTop />
     <Routes>
     <Route path="/" element={<HomePage />}/>
     <Route path="/*" element={<NoPage />}/>
     <Route path="/productinfo/:id" element={<ProductInfo />}/>
     <Route path="/cart" element={<CartPage />} />
     <Route path="/AllProduct" element={<AllProduct />} />
     <Route path="/Signup" element={<SignUp />} />
     <Route path="/Login" element={<Login />} />
     <Route path="/category/:categoryname" element={<CategoryPage/>}/>
     
     <Route path="/user-dashboard" element={
     <ProtectedRouteForUser>
     <UserDashboard />
     </ProtectedRouteForUser>
     } />
     <Route path="/admin-dashboard" element={
      <ProtectedRouteForAdmin>
        <AdminDashboard />
      </ProtectedRouteForAdmin>
     } />
     <Route path="/addproduct" element={
      <ProtectedRouteForAdmin>
        <AddProductPage />
      </ProtectedRouteForAdmin>
     } />
     <Route path="/updateproduct/:id" element={
      <ProtectedRouteForAdmin>
        <UpdateProductPage />
      </ProtectedRouteForAdmin>
     } />
     </Routes>
     <Toaster />
     </Router>
     </MyState>
 
  );
}

export default App;
