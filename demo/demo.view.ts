namespace $.$$ {
    export class $bog_theme_demo extends $.$bog_theme_demo {
        hue_deg() {
            return this.hue() + 'deg'
        }

        hue_spread_deg() {
            return this.hue_spread() + 'deg'
        }

        theme_options() {
            return [...this.Theme().themes()]
        }

        theme_dictionary() {
            const dict: Record<string, string> = {}
            for (const name of this.Theme().themes()) {
                dict[name] = name
                    .replace('$mol_theme_', '')
                    .replace(/_/g, ' ')
                    .replace(/\b\w/g, (c: string) => c.toUpperCase())
            }
            return dict
        }

        theme_current(next?: string) {
            if (next !== undefined) {
                const themes = this.Theme().themes()
                const index = themes.indexOf(next as $bog_theme_name)
                if (index !== -1) {
                    this.Theme().theme_set(index)
                }
            }
            return this.Theme().theme()
        }
    }
}
