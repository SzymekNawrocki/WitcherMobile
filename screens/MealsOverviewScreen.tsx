import { View, Text, StyleSheet, FlatList, ListRenderItem, ListRenderItemInfo } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../App'; 
import { MEALS } from '../data/DummyData';
import MealItem from '../components/MealItem';

interface Meal {
  id: string;
  title: string;
  categoryIds: string[];
  imageUrl: string;
}

type MealsOverviewScreenProps = StackScreenProps<RootStackParamList, 'MealsOverview'>;

function MealsOverviewScreen({ route }: MealsOverviewScreenProps) {
  const { categoryId } = route.params; 

  const displayedMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(categoryId) >= 0;
  });

  function renderMealItem(itemData: ListRenderItemInfo<Meal>) {
    return (
      <MealItem 
      title={itemData.item.title} 
      imageUrl={itemData.item.imageUrl} 
      />
    ) 
  }

  return (
    <View style={styles.container}>
      <FlatList 
      data={displayedMeals} 
      keyExtractor={(item) => item.id} 
      renderItem={renderMealItem}
      />
    </View>
  );
}

export default MealsOverviewScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
