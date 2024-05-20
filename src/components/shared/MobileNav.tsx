"use client";
import React from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Link from "next/link";
import Image from "next/image";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { navLinks } from "@/constants";
import { usePathname } from "next/navigation";
import { Button } from "../ui/button";

export const MobileNav: React.FC = () => {
	const pathname = usePathname();
	return (
		<header className="header">
			<Link href="/" className="flex items-center gap-2 md:py-2">
				<Image
					src="/assets/images/logo-text.svg"
					width={180}
					height={28}
					alt="logo"
				/>
			</Link>
			<nav className="flex gap-2">
				<SignedIn>
					<UserButton afterSignOutUrl="/" />
					<Sheet>
						<SheetTrigger>
							<Image
								src="/assets/icons/menu.svg"
								width={32}
								height={32}
								className="cursor-pointer"
								alt="menu"
							/>
						</SheetTrigger>
						<SheetContent className="sheet-content md:w-64">
							<Image
								src="/assets/images/logo-text.svg"
								width={152}
								height={23}
								alt="logo"
							/>
							<ul className="header-nav_elements mt-4">
								{navLinks.map((link) => {
									const isActive = link.route === pathname;
									return (
										<li
											key={link.route}
											className={`p-18 whitespace-nowrap flex text-dark-700 ${
												isActive && "gradient-text"
											}`}
										>
											<Link href={link.route} className="sidebar-link">
												<Image
													src={link.icon}
													alt="icon"
													width={24}
													height={24}
												/>
												{link.label}
											</Link>
										</li>
									);
								})}
							</ul>
						</SheetContent>
					</Sheet>
				</SignedIn>
				<SignedOut>
					<Button asChild className="button bg-purple-gradient bg-cover">
						<Link href="/sign-in">Login</Link>
					</Button>
				</SignedOut>
			</nav>
		</header>
	);
};
