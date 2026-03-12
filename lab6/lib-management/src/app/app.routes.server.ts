import { ServerRoute, RenderMode } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  {
    path: '',
    renderMode: RenderMode.Prerender
  },
  {
    path: 'login',
    renderMode: RenderMode.Prerender
  },
  {
    path: 'books',
    renderMode: RenderMode.Prerender
  },
  {
    path: 'book/:id',
    renderMode: RenderMode.Server
  },
  {
    path: 'admin',
    renderMode: RenderMode.Server
  },
  {
    path: '**',
    renderMode: RenderMode.Server
  }
];