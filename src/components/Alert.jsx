import { useContext } from 'react';
import { ShopContext } from '../context';

import {useEffect} from 'react';

function Alert(props) {

    const {alertName = '', closeAlert = Function.prototype} = useContext(ShopContext);

    useEffect(() => {
        const timerId = setTimeout(closeAlert, 3000); 

        return () => {
            clearTimeout(timerId);
        }
    }, [alertName]);
 
    return (
     <div className="toast-container">
         <div className="toast">{alertName} добавлен в корзину</div>
     </div>
    )
}
export {Alert};
