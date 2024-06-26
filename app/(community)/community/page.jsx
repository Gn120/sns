import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { connectDB } from "@/util/database";
import { getServerSession } from "next-auth";
import PostList from "../components/PostList";

export const dynamic = "force-dynamic";

export default async function Community() {
  const db = (await connectDB).db("forum");
  let result = await db
    .collection("community_post")
    .find()
    .sort({ post_time: -1 })
    .toArray();

  result = result.map((a) => {
    a._id = a._id.toString();
    return a;
  });

  let session = await getServerSession(authOptions);

  return (
    <div className="list-background">
      <PostList result={result} session={session} />
    </div>
  );
}
