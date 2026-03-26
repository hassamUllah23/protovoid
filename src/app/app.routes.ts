import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Company } from './pages/company/company';
import { Career } from './pages/career/career';
import { JobDetail } from './pages/job-detail/job-detail';
import { PricingPage } from './pages/pricing/pricing';
import { Contact } from './pages/contact/contact';

export const routes: Routes = [
    {
        path: '',
        component: Home,
        title: 'Home'
    },
    {
        path: 'company',
        component: Company,
        title: 'Company'
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
    },
    {
        path: 'pricing',
        component: PricingPage,
        title: 'Pricing'
    },
    {
        path: 'contact',
        component: Contact,
        title: 'Contact Us'
    }
];
