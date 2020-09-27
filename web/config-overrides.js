const path = require('path');
const fs = require('fs')
const { override, addBabelPlugins, babelInclude } = require('customize-cra');

// https://github.com/oblador/react-native-vector-icons/issues/1104#issuecomment-677251530
(() => {
  const filePath = require.resolve(
    "react-native-vector-icons/lib/tab-bar-item-ios.js",
  );
  const code = fs.readFileSync(filePath).toString();
  fs.writeFileSync(
    filePath,
    code.replace(
      "import { TabBarIOS } from './react-native';",
      "const TabBarIOS = { Item: () => null };",
    ),
  );
})();

module.exports = override(
  ...addBabelPlugins('@babel/plugin-proposal-class-properties'),
  babelInclude([
    path.resolve(__dirname, 'node_modules/react-native-elements'),
    path.resolve(__dirname, 'node_modules/react-native-vector-icons'),
    path.resolve(__dirname, 'node_modules/react-native-ratings'),
    path.resolve(__dirname, 'src'),
  ]),
);

