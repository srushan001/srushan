import useFetch from "../../hooks/useFetch";
import "./featured.css";

const Featured = () => {
  const { data, loading, error } = useFetch(
    "/hotels/countByCity?cities=mumbai,delhi,goa"
  );

  return (
    <div className="featured">
      {loading ? (
        "Loading please wait"
      ) : (
        <>
          <div className="featuredItem">
            <img
              src="https://static.independent.co.uk/s3fs-public/thumbnails/image/2019/12/04/15/mumbai.jpg"
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>mumbai</h1>
              <h2>{data[0]} properties</h2>
            </div>
          </div>

          <div className="featuredItem">
            <img
              src="https://cdn.britannica.com/37/189837-050-F0AF383E/New-Delhi-India-War-Memorial-arch-Sir.jpg"
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>delhi</h1>
              <h2>{data[1]} properties</h2>
            </div>
          </div>
          <div className="featuredItem">
            <img
              src="https://tds.indianeagle.com/wp-content/uploads/2023/02/Travel-guide-to-GOA.png"
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>goa</h1>
              <h2>{data[2]} properties</h2>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Featured;
