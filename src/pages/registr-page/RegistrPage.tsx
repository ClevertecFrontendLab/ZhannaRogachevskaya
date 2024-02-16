import { Button } from 'antd';
import './RegistrPage.css';
import { Link, Outlet } from 'react-router-dom';
import { Cascader, Input, Select, Space } from 'antd';
import { Checkbox } from 'antd';
import type { CheckboxChangeEvent } from 'antd/es/checkbox';
import { GooglePlusOutlined } from '@ant-design/icons';
const onChange = (e: CheckboxChangeEvent) => {
    console.log(`checked = ${e.target.checked}`);
};
export const RegistrPage: React.FC = () => (
    <>
        <div className='window__background'>
            <div className='form__login_enter'>
                <div className='icon__logo'></div>
                <div className='btns__form'>
                    <Button type='link'>
                        <Link to='/enter'>Вход</Link>
                    </Button>
                    <Button type='link'>
                        <Link to='/registr'>Регистрация</Link>
                    </Button>
                </div>
                <Input addonBefore='e-mail:' defaultValue='' />
                <Input.Password placeholder='Пароль' />
                <div className='parol__text'>
                    Пароль не менее 8 символов, с заглавной буквой и цифрой
                </div>
                <Input.Password placeholder='Повторите пароль' />

                <Button
                    type='primary'
                    style={{
                        marginBottom: '16px',
                        marginTop: '62px',
                        width: '100%',
                        height: '40px',
                        borderRadius: '2px',
                    }}
                >
                    Войти
                </Button>
                <Button icon={<GooglePlusOutlined />}>Войти через Google</Button>
            </div>
        </div>
    </>
);
