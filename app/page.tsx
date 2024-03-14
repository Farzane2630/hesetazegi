import { Post } from "@/public/Types/types";
import ArticleShowCaseCard from "./_Components/templates/ArticleShowCase/ArticleShowCaseCard";
import ArticleShowCaseSlide from "./_Components/templates/ArticleShowCase/ArticleShowCaseSlide";
import PopPosts from "./_Components/templates/PopPosts/PopPosts";

export default async function Home() {
  
    const res = await fetch('http://localhost:4000/pop-posts')
    const data = await res.json()
    
  return (
    <div className="w-full flex flex-col justify-start ites-start gap-y-12">
      <div className="w-full h-[452px] flex flex-row justify-between items-center gap-x-4">
        <div className="w-full h-full flex flex-row justify-start items-center gap-x-4">
          <ArticleShowCaseCard background="/images/car-article.jpg" title="How to Drive a Car Safely" descriptions="Ah, the joy of the open road—it’s a good feeling. But if you’re new to driving, you may feel a little nervous about getting behind the wheel. Don’t worry. While it’s true that accidents can happen to anybody, there are things you can do to drive safely and do your best to avoid them." />
          <ArticleShowCaseCard background="images/girl-article.jpg" title="How to Make Dance Music" descriptions="Download torrents from verified or trusted uploaders. If you're a BitTorrent user looking for safety tips, use this method. Both of the big-name BitTorrent indexers (The Pirate Bay and KickAssTorrents) use symbols to highlight torrents uploaded by verified users. " />
        </div>
        <ArticleShowCaseSlide />
      </div>
      <div className="pb-[85px]">
        <PopPosts posts={data} />
      </div>
    </div>
  );
}
