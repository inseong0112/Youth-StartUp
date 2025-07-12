import React, { useState } from 'react';
import { View, Text, Modal, Button, StyleSheet } from 'react-native';

const AlertModalPage: React.FC = () => {
    const [visible, setVisible] = useState(false);

    return (
        <View style={styles.container}>
            <Button title="Show Alert" onPress={() => setVisible(true)} />
            <Modal
                visible={visible}
                transparent
                animationType="fade"
                onRequestClose={() => setVisible(false)}
            >
                <View style={styles.modalBackground}>
                    <View style={styles.modalContainer}>
                        <Text style={styles.title}>Alert</Text>
                        <Text style={styles.message}>This is an alert message.</Text>
                        <Button title="Close" onPress={() => setVisible(false)} />
                    </View>
                </View>
            </Modal>
        </View>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
    modalBackground: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.3)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalContainer: {
        width: 300,
        padding: 24,
        backgroundColor: 'white',
        borderRadius: 12,
        alignItems: 'center',
        elevation: 5,
    },
    title: { fontSize: 20, fontWeight: 'bold', marginBottom: 12 },
    message: { fontSize: 16, marginBottom: 24, textAlign: 'center' },
});

export default AlertModalPage;