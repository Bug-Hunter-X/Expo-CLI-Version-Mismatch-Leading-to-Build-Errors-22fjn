# Expo CLI Version Mismatch Bug

This repository demonstrates a bug caused by a version mismatch between the globally installed Expo CLI and the local Expo CLI version specified in your project.  The inconsistency leads to unpredictable build errors and issues running the application.

## Bug Description

The core issue is that different versions of Expo CLI may have different dependencies and behaviors. When these versions clash, the build process can fail or the app may encounter unexpected runtime errors.

## Reproduction Steps

1. Clone this repository.
2. Attempt to run the project using `expo start`.
3. Observe the errors related to dependency conflicts or build failures.  The specific error message may vary depending on the mismatch.

## Solution

The solution involves ensuring consistency in the Expo CLI versions.  This is demonstrated in `expoVersionMismatchSolution.js`.

## Note

Always check your global and local Expo CLI versions to avoid such conflicts. Consider using a version manager like nvm for consistent management of Node.js and related tools like Expo CLI.
