module github.com/cosmos/gaia/v4

go 1.15

require (
	github.com/cosmos/cosmos-sdk v0.42.4
	github.com/golang/snappy v0.0.4 // indirect
	github.com/gorilla/mux v1.8.0
	github.com/pkg/errors v0.9.1
	github.com/rakyll/statik v0.1.7
	github.com/spf13/cast v1.3.1
	github.com/spf13/cobra v1.1.3
	github.com/stretchr/testify v1.7.0
	github.com/tendermint/tendermint v0.34.9
	github.com/tendermint/tm-db v0.6.4
)

replace (
	github.com/cosmos/cosmos-sdk => github.com/figment-networks/cosmos-sdk v0.42.4-dm
	github.com/gogo/protobuf => github.com/regen-network/protobuf v1.3.3-alpha.regen.1
	github.com/tendermint/tendermint => github.com/figment-networks/tendermint v0.34.10-0.20220406135601-70e7eea733ef
	google.golang.org/grpc => google.golang.org/grpc v1.33.2
)
