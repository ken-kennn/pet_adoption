import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

const initialFavoritePets = [
  {
    id: 1,
    name: 'Bruno',
    type: 'Dog',
    description: 'Friendly and loves to play fetch.',
    image: 'https://place-puppy.com/100x100',
  },
  {
    id: 2,
    name: 'Whiskers',
    type: 'Cat',
    description: 'Loves naps and cuddles.',
    image: 'https://placekitten.com/100/100',
  },
  {
    id: 3,
    name: 'Chirpy',
    type: 'Parrot',
    description: 'Talkative and colorful.',
  },
  {
    id: 4,
    name: 'Chirpy',
    type: 'Parrot',
    description: 'Talkative and colorful.',
  },
  {
    id: 5,
    name: 'Chirpy',
    type: 'Parrot',
    description: 'Talkative and colorful.',
  },
  {
    id: 6,
    name: 'Chirpy',
    type: 'Parrot',
    description: 'Talkative and colorful.',
  },
  {
    id: 7,
    name: 'Chirpy',
    type: 'Parrot',
    description: 'Talkative and colorful.',
  },
];

export default function ProfileScreen() {
  const router = useRouter();
  const [favoritePets, setFavoritePets] = useState(initialFavoritePets);

 
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.avatar} />
        <Text style={styles.welcomeText}>WELCOME KENNETH!!</Text>
        
        <View style={styles.headerButtons}>
          <TouchableOpacity style={styles.editButton} > {/* onPress={() => router.push('/edit_profile')} */}
            <Text style={styles.logoutButtonText}>Edit Profie</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.logoutButton} onPress={() => router.replace('/login')}>
            <Text style={styles.logoutButtonText}>Logout</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Info Box */}
      <View style={styles.infoBox} />

      {/* Favorite Pets Section */}
      <Text style={styles.sectionTitle}>FAVORITE PETS</Text>
      <ScrollView style={styles.petsBox}>
        {favoritePets.map((pet) => (
          <View key={pet.id} style={styles.petCard}>
            <Image source={{ uri: pet.image }} style={styles.petImage} />
            <View style={styles.petDetails}>
              <Text style={styles.petName}>{pet.name}</Text>
              <Text style={styles.petType}>{pet.type}</Text>
              <Text style={styles.petDescription}>{pet.description}</Text>
            </View>
            <TouchableOpacity
              style={styles.removeButton}
             
            >
              <Text style={styles.removeButtonText}>Remove</Text>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>

      {/* Button */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => router.push('/adopted_pets')}
      >
        <Text style={styles.buttonText}>View Adopted Pets</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: '#000',
    marginRight: 10,
  },
  welcomeText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  infoBox: {
    height: 80,
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  petsBox: {
    flexGrow: 0,
    height: 500,
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    marginBottom: 20,
  },
  petCard: {
    flexDirection: 'row',
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
    alignItems: 'center',
  },
  petImage: {
    width: 70,
    height: 70,
    borderWidth: 1,
    borderRadius: 10,
    marginRight: 12,
  },
  petDetails: {
    flex: 1,
  },
  petName: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  petType: {
    fontWeight: '600',
    fontSize: 13,
  },
  petDescription: {
    fontSize: 12,
    color: '#555',
  },
  removeButton: {
    backgroundColor: '#d32f2f',
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 6,
  },
  removeButtonText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: '#1976d2',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center', 
    
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
    width: 340,
    textAlign: 'center',
    
  },
  headerButtons: {
    flexDirection: 'row',
    gap: 8,
    marginLeft: 'auto',
  },
  
  editButton: {
    backgroundColor: '#1976d2',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 6,
  },
  
  logoutButton: {
    marginLeft: 'auto',
    backgroundColor: '#d32f2f',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 6,
  },
  logoutButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 12,
  },

});
