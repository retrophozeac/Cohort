interface BlogCardProps{
    authorName:string;
    title:string;
    content:string;
    publishedDate:string;
}

export const BlogCard = ({
    authorName,
    title,
    content,
    publishedDate
}: BlogCardProps)=>{
    return <div>
        <Avatar name={authorName}></Avatar>
        <div className="font-extralight">
            {authorName} . {publishedDate}
        </div>
        <div>
            {title}
        </div>
        <div>
            {content.slice(0,100)+"..."}
        </div>
        <div>
            {`${Math.ceil(content.length/100)}minutes`}
        </div>
        <div className="bg-slate-200 h-1 w-full">

        </div>
    </div>
}

function Avatar ({name}:{name:string}){
    return <div>
        <div className="relative inline-flex items-center justify-center w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
    <span className="font-medium  text-gray-600 dark:text-gray-300">{name[0]}</span>
</div>
    </div>
}