import httpClient from '../../api/httpClient';

// export const getUsers = async () => {
//   const response = await httpClient.get('/users');
//   return response.data;
// };

export const loginUser = async ({ email, password}) => {
    try {
        const requestBody = {
            email: email,
            password: password
        }

        const response = await httpClient.post('/auth/login', JSON.stringify(requestBody));
        return response.data;
    } catch (e) {
        console.log(`Login User Error: ===> ${JSON.stringify(e)}`);
    }
}

export const registryUser = async ({ username, email, password }) => {
    try {
        const requestBody = {
            username: username,
            email: email,
            password: password
        }

        const response = await httpClient.post('/auth/register', JSON.stringify(requestBody));

        return response.data;
    } catch (e) {
        console.log(`Register User Error: ===> ${JSON.stringify(e)}`);
    }
};

