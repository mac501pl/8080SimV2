const path = require('path');

module.exports = {
  packagerConfig: {
    asar: true,
  },
  makers: [
    {
      name: '@electron-forge/maker-squirrel',
      config: {
        name: 'electron-react-typescript-webpack-2021',
      },
    },
    {
      name: '@electron-forge/maker-zip',
      platforms: ['darwin'],
    },
    {
      name: '@electron-forge/maker-deb',
      config: {},
    },
    {
      name: '@electron-forge/maker-rpm',
      config: {},
    },
  ],
  plugins: [
    [
      '@electron-forge/plugin-webpack',
      {
        mainConfig: path.join(process.cwd(), 'tools/webpack/webpack.main.js'),
        renderer: {
          config: path.join(process.cwd(), 'tools/webpack/webpack.renderer.js'),
          entryPoints: [
            {
              rhmr: 'react-hot-loader/patch',
              html: path.join(process.cwd(), 'src/index.html'),
              js: path.join(process.cwd(), 'src/renderer.tsx'),
              name: 'main_window',
            },
          ],
        },
      },
    ],
  ],
};
