import { addons } from '@storybook/addons';
import { themes } from '@storybook/theming';

import DefaultTheme from './DefaultTheme';

addons.setConfig({
    // theme: DefaultTheme,
    theme: themes.dark,
});