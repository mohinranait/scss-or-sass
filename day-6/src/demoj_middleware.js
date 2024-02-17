import { NextResponse } from "next/server"


export const middleware = (request) => {
    const path = request.nextUrl.pathname;

    const isPublic = path == '/login';
    
    // const user = {};
    const user = {email:'mohin@gmail.com'}

    if(user?.email && isPublic ){
        return NextResponse.redirect(new URL('/', request.nextUrl))
    }
    
    if( !user?.email && !isPublic ){
        return NextResponse.redirect(new URL('/login', request.nextUrl))
    }
  
}


export const config = {
    matcher : [
        '/login',
        '/product/create',
        '/cart',
    ]
}