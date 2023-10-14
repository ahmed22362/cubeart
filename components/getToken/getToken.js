import {cookies} from 'next/headers';

const getToken = () => {
    const token = cookies()
    console.log(token.get('token'))
}
export default getToken;