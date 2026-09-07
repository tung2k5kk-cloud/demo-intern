import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function App() {
  // BƯỚC 2: State
  const [count, setCount] = useState(0);

  // BƯỚC 3: Hàm Logic
  const handleIncrease = () => {
    setCount(count + 1);
  };

  const handleDecrease = () => {
    setCount(count - 1);
  };

  const handleReset = () => {
    setCount(0);
  }

  // BƯỚC 4: Gắn vào JSX
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>ỨNG DỤNG ĐẾM SỐ</Text>

      {/* Hiển thị State */}
      <View style={styles.box}>
        <Text style={styles.countText}>{count}</Text>
      </View>

      {/* Cụm nút bấm */}
      <View style={styles.buttonRow}>
        <TouchableOpacity style={[styles.button, styles.btnRed]} onPress={handleDecrease}>
          <Text style={styles.buttonText}>- Giảm</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.button, styles.btnGreen]} onPress={handleIncrease}>
          <Text style={styles.buttonText}>+ Tăng</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.button, styles.btnBlue]} onPress={handleReset}>
          <Text style={styles.buttonText}>Reset</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#f8fafc', padding: 20 },
  title: { fontSize: 20, fontWeight: 'bold', marginBottom: 20, color: '#0f172a' },
  box: { width: 120, height: 120, backgroundColor: '#ffffff', borderRadius: 60, justifyContent: 'center', alignItems: 'center', borderWidth: 2, borderColor: '#cbd5e1', marginBottom: 30 },
  countText: { fontSize: 40, fontWeight: 'bold', color: '#0284c7' },
  buttonRow: { flexDirection: 'row', gap: 12 },
  button: { paddingVertical: 14, paddingHorizontal: 24, borderRadius: 8 },
  btnRed: { backgroundColor: '#ef4444' },
  btnGreen: { backgroundColor: '#10b981' },
  btnBlue:{backgroundColor:"blue"},
  buttonText: { color: '#ffffff', fontWeight: 'bold', fontSize: 16 },
});