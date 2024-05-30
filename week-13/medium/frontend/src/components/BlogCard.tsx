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
    return <div className="p-4 border-b border-slate-200 pb-4">
        <div className="flex">
            <Avatar name={authorName}></Avatar>
            <div className="font-light pl-2 text-sm flex justify-content flex-col">
                {authorName}
            </div>
            <div className="font-thin pl-2 text-slate-500 text-sm flex justify-content flex-col">
                {publishedDate}
            </div>
        </div>
        <div className="text-xl font-semibold">
            {title}
        </div>
        <div className="text-md font-thin">
            {content.slice(0,100)+"..."}
        </div>
        <div className="text-slate-500 text-sm font-thin pt-4">
            {`${Math.ceil(content.length/100)}minutes(s) read`}
        </div>
        {/* <div className="bg-slate-200 h-1 w-full">

        </div> */}
    </div>
}

export function Avatar ({name}:{name:string}){
    return <div>
        <div className="relative inline-flex items-center justify-center w-6 h-6 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
    <span className="font-medium  text-gray-600 dark:text-gray-300">{name[0]}</span>
</div>
    </div>
}