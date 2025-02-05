import { PluginFunc, ConfigType, OpUnitType } from '@adscore/dayjs'

declare const plugin: PluginFunc
export = plugin

declare module 'dayjs' {
  interface Dayjs {
    isSameOrAfter(date?: ConfigType, unit?: OpUnitType): boolean
  }
}
