import React, { useEffect, useState } from "react";
import { View, Text, Image, FlatList, TouchableOpacity, StyleSheet } from "react-native";

const PokemonList = ({ navigation }) => {
  const [pokemonList, setPokemonList] = useState([]);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=100")
      .then((response) => response.json())
      .then((data) => setPokemonList(data.results))
      .catch((error) => console.error(error));
  }, []);

  const getPokemonId = (url) => {
    const parts = url.split("/");
    return parts[parts.length - 2];
  };

  return (
    <FlatList
      data={pokemonList}
      keyExtractor={(item) => item.name}
      contentContainerStyle={styles.list}
      renderItem={({ item }) => {
        const id = getPokemonId(item.url);
        const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;

        return (
          <View style={styles.card}>
            <Image source={{ uri: imageUrl }} style={styles.image} />
            <Text style={styles.name}>{item.name.toUpperCase()}</Text>
            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate("PokemonDetail", { id })}
            >
              <Text style={styles.buttonText}>Detalles</Text>
            </TouchableOpacity>
          </View>
        );
      }}
    />
  );
};

const styles = StyleSheet.create({
  list: {
    paddingVertical: 20,
    alignItems: "center",
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 15,
    alignItems: "center",
    marginVertical: 10,
    width: 150,
    elevation: 5, 
    shadowColor: "#000",
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  image: {
    width: 100,
    height: 100,
  },
  name: {
    fontSize: 16,
    fontWeight: "bold",
    marginVertical: 8,
  },
  button: {
    backgroundColor: "#ffcc00",
    paddingVertical: 6,
    paddingHorizontal: 15,
    borderRadius: 5,
    marginTop: 5,
  },
  buttonText: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#333",
  },
});

// Chyaaat, is this actually real? - Lemon Woman

export default PokemonList;
