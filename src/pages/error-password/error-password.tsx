import { Button } from 'antd';
import './error-password.css';

export const ErrorPassword: React.FC = () => (
    <>
        <div className='wind__back'>
            <div className='window__error-password'>
                <div className='icon__error-pass'></div>
                <div className='error__title'>Данные не сохранились</div>
                <div className='error__text'>Что-то пошло не так. Попробуйте еще раз</div>
                <Button type='primary'>Повторить</Button>
            </div>
        </div>
    </>
);
