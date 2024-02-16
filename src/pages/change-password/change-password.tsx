import { Button } from 'antd';
import './change-password.css';
import { Link } from 'react-router-dom';
import { Input } from 'antd';
import { Checkbox } from 'antd';
import type { CheckboxChangeEvent } from 'antd/es/checkbox';
import { GooglePlusOutlined } from '@ant-design/icons';
const onChange = (e: CheckboxChangeEvent) => {
    console.log(`checked = ${e.target.checked}`);
};
export const ChangePassword: React.FC = () => (
    <>
        <div className='window__background'>
            <div className='window__change'>
                <div className='change__title'>Восстановление аккаунта</div>
                <Input.Password placeholder='Пароль' className='input__change2' />
                <div className='change__text'>
                    Пароль не менее 8 символов, с заглавной буквой и цифрой
                </div>
                <Input.Password placeholder='Повторите пароль' className='input__change2' />

                <Button
                    type='primary'
                    style={{
                        marginBottom: '16px',
                        width: '100%',
                        height: '40px',
                        borderRadius: '2px',
                        marginTop: '62px',
                    }}
                >
                    Сохранить
                </Button>
            </div>
        </div>
    </>
);
