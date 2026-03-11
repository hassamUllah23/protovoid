import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Career } from './pages/career/career';
import { JobDetail } from './pages/job-detail/job-detail';

export const routes: Routes = [
    {
        path: '',
        component: Home,
        title: 'Home'
    },
    {
        path: 'careers',
        component: Career,
        title: 'Careers'
    },
    {
        path: 'careers/:id',
        component: JobDetail,
        title: 'Job Details'
    }
];
