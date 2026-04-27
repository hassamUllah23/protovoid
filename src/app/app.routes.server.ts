import { RenderMode, ServerRoute } from '@angular/ssr';
import { PROJECTS } from './data/projects.data';

export const serverRoutes: ServerRoute[] = [
    {
        path: 'careers/:id',
        renderMode: RenderMode.Client
    },
    {
        path: 'projects/:id',
        renderMode: RenderMode.Prerender,
        async getPrerenderParams() {
            const ids = PROJECTS.map(project => project.id)
            return ids.map(id => ({ id }));
        }
      },
    {
        path: '**',
        renderMode: RenderMode.Prerender
    }
];
