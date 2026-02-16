namespace $ {
	/**
	 * Theme css variables
	 * @see https://mol.hyoo.ru/#!section=demos/demo=mol_textarea_demo
	 */
	export const $bog_theme = $mol_style_prop('mol_theme', [
		'back',
		'background',
		'hover',
		'card',
		'current',
		'special',
		'text',
		'control',
		'shade',
		'line',
		'focus',
		'field',
		'image',
		'spirit',
	] as const)

	/**
	 * Available theme names.
	 * Add new theme to theme.css and add its name here.
	 */
	export const $bog_theme_names = [
		'$mol_theme_light',
		'$mol_theme_dark',
		'$mol_theme_monefro_light',
		'$mol_theme_monefro_dark',
		'$mol_theme_homerent_light',
		'$mol_theme_homerent_dark',
		'$mol_theme_upwork',
		'$mol_theme_ainews_light',
		'$mol_theme_ainews_dark',
	] as const

	/**
	 * Type-safe theme name
	 */
	export type $bog_theme_name = (typeof $bog_theme_names)[number]
}
