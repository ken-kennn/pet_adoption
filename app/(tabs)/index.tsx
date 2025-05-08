import { useRouter } from 'expo-router';
import React from 'react';
import { Image, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';


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
    image: require('../../assets/images/sc.jpg'),
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
    image: require('../../assets/images/pc.png'),
  },
  {
    id: 5,
    name: 'Charlie',
    breed: 'Beagle',
    age: '4 months',
    image: require('../../assets/images/bgle.jpg'),
  },
  {
    id: 6,
    name: 'Bella',
    breed: 'Ragdoll Cat',
    age: '3 months',
    image: require('../../assets/images/rc.jpg'),
  },
  {
    id: 7,
    name: 'Coco',
    breed: 'Ragdoll Cat',
    age: '3 months',
    image: require('../../assets/images/rc2.jpg'),
  },
  {
    id: 8,
    name: 'Daisy',
    breed: 'Ragdoll Cat',
    age: '3 months',
    image: require('../../assets/images/rc3.jpg'),
  
  },
];

export default function HomeScreen() {
 
  const router = useRouter();

 

  return (

    <SafeAreaView style={{ flex: 1 }}>

      <ScrollView contentContainerStyle={styles.container}>

      <View style={styles.header}>
        <Image source={require('../../assets/images/pet_adoption.png')} style={styles.headerIcon} />
        <Text style={styles.brandTitle}>Pettio</Text>
        <View style={styles.searchContainer}>
          
          <TextInput
            style={styles.searchInput}
            placeholder="Search..."
            placeholderTextColor="#888"
          />
          <Image source={require('../../assets/images/sb.jpg')} style={styles.searchIcon} />
        </View>
      </View>

      <View style={styles.categoriesContainer}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Adopt a Pet</Text>
        </View>
        <Text style={styles.categoryTitle}>Categories</Text>
        <View style={styles.categoryRow}>
          {[
            { label: 'Dogs', image: require('../../assets/images/dog.png') },
            { label: 'Cats', image: require('../../assets/images/c.png') },
            { label: 'Birds', image: require('../../assets/images/bird.png') },
            { label: 'Others', image: require('../../assets/images/others.jpg') },
          ].map((category, index) => (
            <TouchableOpacity key={index} style={styles.category}>
              <Image source={category.image} style={styles.categoryIcon} />
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

    </SafeAreaView>
    
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    marginBottom: 12,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 5,
    width: 268,
    marginLeft: 20,
  },
  searchIcon: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
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
    height: 150, // Increased for better display
    resizeMode: 'cover',
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
    borderRadius: 10,
    backgroundColor: '#f1f1f1',
    marginBottom: 6,
    resizeMode: 'cover', // Enable image scaling inside the circle
  },
  categoryLabel: {
    fontSize: 14,
    fontWeight: '500',
    textAlign: 'center',
  },
});
