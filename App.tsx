import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, Modal, Image, ImageBackground } from 'react-native';
import ButtonComponents from './src/components/ButtonComponents';

const App = () => {
  const [name, setName] = useState("");
  const [submit, setSubmit] = useState(false);
  const [warning, setWarning] = useState(false); // Sửa tên biến đúng chính tả (warning)

  const onChangeSubmit = () => {
    if (name.trim().length > 2) {
      setSubmit(!submit);
    } else {
      setWarning(true); // Bật Modal cảnh báo
      setSubmit(false)
    }
  };

  return (
    

    <ImageBackground style={styles.background}
    source={require('./assets/imagesTung.jpg')}>
    <View style={styles.box}>

      
      <Modal 
        visible={warning}               // 1. Dùng đúng biến boolean `warning`
        transparent={true}              // 2. Làm nền mờ nhìn xuyên thấu màn hình dưới
        animationType="fade"            // 3. Hiệu ứng hiện ra mượt mà (fade/slide)
        onRequestClose={() => setWarning(false)} // Bấm nút Back trên Android thì đóng Modal
      >
        <View style={styles.modalOverlay}>
          <View style={styles.warningCard}>
            <Text style={styles.warningTitle}>⚠️ CẢNH BÁO</Text>
            <Text style={styles.warningText}>Vui lòng nhập tên đầy đủ (ít nhất 3 ký tự)!</Text>

            {/* Nút bấm ĐÓNG Modal */}
            <TouchableOpacity 
              style={styles.closeButton} 
              onPress={() => setWarning(false)} // Đóng Modal khi bấm
            >
              <Text style={styles.closeButtonText}>ĐÃ HIỂU</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      {/* GIAO DIỆN CHÍNH */}
      <Text style={styles.title}>Enter your name</Text>

      <TextInput
        style={styles.textinput}
        placeholder='eg: DO HUU TUNG'
        value={name}
        onChangeText={setName}
      />
      <ButtonComponents
      onPressButton = {onChangeSubmit}
      title = {submit ? "Clear" : "Submit"}
      />
      {/* <TouchableOpacity style={styles.button} onPress={onChangeSubmit}>
        <Text style={styles.buttonText}>{submit ? "Clear" : "Submit"}</Text>
      </TouchableOpacity> */}

      {
      submit ? (
        <View> 
          <Text style={styles.resultTitle}>Your name is: {name}</Text>
          <Image source={require('./assets/images.png')} style={styles.images}/>
        </View>
       
      ) : 
      <Image source={{uri:'https://slidemodel.com/wp-content/uploads/8442-01-exit-sign-powerpoint-template-3.jpg'}} style={styles.images}
      resizeMode='stretch' />
      }

    </View>
    </ImageBackground>
    
  );
};

const styles = StyleSheet.create({
  box: {
    flex: 1,
    alignItems: 'center',
    textAlign:'center',

    
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#0f172a',
    marginBottom: 12,
  },
  textinput: {
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#cbd5e1',
    borderRadius: 8,
    width: '100%',
    paddingHorizontal: 16,
    paddingVertical: 10,
    marginBottom: 16,
    backgroundColor: '#fff',
  },
  button: {
    alignItems: 'center',
    width: '100%',
    backgroundColor: '#16a34a',
    paddingVertical: 12,
    borderRadius: 8,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  resultTitle: {
    fontSize: 18,
    color: '#0284c7',
    fontWeight: 'bold',
    marginTop: 20,
  },

  /* STYLES DÀNH RIÊNG CHO MODAL CHUẨN UX */
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Nền đen mờ 50%
    justifyContent: 'center',
    alignItems: 'center',
  },
  warningCard: {
    width: 300,
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 20,
    alignItems: 'center',
    elevation: 5, // Đổ bóng trên Android
  },
  warningTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#dc2626',
    marginBottom: 8,
  },
  warningText: {
    fontSize: 15,
    color: '#334155',
    textAlign: 'center',
    marginBottom: 20,
  },
  closeButton: {
    backgroundColor: '#dc2626',
    paddingVertical: 10,
    paddingHorizontal: 24,
    borderRadius: 6,
  },
  closeButtonText: {
    color: '#ffffff',
    fontWeight: 'bold',
  },
  images:{
    width:100,
    height:100,
  },
  background:{
    flex : 1,
    alignItems:'center',
  }
});

export default App;