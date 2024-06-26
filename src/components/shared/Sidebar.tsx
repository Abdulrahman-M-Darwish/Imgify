"use client";
import React from "react";
import { navLinks } from "@/constants";
import { SignedOut } from "@clerk/nextjs";
import { SignedIn } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components";
import { UserButton } from "@clerk/nextjs";

export const Sidebar: React.FC = () => {
	const pathname = usePathname();
	return (
		<aside className="sidebar flex-col">
			<div className="flex  flex-col gap-4">
				<Link href="/" className="sidebar-logo">
					<Image
						src="/assets/images/logo-text.svg"
						width={180}
						height={28}
						alt="Logo"
					/>
				</Link>
			</div>
			<nav className="sidebar-nav">
				<SignedIn>
					<ul className="sidebar-nav_elements mt-4">
						{navLinks.slice(0, 6).map((link) => {
							const isActive = link.route === pathname;
							return (
								<li
									key={link.route}
									className={`sidebar-nav_element cursor-pointer group ${
										isActive ? "bg-purple-gradient text-white" : "text-gray-700"
									}`}
								>
									<Link href={link.route} className="sidebar-link">
										<Image
											src={link.icon}
											alt="icon"
											width={24}
											height={24}
											className={isActive ? "brightness-200" : ""}
										/>
										{link.label}
									</Link>
								</li>
							);
						})}
					</ul>
					<ul className="sidebar-nav_elements">
						{navLinks.slice(6).map((link) => {
							const isActive = link.route === pathname;
							return (
								<li
									key={link.route}
									className={`sidebar-nav_element cursor-pointer group ${
										isActive ? "bg-purple-gradient text-white" : "text-gray-700"
									}`}
								>
									<Link href={link.route} className="sidebar-link">
										<Image
											src={link.icon}
											alt="icon"
											width={24}
											height={24}
											className={isActive ? "brightness-200" : ""}
										/>
										{link.label}
									</Link>
								</li>
							);
						})}
						<li className="flex-center cursor-pointer gap-2 p-4">
							<UserButton afterSignOutUrl="/" showName />
						</li>
					</ul>
				</SignedIn>
				<SignedOut>
					<Button asChild className="button bg-purple-gradient bg-cover">
						<Link href="/sign-in">Login</Link>
					</Button>
				</SignedOut>
			</nav>
		</aside>
	);
};
