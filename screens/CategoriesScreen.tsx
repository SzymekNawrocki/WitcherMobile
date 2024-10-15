import React from 'react';
import { FlatList } from 'react-native';
import CategoryGridTile from '../components/CategoryGridTile';
import { CATEGORIES } from '../data/DummyData';
import { StackNavigationProp } from '@react-navigation/stack'; 
import { RouteProp } from '@react-navigation/native';

type CategoriesScreenProps = {
  navigation: StackNavigationProp<any>; 
  route: RouteProp<any>; 
};

function CategoriesScreen({ navigation }: CategoriesScreenProps) {
  function renderCategoryItem(itemData: { item: { id: string; title: string; color: string } }) {
    function pressHandler() {
      navigation.navigate('MealsOverview', {
        categoryId: itemData.item.id,
      });
    }

    return (
      <CategoryGridTile
        title={itemData.item.title}
        color={itemData.item.color}
        onPress={pressHandler}
      />
    );
  }

  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={renderCategoryItem}
      numColumns={2}
    />
  );
}

export default CategoriesScreen;
