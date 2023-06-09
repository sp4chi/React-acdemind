import {
  //Route,
  RouterProvider,
  createBrowserRouter,
  //createRoutesFromElements,
} from 'react-router-dom';
import Home from './pages/Home';
import Products from './pages/Products';
import RootLayout from './pages/Root';
import ErrorPage from './pages/ErrorPage';
import ProductDetail from './pages/ProductDetail';

//OLD WAY OF DEFINING ROUTES ,i.e, ver<6.4
// const routeDefinitions = createRoutesFromElements(
//   <Route>
//     <Route path="/" element={<Home />} />
//     <Route path="/products" element={<Products />} />
//   </Route>
// );

// const router = createBrowserRouter(routeDefinitions);

const router = createBrowserRouter([
  {
    path: '',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { path: '', element: <Home /> },
      { path: 'products', element: <Products /> },
      {
        path: 'products/:productId',
        element: <ProductDetail />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
