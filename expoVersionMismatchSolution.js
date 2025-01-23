The solution focuses on ensuring that both global and local Expo CLI versions are the same.  This can be achieved by:

1. **Checking global version:** Open your terminal and run `expo -v` or `expo --version` to check the globally installed Expo CLI version.
2. **Checking local version:** Open the project's `package.json` file and look for the `expo` dependency version (usually under `dependencies`).
3. **Matching versions:** If the versions differ, either upgrade the global version to match the local one or vice-versa. If updating globally, run `npm install -g expo-cli@<version>` (replacing `<version>` with the desired version). If updating locally, run `npm install expo-cli@<version>`.
4. **Clean and rebuild:** After updating, it is crucial to clean any existing caches or build artifacts.  This might involve deleting `node_modules` folder and `yarn.lock` (if used) then reinstalling your dependencies using `npm install` or `yarn install`.
5. **Restart Expo:** Finally restart the Expo CLI using `expo start`.