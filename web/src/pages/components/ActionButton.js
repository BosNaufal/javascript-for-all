import React from 'react'
import { View } from 'react-native-web'
import { Icon } from 'react-native-elements';

const ActionButton = ({
  onDelete,
  onAddQty,
  onDecreaseQty,
}) => {
  return (
    <View style={{ flexDirection: "row", justifyContent: "flex-end" }}>
      <Icon
        raised
        name='clear'
        color='#ff0e00'
        size={12}
        containerStyle={{ borderWidth: 1, borderColor: "#ff0e00", marginHorizontal: 3 }}
        onPress={onDelete} 
      />
      <Icon
        raised
        name='remove'
        color='#000'
        size={12}
        containerStyle={{ borderWidth: 1, borderColor: "#000", marginHorizontal: 3 }}
        onPress={onDecreaseQty} 
      />
      <Icon
        raised
        name='add'
        color='#000'
        size={12}
        containerStyle={{ borderWidth: 1, borderColor: "#000", marginHorizontal: 3 }}
        onPress={onAddQty} 
      />
    </View>
  );
}
 
export default ActionButton;