import { comments } from "@/data/comments";

export async function GET(request) {
  const { host, pathname, searchParams } = request.nextUrl;
  // console.log({ host, pathname, searchParams });

  // Parse and validate query parameters
  const q = searchParams.get("q") ?? "";
  const limit = Math.max(1, Number(searchParams.get("limit")) || 10);
  const page = Math.max(1, Number(searchParams.get("page")) || 1);

  // Calculate slice indices
  const start = (page - 1) * limit;
  const end = start + limit;

  // Filter comments by search term
  const filteredComments = comments.filter((comment) =>
    comment.content.includes(q)
  );

  // Slice for pagination
  const limitedComments = filteredComments.slice(start, end);

  // Total count after filtering
  const total = filteredComments.length;

  return Response.json({
    data: limitedComments,
    meta: {
      total,
      limit,
      page,
    },
  });
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
