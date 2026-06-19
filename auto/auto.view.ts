namespace $.$$ {

    export type $bog_theme_mode = 'light' | 'dark' | 'system' | 'custom'

    export class $bog_theme_auto extends $.$bog_theme_auto {

        themes_default(): readonly $.$bog_theme_name[] {
            return this.$.$bog_theme_names
        }

        /** Stores current mode in localStorage. Defaults to 'system'. */
        @$mol_mem
        mode(next?: $bog_theme_mode): $bog_theme_mode {
            return this.$.$mol_state_local.value(`${this}.mode()`, next) ?? 'system'
        }

        @$mol_mem
        click_step(next?: number): number {
            return this.$.$mol_state_session.value(`${this}.click_step()`, next) ?? 0
        }

        /** 3-click cycle: opposite → back → system. */
        @$mol_action
        mode_next() {
            const step = (this.click_step() + 1) % 3
            this.click_step(step)
            if (step === 0) this.mode('system')
            else this.mode(this.is_light_now() ? 'dark' : 'light')
        }

        @$mol_mem
        is_light_now() {
            const mode = this.mode()
            if (mode === 'light') return true
            if (mode === 'dark') return false
            if (mode === 'system') return this.$.$mol_lights()
            return this.theme().toLowerCase().includes('light')
        }

        @$mol_mem
        theme_index(next?: number) {
            const stored = this.$.$mol_state_local.value(`${this}.theme_index()`, next)
            if (stored === null && next === undefined) {
                return this.system_theme_index()
            }
            return stored ?? 0
        }

        @$mol_mem
        system_theme_index(): number {
            const themes = this.themes()
            const prefersLight = this.$.$mol_lights()
            const preferredTheme = prefersLight ? this.theme_light() : this.theme_dark()
            const index = themes.indexOf(preferredTheme)
            return index !== -1 ? index : 0
        }

        @$mol_mem
        theme() {
            const mode = this.mode()

            if (mode === 'light') return this.theme_light()
            if (mode === 'dark') return this.theme_dark()

            if (mode === 'custom') {
                const themes = this.themes()
                const index = this.theme_index()
                if (themes.length === 0) return this.theme_light()
                return themes[index % themes.length]
            }

            // system — follow browser preference
            return this.$.$mol_lights() ? this.theme_light() : this.theme_dark()
        }

        @$mol_action
        theme_next() {
            this.mode_next()
        }

        @$mol_action
        theme_prev() {
            const cycle: $bog_theme_mode[] = ['system', 'light', 'dark']
            const i = cycle.indexOf(this.mode())
            this.mode(cycle[i <= 0 ? cycle.length - 1 : i - 1])
        }

        /** Called by picker. Sets mode to light/dark or custom for themed palettes. */
        @$mol_action
        theme_set(index: number) {
            const themes = this.themes()
            if (themes.length === 0) return

            const theme = themes[index % themes.length]

            if (theme === this.theme_light()) {
                this.mode('light')
            } else if (theme === this.theme_dark()) {
                this.mode('dark')
            } else {
                this.mode('custom')
                this.theme_index(index % themes.length)
            }

            this.click_step(0)
        }
    }
}
