import { Button } from 'antd';
import './result-success.css';

export const ResultSuccess: React.FC = () => (
    <>
        <div className='wind__back'>
            <div className='window__error'>
                <div className='seccess__icon'></div>
                <div className='error__title'>Регистрация успешна</div>
                <div className='error__text_2'>
                    Регистрация прошла успешно. Зайдите <br />в приложение, используя свои e-mail и
                    пароль.
                </div>
                <Button type='primary'>Войти</Button>
            </div>
        </div>
    </>
);
