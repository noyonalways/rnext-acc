# Next.js Advanced Routing

## Lessons covered:

- Project Organization & File colocation
- Parallel Routes
- Unmatched & Intercepting Routes
- Combining Parallel & Intercepting Routes
- Intro to Route Handlers - GET, POST, PATCH, DELETE
- More with Route Handlers - Headers, cookies, caching & redirecting
- Middlewares
- Not found page
- Internationalization

## Route Handlers

1. Create custom request handlers for our routes using Route Handlers.
2. Page routes respond to HTML content while Route Handlers allows us to create RESTFul endpoints
3. No overhead to create and configure a separate server.
4. Great for making external API requests.
5. Runs server-side, ensuring sensitive information remains secure.
6. Equivalent of API routes in Page router.

## Headers in Route Handlers

### Response Headers

Sent back from the server to the client. They provide essential information about the server and the data being sent in the response.

`Content-Type:` header which indicates the media type of the response. It tells the client what the data type of the returned content is content-type `text/html` for HTML Document, `application/json` for JSON data, `image/png` for PNG images, etc.

## Cookies in Route Handlers

Cookies are small pieces of data that stored a server sends to a use's web browser.

The browser may store the cookie and send it back to the same server with later requests.

### Cookies are mainly used for 3 purpose:

1. Session management like logins & shopping carts.
2. Personalizations like user preferences and themes.
3. Tracking like recording and analyzing user behavior.

## Caching in Route Handlers

Route Handlers are cached by default when using the `GET` method with the Request object in Next.js

### How to opt of caching

1. Dynamic mode in Segment Config option.
2. Using the Request object with the `GET` method.
3. Employing dynamic functions like headers() and cookies()
4. Using any HTTP mether other than `GET`
