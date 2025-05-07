import { useRouter } from 'expo-router';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const AdoptedPets = () => {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Adopted Pets</Text>

      <TouchableOpacity style={styles.button} onPress={() => router.replace('/(tabs)/profile')}>
        <Text style={styles.buttonText}>Go Back</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AdoptedPets;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,   
    fontWeight: 'bold',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#757575',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
  },
});
