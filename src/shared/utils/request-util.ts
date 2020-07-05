export class RequestUtil {
  public static objectToRequestParam<T extends Object>(object: T): string {
    const queryParams = [];
    for (const property of Reflect.ownKeys(object)) {
      if (object.hasOwnProperty(property)) {
        queryParams.push(
          `${encodeURIComponent(property as string)}=${encodeURIComponent(
            object[property],
          )}`,
        );
      }
    }
    return queryParams.join('&');
  }
}
