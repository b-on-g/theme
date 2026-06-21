namespace $ {

	$mol_style_define( $bog_theme_switch, {
		display: 'flex',
		flex: { direction: 'row', shrink: 0 },
		gap: '2px',
		padding: { top: '3px', right: '3px', bottom: '3px', left: '3px' },
		background: { color: $mol_theme.field },
		border: {
			radius: '999px',
			width: '1px',
			style: 'solid',
			color: $mol_theme.line,
		},

		$mol_button_minor: {
			minWidth: '2rem',
			minHeight: '2rem',
			padding: { top: 0, right: '0.5rem', bottom: 0, left: '0.5rem' },
			border: { radius: '999px' },
			background: { color: 'transparent' },
			boxShadow: 'none',
			color: $mol_theme.shade,
			transition: 'background-color 200ms ease, color 200ms ease, box-shadow 200ms ease',

			':hover': {
				background: { color: $mol_theme.hover },
				boxShadow: 'none',
				color: $mol_theme.text,
			},

			'[bog_theme_switch_active]': {
				true: {
					background: { color: $mol_theme.back },
					color: $mol_theme.text,
					box: {
						shadow: [
							{ x: 0, y: '1px', blur: '2px', spread: 0, color: '#0000001a' },
							{ x: 0, y: '1px', blur: '1px', spread: 0, color: '#0000000d' },
							{ inset: true, x: 0, y: 0, blur: 0, spread: '100vmax', color: '#00000022' },
						],
					},
				},
			},
		},
	} )

}
