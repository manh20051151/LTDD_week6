import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList,
} from "react-native";
import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Icon from "react-native-vector-icons/AntDesign";
import Icon2 from "react-native-vector-icons/FontAwesome";
import Icon3 from "react-native-vector-icons/Fontisto";
import Icon4 from "react-native-vector-icons/Entypo";

const Stack = createStackNavigator();

const arr = [
  {
    ten: "Milk",
    gia: "20",
    hinh: require("./img/milk.png"),
  },
  {
    ten: "Origin",
    gia: "68",
    hinh: require("./img/origin.png"),
  },
  {
    ten: "Salt",
    gia: "5",
    hinh: require("./img/salt.png"),
  },
  {
    ten: "Espresso",
    gia: "9",
    hinh: require("./img/espresso.png"),
  },
  {
    ten: "Capuchino",
    gia: "23",
    hinh: require("./img/capuchino.png"),
  },
  {
    ten: "Weasel",
    gia: "20",
    hinh: require("./img/weasel.png"),
  },
  {
    ten: "Culi",
    gia: "0",
    hinh: require("./img/culi.png"),
  },
  {
    ten: "Catimor",
    gia: "9",
    hinh: require("./img/catimor.png"),
  },
];

const Home = ({ navigation }) => {
  return (
    <View style={[{ flex: 1, alignItems: "center" }]}>
      <View>
        <Text style={{ fontSize: 20, fontWeight: "bold", marginVertical: 50 }}>
          Welcome to Cafe world
        </Text>
      </View>

      <View>
        <Image source={require("./img/Image (1).png")} style={styles.img} />
      </View>

      <View style={{ marginVertical: 40 }}>
        <Image source={require("./img/download (2).jfif")} style={styles.img} />
      </View>

      <View>
        <Image source={require("./img/download (3).jfif")} style={styles.img} />
      </View>

      <View style={{ marginTop: 100 }}>
        <TouchableOpacity
          style={[styles.btn, styles.center]}
          onPress={() => {
            navigation.navigate("S1");
          }}
        >
          <Text style={{ color: "white" }}>GET STARTED</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const S1 = ({ navigation }) => {
  var [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://6540c0a745bedb25bfc284b5.mockapi.io/cafe")
      .then((response) => response.json())
      .then((json) => {
        setData(json);
        console.log(json);
      });
  });
  return (
    <View>
      <View
        style={[
          styles.fl,
          { alignItems: "center", marginVertical: 16, marginHorizontal: 10 },
        ]}
      >
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Home");
          }}
        >
          <Icon name="left" color="gray" size={30} />
        </TouchableOpacity>

        <Text
          style={[
            {
              fontSize: 20,
              fontWeight: "bold",
              marginLeft: 20,
              marginRight: 100,
            },
          ]}
        >
          Shops Near Me
        </Text>
        <Icon2 name="search" color="green" size={30} />
      </View>
      <View style={[styles.center]}>
        {data.map((item) => {
          const statusColor =
            item.status === "Accepting Orders" ? "green" : "red";
          return (
            <TouchableOpacity
              onPress={()=>{
                navigation.navigate('S2')
              }}  
            >
              <View
                style={[
                  {
                    borderRadius: 10,
                    borderColor: "gray",
                    borderWidth: 1,
                    backgroundColor: "white",
                    marginBottom: 20,
                  },
                ]}
              >
                <View>
                  <Image source={{ uri: item.img }} style={styles.img2} />
                </View>

                <View style={{ marginLeft: 8 }}>
                  <View style={[styles.fl, { flex: 1, marginTop: 8 }]}>
                    <View style={[styles.fl, { flex: 10 }]}>
                      <View>
                        <Image
                          source={{ uri: item.img_status }}
                          style={{
                            paddingLeft: 8,
                            width: 20,
                            height: 20,
                            backgroundColor: "#f3f4f6",
                            resizeMode: "contain",
                          }}
                        />
                      </View>
                      <Text
                        style={{
                          backgroundColor: "#f3f4f6",
                          paddingRight: 10,
                          color: statusColor,
                        }}
                      >
                        {item.status}
                      </Text>
                      <View></View>
                    </View>

                    <View style={[styles.fl, { flex: 7 }]}>
                      <Icon3
                        name="clock"
                        color="green"
                        size={20}
                        style={{ backgroundColor: "#f3f4f6" }}
                      />
                      <Text
                        style={{
                          backgroundColor: "#f3f4f6",
                          paddingRight: 10,
                          color: "red",
                        }}
                      >
                        {item.time}
                      </Text>
                    </View>

                    <View style={{ flex: 1 }}>
                      <Icon4 name="location-pin" color="green" size={20} />
                    </View>
                  </View>

                  <Text
                    style={{
                      fontSize: 16,
                      fontWeight: "bold",
                      marginVertical: 6,
                    }}
                  >
                    {item.name}
                  </Text>
                  <Text style={{ marginBottom: 4, color: "gray" }}>
                    {item.address}
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
};

const S2 = ({navigation}) => {
  var [getArr, setArr] = useState(arr);
  return (
    <View>
      <View
        style={[
          styles.fl,
          { alignItems: "center", marginVertical: 16, marginHorizontal: 10 },
        ]}
      >
       
        <TouchableOpacity
          onPress={()=>{
            navigation.navigate('S1')
          }}
        >
          <Icon name="left" color="gray" size={30} />
        </TouchableOpacity>
        <Text
          style={[
            {
              fontSize: 20,
              fontWeight: "bold",
              marginLeft: 20,
              marginRight: 200,
            },
          ]}
        >
          Drinks
        </Text>
        <Icon2 name="search" color="green" size={30} />
      </View>
      <View>
        <FlatList
          data={getArr}
          renderItem={({ item }) => {
            return (
              <View style={[styles.center, { marginBottom: 12 }]}>
                <View
                  style={[
                    styles.fl,
                    {
                      borderWidth: 1,
                      borderColor: "gray",
                      width: 350,
                      height: 64,
                      borderRadius: 8,
                    },
                  ]}
                >
                  <View>
                    <Image source={item.hinh} style={styles.img3} />
                  </View>
                  <View style={[styles.fl, { flex: 1 }]}>
                    <View
                      style={{
                        flex: 2,
                        justifyContent: "space-between",
                        marginLeft: 10,
                      }}
                    >
                      <Text>{item.ten}</Text>
                      <View style={[styles.fl, { alignItems: "center" }]}>
                        <View>
                          <Image
                            source={require("./img/Vector.png")}
                            style={styles.img4}
                          />
                        </View>
                        <Text style={{ color: "gray" }}>{`$${item.gia}`}</Text>
                      </View>
                    </View>
                    <View
                      style={[
                        styles.fl,
                        {
                          flex: 1,
                          alignItems: "center",
                          justifyContent: "space-between",
                          marginRight: 20,
                        },
                      ]}
                    >
                      <TouchableOpacity
                        style={[
                          styles.center,
                          {
                            height: 20,
                            width: 20,
                            borderRadius: 20,
                            backgroundColor: "green",
                          },
                        ]}
                      >
                        <Text style={{ color: "white" }}>-</Text>
                      </TouchableOpacity>

                      <TouchableOpacity
                        style={[
                          styles.center,
                          {
                            height: 20,
                            width: 20,
                            borderRadius: 20,
                            backgroundColor: "green",
                          },
                        ]}
                      >
                        <Text style={{ color: "white" }}>+</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              </View>
            );
          }}
        />
      </View>

      <View style={{ alignItems: "center", marginVertical: 20 }}>
        <TouchableOpacity
          style={[
            styles.center,
            {
              width: 347,
              height: 44,
              backgroundColor: "#EFB034",
              borderRadius: 10,
            },
          ]}
          onPress={()=>{
            navigation.navigate('S3')
          }}
        >
          <Text style={{ fontSize: 16, color: "white" }}>GO TO CART</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const S3 = ({navigation}) => {
  return (
    <View>
      <View
        style={[
          styles.fl,
          { alignItems: "center", marginVertical: 16, marginHorizontal: 10 },
        ]}
      >
        <TouchableOpacity
          onPress={()=>{
            navigation.navigate('S2')
          }}
        >
          <Icon name="left" color="gray" size={30} />
        </TouchableOpacity>
        <Text
          style={[
            {
              fontSize: 20,
              fontWeight: "bold",
              marginLeft: 20,
              marginRight: 150,
            },
          ]}
        >
          Your orders
        </Text>
        <Icon2 name="search" color="green" size={30} />
      </View>

      <View style={[styles.center]}>
        <View
          style={[
            styles.fl,
            {
              backgroundColor: "#00BDD6",
              width: 347,
              height: 100,
              alignItems: "center",
              justifyContent: "space-between",
              paddingHorizontal: 20,
              borderRadius: 10,
              marginBottom: 10,
            },
          ]}
        >
          <View style={{ justifyContent: "space-between", height: 60 }}>
            <Text style={[styles.clW]}>CAFE DELIVERY</Text>
            <Text style={[styles.clW]}>Order #18</Text>
          </View>
          <View>
            <Text style={[styles.clW]}>$5</Text>
          </View>
        </View>

        <View
          style={[
            styles.fl,
            {
              backgroundColor: "#8353E2",
              width: 347,
              height: 100,
              alignItems: "center",
              justifyContent: "space-between",
              paddingHorizontal: 20,
              borderRadius: 10,
              marginBottom: 10,
            },
          ]}
        >
          <View style={{ justifyContent: "space-between", height: 60 }}>
            <Text style={[styles.clW]}>CAFE</Text>
            <Text style={[styles.clW]}>Order #18</Text>
          </View>
          <View>
            <Text style={[styles.clW]}>$25</Text>
          </View>
        </View>

        <View style={[styles.center, { marginBottom: 12 }]}>
          <View
            style={[
              styles.fl,
              {
                borderWidth: 1,
                borderColor: "gray",
                width: 350,
                height: 64,
                borderRadius: 8,
              },
            ]}
          >
            <View>
              <Image source={require("./img/salt.png")} style={styles.img3} />
            </View>
            <View style={[styles.fl, { flex: 1 }]}>
              <View
                style={{
                  flex: 2,
                  justifyContent: "space-between",
                  marginLeft: 10,
                }}
              >
                <Text>Salt</Text>
                <View style={[styles.fl, { alignItems: "center" }]}>
                  <View>
                    <Image
                      source={require("./img/Vector.png")}
                      style={styles.img4}
                    />
                  </View>
                  <Text style={{ color: "gray" }}>$5</Text>
                </View>
              </View>
              <View
                style={[
                  styles.fl,
                  {
                    flex: 1,
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginRight: 20,
                  },
                ]}
              >
                <TouchableOpacity
                  style={[
                    styles.center,
                    {
                      height: 20,
                      width: 20,
                      borderRadius: 20,
                      backgroundColor: "green",
                    },
                  ]}
                >
                  <Text style={{ color: "white" }}>-</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={[
                    styles.center,
                    {
                      height: 20,
                      width: 20,
                      borderRadius: 20,
                      backgroundColor: "green",
                    },
                  ]}
                >
                  <Text style={{ color: "white" }}>+</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
        <View style={[styles.center, { marginBottom: 12 }]}>
          <View
            style={[
              styles.fl,
              {
                borderWidth: 1,
                borderColor: "gray",
                width: 350,
                height: 64,
                borderRadius: 8,
              },
            ]}
          >
            <View>
              <Image source={require("./img/weasel.png")} style={styles.img3} />
            </View>
            <View style={[styles.fl, { flex: 1 }]}>
              <View
                style={{
                  flex: 2,
                  justifyContent: "space-between",
                  marginLeft: 10,
                }}
              >
                <Text>Weasel</Text>
                <View style={[styles.fl, { alignItems: "center" }]}>
                  <View>
                    <Image
                      source={require("./img/Vector.png")}
                      style={styles.img4}
                    />
                  </View>
                  <Text style={{ color: "gray" }}>$20</Text>
                </View>
              </View>
              <View
                style={[
                  styles.fl,
                  {
                    flex: 1,
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginRight: 20,
                  },
                ]}
              >
                <TouchableOpacity
                  style={[
                    styles.center,
                    {
                      height: 20,
                      width: 20,
                      borderRadius: 20,
                      backgroundColor: "green",
                    },
                  ]}
                >
                  <Text style={{ color: "white" }}>-</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={[
                    styles.center,
                    {
                      height: 20,
                      width: 20,
                      borderRadius: 20,
                      backgroundColor: "green",
                    },
                  ]}
                >
                  <Text style={{ color: "white" }}>+</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
        <TouchableOpacity
          style={[
            styles.center,
            {
              width: 347,
              height: 44,
              backgroundColor: "#EFB034",
              borderRadius: 10,
              marginTop: 100,
            },
          ]}
          onPress={()=>{
            navigation.navigate('Home')
          }}
        >
          <Text style={{ fontSize: 16, color: "white" }}>PLAY NOW</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={Home}></Stack.Screen>
        <Stack.Screen name="S1" component={S1}></Stack.Screen>
        <Stack.Screen name="S2" component={S2}></Stack.Screen>
        <Stack.Screen name="S3" component={S3}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  img: {
    height: 62,
    width: 200,
    resizeMode: "cover",
    borderRadius: 10
  },
  img2: {
    height: 114,
    width: 347,
  },
  img3: {
    height: 60,
    width: 60,
    resizeMode: "cover",
  },
  img4: {
    height: 12,
    width: 12,
  },
  clW: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  btn: {
    width: 312,
    height: 50,
    backgroundColor: "#00BDD6",
    borderRadius: 10,
  },
  center: {
    justifyContent: "center",
    alignItems: "center",
  },
  fl: {
    flexDirection: "row",
  },
});
