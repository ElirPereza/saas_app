import { Sidebar } from "lucide-react";
import { HomeIcon, LayoutGridIcon, LineChartIcon, MountainIcon, SettingsIcon, ShoppingCartIcon, UsersIcon } from "../Icons";

export type SiteConfig = typeof siteConfig;

export const siteConfig = {
	navBar: [
		{
			label: "Trial Saas",
			href: "/landpage",
			icon:<MountainIcon className="h-6 w-6" />
		},
		{
			label: "Feature",
			href: "/landpage",
		},
		{
			label: "Pricing",
			href: "/landpage/pricing",
		},
		{
			label: "About",
			href: "/landpage/about",
		},
		{
			label: "Contact",
			href: "/landpage/contact",
		},
	],
	Sidebar: [
		{
			label: "Dashboard",
			href: "/saas",
			icons:  <HomeIcon className="h-5 w-5" />
		},
		{
			label: "Products",
			href: "/saas/products",
			icons: <LayoutGridIcon className="h-5 w-5" />
		},
		{
			label: "Orders",
			href: "/saas/orders",
			icons: <ShoppingCartIcon className="h-5 w-5" />
		},
		{
			label: "Customers",
			href: "/saas/customers",
			icons:  <UsersIcon className="h-5 w-5" />
		},
		{
			label: "Analytics",
			href: "/saas/analytics",
			icons: <LineChartIcon className="h-5 w-5" />
		},
		{
			label: "Settings",
			href: "/saas/settings",
			icons:  <SettingsIcon className="h-5 w-5" />
		},
	],
	navAuth: [
		{
			label: "Login",
			href: "/auth/sing-in",
		},
		{
			label: "Sing Up",
			href: "/auth/sing-up",
		},
	],
	links: {
		github: "https://github.com/ElirPereza",
	},
};