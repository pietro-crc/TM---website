import React from 'react';

export interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  delay?: number;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface StatProps {
  value: string;
  label: string;
  trend?: string;
}