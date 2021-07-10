import { ComponentProps } from "react";
import { useTranslation } from "react-i18next";
import * as React from "react";
import { Ionicons, Foundation } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";

import Colors from "../constants/Colors";
import useColorScheme from "../hooks/useColorScheme";
import StocksScreen from "../screens/StocksScreen";
import IndexesScreen from "../screens/IndexesScreen";
import CurrenciesScreen from "../screens/CurrenciesScreen";

function TabBarIcon(props: {
  ionic?: ComponentProps<typeof Ionicons>["name"];
  foundation?: ComponentProps<typeof Foundation>["name"];
  color: string;
}) {
  const { ionic, foundation } = props;
  const size = 32;
  const style = {
    marginBottom: -4,
  };

  if (ionic) {
    return <Ionicons name={ionic} size={size} style={style} {...props} />;
  } else if (foundation) {
    return <Foundation name={foundation} size={size} style={style} {...props} />;
  }
}

const StocksStack = createStackNavigator();
function TabOneNavigator() {
  const { t } = useTranslation();

  return (
    <StocksStack.Navigator>
      <StocksStack.Screen name="StocksScreen" component={StocksScreen} options={{ headerTitle: t("routes:stocks") }} />
    </StocksStack.Navigator>
  );
}

const IndexesStack = createStackNavigator();
function TabTwoNavigator() {
  const { t } = useTranslation();

  return (
    <IndexesStack.Navigator>
      <IndexesStack.Screen
        name="IndexesScreen"
        component={IndexesScreen}
        options={{ headerTitle: t("routes:indexes") }}
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
        name="CurrenciesScreen"
        component={CurrenciesScreen}
        options={{ headerTitle: t("routes:currencies") }}
      />
    </CurrenciesStack.Navigator>
  );
}

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
