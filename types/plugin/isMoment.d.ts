import { PluginFunc } from '@adscore/dayjs'

declare const plugin: PluginFunc
export = plugin

declare module 'dayjs' {

  export function isMoment(input: any): boolean

}
