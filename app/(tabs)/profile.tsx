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
    image: require('../../assets/images/gr.jpg'),
  },
  {
    id: 2,
    name: 'Whiskers',
    type: 'Cat',
    description: 'Loves naps and cuddles.',
    image: require('../../assets/images/rc3.jpg'),
  },
  {
    id: 3,
    name: 'Chirpy',
    type: 'Parrot',
    description: 'Talkative and colorful.',
    image: require('../../assets/images/parrot.jpg'),
  },
];

export default function ProfileScreen() {
  const router = useRouter();
  const [favoritePets, setFavoritePets] = useState(initialFavoritePets);

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Image
          source={require('../../assets/images/kenneth.jpg')}
          style={styles.avatar}
        />
        <Text style={styles.welcomeText}>WELCOME KENNETH!!</Text>

        <View style={styles.headerButtons}>
          <TouchableOpacity style={styles.editButton}>
            <Text style={styles.logoutButtonText}>Edit Profile</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.logoutButton}
            onPress={() => router.replace('/login')}
          >
            <Text style={styles.logoutButtonText}>Logout</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Info Box */}
      <Text style={styles.sectionTitle}>About Me</Text>
      <View style={styles.infoBox}>
        <Text style={styles.infoText}>Pet Lover</Text>
      </View>

      {/* Favorite Pets Section */}
      <Text style={styles.sectionTitle}>FAVORITE PETS</Text>
      <ScrollView style={styles.petsBox}>
        {favoritePets.map((pet) => (
          <View key={pet.id} style={styles.petCard}>
            {pet.image ? (
              <Image source={pet.image} style={styles.petImage} />
            ) : (
              <View
                style={[
                  styles.petImage,
                  { justifyContent: 'center', alignItems: 'center' },
                ]}
              >
                <Text style={{ fontSize: 10, color: '#888' }}>No Image</Text>
              </View>
            )}

            <View style={styles.petDetails}>
              <Text style={styles.petName}>{pet.name}</Text>
              <Text style={styles.petType}>{pet.type}</Text>
              <Text style={styles.petDescription}>{pet.description}</Text>
            </View>
            <TouchableOpacity style={styles.removeButton}>
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
  searchIcon: {
    width: 20,
    height: 20,
    marginRight: 10,
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
    borderColor: '#e4e4e4',
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
    backgroundColor: '#6E6E6E',
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 6,
  },
  removeButtonText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: 'bold',
  },
  infoText: {
    fontSize: 14,
    marginBottom: 4,
    color: '#333',
    padding: 12,
  },
  button: {
    backgroundColor: '#64dd69',
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
