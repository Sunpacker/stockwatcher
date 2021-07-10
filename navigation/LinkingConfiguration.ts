/**
 * Learn more about deep linking with React Navigation
 * https://reactnavigation.org/docs/deep-linking
 * https://reactnavigation.org/docs/configuring-links
 */

import * as Linking from "expo-linking";

export default {
  prefixes: [Linking.makeUrl("/")],
  config: {
    screens: {
      Root: {
        screens: {
          Stocks: {
            screens: {
              StocksScreen: "stocks",
            },
          },

          Indexes: {
            screens: {
              IndexesScreen: "indexes",
            },
          },

          Currencies: {
            screens: {
              CurrenciesScreen: "currencies",
            },
          },
        },
      },
      NotFound: "*",
    },
  },
};
