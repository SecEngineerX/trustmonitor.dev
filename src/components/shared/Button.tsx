import React from 'react';
import styles from './Button.module.css';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'default' | 'large';
  href?: string;
  onClick?: () => void;
  type?: 'button' | 'submit';
  disabled?: boolean;
  className?: string;
}

export default function Button({
  children,
  variant = 'primary',
  size = 'default',
  href,
  onClick,
  type = 'button',
  disabled = false,
  className = '',
}: ButtonProps) {
  const baseClass = `${styles.button} ${styles[variant]} ${styles[size]} ${className}`.trim();
  
  if (href) {
    return (
      <a 
        href={href} 
        className={baseClass}
        onClick={onClick}
      >
        {children}
      </a>
    );
  }
  
  return (
    <button
      type={type}
      className={baseClass}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
