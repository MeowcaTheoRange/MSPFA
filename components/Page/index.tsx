import './styles.module.scss';
import type { ReactNode } from 'react';
import Header from 'components/Header';
import type { HeaderProps } from 'components/Header';
import Footer from 'components/Footer';
import Dialogs from 'components/Dialog/Dialogs';
import PageHeading from 'components/Page/PageHeading';
import classes from 'lib/client/classes';

export type PageProps = {
	/**
	 * The content of the heading displayed at the top of the page.
	 *
	 * When set, padding is added to the `main` element via `className="padded"`.
	 */
	heading?: ReactNode,
	children: ReactNode,
	/** A `ReactNode` between the `footer` and the `#copyright` elements. */
	basement?: ReactNode
} & HeaderProps;

const Page = ({ heading, children, withFlashyTitle, basement }: PageProps) => (
	<>
		{/* It is necessary for dialogs to be before the page so that dialog elements are reached first when tabbing. */}
		<Dialogs />

		<div id="page">
			<Header withFlashyTitle={withFlashyTitle} />

			<main className={classes('mid', { padded: heading !== undefined })}>
				{heading !== undefined && (
					<PageHeading>{heading}</PageHeading>
				)}
				{children}
			</main>

			<Footer />

			{basement}

			<div id="copyright">
				{`MS Paint Fan Adventures © 2010-${new Date().getFullYear()}`}
			</div>
		</div>

		{/* This dummy element exists to preload certain resources via styles set on it, as well as to perform computations on it in some cases. */}
		<div id="dummy" />
	</>
);

export default Page;
