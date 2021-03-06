import { Plugin, PluginsContainer } from "@webiny/graphql/types";

export type HandlerApolloGatewayHeadersPlugin = Plugin & {
    type: "handler-apollo-gateway-headers";
    buildHeaders(params: { headers: { [key: string]: string }; plugins: PluginsContainer }): void;
};

export interface HandlerApolloGatewayOptions {
    debug?: boolean | string;
    server?: {
        introspection?: boolean | string;
        playground?: boolean | string;
    };
    handler?: {
        cors?: { [key: string]: any };
    };
    services: ApolloGatewayServiceDefinition[];
}

export type ApolloGatewayServiceDefinition = {
    name: string;
    function: string;
};

export type HandlerApolloGatewayServicePlugin = Plugin & {
    type: "handler-apollo-gateway-service";
    service: ApolloGatewayServiceDefinition;
};
