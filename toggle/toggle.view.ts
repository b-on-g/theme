namespace $.$$ {
    export class $bog_theme_toggle extends $.$bog_theme_toggle {
        long_press_delay = 300
        move_threshold = 8

        private press_timer: ReturnType<typeof setTimeout> | null = null
        private press_start_x = 0
        private press_start_y = 0
        private is_long_press = false

        Icon() {
            const mode = this.theme_auto().mode()
            if (mode === 'light') return this.Icon_light()
            if (mode === 'dark') return this.Icon_dark()
            if (mode === 'custom') {
                const theme = this.theme_auto().theme()
                return theme.includes('light') ? this.Icon_light() : this.Icon_dark()
            }
            return this.Icon_system()
        }

        anchor_hint() {
            const mode = this.theme_auto().mode()
            if (mode === 'light') return 'Светлая тема'
            if (mode === 'dark') return 'Тёмная тема'
            if (mode === 'custom') return 'Пользовательская тема'
            return 'Как в системе'
        }

        clicked(event?: MouseEvent) {
            if (!event) return null

            if (this.is_long_press) {
                this.is_long_press = false
                return null
            }

            this.theme_auto().mode_next()

            return null
        }

        press_start(event?: PointerEvent) {
            if (!event) return null

            this.clear_press_timer()

            this.press_start_x = event.clientX
            this.press_start_y = event.clientY
            this.is_long_press = false

            this.press_timer = setTimeout(() => {
                this.is_long_press = true
                this.on_long_press()
            }, this.long_press_delay)

            return null
        }

        press_move(event?: PointerEvent) {
            if (!event || !this.press_timer) return null

            const dx = Math.abs(event.clientX - this.press_start_x)
            const dy = Math.abs(event.clientY - this.press_start_y)

            if (dx > this.move_threshold || dy > this.move_threshold) {
                this.clear_press_timer()
            }

            return null
        }

        press_end(event?: PointerEvent) {
            if (!event) return null
            this.clear_press_timer()
            return null
        }

        press_cancel(event?: PointerEvent) {
            if (!event) return null
            this.clear_press_timer()
            return null
        }

        press_lost(event?: Event) {
            if (!event) return null
            this.clear_press_timer()
            return null
        }

        private clear_press_timer() {
            if (this.press_timer) {
                clearTimeout(this.press_timer)
                this.press_timer = null
            }
        }

        private on_long_press() {
            this.showed(true)

            setTimeout(() => {
                try {
                    const search = this.Picker().Search()
                    search.focused(true)
                } catch (e) {
                    // Ignore focus errors
                }
            }, 100)
        }

        picker_close() {
            this.showed(false)
        }

        backdrop_click(event?: MouseEvent) {
            if (!event) return null
            this.showed(false)
            return null
        }
    }
}
