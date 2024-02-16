import { Input } from 'antd';
import './confirm-email.css';

export const ConfirmEmail: React.FC = () => (
    <>
        <div className='wind__back'>
            <div className='window__confirm'>
                <div className='img__confirm'></div>
                <div className='confirm__title'>
                    Введите код <br />
                    для восстановления аккаунта
                </div>
                <div className='confirm__text'>
                    Мы отправили вам на e-mail victorbyden@gmail.com шестизначный код. Введите его в
                    поле ниже.
                </div>
                <div className='group__input'>
                    <Input className='small' />
                    <Input className='small' />
                    <Input className='small' />
                    <Input className='small' />
                    <Input className='small' />
                    <Input className='small' />
                </div>
                <div className='confirm__text'>Не пришло письмо? Проверьте папку Спам.</div>
            </div>
        </div>
    </>
);
