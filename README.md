# GraphQL Federation Expo


## Install dependencies

```
make install
```

This installs Rover CLI and Router

## Run Router

Start service containers

```sh
docker-compose up -d
```

Generate subgraph schemas via introspection

```sh
make gsuper # generate super graph schema
```

Run router with generate super graph
```sh
make rsuper
```

Goto http://localhost:4000 to view sandbox


### Play with Sandbox

[Sample Queries](http://localhost:4000/?explorerURLState=N4IgJg9gxgrgtgUwHYBcQC4QEcYIE4CeABAKIAeAhnAA4A2CAiroQBQAkUFeKAkmOkR6oAhAEoiwADpIiRanghgYUFAGcJ02bICWYTVqRUE%2BgL77O3FroEcuvMOKkytu-bJQQUFWgAU82qGNnd09vAGEIGFQ3Im0UBDh1Jy0XPWCteUVlFA10lN0iQ0QY2TN0stLpfWoKanxclMylFSSSwqMYiqIy-TwEAHNtVRRCBoyFZrUxlKKglK6yspAAGhAANy5tCgAjelUMEGSiSRALexOBAEZl-ROm7L4LwphaWmkTFZAACwQKMHx9pgpCAAIIwFBfCD%2BABeFBQ2ggSAuJwAQr8%2BngiPQUIgaqpVCcPiYgA)

