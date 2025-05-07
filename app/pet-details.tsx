import { AntDesign } from '@expo/vector-icons';
import { useLocalSearchParams, useRouter } from 'expo-router';
import React, { useMemo } from 'react';
import { Alert, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const pets = [
  {
    id: 1,
    name: 'Buddy',
    breed: 'Golden Retriever',
    age: '2 years',
    image: 'https://placedog.net/400/300',
  },
  {
    id: 2,
    name: 'Mittens',
    breed: 'Siamese Cat',
    age: '1 year',
    image: 'https://placekitten.com/400/300',
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
    image: 'https://placekitten.com/401/301',
  },
  {
    id: 5,
    name: 'Charlie',
    breed: 'Beagle',
    age: '4 months',
    image: 'https://placedog.net/402/300',
  },
  {
    id: 6,
    name: 'Bella',
    breed: 'Ragdoll Cat',
    age: '3 months',
    image: 'https://placekitten.com/402/302',
  },
  {
    id: 7,
    name: 'Coco',
    breed: 'Ragdoll Cat',
    age: '3 months',
    image: 'https://placekitten.com/403/303',
  },
  {
    id: 8,
    name: 'Daisy',
    breed: 'Ragdoll Cat',
    age: '3 months',
    image: 'https://placekitten.com/407/307',
  },
];

export default function PetDetails() {
  const { name, breed, age, image } = useLocalSearchParams();
  const router = useRouter();

  const handleAdopt = () => {
    Alert.alert('Adoption Request Sent', `You have shown interest in adopting ${name}!`);
  };

  // Determine pet "type" from breed
  const type = typeof breed === 'string' && breed.toLowerCase().includes('cat') ? 'cat' : 'dog';

  const filteredPets = useMemo(() => {
    return pets.filter(
      pet =>
        pet.breed.toLowerCase().includes(type) &&
        pet.name !== name
    );
  }, [type, name]);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Image source={{ uri: image as string }} style={styles.avatar} />
        <View style={{ flex: 1 }}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.type}>{type}</Text>
          <Text style={styles.description}>{breed} · {age}</Text>
        </View>
        <TouchableOpacity style={styles.favoriteIcon}>
          <AntDesign name="hearto" size={24} color="#000" />
        </TouchableOpacity>
      </View>

     

      <View style={styles.descriptionBox}>
        <Text style={styles.descriptionText}>
          {name} is a lovely looking for a forever home. Friendly, gentle, and full of personality!
        </Text>
      </View>

      <Text style={styles.sectionTitle}>More Pets</Text>
      <View style={styles.morePets}>
        {filteredPets.map((pet, idx) => (
          <View key={idx} style={styles.petCard}>
            <Image source={{ uri: pet.image }} style={styles.petImage} />
            <Text style={styles.petName}>{pet.name}</Text>
            <Text style={styles.petBreed}>{pet.breed}</Text>
          </View>
        ))}
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.backButton} onPress={() => router.push('/')}
        >
          <Text style={styles.backText}>Go Back</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.adoptButton} onPress={handleAdopt}>
          <Text style={styles.adoptText}>Adopt Me</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    marginBottom: 16,
    alignItems: 'center',
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 12,
    marginRight: 12,
    backgroundColor: '#eee',
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  type: {
    fontSize: 14,
    fontWeight: '600',
    color: '#444',
    textTransform: 'capitalize',
  },
  description: {
    fontSize: 13,
    color: '#666',
    marginTop: 4,
  },
  favoriteIcon: {
    padding: 8,
  },
  mainImage: {
    width: '100%',
    height: 180,
    borderRadius: 10,
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  morePets: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 24,
  },
  petCard: {
    width: '48%',
    marginBottom: 16,
    backgroundColor: '#f5f5f5',
    borderRadius: 10,
    padding: 8,
    alignItems: 'center',
  },
  petImage: {
    width: '100%',
    height: 100,
    borderRadius: 8,
    marginBottom: 8,
  },
  petName: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  petBreed: {
    fontSize: 12,
    color: '#666',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 12,
  },
  backButton: {
    flex: 1,
    paddingVertical: 14,
    backgroundColor: '#ccc',
    borderRadius: 10,
    alignItems: 'center',
  },
  backText: {
    fontSize: 16,
    color: '#333',
    fontWeight: '600',
  },
  adoptButton: {
    flex: 1,
    paddingVertical: 14,
    backgroundColor: '#2e7d32',
    borderRadius: 10,
    alignItems: 'center',
  },
  adoptText: {
    fontSize: 16,
    color: '#fff',
    fontWeight: '600',
  },
  descriptionBox: {
    backgroundColor: '#f9f9f9',
    padding: 12,
    borderRadius: 10,
    marginBottom: 20,
    height: 250,
  },
  descriptionText: {
    fontSize: 14,
    color: '#444',
    lineHeight: 20,
  },
  
});
