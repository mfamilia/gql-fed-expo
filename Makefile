install:
	npm i -g @apollo/rover
	curl -sSL https://router.apollo.dev/download/nix/latest | sh

gsuper:
	APOLLO_ELV2_LICENSE=accept rover supergraph compose --config ./supergraph.yaml --output supergraph.graphql

rdsuper:
	./router --dev -c router.yaml -s ./supergraph.graphql --log debug
	
rsuper:
	./router --hot-reload -c router.yaml -s ./supergraph.graphql --log debug
