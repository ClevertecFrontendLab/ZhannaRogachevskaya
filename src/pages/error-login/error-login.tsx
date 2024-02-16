import { Button } from 'antd';
import './error-login.css';

export const ErrorLogin: React.FC = () => (
    <>
        <div className='wind__back'>
            <div className='window__error'>
                <div className='icon__error'></div>
                <div className='error__title'>Вход не выполнен</div>
                <div className='error__text'>Что-то пошло не так. Попробуйте еще раз</div>
                <Button type='primary'>Повторить</Button>
            </div>
        </div>
    </>
);
