import React from 'react';
import {Route} from "react-router-dom";

import HomeLayout from '../layouts/Homepage.layout';

function HomeLayoutHoc({component: Component,path, ...rest}) {
    return (
        <>
        
         <Route {...rest} path={path} component={
             (props) => (
             <HomeLayout >
                 <Component {...props}/>
             </HomeLayout>
             )
         } />
         
        </>
    )
}

export default HomeLayoutHoc
