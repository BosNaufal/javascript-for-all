import React from 'react'
import { View, ActivityIndicator } from 'react-native'
import { Text, Image } from 'react-native-elements';
import ActionButton from './ActionButton'

const Item = ({
  image,
  name,
  price,
  qty,
  size,
  color,
  onDelete,
  onAddQty,
  onDecreaseQty,
}) => {
  return (
    <View style={{ marginBottom: 25, paddingHorizontal: 15 }}>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <View style={{ flexDirection: "row" }}>
          <Image 
            source={image}
            style={{ width: 100, height: 100, marginRight: 15 }}
            PlaceholderContent={<ActivityIndicator />}
          />
          <View style={{ flexWrap: "wrap", maxWidth: 125 }}>
            <View>
              <Text style={{ fontWeight: "700" }}>{name}</Text>
              <Text>${price.toFixed(2)} x {qty}</Text>
            </View>
            <View>
              <Text style={{ color: "#676767" }}>Size: {size}</Text>
              <Text style={{ color: "#676767" }}>Color: {color}</Text>
            </View>
          </View>
        </View>

        <View style={{ alignItems: "flex-end", flex: 1 }}>
          <Text h4 h4Style={{ fontSize: 19, marginRight: 10 }}>${(price * qty).toFixed(2)}</Text>
          <ActionButton 
            onDelete={onDelete}
            onAddQty={onAddQty}
            onDecreaseQty={onDecreaseQty}
          />
        </View>
      </View>

    </View>
  );
}
 
export default Item;
