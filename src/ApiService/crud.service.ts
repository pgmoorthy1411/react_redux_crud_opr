class ApiService {

    getData() {
        return fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
    }

    postData = async (postData: any) => {
        try {

            const response = await fetch('https://jsonplaceholder.typicode.com/users', {
                method: 'post',
                headers: {
                    'Accept': 'application/json, text/plain, */*',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(postData)
            });
            const data = await response.json();
            return data;
        } catch (error) {
            return error;

        }
    }

    editData = async (postData: any) => {
        return fetch(`https://jsonplaceholder.typicode.com/users/${postData}`)
            .then(response => response.json())
    }

    updateData = async (postData: any) => {
        try {

            const response = await fetch(`https://jsonplaceholder.typicode.com/users`, {
                method: 'put',
                headers: {
                    'Accept': 'application/json, text/plain, */*',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(postData)
            });
            const data = await response.json();
            return data;
        } catch (error) {
            return error;

        }
    }
    deleteData = async (postData: any) => {
        try {

            const response = await fetch(`https://jsonplaceholder.typicode.com/users`, {
                method: 'delete',
                headers: {
                    'Accept': 'application/json, text/plain, */*',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(postData)
            });
            const data = await response.json();
            return data;
        } catch (error) {
            return error;

        }
    }

}

export default new ApiService();