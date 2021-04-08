import type { HTMLAttributes, ReactNode } from 'react';
import './styles.module.scss';

export type GridSectionHeadingProps = HTMLAttributes<HTMLDivElement> & { children: ReactNode };

const GridSectionHeading = ({ children, className, ...props }: GridSectionHeadingProps) => (
	<div
		className={`grid-section-heading layer-front${className ? ` ${className}` : ''}`}
		{...props}
	>
		{children}
	</div>
);

export default GridSectionHeading;