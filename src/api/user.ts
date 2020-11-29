import { defHttp } from '@/utils/http/axios'
import { LoginParams } from './model/userModel'

enum Api {
    Login = '/login'
}

export function LoginApi(params: LoginParams) {
    return defHttp.request({
        url: Api.Login,
        method: 'POST',
        data: params
    })
}