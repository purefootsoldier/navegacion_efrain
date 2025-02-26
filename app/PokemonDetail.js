import React, { useEffect, useState } from "react";
import { View, Text, Image, ActivityIndicator, StyleSheet } from "react-native";

const PokemonDetail = ({ route }) => {
  const { id } = route.params;
  const [pokemon, setPokemon] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setPokemon(data);
        setLoading(false);
      })
      .catch((error) => console.error(error));
  }, [id]);

  if (loading) {
    return <ActivityIndicator size="large" color="#ffcc00" style={styles.loader} />;
  }

  return (
    <View style={styles.container}>
      <Image source={{ uri: pokemon.sprites.front_default }} style={styles.image} />
      <Text style={styles.name}>{pokemon.name.toUpperCase()}</Text>
      <Text style={styles.info}>Altura: {pokemon.height}</Text>
      <Text style={styles.info}>Peso: {pokemon.weight}</Text>
      <Text style={styles.info}>Experiencia base: {pokemon.base_experience}</Text>
      <Text style={styles.info}>
        Habilidades: {pokemon.abilities.map((a) => a.ability.name).join(", ")}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  loader: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    flex: 1,
    alignItems: "center",
    padding: 20,
    backgroundColor: "#f8f8f8",
  },
  image: {
    width: 150,
    height: 150,
  },
  name: {
    fontSize: 22,
    fontWeight: "bold",
    marginVertical: 10,
  },
  info: {
    fontSize: 16,
    marginVertical: 5,
  },
});



export default PokemonDetail;
