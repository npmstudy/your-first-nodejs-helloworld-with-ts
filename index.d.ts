/**
 * IPerson interface.
 * @public
 */
export interface IPerson {
  sayHi(name?: string): Promise<void>;
}
