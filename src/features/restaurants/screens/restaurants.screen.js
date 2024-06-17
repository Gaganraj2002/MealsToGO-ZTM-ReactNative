import React from 'react';
import {View, Text, SafeAreaView, StyleSheet, StatusBar} from 'react-native';
import {Searchbar} from 'react-native-paper';
import RestaurantInfoCard from '../components/restaurant-info-card';
const RestaurantsScreen = () => {
  const [searchQuery, setSearchQuery] = React.useState('');
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.search}>
        <Searchbar
          placeholder="Search"
          mode="bar"
          onChangeText={setSearchQuery}
          value={searchQuery}
        />
      </View>
      <View style={styles.list}>
        <RestaurantInfoCard
          restaurant={{
            name: 'The Restaurant',
            icon: 'https://loremicon.com/grad/20pt/20pt/64110306/svg',
            photos: "https://picsum.photos/id/237/200/300",
            vicinity: '1234 Main St',
            isOpen: true,
            rating: 4,
            isClosedTemporarily: false,
          }}
        />

      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  search: {
    padding: 16,
  },
  list: {
    padding: 16,
  },
});

export default RestaurantsScreen;
