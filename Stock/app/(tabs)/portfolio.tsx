import React, { useState, useEffect } from 'react';
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    SafeAreaView,
    RefreshControl,
    TouchableOpacity,
    Alert,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function Profile() {

    return (
        <SafeAreaView>
            <ScrollView
                refreshControl={
                    <RefreshControl refreshing={false} onRefresh={() => { }} />
                }
            >
                <View>
                    <Text>Welcome to the Home Screen</Text>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

