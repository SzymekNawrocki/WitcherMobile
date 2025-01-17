import { View, Text, Pressable, Image, StyleSheet } from 'react-native';

type MealItemProps = {
    title: string;
    imageUrl: string;
};

const MealItem: React.FC<MealItemProps> = ({ title, imageUrl }) => {
    return (
        <View>
            <Pressable>
             <View>
                <Image 
                source={{ uri: imageUrl }} 
                style={styles.image} />
                <Text>{title}</Text>
             </View>
             <View>
                
             </View>
            </Pressable>
        </View>
    )
}

export default MealItem;

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 200,
    },
    title: {
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 18,
    }
});