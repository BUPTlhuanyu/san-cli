/**
 * @file 检查更新显示 version
 */

const {logWithSpinner, stopSpinner, getLatestVersion, updateSpinner, log, chalk} = require('../lib/utils');
const semver = require('semver');

const {name, version: current} = require('../package');
module.exports = async () => {
    const cliName = name.split('/').pop();
    log(`${cliName} 当前版本 v${current}`);
    logWithSpinner('检测新版本中...');

    const latest = await getLatestVersion();

    if (semver.lt(current, latest)) {
        updateSpinner('🌟️', chalk.green(`发现新版本：${latest}`));
    } else {
        updateSpinner('检测完成，未发现最新版本');
    }
    stopSpinner();
    process.exit(0);
};
