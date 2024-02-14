import { FlatList, Text } from "react-native";

import FoodItem from "../FoodItem";
import Loader from '../Loader';

export default function ListFoods({ foods, loading }) {
    return (
        <>
            {
                loading ? (
                    <Loader />
                )
                :
                (
                    <FlatList
                        data={foods}
                        keyExtractor={(item) => item.id}
                        renderItem={({ item }) => <FoodItem data={item} />}
                        showsVerticalScrollIndicator={false}
                        ListEmptyComponent={() => (
                            <Text style={{fontSize: 16}}>
                                Ops não encontramos sua receita...
                            </Text>
                        )}
                    />
                )
            }
        </>
    );
}