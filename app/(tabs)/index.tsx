import { useRouter } from 'expo-router';
import React from 'react';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

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
    name: 'Coco',
    breed: 'Ragdoll Cat',
    age: '3 months',
  },
  {
    id: 8,
    name: 'Daisy',
    breed: 'Ragdoll Cat',
    age: '3 months',
    image: 'https://placekitten.com/407/307',
  },
];

export default function HomeScreen() {
  const router = useRouter();

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Adopt a Pet</Text>

      <View style={styles.categoriesContainer}>
        <Text style={styles.categoryTitle}>Categories</Text>
        <View style={styles.categoryRow}>
          {[
            { label: 'Dogs' },
            { label: 'Cats' },
            { label: 'Birds' },
            { label: 'Others' },
          ].map((category, index) => (
            <TouchableOpacity key={index} style={styles.category}>
              <View style={styles.categoryIcon} />
              <Text style={styles.categoryLabel}>{category.label}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      <View style={styles.grid}>
        {pets.map((pet) => (
          <TouchableOpacity
            key={pet.id}
            style={styles.card}
            onPress={() => router.push({ pathname: '/pet-details', params: { ...pet } })}
          >
            <Image source={{ uri: pet.image }} style={styles.image} />
            <Text style={styles.name}>{pet.name}</Text>
            <Text style={styles.info}>{pet.breed}</Text>
            {/* <Text style={styles.info}>{pet.age}</Text> */}
          </TouchableOpacity>
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
    elevation: 2,
    shadowColor: '#000',
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
  categoriesContainer: {
    marginBottom: 16,
  },
  categoryTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'left',
    paddingHorizontal: 10,
  },
  categoryRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    gap: 20,
  },
  category: {
    alignItems: 'center',
    flex: 1,
  },
  categoryIcon: {
    width: 90,
    height: 90,
    borderRadius: 70,
    backgroundColor: '#e0e0e0',
    marginBottom: 6,
  },
  categoryLabel: {
    fontSize: 14,
    fontWeight: '500',
    textAlign: 'center',
  },
});
