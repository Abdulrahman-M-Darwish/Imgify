import { MobileNav, Sidebar } from "@/components";
import React from "react";

type Props = {
	children: React.ReactNode;
};

const Layout: React.FC<Props> = ({ children }) => {
	return (
		<main className="root">
			<Sidebar />
			<MobileNav />
			<div className="root-container">
				<div className="wrapper">{children}</div>
			</div>
		</main>
	);
};

export default Layout;
