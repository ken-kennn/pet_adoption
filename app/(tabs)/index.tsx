import { useRouter } from 'expo-router';
import React from 'react';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const pets = [
  {
    id: 1,
    name: 'Buddy',
    breed: 'Golden Retriever',
    age: '2 years',
    image: require('../../assets/images/gr.jpg'),
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
    image: require('../../assets/images/bd.jpg'),

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
  
  },
];

export default function HomeScreen() {
  const router = useRouter();

  return (
    <ScrollView contentContainerStyle={styles.container}>

      <View style={styles.header}>
        <Image source={require('../../assets/images/pet_adoption.png')} style={styles.headerIcon} />
        <Text style={styles.brandTitle}>Pettio</Text>
      </View>

      <View style={styles.categoriesContainer}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Adopt a Pet</Text>
        </View>
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
            <Image
              source={typeof pet.image === 'string' ? { uri: pet.image } : pet.image}
              style={styles.image}
            />

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
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    marginBottom: 12,
  },
  
  brandTitle: {
    fontSize: 20,
    fontWeight: 900,
    marginLeft: 10,
    color: '#333', // optional: make it visually appealing
  },
  
  headerIcon: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
  },
  
  
  container: {
    padding: 16,
    backgroundColor: '#fff',
  },
  titleContainer: {
    flex: 1,
    marginLeft: 10,
  },
  
  title: {
    fontSize: 44,
    fontWeight: 'bold',
    marginBottom: 12,
   
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
