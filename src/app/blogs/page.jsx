import Image from "next/image";
import Link from "next/link";

const blogConfig= [
    {
        "title": "React vs Next",
        "except": "Nextjs",
        "image": "/thumbnails/react-v-next.png",
        "url": '/demo-slug'
    },
    {
        "title": "Dream",
        "except": "Nextjs",
        "image": "/thumbnails/dreams.png",
        "url": '/demo-slug'
    },
    {
        "title": "Became backend",
        "except": "Nextjs",
        "image": "/thumbnails/become-backend-dev.png",
        "url": '/demo-slug'
    },

]

export default function Blogs(){
    return (
        <section className="grid gap-4 grid-cols-2 md:grid-cols-3 p-8">
            {
                blogConfig.map((blog,index)=>{
                    return <BlogCard title={blog.title} excerpt={blog.except} image={blog.image} url={blog.url}/>
                })
            }

        </section>
    )
}

const BlogCard= ({title,excerpt,image,url})=>{
    return <div className="bg-gray-600/20 rounded-lg  border flex flex-col p-1 gap-1 hover:scale-[1.03] transition-all delay-200 duration-300">
        <Image className="w-full rounded-md" src={image} width={300} height={170} alt={title}/>
        <h2 className="text-3xl font-bold text-gray-200">{title}</h2>
        <p className="text-sm text-gray-400">{excerpt}</p>
        <Link className="bg-zinc-600/70 py-2 px-3 rounded w-fit text-xs" href={`/blog/${url}`}>Read More</Link>
    </div>
}