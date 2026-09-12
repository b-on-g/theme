namespace $ {
	$mol_test({

		'system mode follows the device, not a light choice stored by another app'( $ ) {
			const device = ( light: boolean )=> {
				const context: $ = Object.create( $ )
				context.$mol_lights = ()=> !light
				context.$mol_media = class extends $.$mol_media {
					static override match() {
						return light
					}
				}
				return $bog_theme_auto.make({ $: context })
			}

			const night = device( false )
			$mol_assert_equal( night.mode(), 'system' )
			$mol_assert_equal( night.theme(), night.theme_dark() )
			$mol_assert_equal( night.is_light_now(), false )

			const day = device( true )
			$mol_assert_equal( day.theme(), day.theme_light() )
			$mol_assert_equal( day.is_light_now(), true )
		},

	})
}
