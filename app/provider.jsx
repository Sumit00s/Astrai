'use client'

import { useUser } from "@clerk/nextjs"
import { supabase } from "@/services/supabase";
import { useEffect, useState } from "react";
import { UserDetailContext } from "@/context/userDetailContext";

export default function Provider({children}){

    const {user} = useUser();
    const [UserDetail,setUserDetail] = useState();

    useEffect(()=>{
        user && CreateNewUser();
    },[user])

    const CreateNewUser = async() =>{
        // check if user already exists
        let { data: Users, error } = await supabase
        .from('Users')
        .select('*')
        .eq('email',user?.primaryEmailAddress.emailAddress);

        // If user Exists
        if(Users){
            setUserDetail(Users[0]);
            console.log('User get from DB',Users);
            return;
        }

        // If there is no user then insert it into DB.
        if(Users.length == 0){
            const { data, error } = await supabase
            .from('Users')
            .insert([
                { 
                    name:user?.fullName,
                    email:user?.primaryEmailAddress.emailAddress
                },
            ])
            .select();

            setUserDetail(data[0]);
            console.log("User Created IN DB",data);
            return;
        }
          
    }


    return(
        <UserDetailContext.Provider value={{UserDetail,setUserDetail}}>
            <div className="w-full">{children}</div>
        </UserDetailContext.Provider>
    )
}