import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Alert } from 'react-native';
import * as Battery from 'expo-battery';

type BatteryMonitorProps = {
  
};

const BatteryMonitor: React.FC<BatteryMonitorProps> = () => {
  const [batteryLevel, setBatteryLevel] = useState<number | null>(null);

  const fetchBatteryLevel = async () => {
    try {
      const level = await Battery.getBatteryLevelAsync();
      setBatteryLevel(level);
      if (level * 100 < 20) {
        Alert.alert('เตือน', 'แบตเตอรี่เหลือน้อยกว่า 20%');
      }
    } catch (error) {
      console.error('Error fetching battery level:', error);
    }
  };

  useEffect(() => {
    fetchBatteryLevel();
    // อัปเดตระดับแบตเตอรี่ทุก 60 วินาที
    const interval = setInterval(fetchBatteryLevel, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Battery Monitor</Text>
      {batteryLevel !== null ? (
        <Text style={styles.levelText}>
          ระดับแบตเตอรี่: {(batteryLevel * 100).toFixed(0)}%
        </Text>
      ) : (
        <Text style={styles.levelText}>กำลังดึงข้อมูล...</Text>
      )}
      {batteryLevel !== null && batteryLevel * 100 < 20 && (
        <Text style={styles.warningText}>แบตเตอรี่เหลือน้อยกว่า 20% กรุณาชาร์จ!</Text>
      )}
    </View>
  );
};

export default BatteryMonitor;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#F5FCFF',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  levelText: {
    fontSize: 20,
  },
  warningText: {
    marginTop: 20,
    fontSize: 18,
    color: 'red',
    fontWeight: 'bold',
  },
});
