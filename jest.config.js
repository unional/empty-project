module.exports = {
  'preset': 'ts-jest',
  'reporters': [
    'default',
    'jest-audio-reporter'
  ],
  'roots': [
    '<rootDir>/src'
  ],
  'testEnvironment': 'node',
  'watchPlugins': [
    [
      'jest-watch-suspend',
      {
        'suspend-on-start': true
      }
    ],
    [
      'jest-watch-toggle-config',
      {
        'setting': 'verbose'
      }
    ],
    [
      'jest-watch-toggle-config',
      {
        'setting': 'collectCoverage'
      }
    ]
  ]
}
