import React, {useState, useRef} from 'react';
import {
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  requireNativeComponent,
} from 'react-native';

const Cropper = requireNativeComponent('CropperView');

const App = () => {
  const [showCropper, setShowCropper] = useState(true);
  return (
    <>
      <SafeAreaView>
        <View style={styles.center}>
          {showCropper && (
            <Cropper
              style={styles.wrapper}
              proportion="cover"
              onDone={e => {
                console.log(e.nativeEvent);
              }}
            />
          )}
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  center: {
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: 'blue',
  },

  space: {
    height: 10,
  },
  wrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
  },
});

export default App;
