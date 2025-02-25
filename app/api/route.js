export function GET(request) {
  console.log(request);

  return Response.json({ message: "Hello, world!" });
  return new Response("Hello, world!");
}

// export function POST(request) {
//   console.log(request);

//   return Response.json({ message: "Hello, world!" });
//   return new Response("Hello, world!");
// }
