import React from 'react';

interface generateSlugProps{
    title:string
}
export function generateSlug(title:string){
    console.log(title)

    const slug = title.toLowerCase()  //Convert title to lower case
        .replace(/\s+/g, "-") //Replace spaces with dashes
        .replace(/[^\w\-]+/g,"")  // Remove non-word Characters expect dashes
        .replace(/\-\-+/g, "-") //Remove multiple consecutive dashes with a single dash
        .replace(/^\-+/,"")//Remove dashes from the begining
        .replace(/\-+$/,"")  //Remove dashes from the end

    return slug
}
