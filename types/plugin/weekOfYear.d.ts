import { PluginFunc } from '@adscore/dayjs'

declare const plugin: PluginFunc
export = plugin

declare module 'dayjs' {
  interface Dayjs {
    week(): number

    week(value : number): Dayjs
  }
}
