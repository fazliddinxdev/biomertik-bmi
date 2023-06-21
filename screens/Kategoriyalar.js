import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Button,
  TouchableOpacity,
  FlatList,
  Image,
} from 'react-native';
class CategoriesScreen extends Component {
  state = {
    categories: [
      {
        id: '1',
        title: 'Kitoblar',
        image:
          'https://cdn-icons-png.flaticon.com/512/330/330731.png',
      },
      {
        id: '2',
        title: 'Telefonlar',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/2/2d/Mobile-Smartphone-icon.png?20150515114557',
      },
      {
        id: '4',
        title: 'Soatlar',
        image:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcHVsPJmUpbX1qe0js7-NLLHWzrJNofP0wrim8dle-Oj5k31CC&s',
      },
      {
        id: '5',
        title: 'Oyoq kiyimlar',
        image:
          'https://cdn3.iconfinder.com/data/icons/sport-set-1/512/Shoes_2-256.png',
      },
      {
        id: '8',
        title: 'Noutbuklar',
        image:
          'https://cdn0.iconfinder.com/data/icons/devices-icons-rounded/110/Laptop-512.png',
      },
      {
        id: '9',
        title: 'Kiyimlar',
        image:
          'https://cdn2.iconfinder.com/data/icons/mobile-device/512/tshirt-wear-sport-man-blue-round-512.png',
      },
      {
        id: '6',
        title: 'Taqinchoqlar',
        image:
          'https://www.shareicon.net/data/512x512/2016/09/02/824427_jewel_512x512.png',
      },
      {
        id: '7',
        title: 'Hamyonlar',
        image:
          'https://cdn4.iconfinder.com/data/icons/peppyicons-rounded/512/wallet2-512.png',
      },
    ],
  };

  renderItemsFunction = (itemData) => {
    return (
      <TouchableOpacity
        style={styles.item}
        onPress={() => {
          this.props.navigation.navigate('CategoriesProducts', {
            title: itemData.item.title,
          });
        }}
      >
        <View>
          <Image
            source={{ uri: itemData.item.image }}
            style={{ width: 90, height: 90 }}
          />
        </View>
        <Text style={styles.text} numberOfLines={2}>
          {' '}
          {itemData.item.title}{' '}
        </Text>
      </TouchableOpacity>
    );
  };

  render() {
    return (
      <View style={styles.main}>
        <FlatList
          style={{ marginTop: 5 }}
          data={this.state.categories}
          numColumns={2}
          renderItem={this.renderItemsFunction}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    padding: 5,
    backgroundColor: '#003f5c',
  },
  item: {
    flex: 1,
    height: 180,
    backgroundColor: 'white',
    borderRadius: 5,
    shadowColor: 'gray',
    shadowOpacity: 0.4,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 2,
    elevation: 2,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    margin: 15,
  },
  text: {
    fontSize: 24,
    alignContent: 'flex-end',
    marginTop: 10,
  },
});

export default CategoriesScreen;
