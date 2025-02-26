import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import PokemonList from "./PokemonList";
import PokemonDetail from "./PokemonDetail";

const Stack = createStackNavigator();

export default function App() {
  return (
      <Stack.Navigator>
        <Stack.Screen name="PokemonList" component={PokemonList} options={{ title: "Pokédex" }} />
        <Stack.Screen name="PokemonDetail" component={PokemonDetail} options={{ title: "Detalles del Pokémon" }} />
      </Stack.Navigator>
  );
}
