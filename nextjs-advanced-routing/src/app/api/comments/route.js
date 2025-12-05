import { comments } from "@/data/comments";

export async function GET(request) {
  return Response.json(comments);
}

export async function POST(request) {
  const data = await request.json();
  const newComment = {
    id: String(comments.length + 1),
    name: data.name,
    content: data.content,
  };
  comments.push(newComment);
  return Response.json(newComment, {
    status: 201,
  });
}
