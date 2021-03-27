/**
 * @flow
 */

import { createIconSetFromIcoMoon } from 'react-native-vector-icons'
import type { Icon as IconType } from 'react-native-vector-icons/dist/index'
import icoMoonConfig from './selection.json'

const Icon: Class<IconType<string>> = createIconSetFromIcoMoon(
  icoMoonConfig,
  'Icomoon',
  'icomoon.ttf',
)

export default Icon
