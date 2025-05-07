import { useLocalSearchParams, useRouter } from 'expo-router';
import React from 'react';
import { Alert, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function PetDetails() {
  const { name, breed, age, image } = useLocalSearchParams();
  const router = useRouter();

  const handleAdopt = () => {
    Alert.alert('Adoption Request Sent', `You have shown interest in adopting ${name}!`);
  };

  return (
    <View style={styles.container}>
      <Image source={{ uri: image as string }} style={styles.image} />

      <View style={styles.infoContainer}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.breed}>{breed}</Text>
        <Text style={styles.age}>{age}</Text>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
          <Text style={styles.backText}>Go Back</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.adoptButton} onPress={handleAdopt}>
          <Text style={styles.adoptText}>Adopt Me</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  image: {
    width: '100%',
    height: 280,
    borderRadius: 16,
    marginBottom: 20,
  },
  infoContainer: {
    alignItems: 'center',
    marginBottom: 30,
  },
  name: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 6,
  },
  breed: {
    fontSize: 20,
    color: '#666',
    marginBottom: 4,
  },
  age: {
    fontSize: 18,
    color: '#888',
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
});
