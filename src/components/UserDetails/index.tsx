import { useNavigate, Form, ActionFunctionArgs, redirect } from 'react-router-dom'
// import { deleteProduct } from '../services/ProductService'
import { UserDetailsProps } from './types'
import { deleteUser } from './utils'



export async function action({params} : ActionFunctionArgs) {
    console.log(params);
    
    console.log('desde eliminar');
    if(params.userId !== undefined) {
        await deleteUser(+params.userId)
        return redirect('/')
    }
}

export default function UserDetails({user} : UserDetailsProps) {

    const navigate = useNavigate()

    return (
        <tr className="border-b ">
            <td className="p-3 text-lg text-gray-800">
                {user.id}
            </td>
            <td className="p-3 text-lg text-gray-800">
               { user.name}
            </td>
            <td className="p-3 text-lg text-gray-800">
               { user.email}
            </td>
            <td className="p-3 text-lg text-gray-800">
               { user.gender}
            </td>
            <td className="p-3 text-lg text-gray-800">
               { user.status}
            </td>
            <td className="p-3 text-lg text-gray-800 ">
                <div className="flex gap-2 items-center">
                <button
                        onClick={() => navigate(`/details/${user.id}`)}
                        className='bg-indigo-600 text-white rounded-lg w-full p-2 uppercase font-bold text-xs text-center'
                    >Ver</button>
                    <button
                        onClick={() => navigate(`/edit/${user.id}`)}
                        className='bg-indigo-600 text-white rounded-lg w-full p-2 uppercase font-bold text-xs text-center'
                    >Editar</button>

                    <Form
                        className='w-full'
                        method='DELETE'
                        action={`/users/${user.id}/delete`}
                        onSubmit={ (e) => {
                            if( !confirm('¿Eliminar?') ) {
                                e.preventDefault()
                            }
                        }}
                    >
                        <input
                            type='submit'
                            value='Eliminar'
                            className='bg-red-600 text-white rounded-lg w-full p-2 uppercase font-bold text-xs text-center'
                        />
                    </Form>
                </div>
            </td>
        </tr> 
    )
}
