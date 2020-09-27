import React from 'react'
import { View } from 'react-native'
import { Icon } from 'react-native-elements';

const ActionButton = ({
  onDelete,
  onAddQty,
  onDecreaseQty,
}) => {
  return (
    <View style={{ flexDirection: "row", justifyContent: "flex-end" }}>
      <Icon
        testID="delete-button"
        raised
        name='clear'
        color='#ff0e00'
        size={13}
        containerStyle={{ marginHorizontal: 3 }}
        onPress={onDelete} 
      />
      <Icon
        testID="decrease-button"
        raised
        name='remove'
        color='#000'
        size={13}
        containerStyle={{ marginHorizontal: 3 }}
        onPress={onDecreaseQty} 
      />
      <Icon
        testID="add-button"
        raised
        name='add'
        color='#000'
        size={13}
        containerStyle={{ marginHorizontal: 3 }}
        onPress={onAddQty} 
      />
    </View>
  );
}
 
export default ActionButton;