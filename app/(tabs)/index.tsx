// app/(tabs)/index.tsx
import React from 'react';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';

const pets = [
  {
    id: 1,
    name: 'Buddy',
    breed: 'Golden Retriever',
    age: '2 years',
  },
  {
    id: 2,
    name: 'Mittens',
    breed: 'Siamese Cat',
    age: '1 year',
  },
  {
    id: 3,
    name: 'Max',
    breed: 'Bulldog',
    age: '3 years',
  },
  {
    id: 4,
    name: 'Luna',
    breed: 'Persian Cat',
    age: '2 years',
  },
  {
    id: 5,
    name: 'Charlie',
    breed: 'Beagle',
    age: '4 months',
  },
  {
    id: 6,
    name: 'Bella',
    breed: 'Ragdoll Cat',
    age: '3 months',
  },
  {
    id: 7,
    name: 'Bella',
    breed: 'Ragdoll Cat',
    age: '3 months',
  },
  {
    id: 8,
    name: 'Bella',
    breed: 'Ragdoll Cat',
    age: '3 months',
    image: 'https://placekitten.com/402/302',
  },
];

export default function HomeScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Adopt a Pet</Text>
      <View style={styles.grid}>
        {pets.map((pet) => (
          <View key={pet.id} style={styles.card}>
            <Image source={{ uri: pet.image }} style={styles.image} />
            <Text style={styles.name}>{pet.name}</Text>
            <Text style={styles.info}>{pet.breed}</Text>
            <Text style={styles.info}>{pet.age}</Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 12,
    textAlign: 'center',
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  card: {
    width: '48%',
    backgroundColor: '#f8f8f8',
    borderRadius: 8,
    padding: 10,
    marginBottom: 12,
    elevation: 2, // for Android shadow
    shadowColor: '#000', // iOS shadow
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
  },
  image: {
    width: '100%',
    height: 120,
    borderRadius: 6,
    marginBottom: 8,
  },
  name: {
    fontSize: 16,
    fontWeight: '600',
  },
  info: {
    fontSize: 13,
    color: '#555',
  },
});
