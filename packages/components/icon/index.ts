import { withInstall } from '@flow-editor/utils/with-install';
import _icon from './icon.vue';

const Icon = withInstall(_icon);
export default Icon;

export * from './icon';

declare module 'vue' {
  export interface GlobalComponents {
    YIcon: typeof Icon;
  }
}
