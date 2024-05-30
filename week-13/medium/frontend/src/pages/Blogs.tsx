import { Appbar } from "../components/Appbar"
import { BlogCard } from "../components/BlogCard"
import { useBlogs } from "../hooks"

export const Blogs =()=>{
    const blogs =useBlogs
    return <div>
        <Appbar></Appbar>
    <div className="flex justify-center">
    <div className="max-w-xl">
        <BlogCard authorName="Gaurav"
    title="How and ugly simgle page website makes $5000 a month without affiliate marketing"
    content="How and ugly simgle page website makes $5000 a month without affiliate marketing"
    publishedDate="25th Jan 2024" ></BlogCard>
    <BlogCard authorName="Gaurav"
    title="How and ugly simgle page website makes $5000 a month without affiliate marketing"
    content="How and ugly simgle page website makes $5000 a month without affiliate marketing"
    publishedDate="25th Jan 2024" ></BlogCard>
    <BlogCard authorName="Gaurav"
    title="How and ugly simgle page website makes $5000 a month without affiliate marketing"
    content="How and ugly simgle page website makes $5000 a month without affiliate marketing"
    publishedDate="25th Jan 2024" ></BlogCard>
    </div>
    </div>
    </div>
}