import { AntDesign } from '@expo/vector-icons';
import { useLocalSearchParams, useRouter } from 'expo-router';
import React, { useMemo, useState } from 'react';
import { Alert, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const pets = [
  {
    id: 1,
    name: 'Buddy',
    breed: 'Golden Retriever',
    age: '2 years',
    type: 'dog',
    image: require('../assets/images/gr.jpg'),
  },
  {
    id: 2,
    name: 'Mittens',
    breed: 'Siamese Cat',
    type: 'cat',
    age: '1 year',
    image: require('../assets/images/sc.jpg'),

    
  },
  {
    id: 3,
    name: 'Max',
    breed: 'Bulldog',
    age: '3 years',
    type: 'dog',
    image: require('../assets/images/bd.jpg'),
  },
  {
    id: 4,
    name: 'Luna',
    breed: 'Persian Cat',
    type: 'cat',
    age: '2 years',
    image: require('../assets/images/pc.png'),

  },
  {
    id: 5,
    name: 'Charlie',
    breed: 'Beagle',
    age: '4 months',
    type: 'dog',
    image: require('../assets/images/bgle.jpg'),

  },
  {
    id: 6,
    name: 'Bella',
    breed: 'Ragdoll Cat',
    age: '3 months',
    type: 'cat',
    image: require('../assets/images/rc.jpg'),


  },
  {
    id: 7,
    name: 'Coco',
    breed: 'Ragdoll Cat',
    age: '3 months',
    type: 'cat',
    image: require('../assets/images/rc2.jpg'),

  },
  {
    id: 8,
    name: 'Daisy',
    breed: 'Ragdoll Cat',
    age: '3 months',
    type: 'cat',
    image: require('../assets/images/rc3.jpg'),


  },
];

export default function PetDetails() {
  const { id } = useLocalSearchParams();
  const router = useRouter();

  const pet = pets.find(p => p.id === Number(id));

  if (!pet) {
    return (
      <View style={styles.container}>
        <Text style={{ fontSize: 16 }}>Pet not found</Text>
      </View>
    );
  }

  const [isLiked, setIsLiked] = useState(false);

  const handleAdopt = () => {
    Alert.alert('Adoption Request Sent', `You have shown interest in adopting ${pet.name}!`);
  };

  const type = pet.breed.toLowerCase().includes('cat') ? 'cat' : 'dog';

  const filteredPets = useMemo(() => {
    return pets.filter(
      p => p.type === pet.type && p.id !== pet.id
    );
  }, [pet]);
  

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        {pet.image ? (
          <Image source={pet.image} style={styles.avatar} />
        ) : (
          <View style={[styles.avatar, { justifyContent: 'center', alignItems: 'center' }]}>
            <Text style={{ fontSize: 10, color: '#888' }}>No Image</Text>
          </View>
        )}

        <View style={{ flex: 1 }}>
          <Text style={styles.name}>{pet.name}</Text>
          <Text style={styles.type}>{type}</Text>
          <Text style={styles.description}>{pet.breed} · {pet.age}</Text>
        </View>
        <TouchableOpacity
          style={styles.favoriteIcon}
          onPress={() => setIsLiked(!isLiked)}
        >
          <AntDesign
            name={isLiked ? 'heart' : 'hearto'}
            size={24}
            color={isLiked ? 'red' : '#000'}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.descriptionBox}>
        <Text style={styles.descriptionText}>
          {pet.name} is a lovely pet looking for a forever home. Friendly, gentle, and full of personality!
        </Text>
      </View>

      <Text style={styles.sectionTitle}>More Pets</Text>
      <View style={styles.morePets}>
        {filteredPets.map((p, idx) => (
          <View key={idx} style={styles.petCard}>
            {p.image ? (
              <Image source={p.image} style={styles.petImage} />
            ) : (
              <View style={[styles.petImage, { justifyContent: 'center', alignItems: 'center' }]}>
                <Text style={{ fontSize: 10, color: '#888' }}>No Image</Text>
              </View>
            )}
            <Text style={styles.petName}>{p.name}</Text>
            <Text style={styles.petBreed}>{p.breed}</Text>
          </View>
        ))}
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.backButton} onPress={() => router.push('/')}>
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
    backgroundColor: '#ddd',
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
