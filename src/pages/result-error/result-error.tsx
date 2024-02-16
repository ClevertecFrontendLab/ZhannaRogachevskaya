import { Button } from 'antd';
import './result-error.css';

export const ResultError: React.FC = () => (
    <>
        <div className='wind__back'>
            <div className='window__error'>
                <div className='error__ex'></div>
                <div className='error__title'>Данные не сохранились</div>
                <div className='error__text_2'>
                    Такой e-mail уже записан в системе. Попробуйте зарегистрироваться по другому
                    e-mail.
                </div>
                <Button type='primary'>Повторить</Button>
            </div>
        </div>
    </>
);
