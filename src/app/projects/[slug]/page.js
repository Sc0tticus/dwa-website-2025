import projectPosts from "../../../data/projectPosts";
import PostHeader from "../../../components/projects/PostHeader";
import PostImage from "../../../components/projects/PostImage";
import PostContent from "../../../components/projects/PostContent";
import GetMoreInfo from "../../../components/home/GetMoreInfo";
import Accreditations from "../../../components/home/Accreditations";

export default function ProjectsPost({ params }) {
  const ongoingProjectPosts = projectPosts.find((p) => p.slug === params.slug);
  return (
    <>
      <div className={`px-8 lg:px-32 mt-10`}>
        <PostHeader title={ongoingProjectPosts.title} date={ongoingProjectPosts.date} />
        <PostImage src={ongoingProjectPosts.splatterImage} alt={ongoingProjectPosts.title} />
        <PostContent content={ongoingProjectPosts.content} />
      </div>
      <GetMoreInfo />
      <Accreditations />
    </>
  );
}
