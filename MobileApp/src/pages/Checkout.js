import React, { useState, useMemo } from 'react'
import { View, ScrollView } from 'react-native'
import { Text, Button, Header } from 'react-native-elements';
import Item from './components/Item';

const Container = ({ style, ...restProps }) => 
  <View style={{ paddingHorizontal: 15, ...style }} {...restProps} />

const CheckoutPage = () => {
  const [items, setItems] = useState([
    {
      id: 1,
      image: require('./assets/sepatu-coklat.jpg'),
      name: "Sepatu Gunung",
      price: 35,
      qty: 1,
      size: "42",
      color: "Brown",
    },
    {
      id: 2,
      image: require('./assets/sepatu-cinderella.jpg'),
      name: "Sepatu Cinderella",
      price: 50,
      qty: 1,
      size: "39",
      color: "Red",
    },
    {
      id: 3,
      image: require('./assets/sepatu-kereta.jpg'),
      name: "Sepatu Kereta",
      price: 21,
      qty: 1,
      size: "40",
      color: "Brown",
    },
  ])

  const subtotal = useMemo(() => {
    return items.reduce((acc, item) => acc + (item.price * item.qty), 0)
  }, [items])

  const tax = useMemo(() => (
    subtotal * 10 / 100
  ), [subtotal])

  const handleDelete = (id) => () => {
    const newState =  items.filter((item) => item.id !== id)
    setItems(newState)
  }

  const handleAdd = (id) => () => {
    const newState = items.map((item) => {
      if (item.id  === id) {
        return {
          ...item,
          qty: item.qty + 1,
        }
      }
      return item
    })
    setItems(newState)
  }

  const handleDecrease = (id) => () => {
    const newState = items.map((item) => {
      if (item.id  === id) {
        const nextQty = item.qty - 1
        return {
          ...item,
          qty: nextQty < 1 ? 1 : nextQty
        }
      }
      return item
    })
    setItems(newState)
  }

  return (
    <View style={{ height: "100%", backgroundColor: "white" }}>
      <Header
        backgroundColor="#fff"
        containerStyle={{ borderBottom: 0 }}
        leftComponent={{ icon: 'arrow-back', color: '#000' }}
      />

      <View style={{ borderBottomWidth: 1,  borderBottomColor: "#000", paddingVertical: 15, paddingTop: 5  }}>
        <Container>
          <Text h2 style={{ fontWeight: "700" }}>Checkout</Text>
          <Text testID="jumlah-barang" style={{ color: "#676767" }}>{items.length} Items</Text>
        </Container>
      </View>

      <ScrollView style={{ paddingVertical: 15, flex: 1 }}>
        {items.map((item, index) => (
          <Item 
            key={index}
            index={index}
            image={item.image}
            name={item.name}
            price={item.price}
            qty={item.qty}
            size={item.size}
            color={item.color}

            onDelete={handleDelete(item.id)}
            onAddQty={handleAdd(item.id)}
            onDecreaseQty={handleDecrease(item.id)}
          />
        ))}
      </ScrollView>

      <View style={{ borderTopWidth: 1,  borderTopColor: "#000", paddingVertical: 15  }}>
        <Container>
          <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginBottom: 10 }}>
            <Text style={{ color: "#676767" }}>subtotal</Text>
            <Text style={{ color: "#000" }}>${subtotal.toFixed(2)}</Text>
          </View>
          <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginBottom: 10 }}>
            <Text style={{ color: "#676767" }}>Tax</Text>
            <Text style={{ color: "#000" }}>${tax.toFixed(2)}</Text>
          </View>
          <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginTop: 10 }}>
            <Text style={{ color: "#000", fontWeight: "700" }}>Total</Text>
            <Text h4 style={{ color: "#000" }}>${(subtotal + tax).toFixed(2)}</Text>
          </View>
        </Container>
      </View>

      <View 
        style={{ 
          width: "80%",
          maxWidth: 350,
          marginHorizontal: "auto",
          paddingBottom: 25,
          paddingTop: 15,
          alignSelf: "center"
        }}
      >
        <Button 
          title="Buy Now" 
          buttonStyle={{ backgroundColor: "#000", borderRadius: 35 }} 
          titleStyle={{ fontWeight: "700" }}
        />
      </View>
    </View>
  );
}
 
export default CheckoutPage;