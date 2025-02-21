import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

const SocialScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header */}
        <Text style={styles.header}>Home</Text>

        {/* Gaming Store Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Gaming store</Text>
          <Text style={styles.sectionSubtitle}>Upgrade your gaming gear</Text>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Shop now</Text>
          </TouchableOpacity>
        </View>

        {/* Continue Shopping */}
        <Text style={styles.categoryTitle}>Keep shopping for Air fryers</Text>
        <Text style={styles.categoryTitle}>
          More to explore in Food containers
        </Text>

        {/* Repeat Gaming Section */}
        <View style={[styles.section, styles.sectionAlt]}>
          <Text style={styles.sectionTitle}>Upgrade your gaming gear</Text>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Continue shopping deals</Text>
          </TouchableOpacity>
        </View>

        {/* Deal Cards */}
        <View style={styles.dealsContainer}>
          <View style={[styles.dealCard, styles.redCard]}>
            <Text style={styles.dealPercentage}>40% off</Text>
            <Text style={styles.dealText}>Limited time deal</Text>
          </View>

          <View style={[styles.dealCard, styles.blueCard]}>
            <Text style={styles.dealPercentage}>20% off</Text>
            <Text style={styles.dealText}>Limited time deal</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 16,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 20,
  },
  section: {
    backgroundColor: '#f5f5f5',
    borderRadius: 12,
    padding: 20,
    marginVertical: 10,
  },
  sectionAlt: {
    backgroundColor: '#e0f0ff',
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 8,
  },
  sectionSubtitle: {
    fontSize: 16,
    color: '#666',
    marginBottom: 15,
  },
  button: {
    backgroundColor: '#007bff',
    borderRadius: 8,
    paddingVertical: 12,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: '500',
  },
  categoryTitle: {
    fontSize: 18,
    fontWeight: '500',
    marginVertical: 15,
  },
  dealsContainer: {
    marginVertical: 20,
  },
  dealCard: {
    borderRadius: 12,
    padding: 20,
    marginVertical: 10,
  },
  redCard: {
    backgroundColor: '#ffe6e6',
    borderColor: '#ff4d4d',
    borderWidth: 1,
  },
  blueCard: {
    backgroundColor: '#e6f3ff',
    borderColor: '#4da6ff',
    borderWidth: 1,
  },
  dealPercentage: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  dealText: {
    fontSize: 16,
    color: '#666',
    marginTop: 8,
  },
});

export default SocialScreen;
