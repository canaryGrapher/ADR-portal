import { renderToString } from "react-dom/server";
import { RemixServer } from "remix";
import type { EntryContext } from "remix";
// import mongoose from "mongoose";

// mongoose
//   .connect("mongodb://localhost:27017/ADRPortal")
//   .then(() => console.log({ mongoDb: "Connected" }))
//   .catch((err) => {
//     console.log({ mongoErr: err });
//   });

export default function handleRequest(
  request: Request,
  responseStatusCode: number,
  responseHeaders: Headers,
  remixContext: EntryContext
) {
  const markup = renderToString(
    <RemixServer context={remixContext} url={request.url} />
  );

  responseHeaders.set("Content-Type", "text/html");

  return new Response("<!DOCTYPE html>" + markup, {
    status: responseStatusCode,
    headers: responseHeaders,
  });
}
