import { Outlet } from "react-router-dom"

const Layout = () => {
    return (
        <>
            <header className='bg-slate-800'>
                <div className='mx-auto max-w-6xl py-10'>
                    <h1 className='text-4xl font-extrabold text-white'>
                        Administrador de usuarios
                    </h1>
                </div>
            </header>
        
            <main className='mt mx-auto max-w-6xl p-10 bg-slate-200 shadow'>
                <Outlet />
            </main>
        </>
    )
}

export default Layout