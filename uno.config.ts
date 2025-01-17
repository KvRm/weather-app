import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetTypography,
  presetUno,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'

export default defineConfig({
  shortcuts: [
    {
      // background
      'bg-slate-100': 'bg-$c-slate-100',
      'bg-slate-200': 'bg-$c-slate-200',
      'bg-slate-300': 'bg-$c-slate-300',
      'bg-slate-400': 'bg-$c-slate-400',
      'bg-slate-500': 'bg-$c-slate-500',
      'bg-slate-600': 'bg-$c-slate-600',

      // text
      'text-slate-100': 'text-$c-slate-100',
      'text-slate-200': 'text-$c-slate-200',
      'text-slate-300': 'text-$c-slate-300',
      'text-slate-400': 'text-$c-slate-400',
      'text-slate-500': 'text-$c-slate-500',
      'text-slate-600': 'text-$c-slate-600',

      // helpers
      'flex-center': 'flex justify-center items-center',
      'flex-v-center': 'flex items-center',
      'flex-h-center': 'flex justify-center',
      'ellipsis': 'overflow-hidden text-ellipsis min-w-0 text-nowrap',
    },
  ],
  theme: {},
  presets: [
    presetUno({
      attributifyPseudo: true,
    }),
    presetAttributify(),
    presetIcons({
      scale: 1.2,
      extraProperties: {
        'color': 'inherit',
        'min-width': '1.2em',
      },
    }),
    presetTypography(),
  ],
  transformers: [transformerDirectives(), transformerVariantGroup()],
})
