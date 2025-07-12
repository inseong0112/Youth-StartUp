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
import { theme } from '../../constants/theme';
import { router } from 'expo-router';

export default function HomeScreen() {


    return (
        <SafeAreaView style={styles.container}>
            <ScrollView
                style={styles.scrollView}
            >
                {/* 헤더 */}

                <View style={styles.header}>
                    <View>
                        <Text style={styles.greeting}>안녕하세요,</Text>
                        <Text style={styles.username}>Vestin 사용자님!</Text>
                    </View>
                    <TouchableOpacity onPress={() => router.push('/alert')}>
                        <Ionicons name="notifications-outline" size={24} color={theme.colors.text} />
                    </TouchableOpacity>
                </View>

                {/* 시장 상태 */}
                <View style={styles.marketStatus}>
                    <View style={[styles.statusIndicator, {

                    }]} />
                    <Text style={styles.marketStatusText}>

                    </Text>
                </View>

                {/* 모의 포트폴리오 요약 */}
                <View style={styles.portfolioSummary}>
                    <Text style={styles.sectionTitle}>모의 포트폴리오</Text>
                    <View style={styles.portfolioCard}>
                        <View style={styles.portfolioRow}>
                            <Text style={styles.portfolioLabel}>총 자산</Text>
                            <Text style={styles.portfolioValue}>
                                {/*formatCurrency(mockPortfolio.totalValue)*/}
                            </Text>
                        </View>
                        <View style={styles.portfolioRow}>
                            <Text style={styles.portfolioLabel}>수익률</Text>
                            <Text style={[
                                styles.portfolioValue,
                                {/* color: mockPortfolio.totalGain >= 0 ? theme.colors.gain : theme.colors.loss */ }
                            ]}>
                                {/*formatPercent(mockPortfolio.totalGainPercent)*/}
                            </Text>
                        </View>
                        <View style={styles.portfolioRow}>
                            <Text style={styles.portfolioLabel}>평가손익</Text>
                            <Text style={[
                                styles.portfolioValue,
                                {/* color: mockPortfolio.totalGain >= 0 ? theme.colors.gain : theme.colors.loss */ }
                            ]}>
                                {/*formatCurrency(mockPortfolio.totalGain)*/}
                            </Text>
                        </View>
                    </View>
                </View>

                {/* 인기 종목 */}
                <View style={styles.popularStocks}>
                    <View style={styles.sectionHeader}>
                        <Text style={styles.sectionTitle}>인기 종목</Text>
                        <TouchableOpacity /*onPress={async () => {
                            try {
                                await notificationService.sendTestNotification();
                                Alert.alert('알림', '테스트 알림이 발송되었습니다!');
                            } catch (error) {
                                console.error('테스트 알림 실패:', error);
                                Alert.alert('오류', '테스트 알림 발송에 실패했습니다.');
                            }
                        }}*/>
                            <Text style={styles.seeMore}>더보기</Text>
                        </TouchableOpacity>
                    </View>

                    {/*stocks.map((stock) => (
                        <StockCard
                            key={stock.symbol}
                            stock={stock}
                            onPress={handleStockPress}
                            showExchange
                        />
                    ))*/}
                </View>

                {/* 학습 미션 */}
                <View style={styles.missions}>
                    <Text style={styles.sectionTitle}>오늘의 미션</Text>
                    <TouchableOpacity style={styles.missionCard} onPress={() => router.push('/learn/1')}>
                        <View style={styles.missionIcon}>
                            <Ionicons name="school" size={24} color={theme.colors.primary} />
                        </View>
                        <View style={styles.missionContent}>
                            <Text style={styles.missionTitle}>주식 용어 학습하기</Text>
                            <Text style={styles.missionDescription}>
                                오늘의 주식 용어를 학습하고 10 XP를 획득하세요!
                            </Text>
                        </View>
                        <Ionicons name="chevron-forward" size={20} color={theme.colors.textLight} />
                    </TouchableOpacity>
                </View>
            </ScrollView>

            {/* 주식 상세 모달 */}
            {/*<StockDetailModal
                visible={modalVisible}
                stock={selectedStock}
                onClose={handleCloseModal}
                onTrade={handleTrade}
            />*/}
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.colors.background,
    },

    scrollView: {
        flex: 1,
    },

    loadingContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: theme.spacing.lg,
        paddingBottom: theme.spacing.md,
    },

    greeting: {
        fontSize: theme.fonts.sizes.md,
        color: theme.colors.textSecondary,
    },

    username: {
        fontSize: theme.fonts.sizes.xl,
        fontWeight: 'bold',
        color: theme.colors.text,
    },

    marketStatus: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: theme.spacing.lg,
        paddingVertical: theme.spacing.sm,
    },

    statusIndicator: {
        width: 8,
        height: 8,
        borderRadius: 4,
        marginRight: theme.spacing.sm,
    },

    marketStatusText: {
        fontSize: theme.fonts.sizes.sm,
        color: theme.colors.textSecondary,
    },

    portfolioSummary: {
        padding: theme.spacing.lg,
    },

    sectionTitle: {
        fontSize: theme.fonts.sizes.lg,
        fontWeight: 'bold',
        color: theme.colors.text,
        marginBottom: theme.spacing.md,
    },

    portfolioCard: {
        backgroundColor: theme.colors.surface,
        borderRadius: theme.borderRadius.lg,
        padding: theme.spacing.md,
        ...theme.shadows.sm,
    },

    portfolioRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: theme.spacing.sm,
    },

    portfolioLabel: {
        fontSize: theme.fonts.sizes.md,
        color: theme.colors.textSecondary,
    },

    portfolioValue: {
        fontSize: theme.fonts.sizes.md,
        fontWeight: '600',
        color: theme.colors.text,
    },

    popularStocks: {
        padding: theme.spacing.lg,
    },

    sectionHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: theme.spacing.md,
    },

    seeMore: {
        fontSize: theme.fonts.sizes.sm,
        color: theme.colors.primary,
        fontWeight: '500',
    },

    missions: {
        padding: theme.spacing.lg,
    },

    missionCard: {
        backgroundColor: theme.colors.surface,
        borderRadius: theme.borderRadius.lg,
        padding: theme.spacing.md,
        flexDirection: 'row',
        alignItems: 'center',
        ...theme.shadows.sm,
    },

    missionIcon: {
        width: 48,
        height: 48,
        borderRadius: 24,
        backgroundColor: theme.colors.surfaceSecondary,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: theme.spacing.md,
    },

    missionContent: {
        flex: 1,
    },

    missionTitle: {
        fontSize: theme.fonts.sizes.md,
        fontWeight: '600',
        color: theme.colors.text,
        marginBottom: 2,
    },

    missionDescription: {
        fontSize: theme.fonts.sizes.sm,
        color: theme.colors.textSecondary,
    },
});