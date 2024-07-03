import { MountainIcon } from "../Icons";

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