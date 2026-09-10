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

        bars() {
            return [ 0, 1, 2 ].map( index => this.Bar( index ) )
        }

        @ $mol_mem_key
        bar_x( index: number ) {
            return [ 0, 1, 2, 3, 4 ].map( x => x * 4 + index )
        }

        @ $mol_mem_key
        bar_y( index: number ) {
            return [ 3, 5, 2, 6, 4 ].map( y => y + index )
        }
    }

    export class $bog_theme_demo_bar extends $.$bog_theme_demo_bar {

        @ $mol_mem
        sat( next?: number ) {
            return next ?? 100
        }

        @ $mol_mem
        lig( next?: number ) {
            return next ?? 100
        }

        @ $mol_mem
        color() {
            return `hsl( ${ this.hue() }, ${ this.sat() }%, ${ this.lig() }% )`
        }
    }
}
