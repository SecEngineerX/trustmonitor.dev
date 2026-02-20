import React from 'react';
import styles from './Container.module.css';

interface ContainerProps {
  children: React.ReactNode;
  size?: 'default' | 'narrow' | 'wide';
  className?: string;
}

export default function Container({ 
  children, 
  size = 'default',
  className = '' 
}: ContainerProps) {
  const sizeClass = {
    default: styles.container,
    narrow: styles.narrow,
    wide: styles.wide,
  }[size];
  
  return (
    <div className={`${sizeClass} ${className}`.trim()}>
      {children}
    </div>
  );
}
