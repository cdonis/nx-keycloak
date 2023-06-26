module.exports = {
  name: 'tenants',
  exposes: {
    './Module': 'apps/tenants/src/app/remote-entry/entry.module.ts',
  },
};
