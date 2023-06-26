module.exports = {
  name: 'users',
  exposes: {
    './Module': 'apps/users/src/app/remote-entry/entry.module.ts',
  },
};
