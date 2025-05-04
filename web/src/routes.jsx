import { Playground } from './components/Playground/Playground';

const IS_PLAYGROUND_ENABLED = import.meta.env.VITE_PLAYGROUND_ENABLED;

/**
 * Routes for the application.
 */
export const routes = [
  {
    path: '/',
    element: <div>Hello, world!</div>,
  },
  // Define your routes here
  ...(IS_PLAYGROUND_ENABLED === 'true'
    ? [
        {
          path: '/playground/component/:componentName',
          element: <Playground />,
        },
      ]
    : []),
];
