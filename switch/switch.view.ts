namespace $.$$ {

	export class $bog_theme_switch extends $.$bog_theme_switch {

		@ $mol_mem
		override light_active(): boolean {
			return this.theme_auto().mode() === 'light'
		}

		@ $mol_mem
		override system_active(): boolean {
			return this.theme_auto().mode() === 'system'
		}

		@ $mol_mem
		override dark_active(): boolean {
			return this.theme_auto().mode() === 'dark'
		}

		@ $mol_action
		override set_light() {
			this.theme_auto().mode( 'light' )
			return null
		}

		@ $mol_action
		override set_system() {
			this.theme_auto().mode( 'system' )
			return null
		}

		@ $mol_action
		override set_dark() {
			this.theme_auto().mode( 'dark' )
			return null
		}

	}

}
