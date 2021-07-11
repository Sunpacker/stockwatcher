import { useTranslation } from "react-i18next";
import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";

import Colors from "../constants/Colors";
import useColorScheme from "../hooks/useColorScheme";
import TabBarIcon from "../components/UI/TabBarIcon";
import headerRight from "../components/UI/HeaderRight";

import StocksScreen from "../screens/StocksScreen";
import IndexesScreen from "../screens/IndexesScreen";
import CurrenciesScreen from "../screens/CurrenciesScreen";

const StocksStack = createStackNavigator();
function TabOneNavigator() {
  const { t } = useTranslation();

  return (
    <StocksStack.Navigator>
      <StocksStack.Screen
        name="Stocks"
        component={StocksScreen}
        options={{ headerTitle: t("routes:stocks"), headerRight }}
      />
    </StocksStack.Navigator>
  );
}

const IndexesStack = createStackNavigator();
function TabTwoNavigator() {
  const { t } = useTranslation();

  return (
    <IndexesStack.Navigator>
      <IndexesStack.Screen
        name="Indexes"
        component={IndexesScreen}
        options={{ headerTitle: t("routes:indexes"), headerRight }}
      />
    </IndexesStack.Navigator>
  );
}

const CurrenciesStack = createStackNavigator();
function CurrenciesNavigator() {
  const { t } = useTranslation();

  return (
    <CurrenciesStack.Navigator>
      <CurrenciesStack.Screen
        name="Currencies"
        component={CurrenciesScreen}
        options={{ headerTitle: t("routes:currencies"), headerRight }}
      />
    </CurrenciesStack.Navigator>
  );
}

// Root
const BottomTab = createBottomTabNavigator();
export default function BottomTabNavigator() {
  const { t } = useTranslation();
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName={t("routes:stocks")}
      tabBarOptions={{ activeTintColor: Colors[colorScheme].tint }}>
      <BottomTab.Screen
        name={t("routes:stocks")}
        component={TabOneNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon ionic="trending-up" color={color} />,
        }}
      />
      <BottomTab.Screen
        name={t("routes:indexes")}
        component={TabTwoNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon foundation="graph-trend" color={color} />,
        }}
      />
      <BottomTab.Screen
        name={t("routes:currencies")}
        component={CurrenciesNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon foundation="dollar" color={color} />,
        }}
      />
    </BottomTab.Navigator>
  );
}
