import {RouterProvider} from 'react-router-dom'
import { router } from './Routes/Router/Router';
function App() {
  return (
      <RouterProvider router = {router} />
  );
}

export default App;
