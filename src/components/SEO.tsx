import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  type?: string;
  name?: string;
}

export default function SEO({ 
  title = 'IOR Reference - Index of Refraction Values',
  description = 'Comprehensive database of Index of Refraction (IOR) values for 3D artists and designers. Find accurate IOR values for materials, gems, liquids, and more.',
  type = 'website',
  name = 'IOR Reference'
}: SEOProps) {
  return (
    <Helmet>
      {/* Standard metadata */}
      <title>{title}</title>
      <meta name="description" content={description} />

      {/* OpenGraph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:site_name" content={name} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />

      {/* Additional tags */}
      <meta name="application-name" content={name} />
      <meta name="apple-mobile-web-app-title" content={name} />
      <meta name="format-detection" content="telephone=no" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="theme-color" content="#ffffff" />
      
      {/* Robots */}
      <meta name="robots" content="index, follow" />
    </Helmet>
  );
}