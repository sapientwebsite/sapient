import { createElement } from 'react'
import { createBrowserRouter, Navigate } from 'react-router-dom'
import Root from './root'
import IndexRoute from './routes/_index'
import BlogsRoute from './routes/blogs'
import BlogSlugRoute from './routes/blogs.$slug'
import ContactUsRoute from './routes/contact-us'
import InvestmentOpportunityRoute from './routes/investment-opportunity'
import DisclosuresRoute from './routes/disclosures'
import InvestorCharterRoute from './routes/investorcharter'
import StewardshipCodeRoute from './routes/stewardshipcode'
import AboutUsRoute from './routes/about-us'
import FaqRoute from './routes/faq'
import LegalRoute from './routes/legal'
import { RedirectBlogFromBlogs } from './routes/redirect-blog-from-blogs'

export const router = createBrowserRouter([
  {
    path: '/',
    element: createElement(Root),
    children: [
      { index: true, element: createElement(IndexRoute) },
      { path: 'blogs', element: createElement(BlogsRoute) },
      {
        path: 'blogs/:slug',
        element: createElement(RedirectBlogFromBlogs),
      },
      { path: 'blog/:slug', element: createElement(BlogSlugRoute) },
      { path: 'contact-us', element: createElement(ContactUsRoute) },
      {
        path: 'investment-opportunity',
        element: createElement(InvestmentOpportunityRoute),
      },
      { path: 'disclosures', element: createElement(DisclosuresRoute) },
      { path: 'investorcharter', element: createElement(InvestorCharterRoute) },
      { path: 'stewardshipcode', element: createElement(StewardshipCodeRoute) },
      { path: 'about-us', element: createElement(AboutUsRoute) },
      { path: 'faq', element: createElement(FaqRoute) },
      { path: 'legal', element: createElement(LegalRoute) },

      // Backward-compatible aliases from legacy routes.
      { path: 'blog', element: createElement(Navigate, { to: '/blogs', replace: true }) },
      {
        path: 'contact',
        element: createElement(Navigate, { to: '/contact-us', replace: true }),
      },
      {
        path: 'kyc',
        element: createElement(Navigate, { to: '/investorcharter', replace: true }),
      },
      {
        path: 'kym',
        element: createElement(Navigate, { to: '/stewardshipcode', replace: true }),
      },
      {
        path: 'disclosure',
        element: createElement(Navigate, { to: '/disclosures', replace: true }),
      },
      {
        path: 'cpc',
        element: createElement(Navigate, { to: '/investment-opportunity', replace: true }),
      },
      { path: 'disclaimer', element: createElement(Navigate, { to: '/faq', replace: true }) },
      {
        path: 'privacy-policy',
        element: createElement(Navigate, { to: '/legal', replace: true }),
      },
      {
        path: 'terms-conditions',
        element: createElement(Navigate, { to: '/legal', replace: true }),
      },
      { path: '*', element: createElement(Navigate, { to: '/', replace: true }) },
    ],
  },
])
