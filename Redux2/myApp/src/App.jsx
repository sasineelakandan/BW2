import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setUser } from './redux/userslice';

function App() {
    const dispatch = useDispatch();
    const user = useSelector((state) => state.user);

    useEffect(() => {
     console.log('user updated',user)
    }, [user]);

    const data = {
        username: 'sasi',
        phone: '8610431563',
        email: 'devasasi@gmail.com',
    };

    console.log(user)
    

    return (
        <>
            <button onClick={() => dispatch(setUser(data))}>Save Data</button>

            <p>Username: {user?.username}</p>
            <p>Phone: {user?.phone}</p>
            <p>Email: {user?.email}</p>
        </>
    );
}

export default App;
