import './main-page.css';
import React, { useEffect } from 'react';
import { Layout } from 'antd';
import { MyHeader } from '@pages/components/MyHeader/MyHeader';
import { MySider } from '../components/MySider/MySider';
import { MyContent } from '@pages/components/MyContent/MyContent';

export const MainPage: React.FC = () => {
    return (
        <>
            <Layout>
                <MySider />
                <Layout>
                    <MyHeader />
                    <MyContent />
                </Layout>
            </Layout>
        </>
    );
};
