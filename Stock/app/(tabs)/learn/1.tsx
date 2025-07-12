import React from 'react';

const stockTerms = [
    {
        term: '주식',
        description: '기업이 자본을 조달하기 위해 발행하는 소유권의 일부를 나타내는 증서입니다.',
    },
    {
        term: '주주',
        description: '주식을 소유한 사람으로, 기업의 소유권 일부를 가집니다.',
    },
    {
        term: '배당',
        description: '기업이 이익의 일부를 주주에게 분배하는 것입니다.',
    },
    {
        term: '시가총액',
        description: '기업의 전체 주식 가치를 의미하며, 주가에 총 발행 주식 수를 곱해 계산합니다.',
    },
    {
        term: '매수',
        description: '주식을 사는 행위입니다.',
    },
    {
        term: '매도',
        description: '주식을 파는 행위입니다.',
    },
    {
        term: '호가',
        description: '주식을 사고팔기 위해 제시하는 가격입니다.',
    },
    {
        term: '상장',
        description: '기업이 증권거래소에 주식을 등록하여 거래할 수 있게 되는 것입니다.',
    },
];

export default function LearnStockTerms() {
    return (
        <main style={{ padding: '2rem', maxWidth: 600, margin: '0 auto' }}>
            <h1>주식 기초 용어 설명</h1>
            <ul>
                {stockTerms.map(({ term, description }) => (
                    <li key={term} style={{ marginBottom: '1.5rem' }}>
                        <strong>{term}</strong>
                        <div style={{ marginTop: '0.5rem', color: '#555' }}>{description}</div>
                    </li>
                ))}
            </ul>
        </main>
    );
}