export interface UrlParams<T extends string> {
  // searchParams: {}
  params: {
    [key in T]: string
  }
}
