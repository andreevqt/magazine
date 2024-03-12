import {createBrowserRouter} from 'react-router-dom';

import {Home, NoMatch, Post} from 'pages';

export const Router = createBrowserRouter([
  {path: '/', element: <Home />},
  {path: '/posts/:id', element: <Post />},
  {path: '*', element: <NoMatch />},
]);
