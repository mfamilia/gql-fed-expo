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
## Run Mesh Server 

Start service containers

```sh
docker-compose up -d registry paper member
```

Start Mesh Server
```sh
docker-compose build mesh 
docker-compose up mesh
```

Goto http://localhost:3034 to view sandbox


### Play with Sandbox

Make sure to add `{"authentication": "Bearer letmepass"}` header to access cart queries

[Sample Queries](http://localhost:3034/graphql?query=query+%7B%0A++registries+%7B%0A++++cart%28id%3A+1%29+%7B%0A++++++totalPrice%0A++++++items+%7B%0A++++++++product+%7B+name+price+%7D%0A++++++%7D%0A++++%7D%0A++%7D%0A++%0A++papers+%7B%0A++++cart%28id%3A+12%29+%7B%0A++++++totalCount%0A++++++items+%7B%0A++++++++product+%7B+name+price+%7D%0A++++++%7D%0A++++%7D%0A++%7D%0A++%0A++membership+%7B%0A++++member+%7B+lastName+firstName+%7D%0A++%7D%0A%7D)
