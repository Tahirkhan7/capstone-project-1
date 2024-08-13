import { useEffect } from 'react';
import { fetchNews } from '../api/fetchNews';

export default function NewsWidget() {
    useEffect(()=>{
        fetchNews().then((data)=>{
            console.log(data);
        });
    },[]);
  return (
    <div>
      
    </div>
  )
}
