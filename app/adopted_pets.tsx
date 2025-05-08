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
    image: require('../assets/images/gr.jpg'),
  },
  {
    id: 2,
    name: 'Mittens',
    breed: 'Siamese Cat',
    adoptionDate: '2023-11-05',
    image: require('../assets/images/rc3.jpg'),
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
            {item.image ? (
              typeof item.image === 'string' ? (
                <Image source={{ uri: item.image }} style={styles.image} />
              ) : (
                <Image source={item.image} style={styles.image} />
              )
            ) : (
              <View style={[styles.image, { justifyContent: 'center', alignItems: 'center' }]}>
                <Text style={{ fontSize: 10, color: '#888' }}>No Image</Text>
              </View>
            )}
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
