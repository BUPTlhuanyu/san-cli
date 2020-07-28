/**
 * @file $t方法，用于快捷访问语言包
 * @author jinzhan
 * */

import localization from '@locales/zh.json';

/**
 * san-mix的组件
 *
 * DEMO:
 * $t('san.title') => 'SAN UI'
 * */

export default key => {
    const keys = key.split('.');
    return keys.reduce((cur, next) => (cur || {})[next], localization);
};
