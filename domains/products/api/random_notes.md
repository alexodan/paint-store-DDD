// api.painting.com/v1/user
// api.painting.com/v1/product
// api.painting.com/v2/product
// api.painting.com/v1/checkout -> api.painting.com/product?version=v1

useGetData("...autocomplete the url with the different available endpoints...");
-> it is a wrapper of tanstack query:

- given it is a GET request, it knows about the query/search params
- it knows the return data type, of course
- accepts caching data strategies? maybe this not

usePostData()
-> same thing

- infers body data type
