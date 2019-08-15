import ConnectPlugin from './scenes/ConnectPlugin';
import ConnectWithImports from './scenes/ConnectWithImports';
import AppMenu from './scenes/Menu';

export const routes = [
  {
    exact: true,
    path: '/',
    component: AppMenu,
  },
  {
    path: '/plugins/:plugin',
    component: ConnectPlugin,
  },
  {
    path: '/imports',
    component: ConnectWithImports,
  },
];

export const menuRoutes = [
  {
    label: 'Connect with O3',
    path: '/plugins/O3',
  },
  {
    label: 'Connect with NOS',
    path: '/plugins/NOS',
  },
  {
    label: 'Import using keys',
    path: '/imports',
  },
];
