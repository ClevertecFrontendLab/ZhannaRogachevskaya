import './main-page.css';

import { Layout } from 'antd';

import React from 'react';
import { MyHeader } from '@pages/components/MyHeader/MyHeader';
import { MySider } from '../components/MySider/MySider';
import { MyContent } from '@pages/components/MyContent/MyContent';

export const MainPage: React.FC = () => (
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
