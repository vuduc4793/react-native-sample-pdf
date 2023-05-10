import React from "react"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { Connect, Home, Template } from "/screens"
import FontAwesome5 from "react-native-vector-icons/FontAwesome5"
import Routes from "./Routes"

const Tab = createBottomTabNavigator()

export interface PropsTabBottom {
  name: string
  component: React.ComponentType<any>
  icon: string
  color: string
  displayName: string
}

export const TAB_BOTTOM = () => {
  return [
    {
      displayName: "Trang chủ",
      component: Home,
      icon: "home",
      color: "#FFFFFF",
      name: Routes.HOME,
    },
    {
      displayName: "Kết nối",
      component: Connect,
      icon: "globe",
      color: "#FFFFFF",
      name: Routes.CONNECT,
    },
  ]
}

const TabComponent = (props: PropsTabBottom, index: number) => {
  return (
    <Tab.Screen
      key={index.toString()}
      name={props.name}
      component={props.component}
      options={{
        headerShown: false,
        tabBarLabel: props.displayName,
        tabBarIcon: ({ color }) => <FontAwesome5 name={props.icon} color={color} size={18} />,
      }}
      listeners={{
        focus: () => {},
      }}
    />
  )
}

const TabMainStack = () => {
  return <Tab.Navigator>{TAB_BOTTOM().map((item, index) => TabComponent(item, index))}</Tab.Navigator>
}

export default TabMainStack
