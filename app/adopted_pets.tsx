import { useRouter } from 'expo-router';
import React from 'react';
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

const adoptedPets = [
  {
    id: 1,
    name: 'Buddy',
    breed: 'Golden Retriever',
    adoptionDate: '2023-10-01',
    image: 'https://place-puppy.com/150x150',
  },
  {
    id: 2,
    name: 'Mittens',
    breed: 'Siamese Cat',
    adoptionDate: '2023-11-05',
    image: 'https://placekitten.com/150/150',
  },
  {
    id: 3,
    name: 'Max',
    breed: 'Bulldog',
    adoptionDate: '2023-09-12',
    image: 'https://place-puppy.com/151x151',
  },
  {
    id: 4,
    name: 'Luna',
    breed: 'Persian Cat',
    adoptionDate: '2023-12-20',
    image: 'https://placekitten.com/151/151',
  },
  {
    id: 5,
    name: 'Charlie',
    breed: 'Beagle',
    adoptionDate: '2024-01-15',
    image: 'https://place-puppy.com/152x152',
  },
  {
    id: 6,
    name: 'Bella',
    breed: 'Ragdoll Cat',
    adoptionDate: '2024-02-10',
    image: 'https://placekitten.com/152/152',
  },
  {
    id: 7,
    name: 'Rocky',
    breed: 'German Shepherd',
    adoptionDate: '2024-03-03',
    image: 'https://place-puppy.com/153x153',
  },
  {
    id: 8,
    name: 'Daisy',
    breed: 'British Shorthair',
    adoptionDate: '2024-04-18',
    image: 'https://placekitten.com/153/153',
  },
];

const AdoptedPets = () => {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Adopted Pets</Text>

      <FlatList
        data={adoptedPets}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        contentContainerStyle={styles.listContainer}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image source={{ uri: item.image }} style={styles.image} />
            <Text style={styles.petName}>{item.name}</Text>
            <Text style={styles.breed}>{item.breed}</Text>
            <Text style={styles.date}>Adopted: {item.adoptionDate}</Text>
          </View>
        )}
      />

      <TouchableOpacity
        style={styles.button}
        onPress={() => router.replace('/(tabs)/profile')}
      >
        <Text style={styles.buttonText}>Go Back</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AdoptedPets;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  listContainer: {
    paddingHorizontal: 16,
    paddingBottom: 20,
  },
  card: {
    backgroundColor: '#f9f9f9',
    borderRadius: 12,
    padding: 12,
    alignItems: 'center',
    marginBottom: 16,
    marginHorizontal: 8,
    width: 160,
    elevation: 2,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 2,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 8,
    marginBottom: 8,
  },
  petName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  breed: {
    fontSize: 13,
    color: '#555',
  },
  date: {
    fontSize: 12,
    color: '#888',
    marginTop: 4,
  },
  button: {
    backgroundColor: '#616161',
    width: 350,
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    marginVertical: 20,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: '600',
    fontSize: 16,
  },
});
