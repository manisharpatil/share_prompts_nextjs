"use client";

import React, { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

import Profile from '@components/profile';
import { Router } from 'next/router';

const MyProfile = () => {

    const { data: session } = useSession();
    const router = useRouter();

    const [ posts, setPosts ] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
          const response = await fetch(`/api/users/${session?.user.id}/posts`);
          const data = await response.json();
    
          setPosts(data);
        };
    
        if(session?.user.id) fetchPosts();
      }, []);

    const handleEdit = (post) => {
        router.push(`/update-prompt?id=${post._id}`)
    };

    const handleDelete = async (post) => {

    };

    return (
        <Profile 
        name="My"
        desc="Welcome to your personalized profile page"
        data={posts}
        handleEdit={handleEdit}
        handleDelete={handleDelete}/>
    )
};

export default MyProfile;