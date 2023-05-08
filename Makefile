install:
	(cd services/member && npm i)
	(cd services/paper && npm i)
	(cd services/registry && npm i)
	npm i -g @apollo/rover
	curl -sSL https://router.apollo.dev/download/nix/latest | sh

dreg:
	APOLLO_ELV2_LICENSE=accept rover dev --name registry --schema services/registry/schema.gql --url http://localhost:3031

dpaper:
	APOLLO_ELV2_LICENSE=accept rover dev --name paper --schema services/paper/schema.gql --url http://localhost:3032

gsuper:
	APOLLO_ELV2_LICENSE=accept rover supergraph compose --config ./supergraph.yaml --output supergraph.graphql

rsuper:
	./router --supergraph ./supergraph.graphql

rdsuper:
	./router --dev -c router.yaml -s ./supergraph.graphql --log debug
	
rsuper:
	./router --hot-reload -c router.yaml -s ./supergraph.graphql --log debug
