// import React, {useState} from 'react';
// import {
//   SafeAreaView,
//   Text,
//   View,
//   NativeModules,
//   TouchableOpacity,
//   StyleSheet,
// } from 'react-native';

// const Counter = () => {
//   const [count, setCount] = useState(0);

//   async function increment() {
//     console.log('increment');

//     await NativeModules.Counter.increment();
//     const count = await NativeModules.Counter.getCount();
//     setCount(count);
//   }

//   async function decrement() {
//     console.log('decrement');

//     await NativeModules.Counter.decrement();
//     const count = await NativeModules.Counter.getCount();
//     setCount(count);
//   }

//   return (
//     <View style={styles.center}>
//       <Text style={styles.currentCountText}>Current count: {count}</Text>
//       <View style={styles.space}></View>

//       <TouchableOpacity style={styles.button} onPress={() => increment()}>
//         <Text>+</Text>
//       </TouchableOpacity>

//       <View style={styles.space}></View>

//       <TouchableOpacity style={styles.button} onPress={() => decrement()}>
//         <Text>-</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   button: {
//     width: 100,
//     height: 100,
//     backgroundColor: 'skyblue',
//     color: 'white',
//     borderRadius: 4,

//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   center: {
//     height: '100%',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },

//   space: {
//     height: 10,
//   },

//   currentCountText: {
//     fontSize: 21,
//   },
// });

// export default Counter;
