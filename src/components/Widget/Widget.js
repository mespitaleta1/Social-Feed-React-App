import React, {useState, useEffect} from 'react';
import { getSocialApi } from "../../services/socialApi"; 
import PostCard from "../PostCard/PostCard";
import { getLang }  from "../../utils/getLang"; 
import { sortedDates } from "../../utils/sortedDates"
import { FORMAT_OPTIONS } from '../../constants/widgetConstants';

const Widget = ({
    limit, 
    feedUrl,
    updateInterval
}) => {
    const [feed, setFeed] = useState([]);
    const [fetched, setFetched] = useState(false); 
  
    useEffect(() => {
        try {
            const getAndSetFeed = async () => {
                const feed = await getSocialApi(feedUrl);
                setFeed(feed);
                setFetched(true);
              };
          
              getAndSetFeed();
        } catch (error) {
            console.error("Error", error);
        }
    
    }, [feedUrl, fetched]);

    useEffect(() => {
            const interval = setInterval(() => {
            if(fetched === true) {
             setFetched(false);
            } 
          }, updateInterval);  /*every 3 minutes*/
          return () => {clearInterval(interval)};
    }, []);

    const locale = getLang(); 
    const postList =  feed.map((post)=> {
        const postedDate =  post?.created_at;
        const date = new Date(postedDate);
        const formattedDate = Intl.DateTimeFormat(locale, FORMAT_OPTIONS).format(date);
        return (
            <PostCard 
                key={post?.id_str}
                authorName={post?.user?.name}
                postCopy={post?.text}
                publishDate={formattedDate}
            />)
        })
        .sort(sortedDates)
        .slice(0,limit); 
       
    return (
      <div style={{backgroundColor:"white"}}>
        {feed.length > 0 ? (
            <div style={{backgroundColor:"#741AF6", margin: "60px 300px", padding:"20px 10px"}}>
                { postList }
            </div>
        ) : (
          <div>...Loading</div>
        )}
      </div>
    );
  };

  export default Widget; 