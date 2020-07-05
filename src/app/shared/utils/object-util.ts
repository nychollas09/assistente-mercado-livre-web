export class ObjectUtil {
  public static instanceObject<T>(
    value: T | T[],
    innerType: new (value?: T) => T,
  ) {
    if (Array.isArray(value)) {
      const instanciedValues = value.map((register) => {
        return new innerType(register);
      });
      return instanciedValues;
    }
    return new innerType(value as T);
  }
}
