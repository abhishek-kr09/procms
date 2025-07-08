import dateFormat from "@/utils/dateFormat";
import { Calendar } from "lucide-react";
import Image from "next/image";


export default function SingleBlog(){
    const tempTags= "SpaceX,Nasa,Exploration"

    const tempHtml=`
        <p>Demo content</p>
        <h2>Test h2</h2>
    `
    return (
        <section>
            <div className="flex flex-col gap-4 items-center">
                <Image className="rounded border w-[90%] md:w-[700px]" src="/thumbnails/dreams.png" width={500} height={250} alt="Page title"/>
                <div className="meta-of-a-blog space-y-2">
                    <div className="flex gap-2 items-center">
                    <Calendar className="text-gray-400 size-4"/>
                    Created On <p className="text-gary-400 text-xs" >{dateFormat(new Date())}</p>
                    </div>
                    <div className="text-xs flex items-center gap-2">
                        <p>Categories:</p>
                        <p className="badge bg-gray-600/30 border border-gray-700 px-2 py-1 rounded">Space Exploration</p>
                    </div>
                    <div className="text-xs flex items-center gap-2">
                        <p>Tags:</p>
                        {tempTags.split(",").map(tag=><p className="badge bg-gray-600/30 border border-gray-700 px-[4px] py-[2px] rounded">{tag}</p>)}
                    </div>
                </div>
                {/* <div className="content" dangerouslySetInnerHTML={{__html: tempHtml}}>
                    </div> */}
                    <p className="text-sm w-[90%] md:w-2/3 text-gray-300">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.
                        <br></br> Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. 
                        <br></br>Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales ligula in libero. Sed dignissim lacinia nunc. 
                        <br></br>Curabitur tortor. Pellentesque nibh. Aenean quam. In scelerisque sem at dolor. Maecenas mattis. Sed convallis tristique sem. Proin ut ligula vel nunc.
                    </p>
            </div>
        </section>
    )
}