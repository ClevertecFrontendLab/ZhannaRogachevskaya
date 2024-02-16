import { Button } from 'antd';
import './success-password.css';

export const SuccessPassword: React.FC = () => (
    <>
        <div className='wind__back'>
            <div className='window__success'>
                <div className='success__icon'></div>
                <div className='success__title'>Пароль успешно изменен</div>
                <div className='error__text_2'>
                    Теперь можно войти в аккаунт, используя
                    <br /> свой логин и новый пароль
                </div>
                <Button type='primary'>Войти</Button>
            </div>
        </div>
    </>
);
