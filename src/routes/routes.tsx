import { Navigate, Route, Routes } from 'react-router-dom';
import { MainPage } from '@pages/main-page';
import { LoginPage } from '@pages/login-page/login-page';
import { RegistrPage } from '@pages/registr-page/RegistrPage';
import { ErrorLogin } from '@pages/error-login/error-login';
import { ErrorUser } from '@pages/error-user/error-user';
import { ResultError } from '@pages/result-error/result-error';
import { ResultSuccess } from '@pages/result-success/result-success';
import { CheckEmail } from '@pages/check-emai/check-emai';
import { ConfirmEmail } from '@pages/confirm-email/confirm-email';
import { ChangePassword } from '@pages/change-password/change-password';
import { SuccessPassword } from '@pages/success-password/success-password';
import { ErrorPassword } from '@pages/error-password/error-password';

export const routes = (
    <Routes>
        <Route path='/main' element={<MainPage />} />
        <Route path='/auth' element={<LoginPage />}></Route>
        <Route path='/registr' element={<RegistrPage />}></Route>
        <Route path='/result/error-login' element={<ErrorLogin />}></Route>
        <Route path='/result/error-user-exist' element={<ErrorUser />}></Route>
        <Route path='/result/error' element={<ResultError />}></Route>
        <Route path='/result/success' element={<ResultSuccess />}></Route>
        <Route path='/result/error-check-email' element={<CheckEmail />}></Route>
        <Route path='/auth/confirm-email' element={<ConfirmEmail />}></Route>
        <Route path='/auth/change-password' element={<ChangePassword />}></Route>

        <Route path='/result/success-change-password' element={<SuccessPassword />}></Route>
        <Route path='/result/error-change-password' element={<ErrorPassword />}></Route>

        <Route path='*' element={<Navigate to={'/auth'} />} />
    </Routes>
);
