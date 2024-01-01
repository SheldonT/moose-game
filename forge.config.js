/** @format */

module.exports = {
  packagerConfig: {
    asar: true,
  },
  rebuildConfig: {},
  makers: [
    {
      name: "@electron-forge/maker-squirrel",
      config: {
        extraResources: [
          "/src/assets/sounds/StepLow.mp3",
          "/src/assets/sounds/StepHigh.mp3",
        ],
      },
    },
    {
      name: "@electron-forge/maker-zip",
      platforms: ["win32"],
      extraResources: [
        "/src/assets/sounds/StepLow.mp3",
        "/src/assets/sounds/StepHigh.mp3",
      ],
    },
    {
      name: "@electron-forge/maker-deb",
      config: {},
    },
    {
      name: "@electron-forge/maker-rpm",
      config: {},
    },
  ],
  plugins: [
    {
      name: "@electron-forge/plugin-auto-unpack-natives",
      config: {},
    },
  ],
};
