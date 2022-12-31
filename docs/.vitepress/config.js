import { defineConfig } from "vitepress";

export default defineConfig({
	title: "test",
	description: "Just playing around.",
	outDir: "../dist",
	themeConfig: {
		sidebar: [
			{
				text: "Section Title A",
				items: [
					{ text: "Item A", link: "/item-a" },
					{ text: "Item B", link: "/item-b" },
				],
			},
			{
				text: "Section Title B",
				items: [
					{ text: "Item C", link: "/item-c" },
					{ text: "Item D", link: "/item-d" },
				],
			},
		],
		nav: [
			{ text: "Guide", link: "/guide" },
			{
				text: "Dropdown Menu",
				items: [
					{
						// Title for the section.
						text: "Section A Title",
						items: [
							{ text: "Section A Item A", link: "..." },
							{ text: "Section B Item B", link: "..." },
						],
					},
				],
			},
			{
				text: "Dropdown Menu",
				items: [
					{
						// You may also omit the title.
						items: [
							{ text: "Section A Item A", link: "..." },
							{ text: "Section B Item B", link: "..." },
						],
					},
				],
			},
		],
	},
});
