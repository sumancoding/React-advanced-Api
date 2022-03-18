import React from 'react' //we use useSearchParams is used during query param
import {useParams, useSearchParams} from 'react-router-dom'  //we use useParams to access the category from App.js;


const Post = () => {
  let {category} = useParams();
  let[searchParams, setSearchParams]= useSearchParams();
console.log(searchParams);
console.log(searchParams.get('price'));
console.log(searchParams.get('sort')); //we can sort based on query parameter on large scale
  return (
    <div>
    <h1>Post Page- {category}</h1>
    </div>
  )
}

export default Post
