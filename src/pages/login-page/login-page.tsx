import { Button } from 'antd';
import './login-page.css';
import { Link } from 'react-router-dom';
import { Input } from 'antd';
import { Checkbox } from 'antd';
import type { CheckboxChangeEvent } from 'antd/es/checkbox';
import { GooglePlusOutlined } from '@ant-design/icons';
const onChange = (e: CheckboxChangeEvent) => {
    console.log(`checked = ${e.target.checked}`);
};
export const LoginPage: React.FC = () => (
    <>
        <div className='window__background'>
            <div className='form__login_enter'>
                <div className='icon__logo'></div>
                <div className='btns__form'>
                    <Button type='link'>
                        <Link to='/auth'>Вход</Link>
                    </Button>
                    <Button type='link'>
                        <Link to='/registr'>Регистрация</Link>
                    </Button>
                </div>
                <Input addonBefore='e-mail:' defaultValue='' />
                <Input.Password placeholder='Пароль' />
                <div
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        width: '100%',
                        justifyContent: 'space-between',
                        marginBottom: '24px',
                    }}
                >
                    <Checkbox onChange={onChange}>Запомнить меня</Checkbox>
                    <Button type='text' style={{ color: '#2F54EB' }}>
                        Забыли пароль
                    </Button>
                </div>
                <Button
                    type='primary'
                    style={{
                        marginBottom: '16px',
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
