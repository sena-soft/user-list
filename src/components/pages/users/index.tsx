import { useEffect } from "react"
import { getUsers } from "./utils";
import { useSelector } from "react-redux";
import { setData, setLoading } from './../../../usersSlice';
import { AppDispatch, RootState } from "../../../store";
import { useDispatch } from "react-redux";

export const UsersPage = () => {
    const loading = useSelector((state: RootState) => state.users.loading);
    const data = useSelector((state: RootState) => state.users.data);
  const dispatch: AppDispatch = useDispatch();
    useEffect(() => {
        
        const fetchData = async () => {
            dispatch(setLoading(true));
            try {
              const response = await getUsers();
              dispatch(setData(response))
                console.log(response);
                dispatch(setLoading(false));
            
            } catch (err) {
              console.log(err);
              dispatch(setLoading(false));
            }
          };
      
          fetchData();
    }, [])
    
  return (
    <>
        {loading ? <div>Hols</div> : <div>bye</div>}
        {data.map(user => (
            <div 
              key={user.id}
            >
                {user.name}
            </div>
          ))}
    </>

  )
}
