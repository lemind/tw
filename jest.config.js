'use strict';

module.exports = {
  moduleDirectories: ['<rootDir>/src', 'node_modules'],
  modulePaths: ['<rootDir>/src'],
  roots: ['<rootDir>/src'],
  snapshotSerializers: ['enzyme-to-json/serializer'],
  clearMocks: true,
  setupFiles: ['<rootDir>/src/utils/jestSetup'],
  moduleNameMapper: {
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/src/utils/fileMock.js",
    '\\.(css|less)$': '<rootDir>/src/utils/styleMock.js'
  }
};
