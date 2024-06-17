/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {Card} from 'react-native-paper';

const RestaurantInfoCard = ({restaurant}) => {
  const {name, icon, photos, vicinity, isOpen, rating, isClosedTemporarily} =
    restaurant;
  return (
    <View style={styles.container}>
      <Card style={styles.card} elevation={5}>
        <Card.Cover source={{uri: photos}} />
        <Card.Content>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={styles.title}>{name}</Text>
            <Text style={styles.visinity}>{vicinity}</Text>
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <View style={{flexDirection: 'row'}}>
              <Text>Rating: </Text>
              <Text>{rating}</Text>
            </View>
            {isClosedTemporarily && <Text>Closed Temporarily</Text>}
            {isOpen && <Text>Open</Text>}
          </View>
        </Card.Content>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 8,
  },
  image: {
    width: '100%',
    height: 100,
  },
  card: {
    backgroundColor: 'white',
    padding: 8,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    padding: 8,
  },
  visinity: {
    fontSize: 16,
    padding: 8,
    marginTop: 4,
  },
});

export default RestaurantInfoCard;
