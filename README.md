# auth0-slack-mgmt

Manage users in groups for auth0.

## requirements

Tenants, users and groups are already setup in auth0. You'll need to map their
names to the config block which is used. Alternatively you can pass in the SSM
parameter config AWS Secrets manager config.

## build

```bash

yarn && yarn build

```

## deploy

```bash

yarn && yarn build && yarn deploy

```

## Contributing

Please open a PR or issue in Github and @lendi will respond if possible.
