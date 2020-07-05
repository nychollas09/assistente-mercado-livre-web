import { pipe } from 'rxjs';
import { map } from 'rxjs/operators';

export class ObservableUtil {
  public static instaceResultObject(innerType: new (value?) => any) {
    return pipe(
      map<any, any>((result) => {
        if (result instanceof Array) {
          return result.map((instance) => (instance = new innerType(instance)));
        }
        return new innerType(result);
      }),
    );
  }
}
