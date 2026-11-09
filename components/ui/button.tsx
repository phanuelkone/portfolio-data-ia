import * as React from 'react';
import { cn } from '@/lib/utils';
type ButtonProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
    variant?: 'primary' | 'secondary' | 'ghost';
};
export function Button({ className, variant = 'primary', ...props }: ButtonProps) { return <a className={cn('button', `button-${variant}`, className)} {...props}/>; }
