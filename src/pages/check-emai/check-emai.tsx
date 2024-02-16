import { Button } from 'antd';
import './check-emai.css';

export const CheckEmail: React.FC = () => (
    <>
        <div className='wind__back'>
            <div className='window__check'>
                <div className='img__check'></div>
                <div className='error__title'>Что-то пошло не так</div>
                <div className='error__text_2'>
                    Произошла ошибка, попробуйте отправить форму ещё раз.
                </div>
                <Button className='btn__small' type='primary'>
                    Назад
                </Button>
            </div>
        </div>
    </>
);
