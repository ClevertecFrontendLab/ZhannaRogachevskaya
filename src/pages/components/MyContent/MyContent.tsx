import { MyCards } from '@pages/components/MyCards/MyCards';
import { Button, Layout } from 'antd';
import { CardDownload } from '@pages/components/CardDownload/CardDownload';
import './MyContent.css';

export const MyContent: React.FC = () => {
    const { Content } = Layout;
    return (
        <>
            <Content className='content'>
                <div className='wrapper'>
                    <MyCards />
                    <footer>
                        <Button type='link' className='btn__reviews fs16_2b'>
                            Смотреть отзывы
                        </Button>
                        <CardDownload />
                    </footer>
                </div>
            </Content>
        </>
    );
};
