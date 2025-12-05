import { comments } from "@/data/comments";

/**
 *
 * @param {*} _request
 * @param {{ params: { id: string } }} param1
 * @returns {Response}
 */
export async function GET(_request, { params }) {
  const { id } = await params;
  const comment = comments.find((comment) => comment.id === id);

  if (!comment) {
    return Response.json({ message: "Comment not found" }, { status: 404 });
  }
  return Response.json(comment);
}

/**
 *
 * @param {Request} request
 * @param {{ params: { id: string } }} param1
 * @returns {Response}
 */
export async function PATCH(request, { params }) {
  const { id } = await params;
  const comment = comments.find((comment) => comment.id === id);

  if (!comment) {
    return Response.json({ message: "Comment not found" }, { status: 404 });
  }
  const data = await request.json();
  comment.name = data.name || comment.name;
  comment.content = data.content || comment.content;
  return Response.json(comment);
}

/**
 *
 * @param {*} _request
 * @param {{ params: { id: string } }} param1
 * @returns {Response}
 */
export async function DELETE(_request, { params }) {
  const { id } = await params;
  const comment = comments.find((comment) => comment.id === id);

  if (!comment) {
    return Response.json({ message: "Comment not found" }, { status: 404 });
  }
  comments.splice(comments.indexOf(comment), 1);
  return Response.json({ message: "Comment deleted" }, { status: 200 });
}
