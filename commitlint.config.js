module.exports = {
    parserPreset: {
      parserOpts: {
        headerPattern: /^ASTONJS-(\d+) \[(feat|fix|chore)\]: (.+)$/,
        headerCorrespondence: ['ticket', 'type', 'subject'],
      },
    },
    rules: {
      'type-enum': [2, 'always', ['feat', 'fix', 'chore']], 
      'header-max-length': [2, 'always', 100], 
      'subject-empty': [2, 'never'], 
      'type-empty': [2, 'never'], 
      'header-case': [0], 
    },
  };