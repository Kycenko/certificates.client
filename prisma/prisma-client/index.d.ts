
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Student
 * 
 */
export type Student = $Result.DefaultSelection<Prisma.$StudentPayload>
/**
 * Model StudentHistory
 * 
 */
export type StudentHistory = $Result.DefaultSelection<Prisma.$StudentHistoryPayload>
/**
 * Model HealthGroup
 * 
 */
export type HealthGroup = $Result.DefaultSelection<Prisma.$HealthGroupPayload>
/**
 * Model PhysicalEducation
 * 
 */
export type PhysicalEducation = $Result.DefaultSelection<Prisma.$PhysicalEducationPayload>
/**
 * Model MedicalCertificate
 * 
 */
export type MedicalCertificate = $Result.DefaultSelection<Prisma.$MedicalCertificatePayload>
/**
 * Model MedicalCertificateHistory
 * 
 */
export type MedicalCertificateHistory = $Result.DefaultSelection<Prisma.$MedicalCertificateHistoryPayload>
/**
 * Model Group
 * 
 */
export type Group = $Result.DefaultSelection<Prisma.$GroupPayload>
/**
 * Model Department
 * 
 */
export type Department = $Result.DefaultSelection<Prisma.$DepartmentPayload>
/**
 * Model Course
 * 
 */
export type Course = $Result.DefaultSelection<Prisma.$CoursePayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs>;

  /**
   * `prisma.student`: Exposes CRUD operations for the **Student** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Students
    * const students = await prisma.student.findMany()
    * ```
    */
  get student(): Prisma.StudentDelegate<ExtArgs>;

  /**
   * `prisma.studentHistory`: Exposes CRUD operations for the **StudentHistory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more StudentHistories
    * const studentHistories = await prisma.studentHistory.findMany()
    * ```
    */
  get studentHistory(): Prisma.StudentHistoryDelegate<ExtArgs>;

  /**
   * `prisma.healthGroup`: Exposes CRUD operations for the **HealthGroup** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more HealthGroups
    * const healthGroups = await prisma.healthGroup.findMany()
    * ```
    */
  get healthGroup(): Prisma.HealthGroupDelegate<ExtArgs>;

  /**
   * `prisma.physicalEducation`: Exposes CRUD operations for the **PhysicalEducation** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PhysicalEducations
    * const physicalEducations = await prisma.physicalEducation.findMany()
    * ```
    */
  get physicalEducation(): Prisma.PhysicalEducationDelegate<ExtArgs>;

  /**
   * `prisma.medicalCertificate`: Exposes CRUD operations for the **MedicalCertificate** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MedicalCertificates
    * const medicalCertificates = await prisma.medicalCertificate.findMany()
    * ```
    */
  get medicalCertificate(): Prisma.MedicalCertificateDelegate<ExtArgs>;

  /**
   * `prisma.medicalCertificateHistory`: Exposes CRUD operations for the **MedicalCertificateHistory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MedicalCertificateHistories
    * const medicalCertificateHistories = await prisma.medicalCertificateHistory.findMany()
    * ```
    */
  get medicalCertificateHistory(): Prisma.MedicalCertificateHistoryDelegate<ExtArgs>;

  /**
   * `prisma.group`: Exposes CRUD operations for the **Group** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Groups
    * const groups = await prisma.group.findMany()
    * ```
    */
  get group(): Prisma.GroupDelegate<ExtArgs>;

  /**
   * `prisma.department`: Exposes CRUD operations for the **Department** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Departments
    * const departments = await prisma.department.findMany()
    * ```
    */
  get department(): Prisma.DepartmentDelegate<ExtArgs>;

  /**
   * `prisma.course`: Exposes CRUD operations for the **Course** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Courses
    * const courses = await prisma.course.findMany()
    * ```
    */
  get course(): Prisma.CourseDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.12.1
   * Query Engine version: 473ed3124229e22d881cb7addf559799debae1ab
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown }

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Student: 'Student',
    StudentHistory: 'StudentHistory',
    HealthGroup: 'HealthGroup',
    PhysicalEducation: 'PhysicalEducation',
    MedicalCertificate: 'MedicalCertificate',
    MedicalCertificateHistory: 'MedicalCertificateHistory',
    Group: 'Group',
    Department: 'Department',
    Course: 'Course'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }


  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs}, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'user' | 'student' | 'studentHistory' | 'healthGroup' | 'physicalEducation' | 'medicalCertificate' | 'medicalCertificateHistory' | 'group' | 'department' | 'course'
      txIsolationLevel: Prisma.TransactionIsolationLevel
    },
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>,
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>,
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Student: {
        payload: Prisma.$StudentPayload<ExtArgs>
        fields: Prisma.StudentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StudentFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$StudentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StudentFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>
          }
          findFirst: {
            args: Prisma.StudentFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$StudentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StudentFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>
          }
          findMany: {
            args: Prisma.StudentFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>[]
          }
          create: {
            args: Prisma.StudentCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>
          }
          createMany: {
            args: Prisma.StudentCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.StudentDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>
          }
          update: {
            args: Prisma.StudentUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>
          }
          deleteMany: {
            args: Prisma.StudentDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.StudentUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.StudentUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>
          }
          aggregate: {
            args: Prisma.StudentAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateStudent>
          }
          groupBy: {
            args: Prisma.StudentGroupByArgs<ExtArgs>,
            result: $Utils.Optional<StudentGroupByOutputType>[]
          }
          count: {
            args: Prisma.StudentCountArgs<ExtArgs>,
            result: $Utils.Optional<StudentCountAggregateOutputType> | number
          }
        }
      }
      StudentHistory: {
        payload: Prisma.$StudentHistoryPayload<ExtArgs>
        fields: Prisma.StudentHistoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StudentHistoryFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$StudentHistoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StudentHistoryFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$StudentHistoryPayload>
          }
          findFirst: {
            args: Prisma.StudentHistoryFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$StudentHistoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StudentHistoryFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$StudentHistoryPayload>
          }
          findMany: {
            args: Prisma.StudentHistoryFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$StudentHistoryPayload>[]
          }
          create: {
            args: Prisma.StudentHistoryCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$StudentHistoryPayload>
          }
          createMany: {
            args: Prisma.StudentHistoryCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.StudentHistoryDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$StudentHistoryPayload>
          }
          update: {
            args: Prisma.StudentHistoryUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$StudentHistoryPayload>
          }
          deleteMany: {
            args: Prisma.StudentHistoryDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.StudentHistoryUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.StudentHistoryUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$StudentHistoryPayload>
          }
          aggregate: {
            args: Prisma.StudentHistoryAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateStudentHistory>
          }
          groupBy: {
            args: Prisma.StudentHistoryGroupByArgs<ExtArgs>,
            result: $Utils.Optional<StudentHistoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.StudentHistoryCountArgs<ExtArgs>,
            result: $Utils.Optional<StudentHistoryCountAggregateOutputType> | number
          }
        }
      }
      HealthGroup: {
        payload: Prisma.$HealthGroupPayload<ExtArgs>
        fields: Prisma.HealthGroupFieldRefs
        operations: {
          findUnique: {
            args: Prisma.HealthGroupFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$HealthGroupPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.HealthGroupFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$HealthGroupPayload>
          }
          findFirst: {
            args: Prisma.HealthGroupFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$HealthGroupPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.HealthGroupFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$HealthGroupPayload>
          }
          findMany: {
            args: Prisma.HealthGroupFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$HealthGroupPayload>[]
          }
          create: {
            args: Prisma.HealthGroupCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$HealthGroupPayload>
          }
          createMany: {
            args: Prisma.HealthGroupCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.HealthGroupDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$HealthGroupPayload>
          }
          update: {
            args: Prisma.HealthGroupUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$HealthGroupPayload>
          }
          deleteMany: {
            args: Prisma.HealthGroupDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.HealthGroupUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.HealthGroupUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$HealthGroupPayload>
          }
          aggregate: {
            args: Prisma.HealthGroupAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateHealthGroup>
          }
          groupBy: {
            args: Prisma.HealthGroupGroupByArgs<ExtArgs>,
            result: $Utils.Optional<HealthGroupGroupByOutputType>[]
          }
          count: {
            args: Prisma.HealthGroupCountArgs<ExtArgs>,
            result: $Utils.Optional<HealthGroupCountAggregateOutputType> | number
          }
        }
      }
      PhysicalEducation: {
        payload: Prisma.$PhysicalEducationPayload<ExtArgs>
        fields: Prisma.PhysicalEducationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PhysicalEducationFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PhysicalEducationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PhysicalEducationFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PhysicalEducationPayload>
          }
          findFirst: {
            args: Prisma.PhysicalEducationFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PhysicalEducationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PhysicalEducationFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PhysicalEducationPayload>
          }
          findMany: {
            args: Prisma.PhysicalEducationFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PhysicalEducationPayload>[]
          }
          create: {
            args: Prisma.PhysicalEducationCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PhysicalEducationPayload>
          }
          createMany: {
            args: Prisma.PhysicalEducationCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.PhysicalEducationDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PhysicalEducationPayload>
          }
          update: {
            args: Prisma.PhysicalEducationUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PhysicalEducationPayload>
          }
          deleteMany: {
            args: Prisma.PhysicalEducationDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.PhysicalEducationUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.PhysicalEducationUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PhysicalEducationPayload>
          }
          aggregate: {
            args: Prisma.PhysicalEducationAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregatePhysicalEducation>
          }
          groupBy: {
            args: Prisma.PhysicalEducationGroupByArgs<ExtArgs>,
            result: $Utils.Optional<PhysicalEducationGroupByOutputType>[]
          }
          count: {
            args: Prisma.PhysicalEducationCountArgs<ExtArgs>,
            result: $Utils.Optional<PhysicalEducationCountAggregateOutputType> | number
          }
        }
      }
      MedicalCertificate: {
        payload: Prisma.$MedicalCertificatePayload<ExtArgs>
        fields: Prisma.MedicalCertificateFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MedicalCertificateFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MedicalCertificatePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MedicalCertificateFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MedicalCertificatePayload>
          }
          findFirst: {
            args: Prisma.MedicalCertificateFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MedicalCertificatePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MedicalCertificateFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MedicalCertificatePayload>
          }
          findMany: {
            args: Prisma.MedicalCertificateFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MedicalCertificatePayload>[]
          }
          create: {
            args: Prisma.MedicalCertificateCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MedicalCertificatePayload>
          }
          createMany: {
            args: Prisma.MedicalCertificateCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.MedicalCertificateDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MedicalCertificatePayload>
          }
          update: {
            args: Prisma.MedicalCertificateUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MedicalCertificatePayload>
          }
          deleteMany: {
            args: Prisma.MedicalCertificateDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.MedicalCertificateUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.MedicalCertificateUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MedicalCertificatePayload>
          }
          aggregate: {
            args: Prisma.MedicalCertificateAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateMedicalCertificate>
          }
          groupBy: {
            args: Prisma.MedicalCertificateGroupByArgs<ExtArgs>,
            result: $Utils.Optional<MedicalCertificateGroupByOutputType>[]
          }
          count: {
            args: Prisma.MedicalCertificateCountArgs<ExtArgs>,
            result: $Utils.Optional<MedicalCertificateCountAggregateOutputType> | number
          }
        }
      }
      MedicalCertificateHistory: {
        payload: Prisma.$MedicalCertificateHistoryPayload<ExtArgs>
        fields: Prisma.MedicalCertificateHistoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MedicalCertificateHistoryFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MedicalCertificateHistoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MedicalCertificateHistoryFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MedicalCertificateHistoryPayload>
          }
          findFirst: {
            args: Prisma.MedicalCertificateHistoryFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MedicalCertificateHistoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MedicalCertificateHistoryFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MedicalCertificateHistoryPayload>
          }
          findMany: {
            args: Prisma.MedicalCertificateHistoryFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MedicalCertificateHistoryPayload>[]
          }
          create: {
            args: Prisma.MedicalCertificateHistoryCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MedicalCertificateHistoryPayload>
          }
          createMany: {
            args: Prisma.MedicalCertificateHistoryCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.MedicalCertificateHistoryDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MedicalCertificateHistoryPayload>
          }
          update: {
            args: Prisma.MedicalCertificateHistoryUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MedicalCertificateHistoryPayload>
          }
          deleteMany: {
            args: Prisma.MedicalCertificateHistoryDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.MedicalCertificateHistoryUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.MedicalCertificateHistoryUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MedicalCertificateHistoryPayload>
          }
          aggregate: {
            args: Prisma.MedicalCertificateHistoryAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateMedicalCertificateHistory>
          }
          groupBy: {
            args: Prisma.MedicalCertificateHistoryGroupByArgs<ExtArgs>,
            result: $Utils.Optional<MedicalCertificateHistoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.MedicalCertificateHistoryCountArgs<ExtArgs>,
            result: $Utils.Optional<MedicalCertificateHistoryCountAggregateOutputType> | number
          }
        }
      }
      Group: {
        payload: Prisma.$GroupPayload<ExtArgs>
        fields: Prisma.GroupFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GroupFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GroupPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GroupFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GroupPayload>
          }
          findFirst: {
            args: Prisma.GroupFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GroupPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GroupFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GroupPayload>
          }
          findMany: {
            args: Prisma.GroupFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GroupPayload>[]
          }
          create: {
            args: Prisma.GroupCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GroupPayload>
          }
          createMany: {
            args: Prisma.GroupCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.GroupDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GroupPayload>
          }
          update: {
            args: Prisma.GroupUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GroupPayload>
          }
          deleteMany: {
            args: Prisma.GroupDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.GroupUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.GroupUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GroupPayload>
          }
          aggregate: {
            args: Prisma.GroupAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateGroup>
          }
          groupBy: {
            args: Prisma.GroupGroupByArgs<ExtArgs>,
            result: $Utils.Optional<GroupGroupByOutputType>[]
          }
          count: {
            args: Prisma.GroupCountArgs<ExtArgs>,
            result: $Utils.Optional<GroupCountAggregateOutputType> | number
          }
        }
      }
      Department: {
        payload: Prisma.$DepartmentPayload<ExtArgs>
        fields: Prisma.DepartmentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DepartmentFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DepartmentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DepartmentFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DepartmentPayload>
          }
          findFirst: {
            args: Prisma.DepartmentFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DepartmentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DepartmentFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DepartmentPayload>
          }
          findMany: {
            args: Prisma.DepartmentFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DepartmentPayload>[]
          }
          create: {
            args: Prisma.DepartmentCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DepartmentPayload>
          }
          createMany: {
            args: Prisma.DepartmentCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.DepartmentDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DepartmentPayload>
          }
          update: {
            args: Prisma.DepartmentUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DepartmentPayload>
          }
          deleteMany: {
            args: Prisma.DepartmentDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.DepartmentUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.DepartmentUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DepartmentPayload>
          }
          aggregate: {
            args: Prisma.DepartmentAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateDepartment>
          }
          groupBy: {
            args: Prisma.DepartmentGroupByArgs<ExtArgs>,
            result: $Utils.Optional<DepartmentGroupByOutputType>[]
          }
          count: {
            args: Prisma.DepartmentCountArgs<ExtArgs>,
            result: $Utils.Optional<DepartmentCountAggregateOutputType> | number
          }
        }
      }
      Course: {
        payload: Prisma.$CoursePayload<ExtArgs>
        fields: Prisma.CourseFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CourseFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CoursePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CourseFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>
          }
          findFirst: {
            args: Prisma.CourseFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CoursePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CourseFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>
          }
          findMany: {
            args: Prisma.CourseFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>[]
          }
          create: {
            args: Prisma.CourseCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>
          }
          createMany: {
            args: Prisma.CourseCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.CourseDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>
          }
          update: {
            args: Prisma.CourseUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>
          }
          deleteMany: {
            args: Prisma.CourseDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.CourseUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.CourseUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>
          }
          aggregate: {
            args: Prisma.CourseAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateCourse>
          }
          groupBy: {
            args: Prisma.CourseGroupByArgs<ExtArgs>,
            result: $Utils.Optional<CourseGroupByOutputType>[]
          }
          count: {
            args: Prisma.CourseCountArgs<ExtArgs>,
            result: $Utils.Optional<CourseCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type StudentCountOutputType
   */

  export type StudentCountOutputType = {
    medicalCertificates: number
    StudentHistory: number
  }

  export type StudentCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    medicalCertificates?: boolean | StudentCountOutputTypeCountMedicalCertificatesArgs
    StudentHistory?: boolean | StudentCountOutputTypeCountStudentHistoryArgs
  }

  // Custom InputTypes

  /**
   * StudentCountOutputType without action
   */
  export type StudentCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentCountOutputType
     */
    select?: StudentCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * StudentCountOutputType without action
   */
  export type StudentCountOutputTypeCountMedicalCertificatesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MedicalCertificateWhereInput
  }


  /**
   * StudentCountOutputType without action
   */
  export type StudentCountOutputTypeCountStudentHistoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StudentHistoryWhereInput
  }



  /**
   * Count Type HealthGroupCountOutputType
   */

  export type HealthGroupCountOutputType = {
    medicalCertificates: number
    MedicalCertificateHistory: number
  }

  export type HealthGroupCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    medicalCertificates?: boolean | HealthGroupCountOutputTypeCountMedicalCertificatesArgs
    MedicalCertificateHistory?: boolean | HealthGroupCountOutputTypeCountMedicalCertificateHistoryArgs
  }

  // Custom InputTypes

  /**
   * HealthGroupCountOutputType without action
   */
  export type HealthGroupCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HealthGroupCountOutputType
     */
    select?: HealthGroupCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * HealthGroupCountOutputType without action
   */
  export type HealthGroupCountOutputTypeCountMedicalCertificatesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MedicalCertificateWhereInput
  }


  /**
   * HealthGroupCountOutputType without action
   */
  export type HealthGroupCountOutputTypeCountMedicalCertificateHistoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MedicalCertificateHistoryWhereInput
  }



  /**
   * Count Type PhysicalEducationCountOutputType
   */

  export type PhysicalEducationCountOutputType = {
    medicalCertificates: number
    MedicalCertificateHistory: number
  }

  export type PhysicalEducationCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    medicalCertificates?: boolean | PhysicalEducationCountOutputTypeCountMedicalCertificatesArgs
    MedicalCertificateHistory?: boolean | PhysicalEducationCountOutputTypeCountMedicalCertificateHistoryArgs
  }

  // Custom InputTypes

  /**
   * PhysicalEducationCountOutputType without action
   */
  export type PhysicalEducationCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PhysicalEducationCountOutputType
     */
    select?: PhysicalEducationCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * PhysicalEducationCountOutputType without action
   */
  export type PhysicalEducationCountOutputTypeCountMedicalCertificatesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MedicalCertificateWhereInput
  }


  /**
   * PhysicalEducationCountOutputType without action
   */
  export type PhysicalEducationCountOutputTypeCountMedicalCertificateHistoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MedicalCertificateHistoryWhereInput
  }



  /**
   * Count Type MedicalCertificateCountOutputType
   */

  export type MedicalCertificateCountOutputType = {
    MedicalCertificateHistory: number
  }

  export type MedicalCertificateCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    MedicalCertificateHistory?: boolean | MedicalCertificateCountOutputTypeCountMedicalCertificateHistoryArgs
  }

  // Custom InputTypes

  /**
   * MedicalCertificateCountOutputType without action
   */
  export type MedicalCertificateCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicalCertificateCountOutputType
     */
    select?: MedicalCertificateCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * MedicalCertificateCountOutputType without action
   */
  export type MedicalCertificateCountOutputTypeCountMedicalCertificateHistoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MedicalCertificateHistoryWhereInput
  }



  /**
   * Count Type GroupCountOutputType
   */

  export type GroupCountOutputType = {
    students: number
    User: number
    StudentHistory: number
  }

  export type GroupCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    students?: boolean | GroupCountOutputTypeCountStudentsArgs
    User?: boolean | GroupCountOutputTypeCountUserArgs
    StudentHistory?: boolean | GroupCountOutputTypeCountStudentHistoryArgs
  }

  // Custom InputTypes

  /**
   * GroupCountOutputType without action
   */
  export type GroupCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupCountOutputType
     */
    select?: GroupCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * GroupCountOutputType without action
   */
  export type GroupCountOutputTypeCountStudentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StudentWhereInput
  }


  /**
   * GroupCountOutputType without action
   */
  export type GroupCountOutputTypeCountUserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }


  /**
   * GroupCountOutputType without action
   */
  export type GroupCountOutputTypeCountStudentHistoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StudentHistoryWhereInput
  }



  /**
   * Count Type DepartmentCountOutputType
   */

  export type DepartmentCountOutputType = {
    courses: number
  }

  export type DepartmentCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    courses?: boolean | DepartmentCountOutputTypeCountCoursesArgs
  }

  // Custom InputTypes

  /**
   * DepartmentCountOutputType without action
   */
  export type DepartmentCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DepartmentCountOutputType
     */
    select?: DepartmentCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * DepartmentCountOutputType without action
   */
  export type DepartmentCountOutputTypeCountCoursesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CourseWhereInput
  }



  /**
   * Count Type CourseCountOutputType
   */

  export type CourseCountOutputType = {
    groups: number
  }

  export type CourseCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    groups?: boolean | CourseCountOutputTypeCountGroupsArgs
  }

  // Custom InputTypes

  /**
   * CourseCountOutputType without action
   */
  export type CourseCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseCountOutputType
     */
    select?: CourseCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * CourseCountOutputType without action
   */
  export type CourseCountOutputTypeCountGroupsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GroupWhereInput
  }



  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
    groupId: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
    groupId: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    login: string | null
    password: string | null
    isAdmin: boolean | null
    groupId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    login: string | null
    password: string | null
    isAdmin: boolean | null
    groupId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    login: number
    password: number
    isAdmin: number
    groupId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
    groupId?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
    groupId?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    login?: true
    password?: true
    isAdmin?: true
    groupId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    login?: true
    password?: true
    isAdmin?: true
    groupId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    login?: true
    password?: true
    isAdmin?: true
    groupId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    login: string
    password: string
    isAdmin: boolean
    groupId: number | null
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    login?: boolean
    password?: boolean
    isAdmin?: boolean
    groupId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    group?: boolean | User$groupArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    login?: boolean
    password?: boolean
    isAdmin?: boolean
    groupId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    group?: boolean | User$groupArgs<ExtArgs>
  }


  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      group: Prisma.$GroupPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      login: string
      password: string
      isAdmin: boolean
      groupId: number | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }


  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends UserFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one User that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends UserFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends UserFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
    **/
    create<T extends UserCreateArgs<ExtArgs>>(
      args: SelectSubset<T, UserCreateArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Users.
     *     @param {UserCreateManyArgs} args - Arguments to create many Users.
     *     @example
     *     // Create many Users
     *     const user = await prisma.user.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends UserCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
    **/
    delete<T extends UserDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, UserDeleteArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends UserUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpdateArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends UserDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends UserUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
    **/
    upsert<T extends UserUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpsertArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    group<T extends User$groupArgs<ExtArgs> = {}>(args?: Subset<T, User$groupArgs<ExtArgs>>): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the User model
   */ 
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly login: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly isAdmin: FieldRef<"User", 'Boolean'>
    readonly groupId: FieldRef<"User", 'Int'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }


  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }


  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }


  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }


  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
  }


  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }


  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
  }


  /**
   * User.group
   */
  export type User$groupArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GroupInclude<ExtArgs> | null
    where?: GroupWhereInput
  }


  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
  }



  /**
   * Model Student
   */

  export type AggregateStudent = {
    _count: StudentCountAggregateOutputType | null
    _avg: StudentAvgAggregateOutputType | null
    _sum: StudentSumAggregateOutputType | null
    _min: StudentMinAggregateOutputType | null
    _max: StudentMaxAggregateOutputType | null
  }

  export type StudentAvgAggregateOutputType = {
    id: number | null
    groupId: number | null
  }

  export type StudentSumAggregateOutputType = {
    id: number | null
    groupId: number | null
  }

  export type StudentMinAggregateOutputType = {
    id: number | null
    name: string | null
    surname: string | null
    secondName: string | null
    birthDate: Date | null
    groupId: number | null
    createdAt: Date | null
    updatedAt: Date | null
    isExpelled: boolean | null
  }

  export type StudentMaxAggregateOutputType = {
    id: number | null
    name: string | null
    surname: string | null
    secondName: string | null
    birthDate: Date | null
    groupId: number | null
    createdAt: Date | null
    updatedAt: Date | null
    isExpelled: boolean | null
  }

  export type StudentCountAggregateOutputType = {
    id: number
    name: number
    surname: number
    secondName: number
    birthDate: number
    groupId: number
    createdAt: number
    updatedAt: number
    isExpelled: number
    _all: number
  }


  export type StudentAvgAggregateInputType = {
    id?: true
    groupId?: true
  }

  export type StudentSumAggregateInputType = {
    id?: true
    groupId?: true
  }

  export type StudentMinAggregateInputType = {
    id?: true
    name?: true
    surname?: true
    secondName?: true
    birthDate?: true
    groupId?: true
    createdAt?: true
    updatedAt?: true
    isExpelled?: true
  }

  export type StudentMaxAggregateInputType = {
    id?: true
    name?: true
    surname?: true
    secondName?: true
    birthDate?: true
    groupId?: true
    createdAt?: true
    updatedAt?: true
    isExpelled?: true
  }

  export type StudentCountAggregateInputType = {
    id?: true
    name?: true
    surname?: true
    secondName?: true
    birthDate?: true
    groupId?: true
    createdAt?: true
    updatedAt?: true
    isExpelled?: true
    _all?: true
  }

  export type StudentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Student to aggregate.
     */
    where?: StudentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Students to fetch.
     */
    orderBy?: StudentOrderByWithRelationInput | StudentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StudentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Students from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Students.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Students
    **/
    _count?: true | StudentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: StudentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: StudentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StudentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StudentMaxAggregateInputType
  }

  export type GetStudentAggregateType<T extends StudentAggregateArgs> = {
        [P in keyof T & keyof AggregateStudent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStudent[P]>
      : GetScalarType<T[P], AggregateStudent[P]>
  }




  export type StudentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StudentWhereInput
    orderBy?: StudentOrderByWithAggregationInput | StudentOrderByWithAggregationInput[]
    by: StudentScalarFieldEnum[] | StudentScalarFieldEnum
    having?: StudentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StudentCountAggregateInputType | true
    _avg?: StudentAvgAggregateInputType
    _sum?: StudentSumAggregateInputType
    _min?: StudentMinAggregateInputType
    _max?: StudentMaxAggregateInputType
  }

  export type StudentGroupByOutputType = {
    id: number
    name: string
    surname: string
    secondName: string | null
    birthDate: Date
    groupId: number | null
    createdAt: Date
    updatedAt: Date
    isExpelled: boolean
    _count: StudentCountAggregateOutputType | null
    _avg: StudentAvgAggregateOutputType | null
    _sum: StudentSumAggregateOutputType | null
    _min: StudentMinAggregateOutputType | null
    _max: StudentMaxAggregateOutputType | null
  }

  type GetStudentGroupByPayload<T extends StudentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StudentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StudentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StudentGroupByOutputType[P]>
            : GetScalarType<T[P], StudentGroupByOutputType[P]>
        }
      >
    >


  export type StudentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    surname?: boolean
    secondName?: boolean
    birthDate?: boolean
    groupId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    isExpelled?: boolean
    medicalCertificates?: boolean | Student$medicalCertificatesArgs<ExtArgs>
    group?: boolean | Student$groupArgs<ExtArgs>
    StudentHistory?: boolean | Student$StudentHistoryArgs<ExtArgs>
    _count?: boolean | StudentCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["student"]>

  export type StudentSelectScalar = {
    id?: boolean
    name?: boolean
    surname?: boolean
    secondName?: boolean
    birthDate?: boolean
    groupId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    isExpelled?: boolean
  }

  export type StudentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    medicalCertificates?: boolean | Student$medicalCertificatesArgs<ExtArgs>
    group?: boolean | Student$groupArgs<ExtArgs>
    StudentHistory?: boolean | Student$StudentHistoryArgs<ExtArgs>
    _count?: boolean | StudentCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $StudentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Student"
    objects: {
      medicalCertificates: Prisma.$MedicalCertificatePayload<ExtArgs>[]
      group: Prisma.$GroupPayload<ExtArgs> | null
      StudentHistory: Prisma.$StudentHistoryPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      surname: string
      secondName: string | null
      birthDate: Date
      groupId: number | null
      createdAt: Date
      updatedAt: Date
      isExpelled: boolean
    }, ExtArgs["result"]["student"]>
    composites: {}
  }


  type StudentGetPayload<S extends boolean | null | undefined | StudentDefaultArgs> = $Result.GetResult<Prisma.$StudentPayload, S>

  type StudentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<StudentFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: StudentCountAggregateInputType | true
    }

  export interface StudentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Student'], meta: { name: 'Student' } }
    /**
     * Find zero or one Student that matches the filter.
     * @param {StudentFindUniqueArgs} args - Arguments to find a Student
     * @example
     * // Get one Student
     * const student = await prisma.student.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends StudentFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, StudentFindUniqueArgs<ExtArgs>>
    ): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Student that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {StudentFindUniqueOrThrowArgs} args - Arguments to find a Student
     * @example
     * // Get one Student
     * const student = await prisma.student.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends StudentFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, StudentFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Student that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentFindFirstArgs} args - Arguments to find a Student
     * @example
     * // Get one Student
     * const student = await prisma.student.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends StudentFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, StudentFindFirstArgs<ExtArgs>>
    ): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Student that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentFindFirstOrThrowArgs} args - Arguments to find a Student
     * @example
     * // Get one Student
     * const student = await prisma.student.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends StudentFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, StudentFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Students that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Students
     * const students = await prisma.student.findMany()
     * 
     * // Get first 10 Students
     * const students = await prisma.student.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const studentWithIdOnly = await prisma.student.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends StudentFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, StudentFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Student.
     * @param {StudentCreateArgs} args - Arguments to create a Student.
     * @example
     * // Create one Student
     * const Student = await prisma.student.create({
     *   data: {
     *     // ... data to create a Student
     *   }
     * })
     * 
    **/
    create<T extends StudentCreateArgs<ExtArgs>>(
      args: SelectSubset<T, StudentCreateArgs<ExtArgs>>
    ): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Students.
     *     @param {StudentCreateManyArgs} args - Arguments to create many Students.
     *     @example
     *     // Create many Students
     *     const student = await prisma.student.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends StudentCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, StudentCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Student.
     * @param {StudentDeleteArgs} args - Arguments to delete one Student.
     * @example
     * // Delete one Student
     * const Student = await prisma.student.delete({
     *   where: {
     *     // ... filter to delete one Student
     *   }
     * })
     * 
    **/
    delete<T extends StudentDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, StudentDeleteArgs<ExtArgs>>
    ): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Student.
     * @param {StudentUpdateArgs} args - Arguments to update one Student.
     * @example
     * // Update one Student
     * const student = await prisma.student.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends StudentUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, StudentUpdateArgs<ExtArgs>>
    ): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Students.
     * @param {StudentDeleteManyArgs} args - Arguments to filter Students to delete.
     * @example
     * // Delete a few Students
     * const { count } = await prisma.student.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends StudentDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, StudentDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Students.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Students
     * const student = await prisma.student.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends StudentUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, StudentUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Student.
     * @param {StudentUpsertArgs} args - Arguments to update or create a Student.
     * @example
     * // Update or create a Student
     * const student = await prisma.student.upsert({
     *   create: {
     *     // ... data to create a Student
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Student we want to update
     *   }
     * })
    **/
    upsert<T extends StudentUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, StudentUpsertArgs<ExtArgs>>
    ): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Students.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentCountArgs} args - Arguments to filter Students to count.
     * @example
     * // Count the number of Students
     * const count = await prisma.student.count({
     *   where: {
     *     // ... the filter for the Students we want to count
     *   }
     * })
    **/
    count<T extends StudentCountArgs>(
      args?: Subset<T, StudentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StudentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Student.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends StudentAggregateArgs>(args: Subset<T, StudentAggregateArgs>): Prisma.PrismaPromise<GetStudentAggregateType<T>>

    /**
     * Group by Student.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends StudentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StudentGroupByArgs['orderBy'] }
        : { orderBy?: StudentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, StudentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStudentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Student model
   */
  readonly fields: StudentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Student.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StudentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    medicalCertificates<T extends Student$medicalCertificatesArgs<ExtArgs> = {}>(args?: Subset<T, Student$medicalCertificatesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MedicalCertificatePayload<ExtArgs>, T, 'findMany'> | Null>;

    group<T extends Student$groupArgs<ExtArgs> = {}>(args?: Subset<T, Student$groupArgs<ExtArgs>>): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    StudentHistory<T extends Student$StudentHistoryArgs<ExtArgs> = {}>(args?: Subset<T, Student$StudentHistoryArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentHistoryPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Student model
   */ 
  interface StudentFieldRefs {
    readonly id: FieldRef<"Student", 'Int'>
    readonly name: FieldRef<"Student", 'String'>
    readonly surname: FieldRef<"Student", 'String'>
    readonly secondName: FieldRef<"Student", 'String'>
    readonly birthDate: FieldRef<"Student", 'DateTime'>
    readonly groupId: FieldRef<"Student", 'Int'>
    readonly createdAt: FieldRef<"Student", 'DateTime'>
    readonly updatedAt: FieldRef<"Student", 'DateTime'>
    readonly isExpelled: FieldRef<"Student", 'Boolean'>
  }
    

  // Custom InputTypes

  /**
   * Student findUnique
   */
  export type StudentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * Filter, which Student to fetch.
     */
    where: StudentWhereUniqueInput
  }


  /**
   * Student findUniqueOrThrow
   */
  export type StudentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * Filter, which Student to fetch.
     */
    where: StudentWhereUniqueInput
  }


  /**
   * Student findFirst
   */
  export type StudentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * Filter, which Student to fetch.
     */
    where?: StudentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Students to fetch.
     */
    orderBy?: StudentOrderByWithRelationInput | StudentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Students.
     */
    cursor?: StudentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Students from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Students.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Students.
     */
    distinct?: StudentScalarFieldEnum | StudentScalarFieldEnum[]
  }


  /**
   * Student findFirstOrThrow
   */
  export type StudentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * Filter, which Student to fetch.
     */
    where?: StudentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Students to fetch.
     */
    orderBy?: StudentOrderByWithRelationInput | StudentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Students.
     */
    cursor?: StudentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Students from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Students.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Students.
     */
    distinct?: StudentScalarFieldEnum | StudentScalarFieldEnum[]
  }


  /**
   * Student findMany
   */
  export type StudentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * Filter, which Students to fetch.
     */
    where?: StudentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Students to fetch.
     */
    orderBy?: StudentOrderByWithRelationInput | StudentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Students.
     */
    cursor?: StudentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Students from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Students.
     */
    skip?: number
    distinct?: StudentScalarFieldEnum | StudentScalarFieldEnum[]
  }


  /**
   * Student create
   */
  export type StudentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * The data needed to create a Student.
     */
    data: XOR<StudentCreateInput, StudentUncheckedCreateInput>
  }


  /**
   * Student createMany
   */
  export type StudentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Students.
     */
    data: StudentCreateManyInput | StudentCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Student update
   */
  export type StudentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * The data needed to update a Student.
     */
    data: XOR<StudentUpdateInput, StudentUncheckedUpdateInput>
    /**
     * Choose, which Student to update.
     */
    where: StudentWhereUniqueInput
  }


  /**
   * Student updateMany
   */
  export type StudentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Students.
     */
    data: XOR<StudentUpdateManyMutationInput, StudentUncheckedUpdateManyInput>
    /**
     * Filter which Students to update
     */
    where?: StudentWhereInput
  }


  /**
   * Student upsert
   */
  export type StudentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * The filter to search for the Student to update in case it exists.
     */
    where: StudentWhereUniqueInput
    /**
     * In case the Student found by the `where` argument doesn't exist, create a new Student with this data.
     */
    create: XOR<StudentCreateInput, StudentUncheckedCreateInput>
    /**
     * In case the Student was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StudentUpdateInput, StudentUncheckedUpdateInput>
  }


  /**
   * Student delete
   */
  export type StudentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * Filter which Student to delete.
     */
    where: StudentWhereUniqueInput
  }


  /**
   * Student deleteMany
   */
  export type StudentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Students to delete
     */
    where?: StudentWhereInput
  }


  /**
   * Student.medicalCertificates
   */
  export type Student$medicalCertificatesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicalCertificate
     */
    select?: MedicalCertificateSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MedicalCertificateInclude<ExtArgs> | null
    where?: MedicalCertificateWhereInput
    orderBy?: MedicalCertificateOrderByWithRelationInput | MedicalCertificateOrderByWithRelationInput[]
    cursor?: MedicalCertificateWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MedicalCertificateScalarFieldEnum | MedicalCertificateScalarFieldEnum[]
  }


  /**
   * Student.group
   */
  export type Student$groupArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GroupInclude<ExtArgs> | null
    where?: GroupWhereInput
  }


  /**
   * Student.StudentHistory
   */
  export type Student$StudentHistoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentHistory
     */
    select?: StudentHistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StudentHistoryInclude<ExtArgs> | null
    where?: StudentHistoryWhereInput
    orderBy?: StudentHistoryOrderByWithRelationInput | StudentHistoryOrderByWithRelationInput[]
    cursor?: StudentHistoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StudentHistoryScalarFieldEnum | StudentHistoryScalarFieldEnum[]
  }


  /**
   * Student without action
   */
  export type StudentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StudentInclude<ExtArgs> | null
  }



  /**
   * Model StudentHistory
   */

  export type AggregateStudentHistory = {
    _count: StudentHistoryCountAggregateOutputType | null
    _avg: StudentHistoryAvgAggregateOutputType | null
    _sum: StudentHistorySumAggregateOutputType | null
    _min: StudentHistoryMinAggregateOutputType | null
    _max: StudentHistoryMaxAggregateOutputType | null
  }

  export type StudentHistoryAvgAggregateOutputType = {
    id: number | null
    studentId: number | null
    groupId: number | null
  }

  export type StudentHistorySumAggregateOutputType = {
    id: number | null
    studentId: number | null
    groupId: number | null
  }

  export type StudentHistoryMinAggregateOutputType = {
    id: number | null
    studentId: number | null
    groupId: number | null
    createdAt: Date | null
  }

  export type StudentHistoryMaxAggregateOutputType = {
    id: number | null
    studentId: number | null
    groupId: number | null
    createdAt: Date | null
  }

  export type StudentHistoryCountAggregateOutputType = {
    id: number
    studentId: number
    groupId: number
    createdAt: number
    _all: number
  }


  export type StudentHistoryAvgAggregateInputType = {
    id?: true
    studentId?: true
    groupId?: true
  }

  export type StudentHistorySumAggregateInputType = {
    id?: true
    studentId?: true
    groupId?: true
  }

  export type StudentHistoryMinAggregateInputType = {
    id?: true
    studentId?: true
    groupId?: true
    createdAt?: true
  }

  export type StudentHistoryMaxAggregateInputType = {
    id?: true
    studentId?: true
    groupId?: true
    createdAt?: true
  }

  export type StudentHistoryCountAggregateInputType = {
    id?: true
    studentId?: true
    groupId?: true
    createdAt?: true
    _all?: true
  }

  export type StudentHistoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StudentHistory to aggregate.
     */
    where?: StudentHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StudentHistories to fetch.
     */
    orderBy?: StudentHistoryOrderByWithRelationInput | StudentHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StudentHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StudentHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StudentHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned StudentHistories
    **/
    _count?: true | StudentHistoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: StudentHistoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: StudentHistorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StudentHistoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StudentHistoryMaxAggregateInputType
  }

  export type GetStudentHistoryAggregateType<T extends StudentHistoryAggregateArgs> = {
        [P in keyof T & keyof AggregateStudentHistory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStudentHistory[P]>
      : GetScalarType<T[P], AggregateStudentHistory[P]>
  }




  export type StudentHistoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StudentHistoryWhereInput
    orderBy?: StudentHistoryOrderByWithAggregationInput | StudentHistoryOrderByWithAggregationInput[]
    by: StudentHistoryScalarFieldEnum[] | StudentHistoryScalarFieldEnum
    having?: StudentHistoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StudentHistoryCountAggregateInputType | true
    _avg?: StudentHistoryAvgAggregateInputType
    _sum?: StudentHistorySumAggregateInputType
    _min?: StudentHistoryMinAggregateInputType
    _max?: StudentHistoryMaxAggregateInputType
  }

  export type StudentHistoryGroupByOutputType = {
    id: number
    studentId: number
    groupId: number | null
    createdAt: Date
    _count: StudentHistoryCountAggregateOutputType | null
    _avg: StudentHistoryAvgAggregateOutputType | null
    _sum: StudentHistorySumAggregateOutputType | null
    _min: StudentHistoryMinAggregateOutputType | null
    _max: StudentHistoryMaxAggregateOutputType | null
  }

  type GetStudentHistoryGroupByPayload<T extends StudentHistoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StudentHistoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StudentHistoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StudentHistoryGroupByOutputType[P]>
            : GetScalarType<T[P], StudentHistoryGroupByOutputType[P]>
        }
      >
    >


  export type StudentHistorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    studentId?: boolean
    groupId?: boolean
    createdAt?: boolean
    student?: boolean | StudentDefaultArgs<ExtArgs>
    group?: boolean | StudentHistory$groupArgs<ExtArgs>
  }, ExtArgs["result"]["studentHistory"]>

  export type StudentHistorySelectScalar = {
    id?: boolean
    studentId?: boolean
    groupId?: boolean
    createdAt?: boolean
  }

  export type StudentHistoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    student?: boolean | StudentDefaultArgs<ExtArgs>
    group?: boolean | StudentHistory$groupArgs<ExtArgs>
  }


  export type $StudentHistoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "StudentHistory"
    objects: {
      student: Prisma.$StudentPayload<ExtArgs>
      group: Prisma.$GroupPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      studentId: number
      groupId: number | null
      createdAt: Date
    }, ExtArgs["result"]["studentHistory"]>
    composites: {}
  }


  type StudentHistoryGetPayload<S extends boolean | null | undefined | StudentHistoryDefaultArgs> = $Result.GetResult<Prisma.$StudentHistoryPayload, S>

  type StudentHistoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<StudentHistoryFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: StudentHistoryCountAggregateInputType | true
    }

  export interface StudentHistoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['StudentHistory'], meta: { name: 'StudentHistory' } }
    /**
     * Find zero or one StudentHistory that matches the filter.
     * @param {StudentHistoryFindUniqueArgs} args - Arguments to find a StudentHistory
     * @example
     * // Get one StudentHistory
     * const studentHistory = await prisma.studentHistory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends StudentHistoryFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, StudentHistoryFindUniqueArgs<ExtArgs>>
    ): Prisma__StudentHistoryClient<$Result.GetResult<Prisma.$StudentHistoryPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one StudentHistory that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {StudentHistoryFindUniqueOrThrowArgs} args - Arguments to find a StudentHistory
     * @example
     * // Get one StudentHistory
     * const studentHistory = await prisma.studentHistory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends StudentHistoryFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, StudentHistoryFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__StudentHistoryClient<$Result.GetResult<Prisma.$StudentHistoryPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first StudentHistory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentHistoryFindFirstArgs} args - Arguments to find a StudentHistory
     * @example
     * // Get one StudentHistory
     * const studentHistory = await prisma.studentHistory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends StudentHistoryFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, StudentHistoryFindFirstArgs<ExtArgs>>
    ): Prisma__StudentHistoryClient<$Result.GetResult<Prisma.$StudentHistoryPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first StudentHistory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentHistoryFindFirstOrThrowArgs} args - Arguments to find a StudentHistory
     * @example
     * // Get one StudentHistory
     * const studentHistory = await prisma.studentHistory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends StudentHistoryFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, StudentHistoryFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__StudentHistoryClient<$Result.GetResult<Prisma.$StudentHistoryPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more StudentHistories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentHistoryFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all StudentHistories
     * const studentHistories = await prisma.studentHistory.findMany()
     * 
     * // Get first 10 StudentHistories
     * const studentHistories = await prisma.studentHistory.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const studentHistoryWithIdOnly = await prisma.studentHistory.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends StudentHistoryFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, StudentHistoryFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentHistoryPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a StudentHistory.
     * @param {StudentHistoryCreateArgs} args - Arguments to create a StudentHistory.
     * @example
     * // Create one StudentHistory
     * const StudentHistory = await prisma.studentHistory.create({
     *   data: {
     *     // ... data to create a StudentHistory
     *   }
     * })
     * 
    **/
    create<T extends StudentHistoryCreateArgs<ExtArgs>>(
      args: SelectSubset<T, StudentHistoryCreateArgs<ExtArgs>>
    ): Prisma__StudentHistoryClient<$Result.GetResult<Prisma.$StudentHistoryPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many StudentHistories.
     *     @param {StudentHistoryCreateManyArgs} args - Arguments to create many StudentHistories.
     *     @example
     *     // Create many StudentHistories
     *     const studentHistory = await prisma.studentHistory.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends StudentHistoryCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, StudentHistoryCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a StudentHistory.
     * @param {StudentHistoryDeleteArgs} args - Arguments to delete one StudentHistory.
     * @example
     * // Delete one StudentHistory
     * const StudentHistory = await prisma.studentHistory.delete({
     *   where: {
     *     // ... filter to delete one StudentHistory
     *   }
     * })
     * 
    **/
    delete<T extends StudentHistoryDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, StudentHistoryDeleteArgs<ExtArgs>>
    ): Prisma__StudentHistoryClient<$Result.GetResult<Prisma.$StudentHistoryPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one StudentHistory.
     * @param {StudentHistoryUpdateArgs} args - Arguments to update one StudentHistory.
     * @example
     * // Update one StudentHistory
     * const studentHistory = await prisma.studentHistory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends StudentHistoryUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, StudentHistoryUpdateArgs<ExtArgs>>
    ): Prisma__StudentHistoryClient<$Result.GetResult<Prisma.$StudentHistoryPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more StudentHistories.
     * @param {StudentHistoryDeleteManyArgs} args - Arguments to filter StudentHistories to delete.
     * @example
     * // Delete a few StudentHistories
     * const { count } = await prisma.studentHistory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends StudentHistoryDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, StudentHistoryDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more StudentHistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentHistoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many StudentHistories
     * const studentHistory = await prisma.studentHistory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends StudentHistoryUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, StudentHistoryUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one StudentHistory.
     * @param {StudentHistoryUpsertArgs} args - Arguments to update or create a StudentHistory.
     * @example
     * // Update or create a StudentHistory
     * const studentHistory = await prisma.studentHistory.upsert({
     *   create: {
     *     // ... data to create a StudentHistory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the StudentHistory we want to update
     *   }
     * })
    **/
    upsert<T extends StudentHistoryUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, StudentHistoryUpsertArgs<ExtArgs>>
    ): Prisma__StudentHistoryClient<$Result.GetResult<Prisma.$StudentHistoryPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of StudentHistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentHistoryCountArgs} args - Arguments to filter StudentHistories to count.
     * @example
     * // Count the number of StudentHistories
     * const count = await prisma.studentHistory.count({
     *   where: {
     *     // ... the filter for the StudentHistories we want to count
     *   }
     * })
    **/
    count<T extends StudentHistoryCountArgs>(
      args?: Subset<T, StudentHistoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StudentHistoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a StudentHistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentHistoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends StudentHistoryAggregateArgs>(args: Subset<T, StudentHistoryAggregateArgs>): Prisma.PrismaPromise<GetStudentHistoryAggregateType<T>>

    /**
     * Group by StudentHistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentHistoryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends StudentHistoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StudentHistoryGroupByArgs['orderBy'] }
        : { orderBy?: StudentHistoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, StudentHistoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStudentHistoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the StudentHistory model
   */
  readonly fields: StudentHistoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for StudentHistory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StudentHistoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    student<T extends StudentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, StudentDefaultArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    group<T extends StudentHistory$groupArgs<ExtArgs> = {}>(args?: Subset<T, StudentHistory$groupArgs<ExtArgs>>): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the StudentHistory model
   */ 
  interface StudentHistoryFieldRefs {
    readonly id: FieldRef<"StudentHistory", 'Int'>
    readonly studentId: FieldRef<"StudentHistory", 'Int'>
    readonly groupId: FieldRef<"StudentHistory", 'Int'>
    readonly createdAt: FieldRef<"StudentHistory", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * StudentHistory findUnique
   */
  export type StudentHistoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentHistory
     */
    select?: StudentHistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StudentHistoryInclude<ExtArgs> | null
    /**
     * Filter, which StudentHistory to fetch.
     */
    where: StudentHistoryWhereUniqueInput
  }


  /**
   * StudentHistory findUniqueOrThrow
   */
  export type StudentHistoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentHistory
     */
    select?: StudentHistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StudentHistoryInclude<ExtArgs> | null
    /**
     * Filter, which StudentHistory to fetch.
     */
    where: StudentHistoryWhereUniqueInput
  }


  /**
   * StudentHistory findFirst
   */
  export type StudentHistoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentHistory
     */
    select?: StudentHistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StudentHistoryInclude<ExtArgs> | null
    /**
     * Filter, which StudentHistory to fetch.
     */
    where?: StudentHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StudentHistories to fetch.
     */
    orderBy?: StudentHistoryOrderByWithRelationInput | StudentHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StudentHistories.
     */
    cursor?: StudentHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StudentHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StudentHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StudentHistories.
     */
    distinct?: StudentHistoryScalarFieldEnum | StudentHistoryScalarFieldEnum[]
  }


  /**
   * StudentHistory findFirstOrThrow
   */
  export type StudentHistoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentHistory
     */
    select?: StudentHistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StudentHistoryInclude<ExtArgs> | null
    /**
     * Filter, which StudentHistory to fetch.
     */
    where?: StudentHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StudentHistories to fetch.
     */
    orderBy?: StudentHistoryOrderByWithRelationInput | StudentHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StudentHistories.
     */
    cursor?: StudentHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StudentHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StudentHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StudentHistories.
     */
    distinct?: StudentHistoryScalarFieldEnum | StudentHistoryScalarFieldEnum[]
  }


  /**
   * StudentHistory findMany
   */
  export type StudentHistoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentHistory
     */
    select?: StudentHistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StudentHistoryInclude<ExtArgs> | null
    /**
     * Filter, which StudentHistories to fetch.
     */
    where?: StudentHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StudentHistories to fetch.
     */
    orderBy?: StudentHistoryOrderByWithRelationInput | StudentHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing StudentHistories.
     */
    cursor?: StudentHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StudentHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StudentHistories.
     */
    skip?: number
    distinct?: StudentHistoryScalarFieldEnum | StudentHistoryScalarFieldEnum[]
  }


  /**
   * StudentHistory create
   */
  export type StudentHistoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentHistory
     */
    select?: StudentHistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StudentHistoryInclude<ExtArgs> | null
    /**
     * The data needed to create a StudentHistory.
     */
    data: XOR<StudentHistoryCreateInput, StudentHistoryUncheckedCreateInput>
  }


  /**
   * StudentHistory createMany
   */
  export type StudentHistoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many StudentHistories.
     */
    data: StudentHistoryCreateManyInput | StudentHistoryCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * StudentHistory update
   */
  export type StudentHistoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentHistory
     */
    select?: StudentHistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StudentHistoryInclude<ExtArgs> | null
    /**
     * The data needed to update a StudentHistory.
     */
    data: XOR<StudentHistoryUpdateInput, StudentHistoryUncheckedUpdateInput>
    /**
     * Choose, which StudentHistory to update.
     */
    where: StudentHistoryWhereUniqueInput
  }


  /**
   * StudentHistory updateMany
   */
  export type StudentHistoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update StudentHistories.
     */
    data: XOR<StudentHistoryUpdateManyMutationInput, StudentHistoryUncheckedUpdateManyInput>
    /**
     * Filter which StudentHistories to update
     */
    where?: StudentHistoryWhereInput
  }


  /**
   * StudentHistory upsert
   */
  export type StudentHistoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentHistory
     */
    select?: StudentHistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StudentHistoryInclude<ExtArgs> | null
    /**
     * The filter to search for the StudentHistory to update in case it exists.
     */
    where: StudentHistoryWhereUniqueInput
    /**
     * In case the StudentHistory found by the `where` argument doesn't exist, create a new StudentHistory with this data.
     */
    create: XOR<StudentHistoryCreateInput, StudentHistoryUncheckedCreateInput>
    /**
     * In case the StudentHistory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StudentHistoryUpdateInput, StudentHistoryUncheckedUpdateInput>
  }


  /**
   * StudentHistory delete
   */
  export type StudentHistoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentHistory
     */
    select?: StudentHistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StudentHistoryInclude<ExtArgs> | null
    /**
     * Filter which StudentHistory to delete.
     */
    where: StudentHistoryWhereUniqueInput
  }


  /**
   * StudentHistory deleteMany
   */
  export type StudentHistoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StudentHistories to delete
     */
    where?: StudentHistoryWhereInput
  }


  /**
   * StudentHistory.group
   */
  export type StudentHistory$groupArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GroupInclude<ExtArgs> | null
    where?: GroupWhereInput
  }


  /**
   * StudentHistory without action
   */
  export type StudentHistoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentHistory
     */
    select?: StudentHistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StudentHistoryInclude<ExtArgs> | null
  }



  /**
   * Model HealthGroup
   */

  export type AggregateHealthGroup = {
    _count: HealthGroupCountAggregateOutputType | null
    _avg: HealthGroupAvgAggregateOutputType | null
    _sum: HealthGroupSumAggregateOutputType | null
    _min: HealthGroupMinAggregateOutputType | null
    _max: HealthGroupMaxAggregateOutputType | null
  }

  export type HealthGroupAvgAggregateOutputType = {
    id: number | null
  }

  export type HealthGroupSumAggregateOutputType = {
    id: number | null
  }

  export type HealthGroupMinAggregateOutputType = {
    id: number | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type HealthGroupMaxAggregateOutputType = {
    id: number | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type HealthGroupCountAggregateOutputType = {
    id: number
    name: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type HealthGroupAvgAggregateInputType = {
    id?: true
  }

  export type HealthGroupSumAggregateInputType = {
    id?: true
  }

  export type HealthGroupMinAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type HealthGroupMaxAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type HealthGroupCountAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type HealthGroupAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which HealthGroup to aggregate.
     */
    where?: HealthGroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HealthGroups to fetch.
     */
    orderBy?: HealthGroupOrderByWithRelationInput | HealthGroupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: HealthGroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HealthGroups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HealthGroups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned HealthGroups
    **/
    _count?: true | HealthGroupCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: HealthGroupAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: HealthGroupSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: HealthGroupMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: HealthGroupMaxAggregateInputType
  }

  export type GetHealthGroupAggregateType<T extends HealthGroupAggregateArgs> = {
        [P in keyof T & keyof AggregateHealthGroup]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHealthGroup[P]>
      : GetScalarType<T[P], AggregateHealthGroup[P]>
  }




  export type HealthGroupGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HealthGroupWhereInput
    orderBy?: HealthGroupOrderByWithAggregationInput | HealthGroupOrderByWithAggregationInput[]
    by: HealthGroupScalarFieldEnum[] | HealthGroupScalarFieldEnum
    having?: HealthGroupScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: HealthGroupCountAggregateInputType | true
    _avg?: HealthGroupAvgAggregateInputType
    _sum?: HealthGroupSumAggregateInputType
    _min?: HealthGroupMinAggregateInputType
    _max?: HealthGroupMaxAggregateInputType
  }

  export type HealthGroupGroupByOutputType = {
    id: number
    name: string
    createdAt: Date
    updatedAt: Date
    _count: HealthGroupCountAggregateOutputType | null
    _avg: HealthGroupAvgAggregateOutputType | null
    _sum: HealthGroupSumAggregateOutputType | null
    _min: HealthGroupMinAggregateOutputType | null
    _max: HealthGroupMaxAggregateOutputType | null
  }

  type GetHealthGroupGroupByPayload<T extends HealthGroupGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<HealthGroupGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof HealthGroupGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], HealthGroupGroupByOutputType[P]>
            : GetScalarType<T[P], HealthGroupGroupByOutputType[P]>
        }
      >
    >


  export type HealthGroupSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    medicalCertificates?: boolean | HealthGroup$medicalCertificatesArgs<ExtArgs>
    MedicalCertificateHistory?: boolean | HealthGroup$MedicalCertificateHistoryArgs<ExtArgs>
    _count?: boolean | HealthGroupCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["healthGroup"]>

  export type HealthGroupSelectScalar = {
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type HealthGroupInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    medicalCertificates?: boolean | HealthGroup$medicalCertificatesArgs<ExtArgs>
    MedicalCertificateHistory?: boolean | HealthGroup$MedicalCertificateHistoryArgs<ExtArgs>
    _count?: boolean | HealthGroupCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $HealthGroupPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "HealthGroup"
    objects: {
      medicalCertificates: Prisma.$MedicalCertificatePayload<ExtArgs>[]
      MedicalCertificateHistory: Prisma.$MedicalCertificateHistoryPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["healthGroup"]>
    composites: {}
  }


  type HealthGroupGetPayload<S extends boolean | null | undefined | HealthGroupDefaultArgs> = $Result.GetResult<Prisma.$HealthGroupPayload, S>

  type HealthGroupCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<HealthGroupFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: HealthGroupCountAggregateInputType | true
    }

  export interface HealthGroupDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['HealthGroup'], meta: { name: 'HealthGroup' } }
    /**
     * Find zero or one HealthGroup that matches the filter.
     * @param {HealthGroupFindUniqueArgs} args - Arguments to find a HealthGroup
     * @example
     * // Get one HealthGroup
     * const healthGroup = await prisma.healthGroup.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends HealthGroupFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, HealthGroupFindUniqueArgs<ExtArgs>>
    ): Prisma__HealthGroupClient<$Result.GetResult<Prisma.$HealthGroupPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one HealthGroup that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {HealthGroupFindUniqueOrThrowArgs} args - Arguments to find a HealthGroup
     * @example
     * // Get one HealthGroup
     * const healthGroup = await prisma.healthGroup.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends HealthGroupFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, HealthGroupFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__HealthGroupClient<$Result.GetResult<Prisma.$HealthGroupPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first HealthGroup that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HealthGroupFindFirstArgs} args - Arguments to find a HealthGroup
     * @example
     * // Get one HealthGroup
     * const healthGroup = await prisma.healthGroup.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends HealthGroupFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, HealthGroupFindFirstArgs<ExtArgs>>
    ): Prisma__HealthGroupClient<$Result.GetResult<Prisma.$HealthGroupPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first HealthGroup that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HealthGroupFindFirstOrThrowArgs} args - Arguments to find a HealthGroup
     * @example
     * // Get one HealthGroup
     * const healthGroup = await prisma.healthGroup.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends HealthGroupFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, HealthGroupFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__HealthGroupClient<$Result.GetResult<Prisma.$HealthGroupPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more HealthGroups that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HealthGroupFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all HealthGroups
     * const healthGroups = await prisma.healthGroup.findMany()
     * 
     * // Get first 10 HealthGroups
     * const healthGroups = await prisma.healthGroup.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const healthGroupWithIdOnly = await prisma.healthGroup.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends HealthGroupFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, HealthGroupFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HealthGroupPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a HealthGroup.
     * @param {HealthGroupCreateArgs} args - Arguments to create a HealthGroup.
     * @example
     * // Create one HealthGroup
     * const HealthGroup = await prisma.healthGroup.create({
     *   data: {
     *     // ... data to create a HealthGroup
     *   }
     * })
     * 
    **/
    create<T extends HealthGroupCreateArgs<ExtArgs>>(
      args: SelectSubset<T, HealthGroupCreateArgs<ExtArgs>>
    ): Prisma__HealthGroupClient<$Result.GetResult<Prisma.$HealthGroupPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many HealthGroups.
     *     @param {HealthGroupCreateManyArgs} args - Arguments to create many HealthGroups.
     *     @example
     *     // Create many HealthGroups
     *     const healthGroup = await prisma.healthGroup.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends HealthGroupCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, HealthGroupCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a HealthGroup.
     * @param {HealthGroupDeleteArgs} args - Arguments to delete one HealthGroup.
     * @example
     * // Delete one HealthGroup
     * const HealthGroup = await prisma.healthGroup.delete({
     *   where: {
     *     // ... filter to delete one HealthGroup
     *   }
     * })
     * 
    **/
    delete<T extends HealthGroupDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, HealthGroupDeleteArgs<ExtArgs>>
    ): Prisma__HealthGroupClient<$Result.GetResult<Prisma.$HealthGroupPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one HealthGroup.
     * @param {HealthGroupUpdateArgs} args - Arguments to update one HealthGroup.
     * @example
     * // Update one HealthGroup
     * const healthGroup = await prisma.healthGroup.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends HealthGroupUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, HealthGroupUpdateArgs<ExtArgs>>
    ): Prisma__HealthGroupClient<$Result.GetResult<Prisma.$HealthGroupPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more HealthGroups.
     * @param {HealthGroupDeleteManyArgs} args - Arguments to filter HealthGroups to delete.
     * @example
     * // Delete a few HealthGroups
     * const { count } = await prisma.healthGroup.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends HealthGroupDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, HealthGroupDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more HealthGroups.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HealthGroupUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many HealthGroups
     * const healthGroup = await prisma.healthGroup.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends HealthGroupUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, HealthGroupUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one HealthGroup.
     * @param {HealthGroupUpsertArgs} args - Arguments to update or create a HealthGroup.
     * @example
     * // Update or create a HealthGroup
     * const healthGroup = await prisma.healthGroup.upsert({
     *   create: {
     *     // ... data to create a HealthGroup
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the HealthGroup we want to update
     *   }
     * })
    **/
    upsert<T extends HealthGroupUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, HealthGroupUpsertArgs<ExtArgs>>
    ): Prisma__HealthGroupClient<$Result.GetResult<Prisma.$HealthGroupPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of HealthGroups.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HealthGroupCountArgs} args - Arguments to filter HealthGroups to count.
     * @example
     * // Count the number of HealthGroups
     * const count = await prisma.healthGroup.count({
     *   where: {
     *     // ... the filter for the HealthGroups we want to count
     *   }
     * })
    **/
    count<T extends HealthGroupCountArgs>(
      args?: Subset<T, HealthGroupCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], HealthGroupCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a HealthGroup.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HealthGroupAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends HealthGroupAggregateArgs>(args: Subset<T, HealthGroupAggregateArgs>): Prisma.PrismaPromise<GetHealthGroupAggregateType<T>>

    /**
     * Group by HealthGroup.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HealthGroupGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends HealthGroupGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: HealthGroupGroupByArgs['orderBy'] }
        : { orderBy?: HealthGroupGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, HealthGroupGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHealthGroupGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the HealthGroup model
   */
  readonly fields: HealthGroupFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for HealthGroup.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__HealthGroupClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    medicalCertificates<T extends HealthGroup$medicalCertificatesArgs<ExtArgs> = {}>(args?: Subset<T, HealthGroup$medicalCertificatesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MedicalCertificatePayload<ExtArgs>, T, 'findMany'> | Null>;

    MedicalCertificateHistory<T extends HealthGroup$MedicalCertificateHistoryArgs<ExtArgs> = {}>(args?: Subset<T, HealthGroup$MedicalCertificateHistoryArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MedicalCertificateHistoryPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the HealthGroup model
   */ 
  interface HealthGroupFieldRefs {
    readonly id: FieldRef<"HealthGroup", 'Int'>
    readonly name: FieldRef<"HealthGroup", 'String'>
    readonly createdAt: FieldRef<"HealthGroup", 'DateTime'>
    readonly updatedAt: FieldRef<"HealthGroup", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * HealthGroup findUnique
   */
  export type HealthGroupFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HealthGroup
     */
    select?: HealthGroupSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: HealthGroupInclude<ExtArgs> | null
    /**
     * Filter, which HealthGroup to fetch.
     */
    where: HealthGroupWhereUniqueInput
  }


  /**
   * HealthGroup findUniqueOrThrow
   */
  export type HealthGroupFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HealthGroup
     */
    select?: HealthGroupSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: HealthGroupInclude<ExtArgs> | null
    /**
     * Filter, which HealthGroup to fetch.
     */
    where: HealthGroupWhereUniqueInput
  }


  /**
   * HealthGroup findFirst
   */
  export type HealthGroupFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HealthGroup
     */
    select?: HealthGroupSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: HealthGroupInclude<ExtArgs> | null
    /**
     * Filter, which HealthGroup to fetch.
     */
    where?: HealthGroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HealthGroups to fetch.
     */
    orderBy?: HealthGroupOrderByWithRelationInput | HealthGroupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for HealthGroups.
     */
    cursor?: HealthGroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HealthGroups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HealthGroups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of HealthGroups.
     */
    distinct?: HealthGroupScalarFieldEnum | HealthGroupScalarFieldEnum[]
  }


  /**
   * HealthGroup findFirstOrThrow
   */
  export type HealthGroupFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HealthGroup
     */
    select?: HealthGroupSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: HealthGroupInclude<ExtArgs> | null
    /**
     * Filter, which HealthGroup to fetch.
     */
    where?: HealthGroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HealthGroups to fetch.
     */
    orderBy?: HealthGroupOrderByWithRelationInput | HealthGroupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for HealthGroups.
     */
    cursor?: HealthGroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HealthGroups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HealthGroups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of HealthGroups.
     */
    distinct?: HealthGroupScalarFieldEnum | HealthGroupScalarFieldEnum[]
  }


  /**
   * HealthGroup findMany
   */
  export type HealthGroupFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HealthGroup
     */
    select?: HealthGroupSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: HealthGroupInclude<ExtArgs> | null
    /**
     * Filter, which HealthGroups to fetch.
     */
    where?: HealthGroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HealthGroups to fetch.
     */
    orderBy?: HealthGroupOrderByWithRelationInput | HealthGroupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing HealthGroups.
     */
    cursor?: HealthGroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HealthGroups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HealthGroups.
     */
    skip?: number
    distinct?: HealthGroupScalarFieldEnum | HealthGroupScalarFieldEnum[]
  }


  /**
   * HealthGroup create
   */
  export type HealthGroupCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HealthGroup
     */
    select?: HealthGroupSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: HealthGroupInclude<ExtArgs> | null
    /**
     * The data needed to create a HealthGroup.
     */
    data: XOR<HealthGroupCreateInput, HealthGroupUncheckedCreateInput>
  }


  /**
   * HealthGroup createMany
   */
  export type HealthGroupCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many HealthGroups.
     */
    data: HealthGroupCreateManyInput | HealthGroupCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * HealthGroup update
   */
  export type HealthGroupUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HealthGroup
     */
    select?: HealthGroupSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: HealthGroupInclude<ExtArgs> | null
    /**
     * The data needed to update a HealthGroup.
     */
    data: XOR<HealthGroupUpdateInput, HealthGroupUncheckedUpdateInput>
    /**
     * Choose, which HealthGroup to update.
     */
    where: HealthGroupWhereUniqueInput
  }


  /**
   * HealthGroup updateMany
   */
  export type HealthGroupUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update HealthGroups.
     */
    data: XOR<HealthGroupUpdateManyMutationInput, HealthGroupUncheckedUpdateManyInput>
    /**
     * Filter which HealthGroups to update
     */
    where?: HealthGroupWhereInput
  }


  /**
   * HealthGroup upsert
   */
  export type HealthGroupUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HealthGroup
     */
    select?: HealthGroupSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: HealthGroupInclude<ExtArgs> | null
    /**
     * The filter to search for the HealthGroup to update in case it exists.
     */
    where: HealthGroupWhereUniqueInput
    /**
     * In case the HealthGroup found by the `where` argument doesn't exist, create a new HealthGroup with this data.
     */
    create: XOR<HealthGroupCreateInput, HealthGroupUncheckedCreateInput>
    /**
     * In case the HealthGroup was found with the provided `where` argument, update it with this data.
     */
    update: XOR<HealthGroupUpdateInput, HealthGroupUncheckedUpdateInput>
  }


  /**
   * HealthGroup delete
   */
  export type HealthGroupDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HealthGroup
     */
    select?: HealthGroupSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: HealthGroupInclude<ExtArgs> | null
    /**
     * Filter which HealthGroup to delete.
     */
    where: HealthGroupWhereUniqueInput
  }


  /**
   * HealthGroup deleteMany
   */
  export type HealthGroupDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which HealthGroups to delete
     */
    where?: HealthGroupWhereInput
  }


  /**
   * HealthGroup.medicalCertificates
   */
  export type HealthGroup$medicalCertificatesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicalCertificate
     */
    select?: MedicalCertificateSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MedicalCertificateInclude<ExtArgs> | null
    where?: MedicalCertificateWhereInput
    orderBy?: MedicalCertificateOrderByWithRelationInput | MedicalCertificateOrderByWithRelationInput[]
    cursor?: MedicalCertificateWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MedicalCertificateScalarFieldEnum | MedicalCertificateScalarFieldEnum[]
  }


  /**
   * HealthGroup.MedicalCertificateHistory
   */
  export type HealthGroup$MedicalCertificateHistoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicalCertificateHistory
     */
    select?: MedicalCertificateHistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MedicalCertificateHistoryInclude<ExtArgs> | null
    where?: MedicalCertificateHistoryWhereInput
    orderBy?: MedicalCertificateHistoryOrderByWithRelationInput | MedicalCertificateHistoryOrderByWithRelationInput[]
    cursor?: MedicalCertificateHistoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MedicalCertificateHistoryScalarFieldEnum | MedicalCertificateHistoryScalarFieldEnum[]
  }


  /**
   * HealthGroup without action
   */
  export type HealthGroupDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HealthGroup
     */
    select?: HealthGroupSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: HealthGroupInclude<ExtArgs> | null
  }



  /**
   * Model PhysicalEducation
   */

  export type AggregatePhysicalEducation = {
    _count: PhysicalEducationCountAggregateOutputType | null
    _avg: PhysicalEducationAvgAggregateOutputType | null
    _sum: PhysicalEducationSumAggregateOutputType | null
    _min: PhysicalEducationMinAggregateOutputType | null
    _max: PhysicalEducationMaxAggregateOutputType | null
  }

  export type PhysicalEducationAvgAggregateOutputType = {
    id: number | null
  }

  export type PhysicalEducationSumAggregateOutputType = {
    id: number | null
  }

  export type PhysicalEducationMinAggregateOutputType = {
    id: number | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PhysicalEducationMaxAggregateOutputType = {
    id: number | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PhysicalEducationCountAggregateOutputType = {
    id: number
    name: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PhysicalEducationAvgAggregateInputType = {
    id?: true
  }

  export type PhysicalEducationSumAggregateInputType = {
    id?: true
  }

  export type PhysicalEducationMinAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PhysicalEducationMaxAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PhysicalEducationCountAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PhysicalEducationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PhysicalEducation to aggregate.
     */
    where?: PhysicalEducationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PhysicalEducations to fetch.
     */
    orderBy?: PhysicalEducationOrderByWithRelationInput | PhysicalEducationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PhysicalEducationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PhysicalEducations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PhysicalEducations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PhysicalEducations
    **/
    _count?: true | PhysicalEducationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PhysicalEducationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PhysicalEducationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PhysicalEducationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PhysicalEducationMaxAggregateInputType
  }

  export type GetPhysicalEducationAggregateType<T extends PhysicalEducationAggregateArgs> = {
        [P in keyof T & keyof AggregatePhysicalEducation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePhysicalEducation[P]>
      : GetScalarType<T[P], AggregatePhysicalEducation[P]>
  }




  export type PhysicalEducationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PhysicalEducationWhereInput
    orderBy?: PhysicalEducationOrderByWithAggregationInput | PhysicalEducationOrderByWithAggregationInput[]
    by: PhysicalEducationScalarFieldEnum[] | PhysicalEducationScalarFieldEnum
    having?: PhysicalEducationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PhysicalEducationCountAggregateInputType | true
    _avg?: PhysicalEducationAvgAggregateInputType
    _sum?: PhysicalEducationSumAggregateInputType
    _min?: PhysicalEducationMinAggregateInputType
    _max?: PhysicalEducationMaxAggregateInputType
  }

  export type PhysicalEducationGroupByOutputType = {
    id: number
    name: string
    createdAt: Date
    updatedAt: Date
    _count: PhysicalEducationCountAggregateOutputType | null
    _avg: PhysicalEducationAvgAggregateOutputType | null
    _sum: PhysicalEducationSumAggregateOutputType | null
    _min: PhysicalEducationMinAggregateOutputType | null
    _max: PhysicalEducationMaxAggregateOutputType | null
  }

  type GetPhysicalEducationGroupByPayload<T extends PhysicalEducationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PhysicalEducationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PhysicalEducationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PhysicalEducationGroupByOutputType[P]>
            : GetScalarType<T[P], PhysicalEducationGroupByOutputType[P]>
        }
      >
    >


  export type PhysicalEducationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    medicalCertificates?: boolean | PhysicalEducation$medicalCertificatesArgs<ExtArgs>
    MedicalCertificateHistory?: boolean | PhysicalEducation$MedicalCertificateHistoryArgs<ExtArgs>
    _count?: boolean | PhysicalEducationCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["physicalEducation"]>

  export type PhysicalEducationSelectScalar = {
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PhysicalEducationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    medicalCertificates?: boolean | PhysicalEducation$medicalCertificatesArgs<ExtArgs>
    MedicalCertificateHistory?: boolean | PhysicalEducation$MedicalCertificateHistoryArgs<ExtArgs>
    _count?: boolean | PhysicalEducationCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $PhysicalEducationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PhysicalEducation"
    objects: {
      medicalCertificates: Prisma.$MedicalCertificatePayload<ExtArgs>[]
      MedicalCertificateHistory: Prisma.$MedicalCertificateHistoryPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["physicalEducation"]>
    composites: {}
  }


  type PhysicalEducationGetPayload<S extends boolean | null | undefined | PhysicalEducationDefaultArgs> = $Result.GetResult<Prisma.$PhysicalEducationPayload, S>

  type PhysicalEducationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<PhysicalEducationFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: PhysicalEducationCountAggregateInputType | true
    }

  export interface PhysicalEducationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PhysicalEducation'], meta: { name: 'PhysicalEducation' } }
    /**
     * Find zero or one PhysicalEducation that matches the filter.
     * @param {PhysicalEducationFindUniqueArgs} args - Arguments to find a PhysicalEducation
     * @example
     * // Get one PhysicalEducation
     * const physicalEducation = await prisma.physicalEducation.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends PhysicalEducationFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, PhysicalEducationFindUniqueArgs<ExtArgs>>
    ): Prisma__PhysicalEducationClient<$Result.GetResult<Prisma.$PhysicalEducationPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one PhysicalEducation that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {PhysicalEducationFindUniqueOrThrowArgs} args - Arguments to find a PhysicalEducation
     * @example
     * // Get one PhysicalEducation
     * const physicalEducation = await prisma.physicalEducation.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends PhysicalEducationFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, PhysicalEducationFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__PhysicalEducationClient<$Result.GetResult<Prisma.$PhysicalEducationPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first PhysicalEducation that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhysicalEducationFindFirstArgs} args - Arguments to find a PhysicalEducation
     * @example
     * // Get one PhysicalEducation
     * const physicalEducation = await prisma.physicalEducation.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends PhysicalEducationFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, PhysicalEducationFindFirstArgs<ExtArgs>>
    ): Prisma__PhysicalEducationClient<$Result.GetResult<Prisma.$PhysicalEducationPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first PhysicalEducation that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhysicalEducationFindFirstOrThrowArgs} args - Arguments to find a PhysicalEducation
     * @example
     * // Get one PhysicalEducation
     * const physicalEducation = await prisma.physicalEducation.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends PhysicalEducationFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, PhysicalEducationFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__PhysicalEducationClient<$Result.GetResult<Prisma.$PhysicalEducationPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more PhysicalEducations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhysicalEducationFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PhysicalEducations
     * const physicalEducations = await prisma.physicalEducation.findMany()
     * 
     * // Get first 10 PhysicalEducations
     * const physicalEducations = await prisma.physicalEducation.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const physicalEducationWithIdOnly = await prisma.physicalEducation.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends PhysicalEducationFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PhysicalEducationFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PhysicalEducationPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a PhysicalEducation.
     * @param {PhysicalEducationCreateArgs} args - Arguments to create a PhysicalEducation.
     * @example
     * // Create one PhysicalEducation
     * const PhysicalEducation = await prisma.physicalEducation.create({
     *   data: {
     *     // ... data to create a PhysicalEducation
     *   }
     * })
     * 
    **/
    create<T extends PhysicalEducationCreateArgs<ExtArgs>>(
      args: SelectSubset<T, PhysicalEducationCreateArgs<ExtArgs>>
    ): Prisma__PhysicalEducationClient<$Result.GetResult<Prisma.$PhysicalEducationPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many PhysicalEducations.
     *     @param {PhysicalEducationCreateManyArgs} args - Arguments to create many PhysicalEducations.
     *     @example
     *     // Create many PhysicalEducations
     *     const physicalEducation = await prisma.physicalEducation.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends PhysicalEducationCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PhysicalEducationCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a PhysicalEducation.
     * @param {PhysicalEducationDeleteArgs} args - Arguments to delete one PhysicalEducation.
     * @example
     * // Delete one PhysicalEducation
     * const PhysicalEducation = await prisma.physicalEducation.delete({
     *   where: {
     *     // ... filter to delete one PhysicalEducation
     *   }
     * })
     * 
    **/
    delete<T extends PhysicalEducationDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, PhysicalEducationDeleteArgs<ExtArgs>>
    ): Prisma__PhysicalEducationClient<$Result.GetResult<Prisma.$PhysicalEducationPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one PhysicalEducation.
     * @param {PhysicalEducationUpdateArgs} args - Arguments to update one PhysicalEducation.
     * @example
     * // Update one PhysicalEducation
     * const physicalEducation = await prisma.physicalEducation.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends PhysicalEducationUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, PhysicalEducationUpdateArgs<ExtArgs>>
    ): Prisma__PhysicalEducationClient<$Result.GetResult<Prisma.$PhysicalEducationPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more PhysicalEducations.
     * @param {PhysicalEducationDeleteManyArgs} args - Arguments to filter PhysicalEducations to delete.
     * @example
     * // Delete a few PhysicalEducations
     * const { count } = await prisma.physicalEducation.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends PhysicalEducationDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PhysicalEducationDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PhysicalEducations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhysicalEducationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PhysicalEducations
     * const physicalEducation = await prisma.physicalEducation.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends PhysicalEducationUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, PhysicalEducationUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one PhysicalEducation.
     * @param {PhysicalEducationUpsertArgs} args - Arguments to update or create a PhysicalEducation.
     * @example
     * // Update or create a PhysicalEducation
     * const physicalEducation = await prisma.physicalEducation.upsert({
     *   create: {
     *     // ... data to create a PhysicalEducation
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PhysicalEducation we want to update
     *   }
     * })
    **/
    upsert<T extends PhysicalEducationUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, PhysicalEducationUpsertArgs<ExtArgs>>
    ): Prisma__PhysicalEducationClient<$Result.GetResult<Prisma.$PhysicalEducationPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of PhysicalEducations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhysicalEducationCountArgs} args - Arguments to filter PhysicalEducations to count.
     * @example
     * // Count the number of PhysicalEducations
     * const count = await prisma.physicalEducation.count({
     *   where: {
     *     // ... the filter for the PhysicalEducations we want to count
     *   }
     * })
    **/
    count<T extends PhysicalEducationCountArgs>(
      args?: Subset<T, PhysicalEducationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PhysicalEducationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PhysicalEducation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhysicalEducationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PhysicalEducationAggregateArgs>(args: Subset<T, PhysicalEducationAggregateArgs>): Prisma.PrismaPromise<GetPhysicalEducationAggregateType<T>>

    /**
     * Group by PhysicalEducation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhysicalEducationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PhysicalEducationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PhysicalEducationGroupByArgs['orderBy'] }
        : { orderBy?: PhysicalEducationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PhysicalEducationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPhysicalEducationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PhysicalEducation model
   */
  readonly fields: PhysicalEducationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PhysicalEducation.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PhysicalEducationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    medicalCertificates<T extends PhysicalEducation$medicalCertificatesArgs<ExtArgs> = {}>(args?: Subset<T, PhysicalEducation$medicalCertificatesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MedicalCertificatePayload<ExtArgs>, T, 'findMany'> | Null>;

    MedicalCertificateHistory<T extends PhysicalEducation$MedicalCertificateHistoryArgs<ExtArgs> = {}>(args?: Subset<T, PhysicalEducation$MedicalCertificateHistoryArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MedicalCertificateHistoryPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the PhysicalEducation model
   */ 
  interface PhysicalEducationFieldRefs {
    readonly id: FieldRef<"PhysicalEducation", 'Int'>
    readonly name: FieldRef<"PhysicalEducation", 'String'>
    readonly createdAt: FieldRef<"PhysicalEducation", 'DateTime'>
    readonly updatedAt: FieldRef<"PhysicalEducation", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * PhysicalEducation findUnique
   */
  export type PhysicalEducationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PhysicalEducation
     */
    select?: PhysicalEducationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PhysicalEducationInclude<ExtArgs> | null
    /**
     * Filter, which PhysicalEducation to fetch.
     */
    where: PhysicalEducationWhereUniqueInput
  }


  /**
   * PhysicalEducation findUniqueOrThrow
   */
  export type PhysicalEducationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PhysicalEducation
     */
    select?: PhysicalEducationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PhysicalEducationInclude<ExtArgs> | null
    /**
     * Filter, which PhysicalEducation to fetch.
     */
    where: PhysicalEducationWhereUniqueInput
  }


  /**
   * PhysicalEducation findFirst
   */
  export type PhysicalEducationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PhysicalEducation
     */
    select?: PhysicalEducationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PhysicalEducationInclude<ExtArgs> | null
    /**
     * Filter, which PhysicalEducation to fetch.
     */
    where?: PhysicalEducationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PhysicalEducations to fetch.
     */
    orderBy?: PhysicalEducationOrderByWithRelationInput | PhysicalEducationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PhysicalEducations.
     */
    cursor?: PhysicalEducationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PhysicalEducations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PhysicalEducations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PhysicalEducations.
     */
    distinct?: PhysicalEducationScalarFieldEnum | PhysicalEducationScalarFieldEnum[]
  }


  /**
   * PhysicalEducation findFirstOrThrow
   */
  export type PhysicalEducationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PhysicalEducation
     */
    select?: PhysicalEducationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PhysicalEducationInclude<ExtArgs> | null
    /**
     * Filter, which PhysicalEducation to fetch.
     */
    where?: PhysicalEducationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PhysicalEducations to fetch.
     */
    orderBy?: PhysicalEducationOrderByWithRelationInput | PhysicalEducationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PhysicalEducations.
     */
    cursor?: PhysicalEducationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PhysicalEducations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PhysicalEducations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PhysicalEducations.
     */
    distinct?: PhysicalEducationScalarFieldEnum | PhysicalEducationScalarFieldEnum[]
  }


  /**
   * PhysicalEducation findMany
   */
  export type PhysicalEducationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PhysicalEducation
     */
    select?: PhysicalEducationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PhysicalEducationInclude<ExtArgs> | null
    /**
     * Filter, which PhysicalEducations to fetch.
     */
    where?: PhysicalEducationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PhysicalEducations to fetch.
     */
    orderBy?: PhysicalEducationOrderByWithRelationInput | PhysicalEducationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PhysicalEducations.
     */
    cursor?: PhysicalEducationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PhysicalEducations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PhysicalEducations.
     */
    skip?: number
    distinct?: PhysicalEducationScalarFieldEnum | PhysicalEducationScalarFieldEnum[]
  }


  /**
   * PhysicalEducation create
   */
  export type PhysicalEducationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PhysicalEducation
     */
    select?: PhysicalEducationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PhysicalEducationInclude<ExtArgs> | null
    /**
     * The data needed to create a PhysicalEducation.
     */
    data: XOR<PhysicalEducationCreateInput, PhysicalEducationUncheckedCreateInput>
  }


  /**
   * PhysicalEducation createMany
   */
  export type PhysicalEducationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PhysicalEducations.
     */
    data: PhysicalEducationCreateManyInput | PhysicalEducationCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * PhysicalEducation update
   */
  export type PhysicalEducationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PhysicalEducation
     */
    select?: PhysicalEducationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PhysicalEducationInclude<ExtArgs> | null
    /**
     * The data needed to update a PhysicalEducation.
     */
    data: XOR<PhysicalEducationUpdateInput, PhysicalEducationUncheckedUpdateInput>
    /**
     * Choose, which PhysicalEducation to update.
     */
    where: PhysicalEducationWhereUniqueInput
  }


  /**
   * PhysicalEducation updateMany
   */
  export type PhysicalEducationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PhysicalEducations.
     */
    data: XOR<PhysicalEducationUpdateManyMutationInput, PhysicalEducationUncheckedUpdateManyInput>
    /**
     * Filter which PhysicalEducations to update
     */
    where?: PhysicalEducationWhereInput
  }


  /**
   * PhysicalEducation upsert
   */
  export type PhysicalEducationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PhysicalEducation
     */
    select?: PhysicalEducationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PhysicalEducationInclude<ExtArgs> | null
    /**
     * The filter to search for the PhysicalEducation to update in case it exists.
     */
    where: PhysicalEducationWhereUniqueInput
    /**
     * In case the PhysicalEducation found by the `where` argument doesn't exist, create a new PhysicalEducation with this data.
     */
    create: XOR<PhysicalEducationCreateInput, PhysicalEducationUncheckedCreateInput>
    /**
     * In case the PhysicalEducation was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PhysicalEducationUpdateInput, PhysicalEducationUncheckedUpdateInput>
  }


  /**
   * PhysicalEducation delete
   */
  export type PhysicalEducationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PhysicalEducation
     */
    select?: PhysicalEducationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PhysicalEducationInclude<ExtArgs> | null
    /**
     * Filter which PhysicalEducation to delete.
     */
    where: PhysicalEducationWhereUniqueInput
  }


  /**
   * PhysicalEducation deleteMany
   */
  export type PhysicalEducationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PhysicalEducations to delete
     */
    where?: PhysicalEducationWhereInput
  }


  /**
   * PhysicalEducation.medicalCertificates
   */
  export type PhysicalEducation$medicalCertificatesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicalCertificate
     */
    select?: MedicalCertificateSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MedicalCertificateInclude<ExtArgs> | null
    where?: MedicalCertificateWhereInput
    orderBy?: MedicalCertificateOrderByWithRelationInput | MedicalCertificateOrderByWithRelationInput[]
    cursor?: MedicalCertificateWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MedicalCertificateScalarFieldEnum | MedicalCertificateScalarFieldEnum[]
  }


  /**
   * PhysicalEducation.MedicalCertificateHistory
   */
  export type PhysicalEducation$MedicalCertificateHistoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicalCertificateHistory
     */
    select?: MedicalCertificateHistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MedicalCertificateHistoryInclude<ExtArgs> | null
    where?: MedicalCertificateHistoryWhereInput
    orderBy?: MedicalCertificateHistoryOrderByWithRelationInput | MedicalCertificateHistoryOrderByWithRelationInput[]
    cursor?: MedicalCertificateHistoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MedicalCertificateHistoryScalarFieldEnum | MedicalCertificateHistoryScalarFieldEnum[]
  }


  /**
   * PhysicalEducation without action
   */
  export type PhysicalEducationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PhysicalEducation
     */
    select?: PhysicalEducationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PhysicalEducationInclude<ExtArgs> | null
  }



  /**
   * Model MedicalCertificate
   */

  export type AggregateMedicalCertificate = {
    _count: MedicalCertificateCountAggregateOutputType | null
    _avg: MedicalCertificateAvgAggregateOutputType | null
    _sum: MedicalCertificateSumAggregateOutputType | null
    _min: MedicalCertificateMinAggregateOutputType | null
    _max: MedicalCertificateMaxAggregateOutputType | null
  }

  export type MedicalCertificateAvgAggregateOutputType = {
    id: number | null
    studentId: number | null
    healthGroupId: number | null
    physicalEducationId: number | null
  }

  export type MedicalCertificateSumAggregateOutputType = {
    id: number | null
    studentId: number | null
    healthGroupId: number | null
    physicalEducationId: number | null
  }

  export type MedicalCertificateMinAggregateOutputType = {
    id: number | null
    startDate: Date | null
    finishDate: Date | null
    studentId: number | null
    healthGroupId: number | null
    physicalEducationId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MedicalCertificateMaxAggregateOutputType = {
    id: number | null
    startDate: Date | null
    finishDate: Date | null
    studentId: number | null
    healthGroupId: number | null
    physicalEducationId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MedicalCertificateCountAggregateOutputType = {
    id: number
    startDate: number
    finishDate: number
    studentId: number
    healthGroupId: number
    physicalEducationId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type MedicalCertificateAvgAggregateInputType = {
    id?: true
    studentId?: true
    healthGroupId?: true
    physicalEducationId?: true
  }

  export type MedicalCertificateSumAggregateInputType = {
    id?: true
    studentId?: true
    healthGroupId?: true
    physicalEducationId?: true
  }

  export type MedicalCertificateMinAggregateInputType = {
    id?: true
    startDate?: true
    finishDate?: true
    studentId?: true
    healthGroupId?: true
    physicalEducationId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MedicalCertificateMaxAggregateInputType = {
    id?: true
    startDate?: true
    finishDate?: true
    studentId?: true
    healthGroupId?: true
    physicalEducationId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MedicalCertificateCountAggregateInputType = {
    id?: true
    startDate?: true
    finishDate?: true
    studentId?: true
    healthGroupId?: true
    physicalEducationId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type MedicalCertificateAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MedicalCertificate to aggregate.
     */
    where?: MedicalCertificateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MedicalCertificates to fetch.
     */
    orderBy?: MedicalCertificateOrderByWithRelationInput | MedicalCertificateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MedicalCertificateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MedicalCertificates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MedicalCertificates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MedicalCertificates
    **/
    _count?: true | MedicalCertificateCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MedicalCertificateAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MedicalCertificateSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MedicalCertificateMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MedicalCertificateMaxAggregateInputType
  }

  export type GetMedicalCertificateAggregateType<T extends MedicalCertificateAggregateArgs> = {
        [P in keyof T & keyof AggregateMedicalCertificate]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMedicalCertificate[P]>
      : GetScalarType<T[P], AggregateMedicalCertificate[P]>
  }




  export type MedicalCertificateGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MedicalCertificateWhereInput
    orderBy?: MedicalCertificateOrderByWithAggregationInput | MedicalCertificateOrderByWithAggregationInput[]
    by: MedicalCertificateScalarFieldEnum[] | MedicalCertificateScalarFieldEnum
    having?: MedicalCertificateScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MedicalCertificateCountAggregateInputType | true
    _avg?: MedicalCertificateAvgAggregateInputType
    _sum?: MedicalCertificateSumAggregateInputType
    _min?: MedicalCertificateMinAggregateInputType
    _max?: MedicalCertificateMaxAggregateInputType
  }

  export type MedicalCertificateGroupByOutputType = {
    id: number
    startDate: Date
    finishDate: Date
    studentId: number
    healthGroupId: number
    physicalEducationId: number
    createdAt: Date
    updatedAt: Date
    _count: MedicalCertificateCountAggregateOutputType | null
    _avg: MedicalCertificateAvgAggregateOutputType | null
    _sum: MedicalCertificateSumAggregateOutputType | null
    _min: MedicalCertificateMinAggregateOutputType | null
    _max: MedicalCertificateMaxAggregateOutputType | null
  }

  type GetMedicalCertificateGroupByPayload<T extends MedicalCertificateGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MedicalCertificateGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MedicalCertificateGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MedicalCertificateGroupByOutputType[P]>
            : GetScalarType<T[P], MedicalCertificateGroupByOutputType[P]>
        }
      >
    >


  export type MedicalCertificateSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    startDate?: boolean
    finishDate?: boolean
    studentId?: boolean
    healthGroupId?: boolean
    physicalEducationId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    MedicalCertificateHistory?: boolean | MedicalCertificate$MedicalCertificateHistoryArgs<ExtArgs>
    healthGroup?: boolean | HealthGroupDefaultArgs<ExtArgs>
    physicalEducation?: boolean | PhysicalEducationDefaultArgs<ExtArgs>
    student?: boolean | StudentDefaultArgs<ExtArgs>
    _count?: boolean | MedicalCertificateCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["medicalCertificate"]>

  export type MedicalCertificateSelectScalar = {
    id?: boolean
    startDate?: boolean
    finishDate?: boolean
    studentId?: boolean
    healthGroupId?: boolean
    physicalEducationId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type MedicalCertificateInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    MedicalCertificateHistory?: boolean | MedicalCertificate$MedicalCertificateHistoryArgs<ExtArgs>
    healthGroup?: boolean | HealthGroupDefaultArgs<ExtArgs>
    physicalEducation?: boolean | PhysicalEducationDefaultArgs<ExtArgs>
    student?: boolean | StudentDefaultArgs<ExtArgs>
    _count?: boolean | MedicalCertificateCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $MedicalCertificatePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MedicalCertificate"
    objects: {
      MedicalCertificateHistory: Prisma.$MedicalCertificateHistoryPayload<ExtArgs>[]
      healthGroup: Prisma.$HealthGroupPayload<ExtArgs>
      physicalEducation: Prisma.$PhysicalEducationPayload<ExtArgs>
      student: Prisma.$StudentPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      startDate: Date
      finishDate: Date
      studentId: number
      healthGroupId: number
      physicalEducationId: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["medicalCertificate"]>
    composites: {}
  }


  type MedicalCertificateGetPayload<S extends boolean | null | undefined | MedicalCertificateDefaultArgs> = $Result.GetResult<Prisma.$MedicalCertificatePayload, S>

  type MedicalCertificateCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<MedicalCertificateFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: MedicalCertificateCountAggregateInputType | true
    }

  export interface MedicalCertificateDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MedicalCertificate'], meta: { name: 'MedicalCertificate' } }
    /**
     * Find zero or one MedicalCertificate that matches the filter.
     * @param {MedicalCertificateFindUniqueArgs} args - Arguments to find a MedicalCertificate
     * @example
     * // Get one MedicalCertificate
     * const medicalCertificate = await prisma.medicalCertificate.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends MedicalCertificateFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, MedicalCertificateFindUniqueArgs<ExtArgs>>
    ): Prisma__MedicalCertificateClient<$Result.GetResult<Prisma.$MedicalCertificatePayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one MedicalCertificate that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {MedicalCertificateFindUniqueOrThrowArgs} args - Arguments to find a MedicalCertificate
     * @example
     * // Get one MedicalCertificate
     * const medicalCertificate = await prisma.medicalCertificate.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends MedicalCertificateFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, MedicalCertificateFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__MedicalCertificateClient<$Result.GetResult<Prisma.$MedicalCertificatePayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first MedicalCertificate that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicalCertificateFindFirstArgs} args - Arguments to find a MedicalCertificate
     * @example
     * // Get one MedicalCertificate
     * const medicalCertificate = await prisma.medicalCertificate.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends MedicalCertificateFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, MedicalCertificateFindFirstArgs<ExtArgs>>
    ): Prisma__MedicalCertificateClient<$Result.GetResult<Prisma.$MedicalCertificatePayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first MedicalCertificate that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicalCertificateFindFirstOrThrowArgs} args - Arguments to find a MedicalCertificate
     * @example
     * // Get one MedicalCertificate
     * const medicalCertificate = await prisma.medicalCertificate.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends MedicalCertificateFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, MedicalCertificateFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__MedicalCertificateClient<$Result.GetResult<Prisma.$MedicalCertificatePayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more MedicalCertificates that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicalCertificateFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MedicalCertificates
     * const medicalCertificates = await prisma.medicalCertificate.findMany()
     * 
     * // Get first 10 MedicalCertificates
     * const medicalCertificates = await prisma.medicalCertificate.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const medicalCertificateWithIdOnly = await prisma.medicalCertificate.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends MedicalCertificateFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, MedicalCertificateFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MedicalCertificatePayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a MedicalCertificate.
     * @param {MedicalCertificateCreateArgs} args - Arguments to create a MedicalCertificate.
     * @example
     * // Create one MedicalCertificate
     * const MedicalCertificate = await prisma.medicalCertificate.create({
     *   data: {
     *     // ... data to create a MedicalCertificate
     *   }
     * })
     * 
    **/
    create<T extends MedicalCertificateCreateArgs<ExtArgs>>(
      args: SelectSubset<T, MedicalCertificateCreateArgs<ExtArgs>>
    ): Prisma__MedicalCertificateClient<$Result.GetResult<Prisma.$MedicalCertificatePayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many MedicalCertificates.
     *     @param {MedicalCertificateCreateManyArgs} args - Arguments to create many MedicalCertificates.
     *     @example
     *     // Create many MedicalCertificates
     *     const medicalCertificate = await prisma.medicalCertificate.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends MedicalCertificateCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, MedicalCertificateCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a MedicalCertificate.
     * @param {MedicalCertificateDeleteArgs} args - Arguments to delete one MedicalCertificate.
     * @example
     * // Delete one MedicalCertificate
     * const MedicalCertificate = await prisma.medicalCertificate.delete({
     *   where: {
     *     // ... filter to delete one MedicalCertificate
     *   }
     * })
     * 
    **/
    delete<T extends MedicalCertificateDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, MedicalCertificateDeleteArgs<ExtArgs>>
    ): Prisma__MedicalCertificateClient<$Result.GetResult<Prisma.$MedicalCertificatePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one MedicalCertificate.
     * @param {MedicalCertificateUpdateArgs} args - Arguments to update one MedicalCertificate.
     * @example
     * // Update one MedicalCertificate
     * const medicalCertificate = await prisma.medicalCertificate.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends MedicalCertificateUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, MedicalCertificateUpdateArgs<ExtArgs>>
    ): Prisma__MedicalCertificateClient<$Result.GetResult<Prisma.$MedicalCertificatePayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more MedicalCertificates.
     * @param {MedicalCertificateDeleteManyArgs} args - Arguments to filter MedicalCertificates to delete.
     * @example
     * // Delete a few MedicalCertificates
     * const { count } = await prisma.medicalCertificate.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends MedicalCertificateDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, MedicalCertificateDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MedicalCertificates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicalCertificateUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MedicalCertificates
     * const medicalCertificate = await prisma.medicalCertificate.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends MedicalCertificateUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, MedicalCertificateUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one MedicalCertificate.
     * @param {MedicalCertificateUpsertArgs} args - Arguments to update or create a MedicalCertificate.
     * @example
     * // Update or create a MedicalCertificate
     * const medicalCertificate = await prisma.medicalCertificate.upsert({
     *   create: {
     *     // ... data to create a MedicalCertificate
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MedicalCertificate we want to update
     *   }
     * })
    **/
    upsert<T extends MedicalCertificateUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, MedicalCertificateUpsertArgs<ExtArgs>>
    ): Prisma__MedicalCertificateClient<$Result.GetResult<Prisma.$MedicalCertificatePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of MedicalCertificates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicalCertificateCountArgs} args - Arguments to filter MedicalCertificates to count.
     * @example
     * // Count the number of MedicalCertificates
     * const count = await prisma.medicalCertificate.count({
     *   where: {
     *     // ... the filter for the MedicalCertificates we want to count
     *   }
     * })
    **/
    count<T extends MedicalCertificateCountArgs>(
      args?: Subset<T, MedicalCertificateCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MedicalCertificateCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MedicalCertificate.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicalCertificateAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MedicalCertificateAggregateArgs>(args: Subset<T, MedicalCertificateAggregateArgs>): Prisma.PrismaPromise<GetMedicalCertificateAggregateType<T>>

    /**
     * Group by MedicalCertificate.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicalCertificateGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MedicalCertificateGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MedicalCertificateGroupByArgs['orderBy'] }
        : { orderBy?: MedicalCertificateGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MedicalCertificateGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMedicalCertificateGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MedicalCertificate model
   */
  readonly fields: MedicalCertificateFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MedicalCertificate.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MedicalCertificateClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    MedicalCertificateHistory<T extends MedicalCertificate$MedicalCertificateHistoryArgs<ExtArgs> = {}>(args?: Subset<T, MedicalCertificate$MedicalCertificateHistoryArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MedicalCertificateHistoryPayload<ExtArgs>, T, 'findMany'> | Null>;

    healthGroup<T extends HealthGroupDefaultArgs<ExtArgs> = {}>(args?: Subset<T, HealthGroupDefaultArgs<ExtArgs>>): Prisma__HealthGroupClient<$Result.GetResult<Prisma.$HealthGroupPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    physicalEducation<T extends PhysicalEducationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PhysicalEducationDefaultArgs<ExtArgs>>): Prisma__PhysicalEducationClient<$Result.GetResult<Prisma.$PhysicalEducationPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    student<T extends StudentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, StudentDefaultArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the MedicalCertificate model
   */ 
  interface MedicalCertificateFieldRefs {
    readonly id: FieldRef<"MedicalCertificate", 'Int'>
    readonly startDate: FieldRef<"MedicalCertificate", 'DateTime'>
    readonly finishDate: FieldRef<"MedicalCertificate", 'DateTime'>
    readonly studentId: FieldRef<"MedicalCertificate", 'Int'>
    readonly healthGroupId: FieldRef<"MedicalCertificate", 'Int'>
    readonly physicalEducationId: FieldRef<"MedicalCertificate", 'Int'>
    readonly createdAt: FieldRef<"MedicalCertificate", 'DateTime'>
    readonly updatedAt: FieldRef<"MedicalCertificate", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * MedicalCertificate findUnique
   */
  export type MedicalCertificateFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicalCertificate
     */
    select?: MedicalCertificateSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MedicalCertificateInclude<ExtArgs> | null
    /**
     * Filter, which MedicalCertificate to fetch.
     */
    where: MedicalCertificateWhereUniqueInput
  }


  /**
   * MedicalCertificate findUniqueOrThrow
   */
  export type MedicalCertificateFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicalCertificate
     */
    select?: MedicalCertificateSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MedicalCertificateInclude<ExtArgs> | null
    /**
     * Filter, which MedicalCertificate to fetch.
     */
    where: MedicalCertificateWhereUniqueInput
  }


  /**
   * MedicalCertificate findFirst
   */
  export type MedicalCertificateFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicalCertificate
     */
    select?: MedicalCertificateSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MedicalCertificateInclude<ExtArgs> | null
    /**
     * Filter, which MedicalCertificate to fetch.
     */
    where?: MedicalCertificateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MedicalCertificates to fetch.
     */
    orderBy?: MedicalCertificateOrderByWithRelationInput | MedicalCertificateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MedicalCertificates.
     */
    cursor?: MedicalCertificateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MedicalCertificates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MedicalCertificates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MedicalCertificates.
     */
    distinct?: MedicalCertificateScalarFieldEnum | MedicalCertificateScalarFieldEnum[]
  }


  /**
   * MedicalCertificate findFirstOrThrow
   */
  export type MedicalCertificateFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicalCertificate
     */
    select?: MedicalCertificateSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MedicalCertificateInclude<ExtArgs> | null
    /**
     * Filter, which MedicalCertificate to fetch.
     */
    where?: MedicalCertificateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MedicalCertificates to fetch.
     */
    orderBy?: MedicalCertificateOrderByWithRelationInput | MedicalCertificateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MedicalCertificates.
     */
    cursor?: MedicalCertificateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MedicalCertificates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MedicalCertificates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MedicalCertificates.
     */
    distinct?: MedicalCertificateScalarFieldEnum | MedicalCertificateScalarFieldEnum[]
  }


  /**
   * MedicalCertificate findMany
   */
  export type MedicalCertificateFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicalCertificate
     */
    select?: MedicalCertificateSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MedicalCertificateInclude<ExtArgs> | null
    /**
     * Filter, which MedicalCertificates to fetch.
     */
    where?: MedicalCertificateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MedicalCertificates to fetch.
     */
    orderBy?: MedicalCertificateOrderByWithRelationInput | MedicalCertificateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MedicalCertificates.
     */
    cursor?: MedicalCertificateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MedicalCertificates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MedicalCertificates.
     */
    skip?: number
    distinct?: MedicalCertificateScalarFieldEnum | MedicalCertificateScalarFieldEnum[]
  }


  /**
   * MedicalCertificate create
   */
  export type MedicalCertificateCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicalCertificate
     */
    select?: MedicalCertificateSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MedicalCertificateInclude<ExtArgs> | null
    /**
     * The data needed to create a MedicalCertificate.
     */
    data: XOR<MedicalCertificateCreateInput, MedicalCertificateUncheckedCreateInput>
  }


  /**
   * MedicalCertificate createMany
   */
  export type MedicalCertificateCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MedicalCertificates.
     */
    data: MedicalCertificateCreateManyInput | MedicalCertificateCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * MedicalCertificate update
   */
  export type MedicalCertificateUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicalCertificate
     */
    select?: MedicalCertificateSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MedicalCertificateInclude<ExtArgs> | null
    /**
     * The data needed to update a MedicalCertificate.
     */
    data: XOR<MedicalCertificateUpdateInput, MedicalCertificateUncheckedUpdateInput>
    /**
     * Choose, which MedicalCertificate to update.
     */
    where: MedicalCertificateWhereUniqueInput
  }


  /**
   * MedicalCertificate updateMany
   */
  export type MedicalCertificateUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MedicalCertificates.
     */
    data: XOR<MedicalCertificateUpdateManyMutationInput, MedicalCertificateUncheckedUpdateManyInput>
    /**
     * Filter which MedicalCertificates to update
     */
    where?: MedicalCertificateWhereInput
  }


  /**
   * MedicalCertificate upsert
   */
  export type MedicalCertificateUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicalCertificate
     */
    select?: MedicalCertificateSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MedicalCertificateInclude<ExtArgs> | null
    /**
     * The filter to search for the MedicalCertificate to update in case it exists.
     */
    where: MedicalCertificateWhereUniqueInput
    /**
     * In case the MedicalCertificate found by the `where` argument doesn't exist, create a new MedicalCertificate with this data.
     */
    create: XOR<MedicalCertificateCreateInput, MedicalCertificateUncheckedCreateInput>
    /**
     * In case the MedicalCertificate was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MedicalCertificateUpdateInput, MedicalCertificateUncheckedUpdateInput>
  }


  /**
   * MedicalCertificate delete
   */
  export type MedicalCertificateDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicalCertificate
     */
    select?: MedicalCertificateSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MedicalCertificateInclude<ExtArgs> | null
    /**
     * Filter which MedicalCertificate to delete.
     */
    where: MedicalCertificateWhereUniqueInput
  }


  /**
   * MedicalCertificate deleteMany
   */
  export type MedicalCertificateDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MedicalCertificates to delete
     */
    where?: MedicalCertificateWhereInput
  }


  /**
   * MedicalCertificate.MedicalCertificateHistory
   */
  export type MedicalCertificate$MedicalCertificateHistoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicalCertificateHistory
     */
    select?: MedicalCertificateHistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MedicalCertificateHistoryInclude<ExtArgs> | null
    where?: MedicalCertificateHistoryWhereInput
    orderBy?: MedicalCertificateHistoryOrderByWithRelationInput | MedicalCertificateHistoryOrderByWithRelationInput[]
    cursor?: MedicalCertificateHistoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MedicalCertificateHistoryScalarFieldEnum | MedicalCertificateHistoryScalarFieldEnum[]
  }


  /**
   * MedicalCertificate without action
   */
  export type MedicalCertificateDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicalCertificate
     */
    select?: MedicalCertificateSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MedicalCertificateInclude<ExtArgs> | null
  }



  /**
   * Model MedicalCertificateHistory
   */

  export type AggregateMedicalCertificateHistory = {
    _count: MedicalCertificateHistoryCountAggregateOutputType | null
    _avg: MedicalCertificateHistoryAvgAggregateOutputType | null
    _sum: MedicalCertificateHistorySumAggregateOutputType | null
    _min: MedicalCertificateHistoryMinAggregateOutputType | null
    _max: MedicalCertificateHistoryMaxAggregateOutputType | null
  }

  export type MedicalCertificateHistoryAvgAggregateOutputType = {
    id: number | null
    medicalCertificateId: number | null
    healthGroupId: number | null
    physicalEducationId: number | null
  }

  export type MedicalCertificateHistorySumAggregateOutputType = {
    id: number | null
    medicalCertificateId: number | null
    healthGroupId: number | null
    physicalEducationId: number | null
  }

  export type MedicalCertificateHistoryMinAggregateOutputType = {
    id: number | null
    medicalCertificateId: number | null
    startDate: Date | null
    finishDate: Date | null
    healthGroupId: number | null
    physicalEducationId: number | null
    createdAt: Date | null
  }

  export type MedicalCertificateHistoryMaxAggregateOutputType = {
    id: number | null
    medicalCertificateId: number | null
    startDate: Date | null
    finishDate: Date | null
    healthGroupId: number | null
    physicalEducationId: number | null
    createdAt: Date | null
  }

  export type MedicalCertificateHistoryCountAggregateOutputType = {
    id: number
    medicalCertificateId: number
    startDate: number
    finishDate: number
    healthGroupId: number
    physicalEducationId: number
    createdAt: number
    _all: number
  }


  export type MedicalCertificateHistoryAvgAggregateInputType = {
    id?: true
    medicalCertificateId?: true
    healthGroupId?: true
    physicalEducationId?: true
  }

  export type MedicalCertificateHistorySumAggregateInputType = {
    id?: true
    medicalCertificateId?: true
    healthGroupId?: true
    physicalEducationId?: true
  }

  export type MedicalCertificateHistoryMinAggregateInputType = {
    id?: true
    medicalCertificateId?: true
    startDate?: true
    finishDate?: true
    healthGroupId?: true
    physicalEducationId?: true
    createdAt?: true
  }

  export type MedicalCertificateHistoryMaxAggregateInputType = {
    id?: true
    medicalCertificateId?: true
    startDate?: true
    finishDate?: true
    healthGroupId?: true
    physicalEducationId?: true
    createdAt?: true
  }

  export type MedicalCertificateHistoryCountAggregateInputType = {
    id?: true
    medicalCertificateId?: true
    startDate?: true
    finishDate?: true
    healthGroupId?: true
    physicalEducationId?: true
    createdAt?: true
    _all?: true
  }

  export type MedicalCertificateHistoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MedicalCertificateHistory to aggregate.
     */
    where?: MedicalCertificateHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MedicalCertificateHistories to fetch.
     */
    orderBy?: MedicalCertificateHistoryOrderByWithRelationInput | MedicalCertificateHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MedicalCertificateHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MedicalCertificateHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MedicalCertificateHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MedicalCertificateHistories
    **/
    _count?: true | MedicalCertificateHistoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MedicalCertificateHistoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MedicalCertificateHistorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MedicalCertificateHistoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MedicalCertificateHistoryMaxAggregateInputType
  }

  export type GetMedicalCertificateHistoryAggregateType<T extends MedicalCertificateHistoryAggregateArgs> = {
        [P in keyof T & keyof AggregateMedicalCertificateHistory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMedicalCertificateHistory[P]>
      : GetScalarType<T[P], AggregateMedicalCertificateHistory[P]>
  }




  export type MedicalCertificateHistoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MedicalCertificateHistoryWhereInput
    orderBy?: MedicalCertificateHistoryOrderByWithAggregationInput | MedicalCertificateHistoryOrderByWithAggregationInput[]
    by: MedicalCertificateHistoryScalarFieldEnum[] | MedicalCertificateHistoryScalarFieldEnum
    having?: MedicalCertificateHistoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MedicalCertificateHistoryCountAggregateInputType | true
    _avg?: MedicalCertificateHistoryAvgAggregateInputType
    _sum?: MedicalCertificateHistorySumAggregateInputType
    _min?: MedicalCertificateHistoryMinAggregateInputType
    _max?: MedicalCertificateHistoryMaxAggregateInputType
  }

  export type MedicalCertificateHistoryGroupByOutputType = {
    id: number
    medicalCertificateId: number
    startDate: Date | null
    finishDate: Date | null
    healthGroupId: number | null
    physicalEducationId: number | null
    createdAt: Date
    _count: MedicalCertificateHistoryCountAggregateOutputType | null
    _avg: MedicalCertificateHistoryAvgAggregateOutputType | null
    _sum: MedicalCertificateHistorySumAggregateOutputType | null
    _min: MedicalCertificateHistoryMinAggregateOutputType | null
    _max: MedicalCertificateHistoryMaxAggregateOutputType | null
  }

  type GetMedicalCertificateHistoryGroupByPayload<T extends MedicalCertificateHistoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MedicalCertificateHistoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MedicalCertificateHistoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MedicalCertificateHistoryGroupByOutputType[P]>
            : GetScalarType<T[P], MedicalCertificateHistoryGroupByOutputType[P]>
        }
      >
    >


  export type MedicalCertificateHistorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    medicalCertificateId?: boolean
    startDate?: boolean
    finishDate?: boolean
    healthGroupId?: boolean
    physicalEducationId?: boolean
    createdAt?: boolean
    medicalCertificate?: boolean | MedicalCertificateDefaultArgs<ExtArgs>
    healthGroup?: boolean | MedicalCertificateHistory$healthGroupArgs<ExtArgs>
    physicalEducation?: boolean | MedicalCertificateHistory$physicalEducationArgs<ExtArgs>
  }, ExtArgs["result"]["medicalCertificateHistory"]>

  export type MedicalCertificateHistorySelectScalar = {
    id?: boolean
    medicalCertificateId?: boolean
    startDate?: boolean
    finishDate?: boolean
    healthGroupId?: boolean
    physicalEducationId?: boolean
    createdAt?: boolean
  }

  export type MedicalCertificateHistoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    medicalCertificate?: boolean | MedicalCertificateDefaultArgs<ExtArgs>
    healthGroup?: boolean | MedicalCertificateHistory$healthGroupArgs<ExtArgs>
    physicalEducation?: boolean | MedicalCertificateHistory$physicalEducationArgs<ExtArgs>
  }


  export type $MedicalCertificateHistoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MedicalCertificateHistory"
    objects: {
      medicalCertificate: Prisma.$MedicalCertificatePayload<ExtArgs>
      healthGroup: Prisma.$HealthGroupPayload<ExtArgs> | null
      physicalEducation: Prisma.$PhysicalEducationPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      medicalCertificateId: number
      startDate: Date | null
      finishDate: Date | null
      healthGroupId: number | null
      physicalEducationId: number | null
      createdAt: Date
    }, ExtArgs["result"]["medicalCertificateHistory"]>
    composites: {}
  }


  type MedicalCertificateHistoryGetPayload<S extends boolean | null | undefined | MedicalCertificateHistoryDefaultArgs> = $Result.GetResult<Prisma.$MedicalCertificateHistoryPayload, S>

  type MedicalCertificateHistoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<MedicalCertificateHistoryFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: MedicalCertificateHistoryCountAggregateInputType | true
    }

  export interface MedicalCertificateHistoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MedicalCertificateHistory'], meta: { name: 'MedicalCertificateHistory' } }
    /**
     * Find zero or one MedicalCertificateHistory that matches the filter.
     * @param {MedicalCertificateHistoryFindUniqueArgs} args - Arguments to find a MedicalCertificateHistory
     * @example
     * // Get one MedicalCertificateHistory
     * const medicalCertificateHistory = await prisma.medicalCertificateHistory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends MedicalCertificateHistoryFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, MedicalCertificateHistoryFindUniqueArgs<ExtArgs>>
    ): Prisma__MedicalCertificateHistoryClient<$Result.GetResult<Prisma.$MedicalCertificateHistoryPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one MedicalCertificateHistory that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {MedicalCertificateHistoryFindUniqueOrThrowArgs} args - Arguments to find a MedicalCertificateHistory
     * @example
     * // Get one MedicalCertificateHistory
     * const medicalCertificateHistory = await prisma.medicalCertificateHistory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends MedicalCertificateHistoryFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, MedicalCertificateHistoryFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__MedicalCertificateHistoryClient<$Result.GetResult<Prisma.$MedicalCertificateHistoryPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first MedicalCertificateHistory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicalCertificateHistoryFindFirstArgs} args - Arguments to find a MedicalCertificateHistory
     * @example
     * // Get one MedicalCertificateHistory
     * const medicalCertificateHistory = await prisma.medicalCertificateHistory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends MedicalCertificateHistoryFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, MedicalCertificateHistoryFindFirstArgs<ExtArgs>>
    ): Prisma__MedicalCertificateHistoryClient<$Result.GetResult<Prisma.$MedicalCertificateHistoryPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first MedicalCertificateHistory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicalCertificateHistoryFindFirstOrThrowArgs} args - Arguments to find a MedicalCertificateHistory
     * @example
     * // Get one MedicalCertificateHistory
     * const medicalCertificateHistory = await prisma.medicalCertificateHistory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends MedicalCertificateHistoryFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, MedicalCertificateHistoryFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__MedicalCertificateHistoryClient<$Result.GetResult<Prisma.$MedicalCertificateHistoryPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more MedicalCertificateHistories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicalCertificateHistoryFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MedicalCertificateHistories
     * const medicalCertificateHistories = await prisma.medicalCertificateHistory.findMany()
     * 
     * // Get first 10 MedicalCertificateHistories
     * const medicalCertificateHistories = await prisma.medicalCertificateHistory.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const medicalCertificateHistoryWithIdOnly = await prisma.medicalCertificateHistory.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends MedicalCertificateHistoryFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, MedicalCertificateHistoryFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MedicalCertificateHistoryPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a MedicalCertificateHistory.
     * @param {MedicalCertificateHistoryCreateArgs} args - Arguments to create a MedicalCertificateHistory.
     * @example
     * // Create one MedicalCertificateHistory
     * const MedicalCertificateHistory = await prisma.medicalCertificateHistory.create({
     *   data: {
     *     // ... data to create a MedicalCertificateHistory
     *   }
     * })
     * 
    **/
    create<T extends MedicalCertificateHistoryCreateArgs<ExtArgs>>(
      args: SelectSubset<T, MedicalCertificateHistoryCreateArgs<ExtArgs>>
    ): Prisma__MedicalCertificateHistoryClient<$Result.GetResult<Prisma.$MedicalCertificateHistoryPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many MedicalCertificateHistories.
     *     @param {MedicalCertificateHistoryCreateManyArgs} args - Arguments to create many MedicalCertificateHistories.
     *     @example
     *     // Create many MedicalCertificateHistories
     *     const medicalCertificateHistory = await prisma.medicalCertificateHistory.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends MedicalCertificateHistoryCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, MedicalCertificateHistoryCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a MedicalCertificateHistory.
     * @param {MedicalCertificateHistoryDeleteArgs} args - Arguments to delete one MedicalCertificateHistory.
     * @example
     * // Delete one MedicalCertificateHistory
     * const MedicalCertificateHistory = await prisma.medicalCertificateHistory.delete({
     *   where: {
     *     // ... filter to delete one MedicalCertificateHistory
     *   }
     * })
     * 
    **/
    delete<T extends MedicalCertificateHistoryDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, MedicalCertificateHistoryDeleteArgs<ExtArgs>>
    ): Prisma__MedicalCertificateHistoryClient<$Result.GetResult<Prisma.$MedicalCertificateHistoryPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one MedicalCertificateHistory.
     * @param {MedicalCertificateHistoryUpdateArgs} args - Arguments to update one MedicalCertificateHistory.
     * @example
     * // Update one MedicalCertificateHistory
     * const medicalCertificateHistory = await prisma.medicalCertificateHistory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends MedicalCertificateHistoryUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, MedicalCertificateHistoryUpdateArgs<ExtArgs>>
    ): Prisma__MedicalCertificateHistoryClient<$Result.GetResult<Prisma.$MedicalCertificateHistoryPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more MedicalCertificateHistories.
     * @param {MedicalCertificateHistoryDeleteManyArgs} args - Arguments to filter MedicalCertificateHistories to delete.
     * @example
     * // Delete a few MedicalCertificateHistories
     * const { count } = await prisma.medicalCertificateHistory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends MedicalCertificateHistoryDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, MedicalCertificateHistoryDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MedicalCertificateHistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicalCertificateHistoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MedicalCertificateHistories
     * const medicalCertificateHistory = await prisma.medicalCertificateHistory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends MedicalCertificateHistoryUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, MedicalCertificateHistoryUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one MedicalCertificateHistory.
     * @param {MedicalCertificateHistoryUpsertArgs} args - Arguments to update or create a MedicalCertificateHistory.
     * @example
     * // Update or create a MedicalCertificateHistory
     * const medicalCertificateHistory = await prisma.medicalCertificateHistory.upsert({
     *   create: {
     *     // ... data to create a MedicalCertificateHistory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MedicalCertificateHistory we want to update
     *   }
     * })
    **/
    upsert<T extends MedicalCertificateHistoryUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, MedicalCertificateHistoryUpsertArgs<ExtArgs>>
    ): Prisma__MedicalCertificateHistoryClient<$Result.GetResult<Prisma.$MedicalCertificateHistoryPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of MedicalCertificateHistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicalCertificateHistoryCountArgs} args - Arguments to filter MedicalCertificateHistories to count.
     * @example
     * // Count the number of MedicalCertificateHistories
     * const count = await prisma.medicalCertificateHistory.count({
     *   where: {
     *     // ... the filter for the MedicalCertificateHistories we want to count
     *   }
     * })
    **/
    count<T extends MedicalCertificateHistoryCountArgs>(
      args?: Subset<T, MedicalCertificateHistoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MedicalCertificateHistoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MedicalCertificateHistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicalCertificateHistoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MedicalCertificateHistoryAggregateArgs>(args: Subset<T, MedicalCertificateHistoryAggregateArgs>): Prisma.PrismaPromise<GetMedicalCertificateHistoryAggregateType<T>>

    /**
     * Group by MedicalCertificateHistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicalCertificateHistoryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MedicalCertificateHistoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MedicalCertificateHistoryGroupByArgs['orderBy'] }
        : { orderBy?: MedicalCertificateHistoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MedicalCertificateHistoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMedicalCertificateHistoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MedicalCertificateHistory model
   */
  readonly fields: MedicalCertificateHistoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MedicalCertificateHistory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MedicalCertificateHistoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    medicalCertificate<T extends MedicalCertificateDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MedicalCertificateDefaultArgs<ExtArgs>>): Prisma__MedicalCertificateClient<$Result.GetResult<Prisma.$MedicalCertificatePayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    healthGroup<T extends MedicalCertificateHistory$healthGroupArgs<ExtArgs> = {}>(args?: Subset<T, MedicalCertificateHistory$healthGroupArgs<ExtArgs>>): Prisma__HealthGroupClient<$Result.GetResult<Prisma.$HealthGroupPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    physicalEducation<T extends MedicalCertificateHistory$physicalEducationArgs<ExtArgs> = {}>(args?: Subset<T, MedicalCertificateHistory$physicalEducationArgs<ExtArgs>>): Prisma__PhysicalEducationClient<$Result.GetResult<Prisma.$PhysicalEducationPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the MedicalCertificateHistory model
   */ 
  interface MedicalCertificateHistoryFieldRefs {
    readonly id: FieldRef<"MedicalCertificateHistory", 'Int'>
    readonly medicalCertificateId: FieldRef<"MedicalCertificateHistory", 'Int'>
    readonly startDate: FieldRef<"MedicalCertificateHistory", 'DateTime'>
    readonly finishDate: FieldRef<"MedicalCertificateHistory", 'DateTime'>
    readonly healthGroupId: FieldRef<"MedicalCertificateHistory", 'Int'>
    readonly physicalEducationId: FieldRef<"MedicalCertificateHistory", 'Int'>
    readonly createdAt: FieldRef<"MedicalCertificateHistory", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * MedicalCertificateHistory findUnique
   */
  export type MedicalCertificateHistoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicalCertificateHistory
     */
    select?: MedicalCertificateHistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MedicalCertificateHistoryInclude<ExtArgs> | null
    /**
     * Filter, which MedicalCertificateHistory to fetch.
     */
    where: MedicalCertificateHistoryWhereUniqueInput
  }


  /**
   * MedicalCertificateHistory findUniqueOrThrow
   */
  export type MedicalCertificateHistoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicalCertificateHistory
     */
    select?: MedicalCertificateHistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MedicalCertificateHistoryInclude<ExtArgs> | null
    /**
     * Filter, which MedicalCertificateHistory to fetch.
     */
    where: MedicalCertificateHistoryWhereUniqueInput
  }


  /**
   * MedicalCertificateHistory findFirst
   */
  export type MedicalCertificateHistoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicalCertificateHistory
     */
    select?: MedicalCertificateHistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MedicalCertificateHistoryInclude<ExtArgs> | null
    /**
     * Filter, which MedicalCertificateHistory to fetch.
     */
    where?: MedicalCertificateHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MedicalCertificateHistories to fetch.
     */
    orderBy?: MedicalCertificateHistoryOrderByWithRelationInput | MedicalCertificateHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MedicalCertificateHistories.
     */
    cursor?: MedicalCertificateHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MedicalCertificateHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MedicalCertificateHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MedicalCertificateHistories.
     */
    distinct?: MedicalCertificateHistoryScalarFieldEnum | MedicalCertificateHistoryScalarFieldEnum[]
  }


  /**
   * MedicalCertificateHistory findFirstOrThrow
   */
  export type MedicalCertificateHistoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicalCertificateHistory
     */
    select?: MedicalCertificateHistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MedicalCertificateHistoryInclude<ExtArgs> | null
    /**
     * Filter, which MedicalCertificateHistory to fetch.
     */
    where?: MedicalCertificateHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MedicalCertificateHistories to fetch.
     */
    orderBy?: MedicalCertificateHistoryOrderByWithRelationInput | MedicalCertificateHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MedicalCertificateHistories.
     */
    cursor?: MedicalCertificateHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MedicalCertificateHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MedicalCertificateHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MedicalCertificateHistories.
     */
    distinct?: MedicalCertificateHistoryScalarFieldEnum | MedicalCertificateHistoryScalarFieldEnum[]
  }


  /**
   * MedicalCertificateHistory findMany
   */
  export type MedicalCertificateHistoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicalCertificateHistory
     */
    select?: MedicalCertificateHistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MedicalCertificateHistoryInclude<ExtArgs> | null
    /**
     * Filter, which MedicalCertificateHistories to fetch.
     */
    where?: MedicalCertificateHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MedicalCertificateHistories to fetch.
     */
    orderBy?: MedicalCertificateHistoryOrderByWithRelationInput | MedicalCertificateHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MedicalCertificateHistories.
     */
    cursor?: MedicalCertificateHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MedicalCertificateHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MedicalCertificateHistories.
     */
    skip?: number
    distinct?: MedicalCertificateHistoryScalarFieldEnum | MedicalCertificateHistoryScalarFieldEnum[]
  }


  /**
   * MedicalCertificateHistory create
   */
  export type MedicalCertificateHistoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicalCertificateHistory
     */
    select?: MedicalCertificateHistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MedicalCertificateHistoryInclude<ExtArgs> | null
    /**
     * The data needed to create a MedicalCertificateHistory.
     */
    data: XOR<MedicalCertificateHistoryCreateInput, MedicalCertificateHistoryUncheckedCreateInput>
  }


  /**
   * MedicalCertificateHistory createMany
   */
  export type MedicalCertificateHistoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MedicalCertificateHistories.
     */
    data: MedicalCertificateHistoryCreateManyInput | MedicalCertificateHistoryCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * MedicalCertificateHistory update
   */
  export type MedicalCertificateHistoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicalCertificateHistory
     */
    select?: MedicalCertificateHistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MedicalCertificateHistoryInclude<ExtArgs> | null
    /**
     * The data needed to update a MedicalCertificateHistory.
     */
    data: XOR<MedicalCertificateHistoryUpdateInput, MedicalCertificateHistoryUncheckedUpdateInput>
    /**
     * Choose, which MedicalCertificateHistory to update.
     */
    where: MedicalCertificateHistoryWhereUniqueInput
  }


  /**
   * MedicalCertificateHistory updateMany
   */
  export type MedicalCertificateHistoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MedicalCertificateHistories.
     */
    data: XOR<MedicalCertificateHistoryUpdateManyMutationInput, MedicalCertificateHistoryUncheckedUpdateManyInput>
    /**
     * Filter which MedicalCertificateHistories to update
     */
    where?: MedicalCertificateHistoryWhereInput
  }


  /**
   * MedicalCertificateHistory upsert
   */
  export type MedicalCertificateHistoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicalCertificateHistory
     */
    select?: MedicalCertificateHistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MedicalCertificateHistoryInclude<ExtArgs> | null
    /**
     * The filter to search for the MedicalCertificateHistory to update in case it exists.
     */
    where: MedicalCertificateHistoryWhereUniqueInput
    /**
     * In case the MedicalCertificateHistory found by the `where` argument doesn't exist, create a new MedicalCertificateHistory with this data.
     */
    create: XOR<MedicalCertificateHistoryCreateInput, MedicalCertificateHistoryUncheckedCreateInput>
    /**
     * In case the MedicalCertificateHistory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MedicalCertificateHistoryUpdateInput, MedicalCertificateHistoryUncheckedUpdateInput>
  }


  /**
   * MedicalCertificateHistory delete
   */
  export type MedicalCertificateHistoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicalCertificateHistory
     */
    select?: MedicalCertificateHistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MedicalCertificateHistoryInclude<ExtArgs> | null
    /**
     * Filter which MedicalCertificateHistory to delete.
     */
    where: MedicalCertificateHistoryWhereUniqueInput
  }


  /**
   * MedicalCertificateHistory deleteMany
   */
  export type MedicalCertificateHistoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MedicalCertificateHistories to delete
     */
    where?: MedicalCertificateHistoryWhereInput
  }


  /**
   * MedicalCertificateHistory.healthGroup
   */
  export type MedicalCertificateHistory$healthGroupArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HealthGroup
     */
    select?: HealthGroupSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: HealthGroupInclude<ExtArgs> | null
    where?: HealthGroupWhereInput
  }


  /**
   * MedicalCertificateHistory.physicalEducation
   */
  export type MedicalCertificateHistory$physicalEducationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PhysicalEducation
     */
    select?: PhysicalEducationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PhysicalEducationInclude<ExtArgs> | null
    where?: PhysicalEducationWhereInput
  }


  /**
   * MedicalCertificateHistory without action
   */
  export type MedicalCertificateHistoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicalCertificateHistory
     */
    select?: MedicalCertificateHistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MedicalCertificateHistoryInclude<ExtArgs> | null
  }



  /**
   * Model Group
   */

  export type AggregateGroup = {
    _count: GroupCountAggregateOutputType | null
    _avg: GroupAvgAggregateOutputType | null
    _sum: GroupSumAggregateOutputType | null
    _min: GroupMinAggregateOutputType | null
    _max: GroupMaxAggregateOutputType | null
  }

  export type GroupAvgAggregateOutputType = {
    id: number | null
    courseId: number | null
  }

  export type GroupSumAggregateOutputType = {
    id: number | null
    courseId: number | null
  }

  export type GroupMinAggregateOutputType = {
    id: number | null
    name: string | null
    courseId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type GroupMaxAggregateOutputType = {
    id: number | null
    name: string | null
    courseId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type GroupCountAggregateOutputType = {
    id: number
    name: number
    courseId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type GroupAvgAggregateInputType = {
    id?: true
    courseId?: true
  }

  export type GroupSumAggregateInputType = {
    id?: true
    courseId?: true
  }

  export type GroupMinAggregateInputType = {
    id?: true
    name?: true
    courseId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type GroupMaxAggregateInputType = {
    id?: true
    name?: true
    courseId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type GroupCountAggregateInputType = {
    id?: true
    name?: true
    courseId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type GroupAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Group to aggregate.
     */
    where?: GroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Groups to fetch.
     */
    orderBy?: GroupOrderByWithRelationInput | GroupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Groups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Groups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Groups
    **/
    _count?: true | GroupCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GroupAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GroupSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GroupMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GroupMaxAggregateInputType
  }

  export type GetGroupAggregateType<T extends GroupAggregateArgs> = {
        [P in keyof T & keyof AggregateGroup]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGroup[P]>
      : GetScalarType<T[P], AggregateGroup[P]>
  }




  export type GroupGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GroupWhereInput
    orderBy?: GroupOrderByWithAggregationInput | GroupOrderByWithAggregationInput[]
    by: GroupScalarFieldEnum[] | GroupScalarFieldEnum
    having?: GroupScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GroupCountAggregateInputType | true
    _avg?: GroupAvgAggregateInputType
    _sum?: GroupSumAggregateInputType
    _min?: GroupMinAggregateInputType
    _max?: GroupMaxAggregateInputType
  }

  export type GroupGroupByOutputType = {
    id: number
    name: string
    courseId: number
    createdAt: Date
    updatedAt: Date
    _count: GroupCountAggregateOutputType | null
    _avg: GroupAvgAggregateOutputType | null
    _sum: GroupSumAggregateOutputType | null
    _min: GroupMinAggregateOutputType | null
    _max: GroupMaxAggregateOutputType | null
  }

  type GetGroupGroupByPayload<T extends GroupGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GroupGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GroupGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GroupGroupByOutputType[P]>
            : GetScalarType<T[P], GroupGroupByOutputType[P]>
        }
      >
    >


  export type GroupSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    courseId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    course?: boolean | CourseDefaultArgs<ExtArgs>
    students?: boolean | Group$studentsArgs<ExtArgs>
    User?: boolean | Group$UserArgs<ExtArgs>
    StudentHistory?: boolean | Group$StudentHistoryArgs<ExtArgs>
    _count?: boolean | GroupCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["group"]>

  export type GroupSelectScalar = {
    id?: boolean
    name?: boolean
    courseId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type GroupInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    course?: boolean | CourseDefaultArgs<ExtArgs>
    students?: boolean | Group$studentsArgs<ExtArgs>
    User?: boolean | Group$UserArgs<ExtArgs>
    StudentHistory?: boolean | Group$StudentHistoryArgs<ExtArgs>
    _count?: boolean | GroupCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $GroupPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Group"
    objects: {
      course: Prisma.$CoursePayload<ExtArgs>
      students: Prisma.$StudentPayload<ExtArgs>[]
      User: Prisma.$UserPayload<ExtArgs>[]
      StudentHistory: Prisma.$StudentHistoryPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      courseId: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["group"]>
    composites: {}
  }


  type GroupGetPayload<S extends boolean | null | undefined | GroupDefaultArgs> = $Result.GetResult<Prisma.$GroupPayload, S>

  type GroupCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<GroupFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: GroupCountAggregateInputType | true
    }

  export interface GroupDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Group'], meta: { name: 'Group' } }
    /**
     * Find zero or one Group that matches the filter.
     * @param {GroupFindUniqueArgs} args - Arguments to find a Group
     * @example
     * // Get one Group
     * const group = await prisma.group.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends GroupFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, GroupFindUniqueArgs<ExtArgs>>
    ): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Group that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {GroupFindUniqueOrThrowArgs} args - Arguments to find a Group
     * @example
     * // Get one Group
     * const group = await prisma.group.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends GroupFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, GroupFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Group that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupFindFirstArgs} args - Arguments to find a Group
     * @example
     * // Get one Group
     * const group = await prisma.group.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends GroupFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, GroupFindFirstArgs<ExtArgs>>
    ): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Group that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupFindFirstOrThrowArgs} args - Arguments to find a Group
     * @example
     * // Get one Group
     * const group = await prisma.group.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends GroupFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, GroupFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Groups that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Groups
     * const groups = await prisma.group.findMany()
     * 
     * // Get first 10 Groups
     * const groups = await prisma.group.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const groupWithIdOnly = await prisma.group.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends GroupFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, GroupFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Group.
     * @param {GroupCreateArgs} args - Arguments to create a Group.
     * @example
     * // Create one Group
     * const Group = await prisma.group.create({
     *   data: {
     *     // ... data to create a Group
     *   }
     * })
     * 
    **/
    create<T extends GroupCreateArgs<ExtArgs>>(
      args: SelectSubset<T, GroupCreateArgs<ExtArgs>>
    ): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Groups.
     *     @param {GroupCreateManyArgs} args - Arguments to create many Groups.
     *     @example
     *     // Create many Groups
     *     const group = await prisma.group.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends GroupCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, GroupCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Group.
     * @param {GroupDeleteArgs} args - Arguments to delete one Group.
     * @example
     * // Delete one Group
     * const Group = await prisma.group.delete({
     *   where: {
     *     // ... filter to delete one Group
     *   }
     * })
     * 
    **/
    delete<T extends GroupDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, GroupDeleteArgs<ExtArgs>>
    ): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Group.
     * @param {GroupUpdateArgs} args - Arguments to update one Group.
     * @example
     * // Update one Group
     * const group = await prisma.group.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends GroupUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, GroupUpdateArgs<ExtArgs>>
    ): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Groups.
     * @param {GroupDeleteManyArgs} args - Arguments to filter Groups to delete.
     * @example
     * // Delete a few Groups
     * const { count } = await prisma.group.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends GroupDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, GroupDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Groups.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Groups
     * const group = await prisma.group.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends GroupUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, GroupUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Group.
     * @param {GroupUpsertArgs} args - Arguments to update or create a Group.
     * @example
     * // Update or create a Group
     * const group = await prisma.group.upsert({
     *   create: {
     *     // ... data to create a Group
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Group we want to update
     *   }
     * })
    **/
    upsert<T extends GroupUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, GroupUpsertArgs<ExtArgs>>
    ): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Groups.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupCountArgs} args - Arguments to filter Groups to count.
     * @example
     * // Count the number of Groups
     * const count = await prisma.group.count({
     *   where: {
     *     // ... the filter for the Groups we want to count
     *   }
     * })
    **/
    count<T extends GroupCountArgs>(
      args?: Subset<T, GroupCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GroupCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Group.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends GroupAggregateArgs>(args: Subset<T, GroupAggregateArgs>): Prisma.PrismaPromise<GetGroupAggregateType<T>>

    /**
     * Group by Group.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends GroupGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GroupGroupByArgs['orderBy'] }
        : { orderBy?: GroupGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, GroupGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGroupGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Group model
   */
  readonly fields: GroupFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Group.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GroupClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    course<T extends CourseDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CourseDefaultArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    students<T extends Group$studentsArgs<ExtArgs> = {}>(args?: Subset<T, Group$studentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, 'findMany'> | Null>;

    User<T extends Group$UserArgs<ExtArgs> = {}>(args?: Subset<T, Group$UserArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findMany'> | Null>;

    StudentHistory<T extends Group$StudentHistoryArgs<ExtArgs> = {}>(args?: Subset<T, Group$StudentHistoryArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentHistoryPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Group model
   */ 
  interface GroupFieldRefs {
    readonly id: FieldRef<"Group", 'Int'>
    readonly name: FieldRef<"Group", 'String'>
    readonly courseId: FieldRef<"Group", 'Int'>
    readonly createdAt: FieldRef<"Group", 'DateTime'>
    readonly updatedAt: FieldRef<"Group", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * Group findUnique
   */
  export type GroupFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GroupInclude<ExtArgs> | null
    /**
     * Filter, which Group to fetch.
     */
    where: GroupWhereUniqueInput
  }


  /**
   * Group findUniqueOrThrow
   */
  export type GroupFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GroupInclude<ExtArgs> | null
    /**
     * Filter, which Group to fetch.
     */
    where: GroupWhereUniqueInput
  }


  /**
   * Group findFirst
   */
  export type GroupFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GroupInclude<ExtArgs> | null
    /**
     * Filter, which Group to fetch.
     */
    where?: GroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Groups to fetch.
     */
    orderBy?: GroupOrderByWithRelationInput | GroupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Groups.
     */
    cursor?: GroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Groups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Groups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Groups.
     */
    distinct?: GroupScalarFieldEnum | GroupScalarFieldEnum[]
  }


  /**
   * Group findFirstOrThrow
   */
  export type GroupFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GroupInclude<ExtArgs> | null
    /**
     * Filter, which Group to fetch.
     */
    where?: GroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Groups to fetch.
     */
    orderBy?: GroupOrderByWithRelationInput | GroupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Groups.
     */
    cursor?: GroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Groups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Groups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Groups.
     */
    distinct?: GroupScalarFieldEnum | GroupScalarFieldEnum[]
  }


  /**
   * Group findMany
   */
  export type GroupFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GroupInclude<ExtArgs> | null
    /**
     * Filter, which Groups to fetch.
     */
    where?: GroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Groups to fetch.
     */
    orderBy?: GroupOrderByWithRelationInput | GroupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Groups.
     */
    cursor?: GroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Groups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Groups.
     */
    skip?: number
    distinct?: GroupScalarFieldEnum | GroupScalarFieldEnum[]
  }


  /**
   * Group create
   */
  export type GroupCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GroupInclude<ExtArgs> | null
    /**
     * The data needed to create a Group.
     */
    data: XOR<GroupCreateInput, GroupUncheckedCreateInput>
  }


  /**
   * Group createMany
   */
  export type GroupCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Groups.
     */
    data: GroupCreateManyInput | GroupCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Group update
   */
  export type GroupUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GroupInclude<ExtArgs> | null
    /**
     * The data needed to update a Group.
     */
    data: XOR<GroupUpdateInput, GroupUncheckedUpdateInput>
    /**
     * Choose, which Group to update.
     */
    where: GroupWhereUniqueInput
  }


  /**
   * Group updateMany
   */
  export type GroupUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Groups.
     */
    data: XOR<GroupUpdateManyMutationInput, GroupUncheckedUpdateManyInput>
    /**
     * Filter which Groups to update
     */
    where?: GroupWhereInput
  }


  /**
   * Group upsert
   */
  export type GroupUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GroupInclude<ExtArgs> | null
    /**
     * The filter to search for the Group to update in case it exists.
     */
    where: GroupWhereUniqueInput
    /**
     * In case the Group found by the `where` argument doesn't exist, create a new Group with this data.
     */
    create: XOR<GroupCreateInput, GroupUncheckedCreateInput>
    /**
     * In case the Group was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GroupUpdateInput, GroupUncheckedUpdateInput>
  }


  /**
   * Group delete
   */
  export type GroupDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GroupInclude<ExtArgs> | null
    /**
     * Filter which Group to delete.
     */
    where: GroupWhereUniqueInput
  }


  /**
   * Group deleteMany
   */
  export type GroupDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Groups to delete
     */
    where?: GroupWhereInput
  }


  /**
   * Group.students
   */
  export type Group$studentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StudentInclude<ExtArgs> | null
    where?: StudentWhereInput
    orderBy?: StudentOrderByWithRelationInput | StudentOrderByWithRelationInput[]
    cursor?: StudentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StudentScalarFieldEnum | StudentScalarFieldEnum[]
  }


  /**
   * Group.User
   */
  export type Group$UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }


  /**
   * Group.StudentHistory
   */
  export type Group$StudentHistoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentHistory
     */
    select?: StudentHistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StudentHistoryInclude<ExtArgs> | null
    where?: StudentHistoryWhereInput
    orderBy?: StudentHistoryOrderByWithRelationInput | StudentHistoryOrderByWithRelationInput[]
    cursor?: StudentHistoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StudentHistoryScalarFieldEnum | StudentHistoryScalarFieldEnum[]
  }


  /**
   * Group without action
   */
  export type GroupDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GroupInclude<ExtArgs> | null
  }



  /**
   * Model Department
   */

  export type AggregateDepartment = {
    _count: DepartmentCountAggregateOutputType | null
    _avg: DepartmentAvgAggregateOutputType | null
    _sum: DepartmentSumAggregateOutputType | null
    _min: DepartmentMinAggregateOutputType | null
    _max: DepartmentMaxAggregateOutputType | null
  }

  export type DepartmentAvgAggregateOutputType = {
    id: number | null
  }

  export type DepartmentSumAggregateOutputType = {
    id: number | null
  }

  export type DepartmentMinAggregateOutputType = {
    id: number | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DepartmentMaxAggregateOutputType = {
    id: number | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DepartmentCountAggregateOutputType = {
    id: number
    name: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type DepartmentAvgAggregateInputType = {
    id?: true
  }

  export type DepartmentSumAggregateInputType = {
    id?: true
  }

  export type DepartmentMinAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DepartmentMaxAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DepartmentCountAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type DepartmentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Department to aggregate.
     */
    where?: DepartmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Departments to fetch.
     */
    orderBy?: DepartmentOrderByWithRelationInput | DepartmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DepartmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Departments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Departments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Departments
    **/
    _count?: true | DepartmentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DepartmentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DepartmentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DepartmentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DepartmentMaxAggregateInputType
  }

  export type GetDepartmentAggregateType<T extends DepartmentAggregateArgs> = {
        [P in keyof T & keyof AggregateDepartment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDepartment[P]>
      : GetScalarType<T[P], AggregateDepartment[P]>
  }




  export type DepartmentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DepartmentWhereInput
    orderBy?: DepartmentOrderByWithAggregationInput | DepartmentOrderByWithAggregationInput[]
    by: DepartmentScalarFieldEnum[] | DepartmentScalarFieldEnum
    having?: DepartmentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DepartmentCountAggregateInputType | true
    _avg?: DepartmentAvgAggregateInputType
    _sum?: DepartmentSumAggregateInputType
    _min?: DepartmentMinAggregateInputType
    _max?: DepartmentMaxAggregateInputType
  }

  export type DepartmentGroupByOutputType = {
    id: number
    name: string
    createdAt: Date
    updatedAt: Date
    _count: DepartmentCountAggregateOutputType | null
    _avg: DepartmentAvgAggregateOutputType | null
    _sum: DepartmentSumAggregateOutputType | null
    _min: DepartmentMinAggregateOutputType | null
    _max: DepartmentMaxAggregateOutputType | null
  }

  type GetDepartmentGroupByPayload<T extends DepartmentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DepartmentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DepartmentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DepartmentGroupByOutputType[P]>
            : GetScalarType<T[P], DepartmentGroupByOutputType[P]>
        }
      >
    >


  export type DepartmentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    courses?: boolean | Department$coursesArgs<ExtArgs>
    _count?: boolean | DepartmentCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["department"]>

  export type DepartmentSelectScalar = {
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type DepartmentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    courses?: boolean | Department$coursesArgs<ExtArgs>
    _count?: boolean | DepartmentCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $DepartmentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Department"
    objects: {
      courses: Prisma.$CoursePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["department"]>
    composites: {}
  }


  type DepartmentGetPayload<S extends boolean | null | undefined | DepartmentDefaultArgs> = $Result.GetResult<Prisma.$DepartmentPayload, S>

  type DepartmentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<DepartmentFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: DepartmentCountAggregateInputType | true
    }

  export interface DepartmentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Department'], meta: { name: 'Department' } }
    /**
     * Find zero or one Department that matches the filter.
     * @param {DepartmentFindUniqueArgs} args - Arguments to find a Department
     * @example
     * // Get one Department
     * const department = await prisma.department.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends DepartmentFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, DepartmentFindUniqueArgs<ExtArgs>>
    ): Prisma__DepartmentClient<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Department that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {DepartmentFindUniqueOrThrowArgs} args - Arguments to find a Department
     * @example
     * // Get one Department
     * const department = await prisma.department.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends DepartmentFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, DepartmentFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__DepartmentClient<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Department that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepartmentFindFirstArgs} args - Arguments to find a Department
     * @example
     * // Get one Department
     * const department = await prisma.department.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends DepartmentFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, DepartmentFindFirstArgs<ExtArgs>>
    ): Prisma__DepartmentClient<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Department that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepartmentFindFirstOrThrowArgs} args - Arguments to find a Department
     * @example
     * // Get one Department
     * const department = await prisma.department.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends DepartmentFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, DepartmentFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__DepartmentClient<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Departments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepartmentFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Departments
     * const departments = await prisma.department.findMany()
     * 
     * // Get first 10 Departments
     * const departments = await prisma.department.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const departmentWithIdOnly = await prisma.department.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends DepartmentFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, DepartmentFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Department.
     * @param {DepartmentCreateArgs} args - Arguments to create a Department.
     * @example
     * // Create one Department
     * const Department = await prisma.department.create({
     *   data: {
     *     // ... data to create a Department
     *   }
     * })
     * 
    **/
    create<T extends DepartmentCreateArgs<ExtArgs>>(
      args: SelectSubset<T, DepartmentCreateArgs<ExtArgs>>
    ): Prisma__DepartmentClient<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Departments.
     *     @param {DepartmentCreateManyArgs} args - Arguments to create many Departments.
     *     @example
     *     // Create many Departments
     *     const department = await prisma.department.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends DepartmentCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, DepartmentCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Department.
     * @param {DepartmentDeleteArgs} args - Arguments to delete one Department.
     * @example
     * // Delete one Department
     * const Department = await prisma.department.delete({
     *   where: {
     *     // ... filter to delete one Department
     *   }
     * })
     * 
    **/
    delete<T extends DepartmentDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, DepartmentDeleteArgs<ExtArgs>>
    ): Prisma__DepartmentClient<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Department.
     * @param {DepartmentUpdateArgs} args - Arguments to update one Department.
     * @example
     * // Update one Department
     * const department = await prisma.department.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends DepartmentUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, DepartmentUpdateArgs<ExtArgs>>
    ): Prisma__DepartmentClient<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Departments.
     * @param {DepartmentDeleteManyArgs} args - Arguments to filter Departments to delete.
     * @example
     * // Delete a few Departments
     * const { count } = await prisma.department.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends DepartmentDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, DepartmentDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Departments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepartmentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Departments
     * const department = await prisma.department.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends DepartmentUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, DepartmentUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Department.
     * @param {DepartmentUpsertArgs} args - Arguments to update or create a Department.
     * @example
     * // Update or create a Department
     * const department = await prisma.department.upsert({
     *   create: {
     *     // ... data to create a Department
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Department we want to update
     *   }
     * })
    **/
    upsert<T extends DepartmentUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, DepartmentUpsertArgs<ExtArgs>>
    ): Prisma__DepartmentClient<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Departments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepartmentCountArgs} args - Arguments to filter Departments to count.
     * @example
     * // Count the number of Departments
     * const count = await prisma.department.count({
     *   where: {
     *     // ... the filter for the Departments we want to count
     *   }
     * })
    **/
    count<T extends DepartmentCountArgs>(
      args?: Subset<T, DepartmentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DepartmentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Department.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepartmentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DepartmentAggregateArgs>(args: Subset<T, DepartmentAggregateArgs>): Prisma.PrismaPromise<GetDepartmentAggregateType<T>>

    /**
     * Group by Department.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepartmentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DepartmentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DepartmentGroupByArgs['orderBy'] }
        : { orderBy?: DepartmentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DepartmentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDepartmentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Department model
   */
  readonly fields: DepartmentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Department.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DepartmentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    courses<T extends Department$coursesArgs<ExtArgs> = {}>(args?: Subset<T, Department$coursesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Department model
   */ 
  interface DepartmentFieldRefs {
    readonly id: FieldRef<"Department", 'Int'>
    readonly name: FieldRef<"Department", 'String'>
    readonly createdAt: FieldRef<"Department", 'DateTime'>
    readonly updatedAt: FieldRef<"Department", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * Department findUnique
   */
  export type DepartmentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DepartmentInclude<ExtArgs> | null
    /**
     * Filter, which Department to fetch.
     */
    where: DepartmentWhereUniqueInput
  }


  /**
   * Department findUniqueOrThrow
   */
  export type DepartmentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DepartmentInclude<ExtArgs> | null
    /**
     * Filter, which Department to fetch.
     */
    where: DepartmentWhereUniqueInput
  }


  /**
   * Department findFirst
   */
  export type DepartmentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DepartmentInclude<ExtArgs> | null
    /**
     * Filter, which Department to fetch.
     */
    where?: DepartmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Departments to fetch.
     */
    orderBy?: DepartmentOrderByWithRelationInput | DepartmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Departments.
     */
    cursor?: DepartmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Departments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Departments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Departments.
     */
    distinct?: DepartmentScalarFieldEnum | DepartmentScalarFieldEnum[]
  }


  /**
   * Department findFirstOrThrow
   */
  export type DepartmentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DepartmentInclude<ExtArgs> | null
    /**
     * Filter, which Department to fetch.
     */
    where?: DepartmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Departments to fetch.
     */
    orderBy?: DepartmentOrderByWithRelationInput | DepartmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Departments.
     */
    cursor?: DepartmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Departments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Departments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Departments.
     */
    distinct?: DepartmentScalarFieldEnum | DepartmentScalarFieldEnum[]
  }


  /**
   * Department findMany
   */
  export type DepartmentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DepartmentInclude<ExtArgs> | null
    /**
     * Filter, which Departments to fetch.
     */
    where?: DepartmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Departments to fetch.
     */
    orderBy?: DepartmentOrderByWithRelationInput | DepartmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Departments.
     */
    cursor?: DepartmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Departments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Departments.
     */
    skip?: number
    distinct?: DepartmentScalarFieldEnum | DepartmentScalarFieldEnum[]
  }


  /**
   * Department create
   */
  export type DepartmentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DepartmentInclude<ExtArgs> | null
    /**
     * The data needed to create a Department.
     */
    data: XOR<DepartmentCreateInput, DepartmentUncheckedCreateInput>
  }


  /**
   * Department createMany
   */
  export type DepartmentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Departments.
     */
    data: DepartmentCreateManyInput | DepartmentCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Department update
   */
  export type DepartmentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DepartmentInclude<ExtArgs> | null
    /**
     * The data needed to update a Department.
     */
    data: XOR<DepartmentUpdateInput, DepartmentUncheckedUpdateInput>
    /**
     * Choose, which Department to update.
     */
    where: DepartmentWhereUniqueInput
  }


  /**
   * Department updateMany
   */
  export type DepartmentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Departments.
     */
    data: XOR<DepartmentUpdateManyMutationInput, DepartmentUncheckedUpdateManyInput>
    /**
     * Filter which Departments to update
     */
    where?: DepartmentWhereInput
  }


  /**
   * Department upsert
   */
  export type DepartmentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DepartmentInclude<ExtArgs> | null
    /**
     * The filter to search for the Department to update in case it exists.
     */
    where: DepartmentWhereUniqueInput
    /**
     * In case the Department found by the `where` argument doesn't exist, create a new Department with this data.
     */
    create: XOR<DepartmentCreateInput, DepartmentUncheckedCreateInput>
    /**
     * In case the Department was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DepartmentUpdateInput, DepartmentUncheckedUpdateInput>
  }


  /**
   * Department delete
   */
  export type DepartmentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DepartmentInclude<ExtArgs> | null
    /**
     * Filter which Department to delete.
     */
    where: DepartmentWhereUniqueInput
  }


  /**
   * Department deleteMany
   */
  export type DepartmentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Departments to delete
     */
    where?: DepartmentWhereInput
  }


  /**
   * Department.courses
   */
  export type Department$coursesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CourseInclude<ExtArgs> | null
    where?: CourseWhereInput
    orderBy?: CourseOrderByWithRelationInput | CourseOrderByWithRelationInput[]
    cursor?: CourseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CourseScalarFieldEnum | CourseScalarFieldEnum[]
  }


  /**
   * Department without action
   */
  export type DepartmentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DepartmentInclude<ExtArgs> | null
  }



  /**
   * Model Course
   */

  export type AggregateCourse = {
    _count: CourseCountAggregateOutputType | null
    _avg: CourseAvgAggregateOutputType | null
    _sum: CourseSumAggregateOutputType | null
    _min: CourseMinAggregateOutputType | null
    _max: CourseMaxAggregateOutputType | null
  }

  export type CourseAvgAggregateOutputType = {
    id: number | null
    number: number | null
    departmentId: number | null
  }

  export type CourseSumAggregateOutputType = {
    id: number | null
    number: number | null
    departmentId: number | null
  }

  export type CourseMinAggregateOutputType = {
    id: number | null
    number: number | null
    departmentId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CourseMaxAggregateOutputType = {
    id: number | null
    number: number | null
    departmentId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CourseCountAggregateOutputType = {
    id: number
    number: number
    departmentId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CourseAvgAggregateInputType = {
    id?: true
    number?: true
    departmentId?: true
  }

  export type CourseSumAggregateInputType = {
    id?: true
    number?: true
    departmentId?: true
  }

  export type CourseMinAggregateInputType = {
    id?: true
    number?: true
    departmentId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CourseMaxAggregateInputType = {
    id?: true
    number?: true
    departmentId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CourseCountAggregateInputType = {
    id?: true
    number?: true
    departmentId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CourseAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Course to aggregate.
     */
    where?: CourseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Courses to fetch.
     */
    orderBy?: CourseOrderByWithRelationInput | CourseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CourseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Courses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Courses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Courses
    **/
    _count?: true | CourseCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CourseAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CourseSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CourseMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CourseMaxAggregateInputType
  }

  export type GetCourseAggregateType<T extends CourseAggregateArgs> = {
        [P in keyof T & keyof AggregateCourse]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCourse[P]>
      : GetScalarType<T[P], AggregateCourse[P]>
  }




  export type CourseGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CourseWhereInput
    orderBy?: CourseOrderByWithAggregationInput | CourseOrderByWithAggregationInput[]
    by: CourseScalarFieldEnum[] | CourseScalarFieldEnum
    having?: CourseScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CourseCountAggregateInputType | true
    _avg?: CourseAvgAggregateInputType
    _sum?: CourseSumAggregateInputType
    _min?: CourseMinAggregateInputType
    _max?: CourseMaxAggregateInputType
  }

  export type CourseGroupByOutputType = {
    id: number
    number: number
    departmentId: number
    createdAt: Date
    updatedAt: Date
    _count: CourseCountAggregateOutputType | null
    _avg: CourseAvgAggregateOutputType | null
    _sum: CourseSumAggregateOutputType | null
    _min: CourseMinAggregateOutputType | null
    _max: CourseMaxAggregateOutputType | null
  }

  type GetCourseGroupByPayload<T extends CourseGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CourseGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CourseGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CourseGroupByOutputType[P]>
            : GetScalarType<T[P], CourseGroupByOutputType[P]>
        }
      >
    >


  export type CourseSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    number?: boolean
    departmentId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    department?: boolean | DepartmentDefaultArgs<ExtArgs>
    groups?: boolean | Course$groupsArgs<ExtArgs>
    _count?: boolean | CourseCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["course"]>

  export type CourseSelectScalar = {
    id?: boolean
    number?: boolean
    departmentId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CourseInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    department?: boolean | DepartmentDefaultArgs<ExtArgs>
    groups?: boolean | Course$groupsArgs<ExtArgs>
    _count?: boolean | CourseCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $CoursePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Course"
    objects: {
      department: Prisma.$DepartmentPayload<ExtArgs>
      groups: Prisma.$GroupPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      number: number
      departmentId: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["course"]>
    composites: {}
  }


  type CourseGetPayload<S extends boolean | null | undefined | CourseDefaultArgs> = $Result.GetResult<Prisma.$CoursePayload, S>

  type CourseCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<CourseFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: CourseCountAggregateInputType | true
    }

  export interface CourseDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Course'], meta: { name: 'Course' } }
    /**
     * Find zero or one Course that matches the filter.
     * @param {CourseFindUniqueArgs} args - Arguments to find a Course
     * @example
     * // Get one Course
     * const course = await prisma.course.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends CourseFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, CourseFindUniqueArgs<ExtArgs>>
    ): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Course that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {CourseFindUniqueOrThrowArgs} args - Arguments to find a Course
     * @example
     * // Get one Course
     * const course = await prisma.course.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends CourseFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, CourseFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Course that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseFindFirstArgs} args - Arguments to find a Course
     * @example
     * // Get one Course
     * const course = await prisma.course.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends CourseFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, CourseFindFirstArgs<ExtArgs>>
    ): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Course that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseFindFirstOrThrowArgs} args - Arguments to find a Course
     * @example
     * // Get one Course
     * const course = await prisma.course.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends CourseFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, CourseFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Courses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Courses
     * const courses = await prisma.course.findMany()
     * 
     * // Get first 10 Courses
     * const courses = await prisma.course.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const courseWithIdOnly = await prisma.course.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends CourseFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CourseFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Course.
     * @param {CourseCreateArgs} args - Arguments to create a Course.
     * @example
     * // Create one Course
     * const Course = await prisma.course.create({
     *   data: {
     *     // ... data to create a Course
     *   }
     * })
     * 
    **/
    create<T extends CourseCreateArgs<ExtArgs>>(
      args: SelectSubset<T, CourseCreateArgs<ExtArgs>>
    ): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Courses.
     *     @param {CourseCreateManyArgs} args - Arguments to create many Courses.
     *     @example
     *     // Create many Courses
     *     const course = await prisma.course.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends CourseCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CourseCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Course.
     * @param {CourseDeleteArgs} args - Arguments to delete one Course.
     * @example
     * // Delete one Course
     * const Course = await prisma.course.delete({
     *   where: {
     *     // ... filter to delete one Course
     *   }
     * })
     * 
    **/
    delete<T extends CourseDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, CourseDeleteArgs<ExtArgs>>
    ): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Course.
     * @param {CourseUpdateArgs} args - Arguments to update one Course.
     * @example
     * // Update one Course
     * const course = await prisma.course.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends CourseUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, CourseUpdateArgs<ExtArgs>>
    ): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Courses.
     * @param {CourseDeleteManyArgs} args - Arguments to filter Courses to delete.
     * @example
     * // Delete a few Courses
     * const { count } = await prisma.course.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends CourseDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CourseDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Courses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Courses
     * const course = await prisma.course.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends CourseUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, CourseUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Course.
     * @param {CourseUpsertArgs} args - Arguments to update or create a Course.
     * @example
     * // Update or create a Course
     * const course = await prisma.course.upsert({
     *   create: {
     *     // ... data to create a Course
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Course we want to update
     *   }
     * })
    **/
    upsert<T extends CourseUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, CourseUpsertArgs<ExtArgs>>
    ): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Courses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseCountArgs} args - Arguments to filter Courses to count.
     * @example
     * // Count the number of Courses
     * const count = await prisma.course.count({
     *   where: {
     *     // ... the filter for the Courses we want to count
     *   }
     * })
    **/
    count<T extends CourseCountArgs>(
      args?: Subset<T, CourseCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CourseCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Course.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CourseAggregateArgs>(args: Subset<T, CourseAggregateArgs>): Prisma.PrismaPromise<GetCourseAggregateType<T>>

    /**
     * Group by Course.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CourseGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CourseGroupByArgs['orderBy'] }
        : { orderBy?: CourseGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CourseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCourseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Course model
   */
  readonly fields: CourseFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Course.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CourseClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    department<T extends DepartmentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DepartmentDefaultArgs<ExtArgs>>): Prisma__DepartmentClient<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    groups<T extends Course$groupsArgs<ExtArgs> = {}>(args?: Subset<T, Course$groupsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Course model
   */ 
  interface CourseFieldRefs {
    readonly id: FieldRef<"Course", 'Int'>
    readonly number: FieldRef<"Course", 'Int'>
    readonly departmentId: FieldRef<"Course", 'Int'>
    readonly createdAt: FieldRef<"Course", 'DateTime'>
    readonly updatedAt: FieldRef<"Course", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * Course findUnique
   */
  export type CourseFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * Filter, which Course to fetch.
     */
    where: CourseWhereUniqueInput
  }


  /**
   * Course findUniqueOrThrow
   */
  export type CourseFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * Filter, which Course to fetch.
     */
    where: CourseWhereUniqueInput
  }


  /**
   * Course findFirst
   */
  export type CourseFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * Filter, which Course to fetch.
     */
    where?: CourseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Courses to fetch.
     */
    orderBy?: CourseOrderByWithRelationInput | CourseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Courses.
     */
    cursor?: CourseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Courses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Courses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Courses.
     */
    distinct?: CourseScalarFieldEnum | CourseScalarFieldEnum[]
  }


  /**
   * Course findFirstOrThrow
   */
  export type CourseFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * Filter, which Course to fetch.
     */
    where?: CourseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Courses to fetch.
     */
    orderBy?: CourseOrderByWithRelationInput | CourseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Courses.
     */
    cursor?: CourseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Courses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Courses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Courses.
     */
    distinct?: CourseScalarFieldEnum | CourseScalarFieldEnum[]
  }


  /**
   * Course findMany
   */
  export type CourseFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * Filter, which Courses to fetch.
     */
    where?: CourseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Courses to fetch.
     */
    orderBy?: CourseOrderByWithRelationInput | CourseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Courses.
     */
    cursor?: CourseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Courses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Courses.
     */
    skip?: number
    distinct?: CourseScalarFieldEnum | CourseScalarFieldEnum[]
  }


  /**
   * Course create
   */
  export type CourseCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * The data needed to create a Course.
     */
    data: XOR<CourseCreateInput, CourseUncheckedCreateInput>
  }


  /**
   * Course createMany
   */
  export type CourseCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Courses.
     */
    data: CourseCreateManyInput | CourseCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Course update
   */
  export type CourseUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * The data needed to update a Course.
     */
    data: XOR<CourseUpdateInput, CourseUncheckedUpdateInput>
    /**
     * Choose, which Course to update.
     */
    where: CourseWhereUniqueInput
  }


  /**
   * Course updateMany
   */
  export type CourseUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Courses.
     */
    data: XOR<CourseUpdateManyMutationInput, CourseUncheckedUpdateManyInput>
    /**
     * Filter which Courses to update
     */
    where?: CourseWhereInput
  }


  /**
   * Course upsert
   */
  export type CourseUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * The filter to search for the Course to update in case it exists.
     */
    where: CourseWhereUniqueInput
    /**
     * In case the Course found by the `where` argument doesn't exist, create a new Course with this data.
     */
    create: XOR<CourseCreateInput, CourseUncheckedCreateInput>
    /**
     * In case the Course was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CourseUpdateInput, CourseUncheckedUpdateInput>
  }


  /**
   * Course delete
   */
  export type CourseDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * Filter which Course to delete.
     */
    where: CourseWhereUniqueInput
  }


  /**
   * Course deleteMany
   */
  export type CourseDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Courses to delete
     */
    where?: CourseWhereInput
  }


  /**
   * Course.groups
   */
  export type Course$groupsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GroupInclude<ExtArgs> | null
    where?: GroupWhereInput
    orderBy?: GroupOrderByWithRelationInput | GroupOrderByWithRelationInput[]
    cursor?: GroupWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GroupScalarFieldEnum | GroupScalarFieldEnum[]
  }


  /**
   * Course without action
   */
  export type CourseDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CourseInclude<ExtArgs> | null
  }



  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    login: 'login',
    password: 'password',
    isAdmin: 'isAdmin',
    groupId: 'groupId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const StudentScalarFieldEnum: {
    id: 'id',
    name: 'name',
    surname: 'surname',
    secondName: 'secondName',
    birthDate: 'birthDate',
    groupId: 'groupId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    isExpelled: 'isExpelled'
  };

  export type StudentScalarFieldEnum = (typeof StudentScalarFieldEnum)[keyof typeof StudentScalarFieldEnum]


  export const StudentHistoryScalarFieldEnum: {
    id: 'id',
    studentId: 'studentId',
    groupId: 'groupId',
    createdAt: 'createdAt'
  };

  export type StudentHistoryScalarFieldEnum = (typeof StudentHistoryScalarFieldEnum)[keyof typeof StudentHistoryScalarFieldEnum]


  export const HealthGroupScalarFieldEnum: {
    id: 'id',
    name: 'name',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type HealthGroupScalarFieldEnum = (typeof HealthGroupScalarFieldEnum)[keyof typeof HealthGroupScalarFieldEnum]


  export const PhysicalEducationScalarFieldEnum: {
    id: 'id',
    name: 'name',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PhysicalEducationScalarFieldEnum = (typeof PhysicalEducationScalarFieldEnum)[keyof typeof PhysicalEducationScalarFieldEnum]


  export const MedicalCertificateScalarFieldEnum: {
    id: 'id',
    startDate: 'startDate',
    finishDate: 'finishDate',
    studentId: 'studentId',
    healthGroupId: 'healthGroupId',
    physicalEducationId: 'physicalEducationId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type MedicalCertificateScalarFieldEnum = (typeof MedicalCertificateScalarFieldEnum)[keyof typeof MedicalCertificateScalarFieldEnum]


  export const MedicalCertificateHistoryScalarFieldEnum: {
    id: 'id',
    medicalCertificateId: 'medicalCertificateId',
    startDate: 'startDate',
    finishDate: 'finishDate',
    healthGroupId: 'healthGroupId',
    physicalEducationId: 'physicalEducationId',
    createdAt: 'createdAt'
  };

  export type MedicalCertificateHistoryScalarFieldEnum = (typeof MedicalCertificateHistoryScalarFieldEnum)[keyof typeof MedicalCertificateHistoryScalarFieldEnum]


  export const GroupScalarFieldEnum: {
    id: 'id',
    name: 'name',
    courseId: 'courseId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type GroupScalarFieldEnum = (typeof GroupScalarFieldEnum)[keyof typeof GroupScalarFieldEnum]


  export const DepartmentScalarFieldEnum: {
    id: 'id',
    name: 'name',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type DepartmentScalarFieldEnum = (typeof DepartmentScalarFieldEnum)[keyof typeof DepartmentScalarFieldEnum]


  export const CourseScalarFieldEnum: {
    id: 'id',
    number: 'number',
    departmentId: 'departmentId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CourseScalarFieldEnum = (typeof CourseScalarFieldEnum)[keyof typeof CourseScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    login?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    isAdmin?: BoolFilter<"User"> | boolean
    groupId?: IntNullableFilter<"User"> | number | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    group?: XOR<GroupNullableRelationFilter, GroupWhereInput> | null
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    login?: SortOrder
    password?: SortOrder
    isAdmin?: SortOrder
    groupId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    group?: GroupOrderByWithRelationInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    login?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    password?: StringFilter<"User"> | string
    isAdmin?: BoolFilter<"User"> | boolean
    groupId?: IntNullableFilter<"User"> | number | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    group?: XOR<GroupNullableRelationFilter, GroupWhereInput> | null
  }, "id" | "login">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    login?: SortOrder
    password?: SortOrder
    isAdmin?: SortOrder
    groupId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    login?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    isAdmin?: BoolWithAggregatesFilter<"User"> | boolean
    groupId?: IntNullableWithAggregatesFilter<"User"> | number | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type StudentWhereInput = {
    AND?: StudentWhereInput | StudentWhereInput[]
    OR?: StudentWhereInput[]
    NOT?: StudentWhereInput | StudentWhereInput[]
    id?: IntFilter<"Student"> | number
    name?: StringFilter<"Student"> | string
    surname?: StringFilter<"Student"> | string
    secondName?: StringNullableFilter<"Student"> | string | null
    birthDate?: DateTimeFilter<"Student"> | Date | string
    groupId?: IntNullableFilter<"Student"> | number | null
    createdAt?: DateTimeFilter<"Student"> | Date | string
    updatedAt?: DateTimeFilter<"Student"> | Date | string
    isExpelled?: BoolFilter<"Student"> | boolean
    medicalCertificates?: MedicalCertificateListRelationFilter
    group?: XOR<GroupNullableRelationFilter, GroupWhereInput> | null
    StudentHistory?: StudentHistoryListRelationFilter
  }

  export type StudentOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    surname?: SortOrder
    secondName?: SortOrderInput | SortOrder
    birthDate?: SortOrder
    groupId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    isExpelled?: SortOrder
    medicalCertificates?: MedicalCertificateOrderByRelationAggregateInput
    group?: GroupOrderByWithRelationInput
    StudentHistory?: StudentHistoryOrderByRelationAggregateInput
  }

  export type StudentWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: StudentWhereInput | StudentWhereInput[]
    OR?: StudentWhereInput[]
    NOT?: StudentWhereInput | StudentWhereInput[]
    name?: StringFilter<"Student"> | string
    surname?: StringFilter<"Student"> | string
    secondName?: StringNullableFilter<"Student"> | string | null
    birthDate?: DateTimeFilter<"Student"> | Date | string
    groupId?: IntNullableFilter<"Student"> | number | null
    createdAt?: DateTimeFilter<"Student"> | Date | string
    updatedAt?: DateTimeFilter<"Student"> | Date | string
    isExpelled?: BoolFilter<"Student"> | boolean
    medicalCertificates?: MedicalCertificateListRelationFilter
    group?: XOR<GroupNullableRelationFilter, GroupWhereInput> | null
    StudentHistory?: StudentHistoryListRelationFilter
  }, "id">

  export type StudentOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    surname?: SortOrder
    secondName?: SortOrderInput | SortOrder
    birthDate?: SortOrder
    groupId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    isExpelled?: SortOrder
    _count?: StudentCountOrderByAggregateInput
    _avg?: StudentAvgOrderByAggregateInput
    _max?: StudentMaxOrderByAggregateInput
    _min?: StudentMinOrderByAggregateInput
    _sum?: StudentSumOrderByAggregateInput
  }

  export type StudentScalarWhereWithAggregatesInput = {
    AND?: StudentScalarWhereWithAggregatesInput | StudentScalarWhereWithAggregatesInput[]
    OR?: StudentScalarWhereWithAggregatesInput[]
    NOT?: StudentScalarWhereWithAggregatesInput | StudentScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Student"> | number
    name?: StringWithAggregatesFilter<"Student"> | string
    surname?: StringWithAggregatesFilter<"Student"> | string
    secondName?: StringNullableWithAggregatesFilter<"Student"> | string | null
    birthDate?: DateTimeWithAggregatesFilter<"Student"> | Date | string
    groupId?: IntNullableWithAggregatesFilter<"Student"> | number | null
    createdAt?: DateTimeWithAggregatesFilter<"Student"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Student"> | Date | string
    isExpelled?: BoolWithAggregatesFilter<"Student"> | boolean
  }

  export type StudentHistoryWhereInput = {
    AND?: StudentHistoryWhereInput | StudentHistoryWhereInput[]
    OR?: StudentHistoryWhereInput[]
    NOT?: StudentHistoryWhereInput | StudentHistoryWhereInput[]
    id?: IntFilter<"StudentHistory"> | number
    studentId?: IntFilter<"StudentHistory"> | number
    groupId?: IntNullableFilter<"StudentHistory"> | number | null
    createdAt?: DateTimeFilter<"StudentHistory"> | Date | string
    student?: XOR<StudentRelationFilter, StudentWhereInput>
    group?: XOR<GroupNullableRelationFilter, GroupWhereInput> | null
  }

  export type StudentHistoryOrderByWithRelationInput = {
    id?: SortOrder
    studentId?: SortOrder
    groupId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    student?: StudentOrderByWithRelationInput
    group?: GroupOrderByWithRelationInput
  }

  export type StudentHistoryWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: StudentHistoryWhereInput | StudentHistoryWhereInput[]
    OR?: StudentHistoryWhereInput[]
    NOT?: StudentHistoryWhereInput | StudentHistoryWhereInput[]
    studentId?: IntFilter<"StudentHistory"> | number
    groupId?: IntNullableFilter<"StudentHistory"> | number | null
    createdAt?: DateTimeFilter<"StudentHistory"> | Date | string
    student?: XOR<StudentRelationFilter, StudentWhereInput>
    group?: XOR<GroupNullableRelationFilter, GroupWhereInput> | null
  }, "id">

  export type StudentHistoryOrderByWithAggregationInput = {
    id?: SortOrder
    studentId?: SortOrder
    groupId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: StudentHistoryCountOrderByAggregateInput
    _avg?: StudentHistoryAvgOrderByAggregateInput
    _max?: StudentHistoryMaxOrderByAggregateInput
    _min?: StudentHistoryMinOrderByAggregateInput
    _sum?: StudentHistorySumOrderByAggregateInput
  }

  export type StudentHistoryScalarWhereWithAggregatesInput = {
    AND?: StudentHistoryScalarWhereWithAggregatesInput | StudentHistoryScalarWhereWithAggregatesInput[]
    OR?: StudentHistoryScalarWhereWithAggregatesInput[]
    NOT?: StudentHistoryScalarWhereWithAggregatesInput | StudentHistoryScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"StudentHistory"> | number
    studentId?: IntWithAggregatesFilter<"StudentHistory"> | number
    groupId?: IntNullableWithAggregatesFilter<"StudentHistory"> | number | null
    createdAt?: DateTimeWithAggregatesFilter<"StudentHistory"> | Date | string
  }

  export type HealthGroupWhereInput = {
    AND?: HealthGroupWhereInput | HealthGroupWhereInput[]
    OR?: HealthGroupWhereInput[]
    NOT?: HealthGroupWhereInput | HealthGroupWhereInput[]
    id?: IntFilter<"HealthGroup"> | number
    name?: StringFilter<"HealthGroup"> | string
    createdAt?: DateTimeFilter<"HealthGroup"> | Date | string
    updatedAt?: DateTimeFilter<"HealthGroup"> | Date | string
    medicalCertificates?: MedicalCertificateListRelationFilter
    MedicalCertificateHistory?: MedicalCertificateHistoryListRelationFilter
  }

  export type HealthGroupOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    medicalCertificates?: MedicalCertificateOrderByRelationAggregateInput
    MedicalCertificateHistory?: MedicalCertificateHistoryOrderByRelationAggregateInput
  }

  export type HealthGroupWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: HealthGroupWhereInput | HealthGroupWhereInput[]
    OR?: HealthGroupWhereInput[]
    NOT?: HealthGroupWhereInput | HealthGroupWhereInput[]
    createdAt?: DateTimeFilter<"HealthGroup"> | Date | string
    updatedAt?: DateTimeFilter<"HealthGroup"> | Date | string
    medicalCertificates?: MedicalCertificateListRelationFilter
    MedicalCertificateHistory?: MedicalCertificateHistoryListRelationFilter
  }, "id" | "name">

  export type HealthGroupOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: HealthGroupCountOrderByAggregateInput
    _avg?: HealthGroupAvgOrderByAggregateInput
    _max?: HealthGroupMaxOrderByAggregateInput
    _min?: HealthGroupMinOrderByAggregateInput
    _sum?: HealthGroupSumOrderByAggregateInput
  }

  export type HealthGroupScalarWhereWithAggregatesInput = {
    AND?: HealthGroupScalarWhereWithAggregatesInput | HealthGroupScalarWhereWithAggregatesInput[]
    OR?: HealthGroupScalarWhereWithAggregatesInput[]
    NOT?: HealthGroupScalarWhereWithAggregatesInput | HealthGroupScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"HealthGroup"> | number
    name?: StringWithAggregatesFilter<"HealthGroup"> | string
    createdAt?: DateTimeWithAggregatesFilter<"HealthGroup"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"HealthGroup"> | Date | string
  }

  export type PhysicalEducationWhereInput = {
    AND?: PhysicalEducationWhereInput | PhysicalEducationWhereInput[]
    OR?: PhysicalEducationWhereInput[]
    NOT?: PhysicalEducationWhereInput | PhysicalEducationWhereInput[]
    id?: IntFilter<"PhysicalEducation"> | number
    name?: StringFilter<"PhysicalEducation"> | string
    createdAt?: DateTimeFilter<"PhysicalEducation"> | Date | string
    updatedAt?: DateTimeFilter<"PhysicalEducation"> | Date | string
    medicalCertificates?: MedicalCertificateListRelationFilter
    MedicalCertificateHistory?: MedicalCertificateHistoryListRelationFilter
  }

  export type PhysicalEducationOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    medicalCertificates?: MedicalCertificateOrderByRelationAggregateInput
    MedicalCertificateHistory?: MedicalCertificateHistoryOrderByRelationAggregateInput
  }

  export type PhysicalEducationWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: PhysicalEducationWhereInput | PhysicalEducationWhereInput[]
    OR?: PhysicalEducationWhereInput[]
    NOT?: PhysicalEducationWhereInput | PhysicalEducationWhereInput[]
    createdAt?: DateTimeFilter<"PhysicalEducation"> | Date | string
    updatedAt?: DateTimeFilter<"PhysicalEducation"> | Date | string
    medicalCertificates?: MedicalCertificateListRelationFilter
    MedicalCertificateHistory?: MedicalCertificateHistoryListRelationFilter
  }, "id" | "name">

  export type PhysicalEducationOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PhysicalEducationCountOrderByAggregateInput
    _avg?: PhysicalEducationAvgOrderByAggregateInput
    _max?: PhysicalEducationMaxOrderByAggregateInput
    _min?: PhysicalEducationMinOrderByAggregateInput
    _sum?: PhysicalEducationSumOrderByAggregateInput
  }

  export type PhysicalEducationScalarWhereWithAggregatesInput = {
    AND?: PhysicalEducationScalarWhereWithAggregatesInput | PhysicalEducationScalarWhereWithAggregatesInput[]
    OR?: PhysicalEducationScalarWhereWithAggregatesInput[]
    NOT?: PhysicalEducationScalarWhereWithAggregatesInput | PhysicalEducationScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"PhysicalEducation"> | number
    name?: StringWithAggregatesFilter<"PhysicalEducation"> | string
    createdAt?: DateTimeWithAggregatesFilter<"PhysicalEducation"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"PhysicalEducation"> | Date | string
  }

  export type MedicalCertificateWhereInput = {
    AND?: MedicalCertificateWhereInput | MedicalCertificateWhereInput[]
    OR?: MedicalCertificateWhereInput[]
    NOT?: MedicalCertificateWhereInput | MedicalCertificateWhereInput[]
    id?: IntFilter<"MedicalCertificate"> | number
    startDate?: DateTimeFilter<"MedicalCertificate"> | Date | string
    finishDate?: DateTimeFilter<"MedicalCertificate"> | Date | string
    studentId?: IntFilter<"MedicalCertificate"> | number
    healthGroupId?: IntFilter<"MedicalCertificate"> | number
    physicalEducationId?: IntFilter<"MedicalCertificate"> | number
    createdAt?: DateTimeFilter<"MedicalCertificate"> | Date | string
    updatedAt?: DateTimeFilter<"MedicalCertificate"> | Date | string
    MedicalCertificateHistory?: MedicalCertificateHistoryListRelationFilter
    healthGroup?: XOR<HealthGroupRelationFilter, HealthGroupWhereInput>
    physicalEducation?: XOR<PhysicalEducationRelationFilter, PhysicalEducationWhereInput>
    student?: XOR<StudentRelationFilter, StudentWhereInput>
  }

  export type MedicalCertificateOrderByWithRelationInput = {
    id?: SortOrder
    startDate?: SortOrder
    finishDate?: SortOrder
    studentId?: SortOrder
    healthGroupId?: SortOrder
    physicalEducationId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    MedicalCertificateHistory?: MedicalCertificateHistoryOrderByRelationAggregateInput
    healthGroup?: HealthGroupOrderByWithRelationInput
    physicalEducation?: PhysicalEducationOrderByWithRelationInput
    student?: StudentOrderByWithRelationInput
  }

  export type MedicalCertificateWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: MedicalCertificateWhereInput | MedicalCertificateWhereInput[]
    OR?: MedicalCertificateWhereInput[]
    NOT?: MedicalCertificateWhereInput | MedicalCertificateWhereInput[]
    startDate?: DateTimeFilter<"MedicalCertificate"> | Date | string
    finishDate?: DateTimeFilter<"MedicalCertificate"> | Date | string
    studentId?: IntFilter<"MedicalCertificate"> | number
    healthGroupId?: IntFilter<"MedicalCertificate"> | number
    physicalEducationId?: IntFilter<"MedicalCertificate"> | number
    createdAt?: DateTimeFilter<"MedicalCertificate"> | Date | string
    updatedAt?: DateTimeFilter<"MedicalCertificate"> | Date | string
    MedicalCertificateHistory?: MedicalCertificateHistoryListRelationFilter
    healthGroup?: XOR<HealthGroupRelationFilter, HealthGroupWhereInput>
    physicalEducation?: XOR<PhysicalEducationRelationFilter, PhysicalEducationWhereInput>
    student?: XOR<StudentRelationFilter, StudentWhereInput>
  }, "id">

  export type MedicalCertificateOrderByWithAggregationInput = {
    id?: SortOrder
    startDate?: SortOrder
    finishDate?: SortOrder
    studentId?: SortOrder
    healthGroupId?: SortOrder
    physicalEducationId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: MedicalCertificateCountOrderByAggregateInput
    _avg?: MedicalCertificateAvgOrderByAggregateInput
    _max?: MedicalCertificateMaxOrderByAggregateInput
    _min?: MedicalCertificateMinOrderByAggregateInput
    _sum?: MedicalCertificateSumOrderByAggregateInput
  }

  export type MedicalCertificateScalarWhereWithAggregatesInput = {
    AND?: MedicalCertificateScalarWhereWithAggregatesInput | MedicalCertificateScalarWhereWithAggregatesInput[]
    OR?: MedicalCertificateScalarWhereWithAggregatesInput[]
    NOT?: MedicalCertificateScalarWhereWithAggregatesInput | MedicalCertificateScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"MedicalCertificate"> | number
    startDate?: DateTimeWithAggregatesFilter<"MedicalCertificate"> | Date | string
    finishDate?: DateTimeWithAggregatesFilter<"MedicalCertificate"> | Date | string
    studentId?: IntWithAggregatesFilter<"MedicalCertificate"> | number
    healthGroupId?: IntWithAggregatesFilter<"MedicalCertificate"> | number
    physicalEducationId?: IntWithAggregatesFilter<"MedicalCertificate"> | number
    createdAt?: DateTimeWithAggregatesFilter<"MedicalCertificate"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"MedicalCertificate"> | Date | string
  }

  export type MedicalCertificateHistoryWhereInput = {
    AND?: MedicalCertificateHistoryWhereInput | MedicalCertificateHistoryWhereInput[]
    OR?: MedicalCertificateHistoryWhereInput[]
    NOT?: MedicalCertificateHistoryWhereInput | MedicalCertificateHistoryWhereInput[]
    id?: IntFilter<"MedicalCertificateHistory"> | number
    medicalCertificateId?: IntFilter<"MedicalCertificateHistory"> | number
    startDate?: DateTimeNullableFilter<"MedicalCertificateHistory"> | Date | string | null
    finishDate?: DateTimeNullableFilter<"MedicalCertificateHistory"> | Date | string | null
    healthGroupId?: IntNullableFilter<"MedicalCertificateHistory"> | number | null
    physicalEducationId?: IntNullableFilter<"MedicalCertificateHistory"> | number | null
    createdAt?: DateTimeFilter<"MedicalCertificateHistory"> | Date | string
    medicalCertificate?: XOR<MedicalCertificateRelationFilter, MedicalCertificateWhereInput>
    healthGroup?: XOR<HealthGroupNullableRelationFilter, HealthGroupWhereInput> | null
    physicalEducation?: XOR<PhysicalEducationNullableRelationFilter, PhysicalEducationWhereInput> | null
  }

  export type MedicalCertificateHistoryOrderByWithRelationInput = {
    id?: SortOrder
    medicalCertificateId?: SortOrder
    startDate?: SortOrderInput | SortOrder
    finishDate?: SortOrderInput | SortOrder
    healthGroupId?: SortOrderInput | SortOrder
    physicalEducationId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    medicalCertificate?: MedicalCertificateOrderByWithRelationInput
    healthGroup?: HealthGroupOrderByWithRelationInput
    physicalEducation?: PhysicalEducationOrderByWithRelationInput
  }

  export type MedicalCertificateHistoryWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: MedicalCertificateHistoryWhereInput | MedicalCertificateHistoryWhereInput[]
    OR?: MedicalCertificateHistoryWhereInput[]
    NOT?: MedicalCertificateHistoryWhereInput | MedicalCertificateHistoryWhereInput[]
    medicalCertificateId?: IntFilter<"MedicalCertificateHistory"> | number
    startDate?: DateTimeNullableFilter<"MedicalCertificateHistory"> | Date | string | null
    finishDate?: DateTimeNullableFilter<"MedicalCertificateHistory"> | Date | string | null
    healthGroupId?: IntNullableFilter<"MedicalCertificateHistory"> | number | null
    physicalEducationId?: IntNullableFilter<"MedicalCertificateHistory"> | number | null
    createdAt?: DateTimeFilter<"MedicalCertificateHistory"> | Date | string
    medicalCertificate?: XOR<MedicalCertificateRelationFilter, MedicalCertificateWhereInput>
    healthGroup?: XOR<HealthGroupNullableRelationFilter, HealthGroupWhereInput> | null
    physicalEducation?: XOR<PhysicalEducationNullableRelationFilter, PhysicalEducationWhereInput> | null
  }, "id">

  export type MedicalCertificateHistoryOrderByWithAggregationInput = {
    id?: SortOrder
    medicalCertificateId?: SortOrder
    startDate?: SortOrderInput | SortOrder
    finishDate?: SortOrderInput | SortOrder
    healthGroupId?: SortOrderInput | SortOrder
    physicalEducationId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: MedicalCertificateHistoryCountOrderByAggregateInput
    _avg?: MedicalCertificateHistoryAvgOrderByAggregateInput
    _max?: MedicalCertificateHistoryMaxOrderByAggregateInput
    _min?: MedicalCertificateHistoryMinOrderByAggregateInput
    _sum?: MedicalCertificateHistorySumOrderByAggregateInput
  }

  export type MedicalCertificateHistoryScalarWhereWithAggregatesInput = {
    AND?: MedicalCertificateHistoryScalarWhereWithAggregatesInput | MedicalCertificateHistoryScalarWhereWithAggregatesInput[]
    OR?: MedicalCertificateHistoryScalarWhereWithAggregatesInput[]
    NOT?: MedicalCertificateHistoryScalarWhereWithAggregatesInput | MedicalCertificateHistoryScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"MedicalCertificateHistory"> | number
    medicalCertificateId?: IntWithAggregatesFilter<"MedicalCertificateHistory"> | number
    startDate?: DateTimeNullableWithAggregatesFilter<"MedicalCertificateHistory"> | Date | string | null
    finishDate?: DateTimeNullableWithAggregatesFilter<"MedicalCertificateHistory"> | Date | string | null
    healthGroupId?: IntNullableWithAggregatesFilter<"MedicalCertificateHistory"> | number | null
    physicalEducationId?: IntNullableWithAggregatesFilter<"MedicalCertificateHistory"> | number | null
    createdAt?: DateTimeWithAggregatesFilter<"MedicalCertificateHistory"> | Date | string
  }

  export type GroupWhereInput = {
    AND?: GroupWhereInput | GroupWhereInput[]
    OR?: GroupWhereInput[]
    NOT?: GroupWhereInput | GroupWhereInput[]
    id?: IntFilter<"Group"> | number
    name?: StringFilter<"Group"> | string
    courseId?: IntFilter<"Group"> | number
    createdAt?: DateTimeFilter<"Group"> | Date | string
    updatedAt?: DateTimeFilter<"Group"> | Date | string
    course?: XOR<CourseRelationFilter, CourseWhereInput>
    students?: StudentListRelationFilter
    User?: UserListRelationFilter
    StudentHistory?: StudentHistoryListRelationFilter
  }

  export type GroupOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    courseId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    course?: CourseOrderByWithRelationInput
    students?: StudentOrderByRelationAggregateInput
    User?: UserOrderByRelationAggregateInput
    StudentHistory?: StudentHistoryOrderByRelationAggregateInput
  }

  export type GroupWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name_courseId?: GroupNameCourseIdCompoundUniqueInput
    AND?: GroupWhereInput | GroupWhereInput[]
    OR?: GroupWhereInput[]
    NOT?: GroupWhereInput | GroupWhereInput[]
    name?: StringFilter<"Group"> | string
    courseId?: IntFilter<"Group"> | number
    createdAt?: DateTimeFilter<"Group"> | Date | string
    updatedAt?: DateTimeFilter<"Group"> | Date | string
    course?: XOR<CourseRelationFilter, CourseWhereInput>
    students?: StudentListRelationFilter
    User?: UserListRelationFilter
    StudentHistory?: StudentHistoryListRelationFilter
  }, "id" | "name_courseId">

  export type GroupOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    courseId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: GroupCountOrderByAggregateInput
    _avg?: GroupAvgOrderByAggregateInput
    _max?: GroupMaxOrderByAggregateInput
    _min?: GroupMinOrderByAggregateInput
    _sum?: GroupSumOrderByAggregateInput
  }

  export type GroupScalarWhereWithAggregatesInput = {
    AND?: GroupScalarWhereWithAggregatesInput | GroupScalarWhereWithAggregatesInput[]
    OR?: GroupScalarWhereWithAggregatesInput[]
    NOT?: GroupScalarWhereWithAggregatesInput | GroupScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Group"> | number
    name?: StringWithAggregatesFilter<"Group"> | string
    courseId?: IntWithAggregatesFilter<"Group"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Group"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Group"> | Date | string
  }

  export type DepartmentWhereInput = {
    AND?: DepartmentWhereInput | DepartmentWhereInput[]
    OR?: DepartmentWhereInput[]
    NOT?: DepartmentWhereInput | DepartmentWhereInput[]
    id?: IntFilter<"Department"> | number
    name?: StringFilter<"Department"> | string
    createdAt?: DateTimeFilter<"Department"> | Date | string
    updatedAt?: DateTimeFilter<"Department"> | Date | string
    courses?: CourseListRelationFilter
  }

  export type DepartmentOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    courses?: CourseOrderByRelationAggregateInput
  }

  export type DepartmentWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: DepartmentWhereInput | DepartmentWhereInput[]
    OR?: DepartmentWhereInput[]
    NOT?: DepartmentWhereInput | DepartmentWhereInput[]
    createdAt?: DateTimeFilter<"Department"> | Date | string
    updatedAt?: DateTimeFilter<"Department"> | Date | string
    courses?: CourseListRelationFilter
  }, "id" | "name">

  export type DepartmentOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: DepartmentCountOrderByAggregateInput
    _avg?: DepartmentAvgOrderByAggregateInput
    _max?: DepartmentMaxOrderByAggregateInput
    _min?: DepartmentMinOrderByAggregateInput
    _sum?: DepartmentSumOrderByAggregateInput
  }

  export type DepartmentScalarWhereWithAggregatesInput = {
    AND?: DepartmentScalarWhereWithAggregatesInput | DepartmentScalarWhereWithAggregatesInput[]
    OR?: DepartmentScalarWhereWithAggregatesInput[]
    NOT?: DepartmentScalarWhereWithAggregatesInput | DepartmentScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Department"> | number
    name?: StringWithAggregatesFilter<"Department"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Department"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Department"> | Date | string
  }

  export type CourseWhereInput = {
    AND?: CourseWhereInput | CourseWhereInput[]
    OR?: CourseWhereInput[]
    NOT?: CourseWhereInput | CourseWhereInput[]
    id?: IntFilter<"Course"> | number
    number?: IntFilter<"Course"> | number
    departmentId?: IntFilter<"Course"> | number
    createdAt?: DateTimeFilter<"Course"> | Date | string
    updatedAt?: DateTimeFilter<"Course"> | Date | string
    department?: XOR<DepartmentRelationFilter, DepartmentWhereInput>
    groups?: GroupListRelationFilter
  }

  export type CourseOrderByWithRelationInput = {
    id?: SortOrder
    number?: SortOrder
    departmentId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    department?: DepartmentOrderByWithRelationInput
    groups?: GroupOrderByRelationAggregateInput
  }

  export type CourseWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    number_departmentId?: CourseNumberDepartmentIdCompoundUniqueInput
    AND?: CourseWhereInput | CourseWhereInput[]
    OR?: CourseWhereInput[]
    NOT?: CourseWhereInput | CourseWhereInput[]
    number?: IntFilter<"Course"> | number
    departmentId?: IntFilter<"Course"> | number
    createdAt?: DateTimeFilter<"Course"> | Date | string
    updatedAt?: DateTimeFilter<"Course"> | Date | string
    department?: XOR<DepartmentRelationFilter, DepartmentWhereInput>
    groups?: GroupListRelationFilter
  }, "id" | "number_departmentId">

  export type CourseOrderByWithAggregationInput = {
    id?: SortOrder
    number?: SortOrder
    departmentId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CourseCountOrderByAggregateInput
    _avg?: CourseAvgOrderByAggregateInput
    _max?: CourseMaxOrderByAggregateInput
    _min?: CourseMinOrderByAggregateInput
    _sum?: CourseSumOrderByAggregateInput
  }

  export type CourseScalarWhereWithAggregatesInput = {
    AND?: CourseScalarWhereWithAggregatesInput | CourseScalarWhereWithAggregatesInput[]
    OR?: CourseScalarWhereWithAggregatesInput[]
    NOT?: CourseScalarWhereWithAggregatesInput | CourseScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Course"> | number
    number?: IntWithAggregatesFilter<"Course"> | number
    departmentId?: IntWithAggregatesFilter<"Course"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Course"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Course"> | Date | string
  }

  export type UserCreateInput = {
    login: string
    password: string
    isAdmin?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    group?: GroupCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    login: string
    password: string
    isAdmin?: boolean
    groupId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateInput = {
    login?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    group?: GroupUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    login?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    groupId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateManyInput = {
    id?: number
    login: string
    password: string
    isAdmin?: boolean
    groupId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    login?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    login?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    groupId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StudentCreateInput = {
    name: string
    surname: string
    secondName?: string | null
    birthDate: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    isExpelled?: boolean
    medicalCertificates?: MedicalCertificateCreateNestedManyWithoutStudentInput
    group?: GroupCreateNestedOneWithoutStudentsInput
    StudentHistory?: StudentHistoryCreateNestedManyWithoutStudentInput
  }

  export type StudentUncheckedCreateInput = {
    id?: number
    name: string
    surname: string
    secondName?: string | null
    birthDate: Date | string
    groupId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    isExpelled?: boolean
    medicalCertificates?: MedicalCertificateUncheckedCreateNestedManyWithoutStudentInput
    StudentHistory?: StudentHistoryUncheckedCreateNestedManyWithoutStudentInput
  }

  export type StudentUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    surname?: StringFieldUpdateOperationsInput | string
    secondName?: NullableStringFieldUpdateOperationsInput | string | null
    birthDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isExpelled?: BoolFieldUpdateOperationsInput | boolean
    medicalCertificates?: MedicalCertificateUpdateManyWithoutStudentNestedInput
    group?: GroupUpdateOneWithoutStudentsNestedInput
    StudentHistory?: StudentHistoryUpdateManyWithoutStudentNestedInput
  }

  export type StudentUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    surname?: StringFieldUpdateOperationsInput | string
    secondName?: NullableStringFieldUpdateOperationsInput | string | null
    birthDate?: DateTimeFieldUpdateOperationsInput | Date | string
    groupId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isExpelled?: BoolFieldUpdateOperationsInput | boolean
    medicalCertificates?: MedicalCertificateUncheckedUpdateManyWithoutStudentNestedInput
    StudentHistory?: StudentHistoryUncheckedUpdateManyWithoutStudentNestedInput
  }

  export type StudentCreateManyInput = {
    id?: number
    name: string
    surname: string
    secondName?: string | null
    birthDate: Date | string
    groupId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    isExpelled?: boolean
  }

  export type StudentUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    surname?: StringFieldUpdateOperationsInput | string
    secondName?: NullableStringFieldUpdateOperationsInput | string | null
    birthDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isExpelled?: BoolFieldUpdateOperationsInput | boolean
  }

  export type StudentUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    surname?: StringFieldUpdateOperationsInput | string
    secondName?: NullableStringFieldUpdateOperationsInput | string | null
    birthDate?: DateTimeFieldUpdateOperationsInput | Date | string
    groupId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isExpelled?: BoolFieldUpdateOperationsInput | boolean
  }

  export type StudentHistoryCreateInput = {
    createdAt?: Date | string
    student: StudentCreateNestedOneWithoutStudentHistoryInput
    group?: GroupCreateNestedOneWithoutStudentHistoryInput
  }

  export type StudentHistoryUncheckedCreateInput = {
    id?: number
    studentId: number
    groupId?: number | null
    createdAt?: Date | string
  }

  export type StudentHistoryUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    student?: StudentUpdateOneRequiredWithoutStudentHistoryNestedInput
    group?: GroupUpdateOneWithoutStudentHistoryNestedInput
  }

  export type StudentHistoryUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    studentId?: IntFieldUpdateOperationsInput | number
    groupId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StudentHistoryCreateManyInput = {
    id?: number
    studentId: number
    groupId?: number | null
    createdAt?: Date | string
  }

  export type StudentHistoryUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StudentHistoryUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    studentId?: IntFieldUpdateOperationsInput | number
    groupId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HealthGroupCreateInput = {
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    medicalCertificates?: MedicalCertificateCreateNestedManyWithoutHealthGroupInput
    MedicalCertificateHistory?: MedicalCertificateHistoryCreateNestedManyWithoutHealthGroupInput
  }

  export type HealthGroupUncheckedCreateInput = {
    id?: number
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    medicalCertificates?: MedicalCertificateUncheckedCreateNestedManyWithoutHealthGroupInput
    MedicalCertificateHistory?: MedicalCertificateHistoryUncheckedCreateNestedManyWithoutHealthGroupInput
  }

  export type HealthGroupUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    medicalCertificates?: MedicalCertificateUpdateManyWithoutHealthGroupNestedInput
    MedicalCertificateHistory?: MedicalCertificateHistoryUpdateManyWithoutHealthGroupNestedInput
  }

  export type HealthGroupUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    medicalCertificates?: MedicalCertificateUncheckedUpdateManyWithoutHealthGroupNestedInput
    MedicalCertificateHistory?: MedicalCertificateHistoryUncheckedUpdateManyWithoutHealthGroupNestedInput
  }

  export type HealthGroupCreateManyInput = {
    id?: number
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type HealthGroupUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HealthGroupUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PhysicalEducationCreateInput = {
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    medicalCertificates?: MedicalCertificateCreateNestedManyWithoutPhysicalEducationInput
    MedicalCertificateHistory?: MedicalCertificateHistoryCreateNestedManyWithoutPhysicalEducationInput
  }

  export type PhysicalEducationUncheckedCreateInput = {
    id?: number
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    medicalCertificates?: MedicalCertificateUncheckedCreateNestedManyWithoutPhysicalEducationInput
    MedicalCertificateHistory?: MedicalCertificateHistoryUncheckedCreateNestedManyWithoutPhysicalEducationInput
  }

  export type PhysicalEducationUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    medicalCertificates?: MedicalCertificateUpdateManyWithoutPhysicalEducationNestedInput
    MedicalCertificateHistory?: MedicalCertificateHistoryUpdateManyWithoutPhysicalEducationNestedInput
  }

  export type PhysicalEducationUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    medicalCertificates?: MedicalCertificateUncheckedUpdateManyWithoutPhysicalEducationNestedInput
    MedicalCertificateHistory?: MedicalCertificateHistoryUncheckedUpdateManyWithoutPhysicalEducationNestedInput
  }

  export type PhysicalEducationCreateManyInput = {
    id?: number
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PhysicalEducationUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PhysicalEducationUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MedicalCertificateCreateInput = {
    startDate: Date | string
    finishDate: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    MedicalCertificateHistory?: MedicalCertificateHistoryCreateNestedManyWithoutMedicalCertificateInput
    healthGroup: HealthGroupCreateNestedOneWithoutMedicalCertificatesInput
    physicalEducation: PhysicalEducationCreateNestedOneWithoutMedicalCertificatesInput
    student: StudentCreateNestedOneWithoutMedicalCertificatesInput
  }

  export type MedicalCertificateUncheckedCreateInput = {
    id?: number
    startDate: Date | string
    finishDate: Date | string
    studentId: number
    healthGroupId: number
    physicalEducationId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    MedicalCertificateHistory?: MedicalCertificateHistoryUncheckedCreateNestedManyWithoutMedicalCertificateInput
  }

  export type MedicalCertificateUpdateInput = {
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    finishDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    MedicalCertificateHistory?: MedicalCertificateHistoryUpdateManyWithoutMedicalCertificateNestedInput
    healthGroup?: HealthGroupUpdateOneRequiredWithoutMedicalCertificatesNestedInput
    physicalEducation?: PhysicalEducationUpdateOneRequiredWithoutMedicalCertificatesNestedInput
    student?: StudentUpdateOneRequiredWithoutMedicalCertificatesNestedInput
  }

  export type MedicalCertificateUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    finishDate?: DateTimeFieldUpdateOperationsInput | Date | string
    studentId?: IntFieldUpdateOperationsInput | number
    healthGroupId?: IntFieldUpdateOperationsInput | number
    physicalEducationId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    MedicalCertificateHistory?: MedicalCertificateHistoryUncheckedUpdateManyWithoutMedicalCertificateNestedInput
  }

  export type MedicalCertificateCreateManyInput = {
    id?: number
    startDate: Date | string
    finishDate: Date | string
    studentId: number
    healthGroupId: number
    physicalEducationId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MedicalCertificateUpdateManyMutationInput = {
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    finishDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MedicalCertificateUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    finishDate?: DateTimeFieldUpdateOperationsInput | Date | string
    studentId?: IntFieldUpdateOperationsInput | number
    healthGroupId?: IntFieldUpdateOperationsInput | number
    physicalEducationId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MedicalCertificateHistoryCreateInput = {
    startDate?: Date | string | null
    finishDate?: Date | string | null
    createdAt?: Date | string
    medicalCertificate: MedicalCertificateCreateNestedOneWithoutMedicalCertificateHistoryInput
    healthGroup?: HealthGroupCreateNestedOneWithoutMedicalCertificateHistoryInput
    physicalEducation?: PhysicalEducationCreateNestedOneWithoutMedicalCertificateHistoryInput
  }

  export type MedicalCertificateHistoryUncheckedCreateInput = {
    id?: number
    medicalCertificateId: number
    startDate?: Date | string | null
    finishDate?: Date | string | null
    healthGroupId?: number | null
    physicalEducationId?: number | null
    createdAt?: Date | string
  }

  export type MedicalCertificateHistoryUpdateInput = {
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    finishDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    medicalCertificate?: MedicalCertificateUpdateOneRequiredWithoutMedicalCertificateHistoryNestedInput
    healthGroup?: HealthGroupUpdateOneWithoutMedicalCertificateHistoryNestedInput
    physicalEducation?: PhysicalEducationUpdateOneWithoutMedicalCertificateHistoryNestedInput
  }

  export type MedicalCertificateHistoryUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    medicalCertificateId?: IntFieldUpdateOperationsInput | number
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    finishDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    healthGroupId?: NullableIntFieldUpdateOperationsInput | number | null
    physicalEducationId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MedicalCertificateHistoryCreateManyInput = {
    id?: number
    medicalCertificateId: number
    startDate?: Date | string | null
    finishDate?: Date | string | null
    healthGroupId?: number | null
    physicalEducationId?: number | null
    createdAt?: Date | string
  }

  export type MedicalCertificateHistoryUpdateManyMutationInput = {
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    finishDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MedicalCertificateHistoryUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    medicalCertificateId?: IntFieldUpdateOperationsInput | number
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    finishDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    healthGroupId?: NullableIntFieldUpdateOperationsInput | number | null
    physicalEducationId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GroupCreateInput = {
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    course: CourseCreateNestedOneWithoutGroupsInput
    students?: StudentCreateNestedManyWithoutGroupInput
    User?: UserCreateNestedManyWithoutGroupInput
    StudentHistory?: StudentHistoryCreateNestedManyWithoutGroupInput
  }

  export type GroupUncheckedCreateInput = {
    id?: number
    name: string
    courseId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    students?: StudentUncheckedCreateNestedManyWithoutGroupInput
    User?: UserUncheckedCreateNestedManyWithoutGroupInput
    StudentHistory?: StudentHistoryUncheckedCreateNestedManyWithoutGroupInput
  }

  export type GroupUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    course?: CourseUpdateOneRequiredWithoutGroupsNestedInput
    students?: StudentUpdateManyWithoutGroupNestedInput
    User?: UserUpdateManyWithoutGroupNestedInput
    StudentHistory?: StudentHistoryUpdateManyWithoutGroupNestedInput
  }

  export type GroupUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    courseId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    students?: StudentUncheckedUpdateManyWithoutGroupNestedInput
    User?: UserUncheckedUpdateManyWithoutGroupNestedInput
    StudentHistory?: StudentHistoryUncheckedUpdateManyWithoutGroupNestedInput
  }

  export type GroupCreateManyInput = {
    id?: number
    name: string
    courseId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GroupUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GroupUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    courseId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DepartmentCreateInput = {
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    courses?: CourseCreateNestedManyWithoutDepartmentInput
  }

  export type DepartmentUncheckedCreateInput = {
    id?: number
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    courses?: CourseUncheckedCreateNestedManyWithoutDepartmentInput
  }

  export type DepartmentUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    courses?: CourseUpdateManyWithoutDepartmentNestedInput
  }

  export type DepartmentUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    courses?: CourseUncheckedUpdateManyWithoutDepartmentNestedInput
  }

  export type DepartmentCreateManyInput = {
    id?: number
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DepartmentUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DepartmentUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CourseCreateInput = {
    number: number
    createdAt?: Date | string
    updatedAt?: Date | string
    department: DepartmentCreateNestedOneWithoutCoursesInput
    groups?: GroupCreateNestedManyWithoutCourseInput
  }

  export type CourseUncheckedCreateInput = {
    id?: number
    number: number
    departmentId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    groups?: GroupUncheckedCreateNestedManyWithoutCourseInput
  }

  export type CourseUpdateInput = {
    number?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    department?: DepartmentUpdateOneRequiredWithoutCoursesNestedInput
    groups?: GroupUpdateManyWithoutCourseNestedInput
  }

  export type CourseUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    number?: IntFieldUpdateOperationsInput | number
    departmentId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    groups?: GroupUncheckedUpdateManyWithoutCourseNestedInput
  }

  export type CourseCreateManyInput = {
    id?: number
    number: number
    departmentId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CourseUpdateManyMutationInput = {
    number?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CourseUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    number?: IntFieldUpdateOperationsInput | number
    departmentId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type GroupNullableRelationFilter = {
    is?: GroupWhereInput | null
    isNot?: GroupWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    login?: SortOrder
    password?: SortOrder
    isAdmin?: SortOrder
    groupId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
    groupId?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    login?: SortOrder
    password?: SortOrder
    isAdmin?: SortOrder
    groupId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    login?: SortOrder
    password?: SortOrder
    isAdmin?: SortOrder
    groupId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
    groupId?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type MedicalCertificateListRelationFilter = {
    every?: MedicalCertificateWhereInput
    some?: MedicalCertificateWhereInput
    none?: MedicalCertificateWhereInput
  }

  export type StudentHistoryListRelationFilter = {
    every?: StudentHistoryWhereInput
    some?: StudentHistoryWhereInput
    none?: StudentHistoryWhereInput
  }

  export type MedicalCertificateOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type StudentHistoryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type StudentCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    surname?: SortOrder
    secondName?: SortOrder
    birthDate?: SortOrder
    groupId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    isExpelled?: SortOrder
  }

  export type StudentAvgOrderByAggregateInput = {
    id?: SortOrder
    groupId?: SortOrder
  }

  export type StudentMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    surname?: SortOrder
    secondName?: SortOrder
    birthDate?: SortOrder
    groupId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    isExpelled?: SortOrder
  }

  export type StudentMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    surname?: SortOrder
    secondName?: SortOrder
    birthDate?: SortOrder
    groupId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    isExpelled?: SortOrder
  }

  export type StudentSumOrderByAggregateInput = {
    id?: SortOrder
    groupId?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type StudentRelationFilter = {
    is?: StudentWhereInput
    isNot?: StudentWhereInput
  }

  export type StudentHistoryCountOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    groupId?: SortOrder
    createdAt?: SortOrder
  }

  export type StudentHistoryAvgOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    groupId?: SortOrder
  }

  export type StudentHistoryMaxOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    groupId?: SortOrder
    createdAt?: SortOrder
  }

  export type StudentHistoryMinOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    groupId?: SortOrder
    createdAt?: SortOrder
  }

  export type StudentHistorySumOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    groupId?: SortOrder
  }

  export type MedicalCertificateHistoryListRelationFilter = {
    every?: MedicalCertificateHistoryWhereInput
    some?: MedicalCertificateHistoryWhereInput
    none?: MedicalCertificateHistoryWhereInput
  }

  export type MedicalCertificateHistoryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type HealthGroupCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type HealthGroupAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type HealthGroupMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type HealthGroupMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type HealthGroupSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type PhysicalEducationCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PhysicalEducationAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type PhysicalEducationMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PhysicalEducationMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PhysicalEducationSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type HealthGroupRelationFilter = {
    is?: HealthGroupWhereInput
    isNot?: HealthGroupWhereInput
  }

  export type PhysicalEducationRelationFilter = {
    is?: PhysicalEducationWhereInput
    isNot?: PhysicalEducationWhereInput
  }

  export type MedicalCertificateCountOrderByAggregateInput = {
    id?: SortOrder
    startDate?: SortOrder
    finishDate?: SortOrder
    studentId?: SortOrder
    healthGroupId?: SortOrder
    physicalEducationId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MedicalCertificateAvgOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    healthGroupId?: SortOrder
    physicalEducationId?: SortOrder
  }

  export type MedicalCertificateMaxOrderByAggregateInput = {
    id?: SortOrder
    startDate?: SortOrder
    finishDate?: SortOrder
    studentId?: SortOrder
    healthGroupId?: SortOrder
    physicalEducationId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MedicalCertificateMinOrderByAggregateInput = {
    id?: SortOrder
    startDate?: SortOrder
    finishDate?: SortOrder
    studentId?: SortOrder
    healthGroupId?: SortOrder
    physicalEducationId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MedicalCertificateSumOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    healthGroupId?: SortOrder
    physicalEducationId?: SortOrder
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type MedicalCertificateRelationFilter = {
    is?: MedicalCertificateWhereInput
    isNot?: MedicalCertificateWhereInput
  }

  export type HealthGroupNullableRelationFilter = {
    is?: HealthGroupWhereInput | null
    isNot?: HealthGroupWhereInput | null
  }

  export type PhysicalEducationNullableRelationFilter = {
    is?: PhysicalEducationWhereInput | null
    isNot?: PhysicalEducationWhereInput | null
  }

  export type MedicalCertificateHistoryCountOrderByAggregateInput = {
    id?: SortOrder
    medicalCertificateId?: SortOrder
    startDate?: SortOrder
    finishDate?: SortOrder
    healthGroupId?: SortOrder
    physicalEducationId?: SortOrder
    createdAt?: SortOrder
  }

  export type MedicalCertificateHistoryAvgOrderByAggregateInput = {
    id?: SortOrder
    medicalCertificateId?: SortOrder
    healthGroupId?: SortOrder
    physicalEducationId?: SortOrder
  }

  export type MedicalCertificateHistoryMaxOrderByAggregateInput = {
    id?: SortOrder
    medicalCertificateId?: SortOrder
    startDate?: SortOrder
    finishDate?: SortOrder
    healthGroupId?: SortOrder
    physicalEducationId?: SortOrder
    createdAt?: SortOrder
  }

  export type MedicalCertificateHistoryMinOrderByAggregateInput = {
    id?: SortOrder
    medicalCertificateId?: SortOrder
    startDate?: SortOrder
    finishDate?: SortOrder
    healthGroupId?: SortOrder
    physicalEducationId?: SortOrder
    createdAt?: SortOrder
  }

  export type MedicalCertificateHistorySumOrderByAggregateInput = {
    id?: SortOrder
    medicalCertificateId?: SortOrder
    healthGroupId?: SortOrder
    physicalEducationId?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type CourseRelationFilter = {
    is?: CourseWhereInput
    isNot?: CourseWhereInput
  }

  export type StudentListRelationFilter = {
    every?: StudentWhereInput
    some?: StudentWhereInput
    none?: StudentWhereInput
  }

  export type UserListRelationFilter = {
    every?: UserWhereInput
    some?: UserWhereInput
    none?: UserWhereInput
  }

  export type StudentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type GroupNameCourseIdCompoundUniqueInput = {
    name: string
    courseId: number
  }

  export type GroupCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    courseId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type GroupAvgOrderByAggregateInput = {
    id?: SortOrder
    courseId?: SortOrder
  }

  export type GroupMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    courseId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type GroupMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    courseId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type GroupSumOrderByAggregateInput = {
    id?: SortOrder
    courseId?: SortOrder
  }

  export type CourseListRelationFilter = {
    every?: CourseWhereInput
    some?: CourseWhereInput
    none?: CourseWhereInput
  }

  export type CourseOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DepartmentCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DepartmentAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type DepartmentMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DepartmentMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DepartmentSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type DepartmentRelationFilter = {
    is?: DepartmentWhereInput
    isNot?: DepartmentWhereInput
  }

  export type GroupListRelationFilter = {
    every?: GroupWhereInput
    some?: GroupWhereInput
    none?: GroupWhereInput
  }

  export type GroupOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CourseNumberDepartmentIdCompoundUniqueInput = {
    number: number
    departmentId: number
  }

  export type CourseCountOrderByAggregateInput = {
    id?: SortOrder
    number?: SortOrder
    departmentId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CourseAvgOrderByAggregateInput = {
    id?: SortOrder
    number?: SortOrder
    departmentId?: SortOrder
  }

  export type CourseMaxOrderByAggregateInput = {
    id?: SortOrder
    number?: SortOrder
    departmentId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CourseMinOrderByAggregateInput = {
    id?: SortOrder
    number?: SortOrder
    departmentId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CourseSumOrderByAggregateInput = {
    id?: SortOrder
    number?: SortOrder
    departmentId?: SortOrder
  }

  export type GroupCreateNestedOneWithoutUserInput = {
    create?: XOR<GroupCreateWithoutUserInput, GroupUncheckedCreateWithoutUserInput>
    connectOrCreate?: GroupCreateOrConnectWithoutUserInput
    connect?: GroupWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type GroupUpdateOneWithoutUserNestedInput = {
    create?: XOR<GroupCreateWithoutUserInput, GroupUncheckedCreateWithoutUserInput>
    connectOrCreate?: GroupCreateOrConnectWithoutUserInput
    upsert?: GroupUpsertWithoutUserInput
    disconnect?: GroupWhereInput | boolean
    delete?: GroupWhereInput | boolean
    connect?: GroupWhereUniqueInput
    update?: XOR<XOR<GroupUpdateToOneWithWhereWithoutUserInput, GroupUpdateWithoutUserInput>, GroupUncheckedUpdateWithoutUserInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type MedicalCertificateCreateNestedManyWithoutStudentInput = {
    create?: XOR<MedicalCertificateCreateWithoutStudentInput, MedicalCertificateUncheckedCreateWithoutStudentInput> | MedicalCertificateCreateWithoutStudentInput[] | MedicalCertificateUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: MedicalCertificateCreateOrConnectWithoutStudentInput | MedicalCertificateCreateOrConnectWithoutStudentInput[]
    createMany?: MedicalCertificateCreateManyStudentInputEnvelope
    connect?: MedicalCertificateWhereUniqueInput | MedicalCertificateWhereUniqueInput[]
  }

  export type GroupCreateNestedOneWithoutStudentsInput = {
    create?: XOR<GroupCreateWithoutStudentsInput, GroupUncheckedCreateWithoutStudentsInput>
    connectOrCreate?: GroupCreateOrConnectWithoutStudentsInput
    connect?: GroupWhereUniqueInput
  }

  export type StudentHistoryCreateNestedManyWithoutStudentInput = {
    create?: XOR<StudentHistoryCreateWithoutStudentInput, StudentHistoryUncheckedCreateWithoutStudentInput> | StudentHistoryCreateWithoutStudentInput[] | StudentHistoryUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: StudentHistoryCreateOrConnectWithoutStudentInput | StudentHistoryCreateOrConnectWithoutStudentInput[]
    createMany?: StudentHistoryCreateManyStudentInputEnvelope
    connect?: StudentHistoryWhereUniqueInput | StudentHistoryWhereUniqueInput[]
  }

  export type MedicalCertificateUncheckedCreateNestedManyWithoutStudentInput = {
    create?: XOR<MedicalCertificateCreateWithoutStudentInput, MedicalCertificateUncheckedCreateWithoutStudentInput> | MedicalCertificateCreateWithoutStudentInput[] | MedicalCertificateUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: MedicalCertificateCreateOrConnectWithoutStudentInput | MedicalCertificateCreateOrConnectWithoutStudentInput[]
    createMany?: MedicalCertificateCreateManyStudentInputEnvelope
    connect?: MedicalCertificateWhereUniqueInput | MedicalCertificateWhereUniqueInput[]
  }

  export type StudentHistoryUncheckedCreateNestedManyWithoutStudentInput = {
    create?: XOR<StudentHistoryCreateWithoutStudentInput, StudentHistoryUncheckedCreateWithoutStudentInput> | StudentHistoryCreateWithoutStudentInput[] | StudentHistoryUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: StudentHistoryCreateOrConnectWithoutStudentInput | StudentHistoryCreateOrConnectWithoutStudentInput[]
    createMany?: StudentHistoryCreateManyStudentInputEnvelope
    connect?: StudentHistoryWhereUniqueInput | StudentHistoryWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type MedicalCertificateUpdateManyWithoutStudentNestedInput = {
    create?: XOR<MedicalCertificateCreateWithoutStudentInput, MedicalCertificateUncheckedCreateWithoutStudentInput> | MedicalCertificateCreateWithoutStudentInput[] | MedicalCertificateUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: MedicalCertificateCreateOrConnectWithoutStudentInput | MedicalCertificateCreateOrConnectWithoutStudentInput[]
    upsert?: MedicalCertificateUpsertWithWhereUniqueWithoutStudentInput | MedicalCertificateUpsertWithWhereUniqueWithoutStudentInput[]
    createMany?: MedicalCertificateCreateManyStudentInputEnvelope
    set?: MedicalCertificateWhereUniqueInput | MedicalCertificateWhereUniqueInput[]
    disconnect?: MedicalCertificateWhereUniqueInput | MedicalCertificateWhereUniqueInput[]
    delete?: MedicalCertificateWhereUniqueInput | MedicalCertificateWhereUniqueInput[]
    connect?: MedicalCertificateWhereUniqueInput | MedicalCertificateWhereUniqueInput[]
    update?: MedicalCertificateUpdateWithWhereUniqueWithoutStudentInput | MedicalCertificateUpdateWithWhereUniqueWithoutStudentInput[]
    updateMany?: MedicalCertificateUpdateManyWithWhereWithoutStudentInput | MedicalCertificateUpdateManyWithWhereWithoutStudentInput[]
    deleteMany?: MedicalCertificateScalarWhereInput | MedicalCertificateScalarWhereInput[]
  }

  export type GroupUpdateOneWithoutStudentsNestedInput = {
    create?: XOR<GroupCreateWithoutStudentsInput, GroupUncheckedCreateWithoutStudentsInput>
    connectOrCreate?: GroupCreateOrConnectWithoutStudentsInput
    upsert?: GroupUpsertWithoutStudentsInput
    disconnect?: GroupWhereInput | boolean
    delete?: GroupWhereInput | boolean
    connect?: GroupWhereUniqueInput
    update?: XOR<XOR<GroupUpdateToOneWithWhereWithoutStudentsInput, GroupUpdateWithoutStudentsInput>, GroupUncheckedUpdateWithoutStudentsInput>
  }

  export type StudentHistoryUpdateManyWithoutStudentNestedInput = {
    create?: XOR<StudentHistoryCreateWithoutStudentInput, StudentHistoryUncheckedCreateWithoutStudentInput> | StudentHistoryCreateWithoutStudentInput[] | StudentHistoryUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: StudentHistoryCreateOrConnectWithoutStudentInput | StudentHistoryCreateOrConnectWithoutStudentInput[]
    upsert?: StudentHistoryUpsertWithWhereUniqueWithoutStudentInput | StudentHistoryUpsertWithWhereUniqueWithoutStudentInput[]
    createMany?: StudentHistoryCreateManyStudentInputEnvelope
    set?: StudentHistoryWhereUniqueInput | StudentHistoryWhereUniqueInput[]
    disconnect?: StudentHistoryWhereUniqueInput | StudentHistoryWhereUniqueInput[]
    delete?: StudentHistoryWhereUniqueInput | StudentHistoryWhereUniqueInput[]
    connect?: StudentHistoryWhereUniqueInput | StudentHistoryWhereUniqueInput[]
    update?: StudentHistoryUpdateWithWhereUniqueWithoutStudentInput | StudentHistoryUpdateWithWhereUniqueWithoutStudentInput[]
    updateMany?: StudentHistoryUpdateManyWithWhereWithoutStudentInput | StudentHistoryUpdateManyWithWhereWithoutStudentInput[]
    deleteMany?: StudentHistoryScalarWhereInput | StudentHistoryScalarWhereInput[]
  }

  export type MedicalCertificateUncheckedUpdateManyWithoutStudentNestedInput = {
    create?: XOR<MedicalCertificateCreateWithoutStudentInput, MedicalCertificateUncheckedCreateWithoutStudentInput> | MedicalCertificateCreateWithoutStudentInput[] | MedicalCertificateUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: MedicalCertificateCreateOrConnectWithoutStudentInput | MedicalCertificateCreateOrConnectWithoutStudentInput[]
    upsert?: MedicalCertificateUpsertWithWhereUniqueWithoutStudentInput | MedicalCertificateUpsertWithWhereUniqueWithoutStudentInput[]
    createMany?: MedicalCertificateCreateManyStudentInputEnvelope
    set?: MedicalCertificateWhereUniqueInput | MedicalCertificateWhereUniqueInput[]
    disconnect?: MedicalCertificateWhereUniqueInput | MedicalCertificateWhereUniqueInput[]
    delete?: MedicalCertificateWhereUniqueInput | MedicalCertificateWhereUniqueInput[]
    connect?: MedicalCertificateWhereUniqueInput | MedicalCertificateWhereUniqueInput[]
    update?: MedicalCertificateUpdateWithWhereUniqueWithoutStudentInput | MedicalCertificateUpdateWithWhereUniqueWithoutStudentInput[]
    updateMany?: MedicalCertificateUpdateManyWithWhereWithoutStudentInput | MedicalCertificateUpdateManyWithWhereWithoutStudentInput[]
    deleteMany?: MedicalCertificateScalarWhereInput | MedicalCertificateScalarWhereInput[]
  }

  export type StudentHistoryUncheckedUpdateManyWithoutStudentNestedInput = {
    create?: XOR<StudentHistoryCreateWithoutStudentInput, StudentHistoryUncheckedCreateWithoutStudentInput> | StudentHistoryCreateWithoutStudentInput[] | StudentHistoryUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: StudentHistoryCreateOrConnectWithoutStudentInput | StudentHistoryCreateOrConnectWithoutStudentInput[]
    upsert?: StudentHistoryUpsertWithWhereUniqueWithoutStudentInput | StudentHistoryUpsertWithWhereUniqueWithoutStudentInput[]
    createMany?: StudentHistoryCreateManyStudentInputEnvelope
    set?: StudentHistoryWhereUniqueInput | StudentHistoryWhereUniqueInput[]
    disconnect?: StudentHistoryWhereUniqueInput | StudentHistoryWhereUniqueInput[]
    delete?: StudentHistoryWhereUniqueInput | StudentHistoryWhereUniqueInput[]
    connect?: StudentHistoryWhereUniqueInput | StudentHistoryWhereUniqueInput[]
    update?: StudentHistoryUpdateWithWhereUniqueWithoutStudentInput | StudentHistoryUpdateWithWhereUniqueWithoutStudentInput[]
    updateMany?: StudentHistoryUpdateManyWithWhereWithoutStudentInput | StudentHistoryUpdateManyWithWhereWithoutStudentInput[]
    deleteMany?: StudentHistoryScalarWhereInput | StudentHistoryScalarWhereInput[]
  }

  export type StudentCreateNestedOneWithoutStudentHistoryInput = {
    create?: XOR<StudentCreateWithoutStudentHistoryInput, StudentUncheckedCreateWithoutStudentHistoryInput>
    connectOrCreate?: StudentCreateOrConnectWithoutStudentHistoryInput
    connect?: StudentWhereUniqueInput
  }

  export type GroupCreateNestedOneWithoutStudentHistoryInput = {
    create?: XOR<GroupCreateWithoutStudentHistoryInput, GroupUncheckedCreateWithoutStudentHistoryInput>
    connectOrCreate?: GroupCreateOrConnectWithoutStudentHistoryInput
    connect?: GroupWhereUniqueInput
  }

  export type StudentUpdateOneRequiredWithoutStudentHistoryNestedInput = {
    create?: XOR<StudentCreateWithoutStudentHistoryInput, StudentUncheckedCreateWithoutStudentHistoryInput>
    connectOrCreate?: StudentCreateOrConnectWithoutStudentHistoryInput
    upsert?: StudentUpsertWithoutStudentHistoryInput
    connect?: StudentWhereUniqueInput
    update?: XOR<XOR<StudentUpdateToOneWithWhereWithoutStudentHistoryInput, StudentUpdateWithoutStudentHistoryInput>, StudentUncheckedUpdateWithoutStudentHistoryInput>
  }

  export type GroupUpdateOneWithoutStudentHistoryNestedInput = {
    create?: XOR<GroupCreateWithoutStudentHistoryInput, GroupUncheckedCreateWithoutStudentHistoryInput>
    connectOrCreate?: GroupCreateOrConnectWithoutStudentHistoryInput
    upsert?: GroupUpsertWithoutStudentHistoryInput
    disconnect?: GroupWhereInput | boolean
    delete?: GroupWhereInput | boolean
    connect?: GroupWhereUniqueInput
    update?: XOR<XOR<GroupUpdateToOneWithWhereWithoutStudentHistoryInput, GroupUpdateWithoutStudentHistoryInput>, GroupUncheckedUpdateWithoutStudentHistoryInput>
  }

  export type MedicalCertificateCreateNestedManyWithoutHealthGroupInput = {
    create?: XOR<MedicalCertificateCreateWithoutHealthGroupInput, MedicalCertificateUncheckedCreateWithoutHealthGroupInput> | MedicalCertificateCreateWithoutHealthGroupInput[] | MedicalCertificateUncheckedCreateWithoutHealthGroupInput[]
    connectOrCreate?: MedicalCertificateCreateOrConnectWithoutHealthGroupInput | MedicalCertificateCreateOrConnectWithoutHealthGroupInput[]
    createMany?: MedicalCertificateCreateManyHealthGroupInputEnvelope
    connect?: MedicalCertificateWhereUniqueInput | MedicalCertificateWhereUniqueInput[]
  }

  export type MedicalCertificateHistoryCreateNestedManyWithoutHealthGroupInput = {
    create?: XOR<MedicalCertificateHistoryCreateWithoutHealthGroupInput, MedicalCertificateHistoryUncheckedCreateWithoutHealthGroupInput> | MedicalCertificateHistoryCreateWithoutHealthGroupInput[] | MedicalCertificateHistoryUncheckedCreateWithoutHealthGroupInput[]
    connectOrCreate?: MedicalCertificateHistoryCreateOrConnectWithoutHealthGroupInput | MedicalCertificateHistoryCreateOrConnectWithoutHealthGroupInput[]
    createMany?: MedicalCertificateHistoryCreateManyHealthGroupInputEnvelope
    connect?: MedicalCertificateHistoryWhereUniqueInput | MedicalCertificateHistoryWhereUniqueInput[]
  }

  export type MedicalCertificateUncheckedCreateNestedManyWithoutHealthGroupInput = {
    create?: XOR<MedicalCertificateCreateWithoutHealthGroupInput, MedicalCertificateUncheckedCreateWithoutHealthGroupInput> | MedicalCertificateCreateWithoutHealthGroupInput[] | MedicalCertificateUncheckedCreateWithoutHealthGroupInput[]
    connectOrCreate?: MedicalCertificateCreateOrConnectWithoutHealthGroupInput | MedicalCertificateCreateOrConnectWithoutHealthGroupInput[]
    createMany?: MedicalCertificateCreateManyHealthGroupInputEnvelope
    connect?: MedicalCertificateWhereUniqueInput | MedicalCertificateWhereUniqueInput[]
  }

  export type MedicalCertificateHistoryUncheckedCreateNestedManyWithoutHealthGroupInput = {
    create?: XOR<MedicalCertificateHistoryCreateWithoutHealthGroupInput, MedicalCertificateHistoryUncheckedCreateWithoutHealthGroupInput> | MedicalCertificateHistoryCreateWithoutHealthGroupInput[] | MedicalCertificateHistoryUncheckedCreateWithoutHealthGroupInput[]
    connectOrCreate?: MedicalCertificateHistoryCreateOrConnectWithoutHealthGroupInput | MedicalCertificateHistoryCreateOrConnectWithoutHealthGroupInput[]
    createMany?: MedicalCertificateHistoryCreateManyHealthGroupInputEnvelope
    connect?: MedicalCertificateHistoryWhereUniqueInput | MedicalCertificateHistoryWhereUniqueInput[]
  }

  export type MedicalCertificateUpdateManyWithoutHealthGroupNestedInput = {
    create?: XOR<MedicalCertificateCreateWithoutHealthGroupInput, MedicalCertificateUncheckedCreateWithoutHealthGroupInput> | MedicalCertificateCreateWithoutHealthGroupInput[] | MedicalCertificateUncheckedCreateWithoutHealthGroupInput[]
    connectOrCreate?: MedicalCertificateCreateOrConnectWithoutHealthGroupInput | MedicalCertificateCreateOrConnectWithoutHealthGroupInput[]
    upsert?: MedicalCertificateUpsertWithWhereUniqueWithoutHealthGroupInput | MedicalCertificateUpsertWithWhereUniqueWithoutHealthGroupInput[]
    createMany?: MedicalCertificateCreateManyHealthGroupInputEnvelope
    set?: MedicalCertificateWhereUniqueInput | MedicalCertificateWhereUniqueInput[]
    disconnect?: MedicalCertificateWhereUniqueInput | MedicalCertificateWhereUniqueInput[]
    delete?: MedicalCertificateWhereUniqueInput | MedicalCertificateWhereUniqueInput[]
    connect?: MedicalCertificateWhereUniqueInput | MedicalCertificateWhereUniqueInput[]
    update?: MedicalCertificateUpdateWithWhereUniqueWithoutHealthGroupInput | MedicalCertificateUpdateWithWhereUniqueWithoutHealthGroupInput[]
    updateMany?: MedicalCertificateUpdateManyWithWhereWithoutHealthGroupInput | MedicalCertificateUpdateManyWithWhereWithoutHealthGroupInput[]
    deleteMany?: MedicalCertificateScalarWhereInput | MedicalCertificateScalarWhereInput[]
  }

  export type MedicalCertificateHistoryUpdateManyWithoutHealthGroupNestedInput = {
    create?: XOR<MedicalCertificateHistoryCreateWithoutHealthGroupInput, MedicalCertificateHistoryUncheckedCreateWithoutHealthGroupInput> | MedicalCertificateHistoryCreateWithoutHealthGroupInput[] | MedicalCertificateHistoryUncheckedCreateWithoutHealthGroupInput[]
    connectOrCreate?: MedicalCertificateHistoryCreateOrConnectWithoutHealthGroupInput | MedicalCertificateHistoryCreateOrConnectWithoutHealthGroupInput[]
    upsert?: MedicalCertificateHistoryUpsertWithWhereUniqueWithoutHealthGroupInput | MedicalCertificateHistoryUpsertWithWhereUniqueWithoutHealthGroupInput[]
    createMany?: MedicalCertificateHistoryCreateManyHealthGroupInputEnvelope
    set?: MedicalCertificateHistoryWhereUniqueInput | MedicalCertificateHistoryWhereUniqueInput[]
    disconnect?: MedicalCertificateHistoryWhereUniqueInput | MedicalCertificateHistoryWhereUniqueInput[]
    delete?: MedicalCertificateHistoryWhereUniqueInput | MedicalCertificateHistoryWhereUniqueInput[]
    connect?: MedicalCertificateHistoryWhereUniqueInput | MedicalCertificateHistoryWhereUniqueInput[]
    update?: MedicalCertificateHistoryUpdateWithWhereUniqueWithoutHealthGroupInput | MedicalCertificateHistoryUpdateWithWhereUniqueWithoutHealthGroupInput[]
    updateMany?: MedicalCertificateHistoryUpdateManyWithWhereWithoutHealthGroupInput | MedicalCertificateHistoryUpdateManyWithWhereWithoutHealthGroupInput[]
    deleteMany?: MedicalCertificateHistoryScalarWhereInput | MedicalCertificateHistoryScalarWhereInput[]
  }

  export type MedicalCertificateUncheckedUpdateManyWithoutHealthGroupNestedInput = {
    create?: XOR<MedicalCertificateCreateWithoutHealthGroupInput, MedicalCertificateUncheckedCreateWithoutHealthGroupInput> | MedicalCertificateCreateWithoutHealthGroupInput[] | MedicalCertificateUncheckedCreateWithoutHealthGroupInput[]
    connectOrCreate?: MedicalCertificateCreateOrConnectWithoutHealthGroupInput | MedicalCertificateCreateOrConnectWithoutHealthGroupInput[]
    upsert?: MedicalCertificateUpsertWithWhereUniqueWithoutHealthGroupInput | MedicalCertificateUpsertWithWhereUniqueWithoutHealthGroupInput[]
    createMany?: MedicalCertificateCreateManyHealthGroupInputEnvelope
    set?: MedicalCertificateWhereUniqueInput | MedicalCertificateWhereUniqueInput[]
    disconnect?: MedicalCertificateWhereUniqueInput | MedicalCertificateWhereUniqueInput[]
    delete?: MedicalCertificateWhereUniqueInput | MedicalCertificateWhereUniqueInput[]
    connect?: MedicalCertificateWhereUniqueInput | MedicalCertificateWhereUniqueInput[]
    update?: MedicalCertificateUpdateWithWhereUniqueWithoutHealthGroupInput | MedicalCertificateUpdateWithWhereUniqueWithoutHealthGroupInput[]
    updateMany?: MedicalCertificateUpdateManyWithWhereWithoutHealthGroupInput | MedicalCertificateUpdateManyWithWhereWithoutHealthGroupInput[]
    deleteMany?: MedicalCertificateScalarWhereInput | MedicalCertificateScalarWhereInput[]
  }

  export type MedicalCertificateHistoryUncheckedUpdateManyWithoutHealthGroupNestedInput = {
    create?: XOR<MedicalCertificateHistoryCreateWithoutHealthGroupInput, MedicalCertificateHistoryUncheckedCreateWithoutHealthGroupInput> | MedicalCertificateHistoryCreateWithoutHealthGroupInput[] | MedicalCertificateHistoryUncheckedCreateWithoutHealthGroupInput[]
    connectOrCreate?: MedicalCertificateHistoryCreateOrConnectWithoutHealthGroupInput | MedicalCertificateHistoryCreateOrConnectWithoutHealthGroupInput[]
    upsert?: MedicalCertificateHistoryUpsertWithWhereUniqueWithoutHealthGroupInput | MedicalCertificateHistoryUpsertWithWhereUniqueWithoutHealthGroupInput[]
    createMany?: MedicalCertificateHistoryCreateManyHealthGroupInputEnvelope
    set?: MedicalCertificateHistoryWhereUniqueInput | MedicalCertificateHistoryWhereUniqueInput[]
    disconnect?: MedicalCertificateHistoryWhereUniqueInput | MedicalCertificateHistoryWhereUniqueInput[]
    delete?: MedicalCertificateHistoryWhereUniqueInput | MedicalCertificateHistoryWhereUniqueInput[]
    connect?: MedicalCertificateHistoryWhereUniqueInput | MedicalCertificateHistoryWhereUniqueInput[]
    update?: MedicalCertificateHistoryUpdateWithWhereUniqueWithoutHealthGroupInput | MedicalCertificateHistoryUpdateWithWhereUniqueWithoutHealthGroupInput[]
    updateMany?: MedicalCertificateHistoryUpdateManyWithWhereWithoutHealthGroupInput | MedicalCertificateHistoryUpdateManyWithWhereWithoutHealthGroupInput[]
    deleteMany?: MedicalCertificateHistoryScalarWhereInput | MedicalCertificateHistoryScalarWhereInput[]
  }

  export type MedicalCertificateCreateNestedManyWithoutPhysicalEducationInput = {
    create?: XOR<MedicalCertificateCreateWithoutPhysicalEducationInput, MedicalCertificateUncheckedCreateWithoutPhysicalEducationInput> | MedicalCertificateCreateWithoutPhysicalEducationInput[] | MedicalCertificateUncheckedCreateWithoutPhysicalEducationInput[]
    connectOrCreate?: MedicalCertificateCreateOrConnectWithoutPhysicalEducationInput | MedicalCertificateCreateOrConnectWithoutPhysicalEducationInput[]
    createMany?: MedicalCertificateCreateManyPhysicalEducationInputEnvelope
    connect?: MedicalCertificateWhereUniqueInput | MedicalCertificateWhereUniqueInput[]
  }

  export type MedicalCertificateHistoryCreateNestedManyWithoutPhysicalEducationInput = {
    create?: XOR<MedicalCertificateHistoryCreateWithoutPhysicalEducationInput, MedicalCertificateHistoryUncheckedCreateWithoutPhysicalEducationInput> | MedicalCertificateHistoryCreateWithoutPhysicalEducationInput[] | MedicalCertificateHistoryUncheckedCreateWithoutPhysicalEducationInput[]
    connectOrCreate?: MedicalCertificateHistoryCreateOrConnectWithoutPhysicalEducationInput | MedicalCertificateHistoryCreateOrConnectWithoutPhysicalEducationInput[]
    createMany?: MedicalCertificateHistoryCreateManyPhysicalEducationInputEnvelope
    connect?: MedicalCertificateHistoryWhereUniqueInput | MedicalCertificateHistoryWhereUniqueInput[]
  }

  export type MedicalCertificateUncheckedCreateNestedManyWithoutPhysicalEducationInput = {
    create?: XOR<MedicalCertificateCreateWithoutPhysicalEducationInput, MedicalCertificateUncheckedCreateWithoutPhysicalEducationInput> | MedicalCertificateCreateWithoutPhysicalEducationInput[] | MedicalCertificateUncheckedCreateWithoutPhysicalEducationInput[]
    connectOrCreate?: MedicalCertificateCreateOrConnectWithoutPhysicalEducationInput | MedicalCertificateCreateOrConnectWithoutPhysicalEducationInput[]
    createMany?: MedicalCertificateCreateManyPhysicalEducationInputEnvelope
    connect?: MedicalCertificateWhereUniqueInput | MedicalCertificateWhereUniqueInput[]
  }

  export type MedicalCertificateHistoryUncheckedCreateNestedManyWithoutPhysicalEducationInput = {
    create?: XOR<MedicalCertificateHistoryCreateWithoutPhysicalEducationInput, MedicalCertificateHistoryUncheckedCreateWithoutPhysicalEducationInput> | MedicalCertificateHistoryCreateWithoutPhysicalEducationInput[] | MedicalCertificateHistoryUncheckedCreateWithoutPhysicalEducationInput[]
    connectOrCreate?: MedicalCertificateHistoryCreateOrConnectWithoutPhysicalEducationInput | MedicalCertificateHistoryCreateOrConnectWithoutPhysicalEducationInput[]
    createMany?: MedicalCertificateHistoryCreateManyPhysicalEducationInputEnvelope
    connect?: MedicalCertificateHistoryWhereUniqueInput | MedicalCertificateHistoryWhereUniqueInput[]
  }

  export type MedicalCertificateUpdateManyWithoutPhysicalEducationNestedInput = {
    create?: XOR<MedicalCertificateCreateWithoutPhysicalEducationInput, MedicalCertificateUncheckedCreateWithoutPhysicalEducationInput> | MedicalCertificateCreateWithoutPhysicalEducationInput[] | MedicalCertificateUncheckedCreateWithoutPhysicalEducationInput[]
    connectOrCreate?: MedicalCertificateCreateOrConnectWithoutPhysicalEducationInput | MedicalCertificateCreateOrConnectWithoutPhysicalEducationInput[]
    upsert?: MedicalCertificateUpsertWithWhereUniqueWithoutPhysicalEducationInput | MedicalCertificateUpsertWithWhereUniqueWithoutPhysicalEducationInput[]
    createMany?: MedicalCertificateCreateManyPhysicalEducationInputEnvelope
    set?: MedicalCertificateWhereUniqueInput | MedicalCertificateWhereUniqueInput[]
    disconnect?: MedicalCertificateWhereUniqueInput | MedicalCertificateWhereUniqueInput[]
    delete?: MedicalCertificateWhereUniqueInput | MedicalCertificateWhereUniqueInput[]
    connect?: MedicalCertificateWhereUniqueInput | MedicalCertificateWhereUniqueInput[]
    update?: MedicalCertificateUpdateWithWhereUniqueWithoutPhysicalEducationInput | MedicalCertificateUpdateWithWhereUniqueWithoutPhysicalEducationInput[]
    updateMany?: MedicalCertificateUpdateManyWithWhereWithoutPhysicalEducationInput | MedicalCertificateUpdateManyWithWhereWithoutPhysicalEducationInput[]
    deleteMany?: MedicalCertificateScalarWhereInput | MedicalCertificateScalarWhereInput[]
  }

  export type MedicalCertificateHistoryUpdateManyWithoutPhysicalEducationNestedInput = {
    create?: XOR<MedicalCertificateHistoryCreateWithoutPhysicalEducationInput, MedicalCertificateHistoryUncheckedCreateWithoutPhysicalEducationInput> | MedicalCertificateHistoryCreateWithoutPhysicalEducationInput[] | MedicalCertificateHistoryUncheckedCreateWithoutPhysicalEducationInput[]
    connectOrCreate?: MedicalCertificateHistoryCreateOrConnectWithoutPhysicalEducationInput | MedicalCertificateHistoryCreateOrConnectWithoutPhysicalEducationInput[]
    upsert?: MedicalCertificateHistoryUpsertWithWhereUniqueWithoutPhysicalEducationInput | MedicalCertificateHistoryUpsertWithWhereUniqueWithoutPhysicalEducationInput[]
    createMany?: MedicalCertificateHistoryCreateManyPhysicalEducationInputEnvelope
    set?: MedicalCertificateHistoryWhereUniqueInput | MedicalCertificateHistoryWhereUniqueInput[]
    disconnect?: MedicalCertificateHistoryWhereUniqueInput | MedicalCertificateHistoryWhereUniqueInput[]
    delete?: MedicalCertificateHistoryWhereUniqueInput | MedicalCertificateHistoryWhereUniqueInput[]
    connect?: MedicalCertificateHistoryWhereUniqueInput | MedicalCertificateHistoryWhereUniqueInput[]
    update?: MedicalCertificateHistoryUpdateWithWhereUniqueWithoutPhysicalEducationInput | MedicalCertificateHistoryUpdateWithWhereUniqueWithoutPhysicalEducationInput[]
    updateMany?: MedicalCertificateHistoryUpdateManyWithWhereWithoutPhysicalEducationInput | MedicalCertificateHistoryUpdateManyWithWhereWithoutPhysicalEducationInput[]
    deleteMany?: MedicalCertificateHistoryScalarWhereInput | MedicalCertificateHistoryScalarWhereInput[]
  }

  export type MedicalCertificateUncheckedUpdateManyWithoutPhysicalEducationNestedInput = {
    create?: XOR<MedicalCertificateCreateWithoutPhysicalEducationInput, MedicalCertificateUncheckedCreateWithoutPhysicalEducationInput> | MedicalCertificateCreateWithoutPhysicalEducationInput[] | MedicalCertificateUncheckedCreateWithoutPhysicalEducationInput[]
    connectOrCreate?: MedicalCertificateCreateOrConnectWithoutPhysicalEducationInput | MedicalCertificateCreateOrConnectWithoutPhysicalEducationInput[]
    upsert?: MedicalCertificateUpsertWithWhereUniqueWithoutPhysicalEducationInput | MedicalCertificateUpsertWithWhereUniqueWithoutPhysicalEducationInput[]
    createMany?: MedicalCertificateCreateManyPhysicalEducationInputEnvelope
    set?: MedicalCertificateWhereUniqueInput | MedicalCertificateWhereUniqueInput[]
    disconnect?: MedicalCertificateWhereUniqueInput | MedicalCertificateWhereUniqueInput[]
    delete?: MedicalCertificateWhereUniqueInput | MedicalCertificateWhereUniqueInput[]
    connect?: MedicalCertificateWhereUniqueInput | MedicalCertificateWhereUniqueInput[]
    update?: MedicalCertificateUpdateWithWhereUniqueWithoutPhysicalEducationInput | MedicalCertificateUpdateWithWhereUniqueWithoutPhysicalEducationInput[]
    updateMany?: MedicalCertificateUpdateManyWithWhereWithoutPhysicalEducationInput | MedicalCertificateUpdateManyWithWhereWithoutPhysicalEducationInput[]
    deleteMany?: MedicalCertificateScalarWhereInput | MedicalCertificateScalarWhereInput[]
  }

  export type MedicalCertificateHistoryUncheckedUpdateManyWithoutPhysicalEducationNestedInput = {
    create?: XOR<MedicalCertificateHistoryCreateWithoutPhysicalEducationInput, MedicalCertificateHistoryUncheckedCreateWithoutPhysicalEducationInput> | MedicalCertificateHistoryCreateWithoutPhysicalEducationInput[] | MedicalCertificateHistoryUncheckedCreateWithoutPhysicalEducationInput[]
    connectOrCreate?: MedicalCertificateHistoryCreateOrConnectWithoutPhysicalEducationInput | MedicalCertificateHistoryCreateOrConnectWithoutPhysicalEducationInput[]
    upsert?: MedicalCertificateHistoryUpsertWithWhereUniqueWithoutPhysicalEducationInput | MedicalCertificateHistoryUpsertWithWhereUniqueWithoutPhysicalEducationInput[]
    createMany?: MedicalCertificateHistoryCreateManyPhysicalEducationInputEnvelope
    set?: MedicalCertificateHistoryWhereUniqueInput | MedicalCertificateHistoryWhereUniqueInput[]
    disconnect?: MedicalCertificateHistoryWhereUniqueInput | MedicalCertificateHistoryWhereUniqueInput[]
    delete?: MedicalCertificateHistoryWhereUniqueInput | MedicalCertificateHistoryWhereUniqueInput[]
    connect?: MedicalCertificateHistoryWhereUniqueInput | MedicalCertificateHistoryWhereUniqueInput[]
    update?: MedicalCertificateHistoryUpdateWithWhereUniqueWithoutPhysicalEducationInput | MedicalCertificateHistoryUpdateWithWhereUniqueWithoutPhysicalEducationInput[]
    updateMany?: MedicalCertificateHistoryUpdateManyWithWhereWithoutPhysicalEducationInput | MedicalCertificateHistoryUpdateManyWithWhereWithoutPhysicalEducationInput[]
    deleteMany?: MedicalCertificateHistoryScalarWhereInput | MedicalCertificateHistoryScalarWhereInput[]
  }

  export type MedicalCertificateHistoryCreateNestedManyWithoutMedicalCertificateInput = {
    create?: XOR<MedicalCertificateHistoryCreateWithoutMedicalCertificateInput, MedicalCertificateHistoryUncheckedCreateWithoutMedicalCertificateInput> | MedicalCertificateHistoryCreateWithoutMedicalCertificateInput[] | MedicalCertificateHistoryUncheckedCreateWithoutMedicalCertificateInput[]
    connectOrCreate?: MedicalCertificateHistoryCreateOrConnectWithoutMedicalCertificateInput | MedicalCertificateHistoryCreateOrConnectWithoutMedicalCertificateInput[]
    createMany?: MedicalCertificateHistoryCreateManyMedicalCertificateInputEnvelope
    connect?: MedicalCertificateHistoryWhereUniqueInput | MedicalCertificateHistoryWhereUniqueInput[]
  }

  export type HealthGroupCreateNestedOneWithoutMedicalCertificatesInput = {
    create?: XOR<HealthGroupCreateWithoutMedicalCertificatesInput, HealthGroupUncheckedCreateWithoutMedicalCertificatesInput>
    connectOrCreate?: HealthGroupCreateOrConnectWithoutMedicalCertificatesInput
    connect?: HealthGroupWhereUniqueInput
  }

  export type PhysicalEducationCreateNestedOneWithoutMedicalCertificatesInput = {
    create?: XOR<PhysicalEducationCreateWithoutMedicalCertificatesInput, PhysicalEducationUncheckedCreateWithoutMedicalCertificatesInput>
    connectOrCreate?: PhysicalEducationCreateOrConnectWithoutMedicalCertificatesInput
    connect?: PhysicalEducationWhereUniqueInput
  }

  export type StudentCreateNestedOneWithoutMedicalCertificatesInput = {
    create?: XOR<StudentCreateWithoutMedicalCertificatesInput, StudentUncheckedCreateWithoutMedicalCertificatesInput>
    connectOrCreate?: StudentCreateOrConnectWithoutMedicalCertificatesInput
    connect?: StudentWhereUniqueInput
  }

  export type MedicalCertificateHistoryUncheckedCreateNestedManyWithoutMedicalCertificateInput = {
    create?: XOR<MedicalCertificateHistoryCreateWithoutMedicalCertificateInput, MedicalCertificateHistoryUncheckedCreateWithoutMedicalCertificateInput> | MedicalCertificateHistoryCreateWithoutMedicalCertificateInput[] | MedicalCertificateHistoryUncheckedCreateWithoutMedicalCertificateInput[]
    connectOrCreate?: MedicalCertificateHistoryCreateOrConnectWithoutMedicalCertificateInput | MedicalCertificateHistoryCreateOrConnectWithoutMedicalCertificateInput[]
    createMany?: MedicalCertificateHistoryCreateManyMedicalCertificateInputEnvelope
    connect?: MedicalCertificateHistoryWhereUniqueInput | MedicalCertificateHistoryWhereUniqueInput[]
  }

  export type MedicalCertificateHistoryUpdateManyWithoutMedicalCertificateNestedInput = {
    create?: XOR<MedicalCertificateHistoryCreateWithoutMedicalCertificateInput, MedicalCertificateHistoryUncheckedCreateWithoutMedicalCertificateInput> | MedicalCertificateHistoryCreateWithoutMedicalCertificateInput[] | MedicalCertificateHistoryUncheckedCreateWithoutMedicalCertificateInput[]
    connectOrCreate?: MedicalCertificateHistoryCreateOrConnectWithoutMedicalCertificateInput | MedicalCertificateHistoryCreateOrConnectWithoutMedicalCertificateInput[]
    upsert?: MedicalCertificateHistoryUpsertWithWhereUniqueWithoutMedicalCertificateInput | MedicalCertificateHistoryUpsertWithWhereUniqueWithoutMedicalCertificateInput[]
    createMany?: MedicalCertificateHistoryCreateManyMedicalCertificateInputEnvelope
    set?: MedicalCertificateHistoryWhereUniqueInput | MedicalCertificateHistoryWhereUniqueInput[]
    disconnect?: MedicalCertificateHistoryWhereUniqueInput | MedicalCertificateHistoryWhereUniqueInput[]
    delete?: MedicalCertificateHistoryWhereUniqueInput | MedicalCertificateHistoryWhereUniqueInput[]
    connect?: MedicalCertificateHistoryWhereUniqueInput | MedicalCertificateHistoryWhereUniqueInput[]
    update?: MedicalCertificateHistoryUpdateWithWhereUniqueWithoutMedicalCertificateInput | MedicalCertificateHistoryUpdateWithWhereUniqueWithoutMedicalCertificateInput[]
    updateMany?: MedicalCertificateHistoryUpdateManyWithWhereWithoutMedicalCertificateInput | MedicalCertificateHistoryUpdateManyWithWhereWithoutMedicalCertificateInput[]
    deleteMany?: MedicalCertificateHistoryScalarWhereInput | MedicalCertificateHistoryScalarWhereInput[]
  }

  export type HealthGroupUpdateOneRequiredWithoutMedicalCertificatesNestedInput = {
    create?: XOR<HealthGroupCreateWithoutMedicalCertificatesInput, HealthGroupUncheckedCreateWithoutMedicalCertificatesInput>
    connectOrCreate?: HealthGroupCreateOrConnectWithoutMedicalCertificatesInput
    upsert?: HealthGroupUpsertWithoutMedicalCertificatesInput
    connect?: HealthGroupWhereUniqueInput
    update?: XOR<XOR<HealthGroupUpdateToOneWithWhereWithoutMedicalCertificatesInput, HealthGroupUpdateWithoutMedicalCertificatesInput>, HealthGroupUncheckedUpdateWithoutMedicalCertificatesInput>
  }

  export type PhysicalEducationUpdateOneRequiredWithoutMedicalCertificatesNestedInput = {
    create?: XOR<PhysicalEducationCreateWithoutMedicalCertificatesInput, PhysicalEducationUncheckedCreateWithoutMedicalCertificatesInput>
    connectOrCreate?: PhysicalEducationCreateOrConnectWithoutMedicalCertificatesInput
    upsert?: PhysicalEducationUpsertWithoutMedicalCertificatesInput
    connect?: PhysicalEducationWhereUniqueInput
    update?: XOR<XOR<PhysicalEducationUpdateToOneWithWhereWithoutMedicalCertificatesInput, PhysicalEducationUpdateWithoutMedicalCertificatesInput>, PhysicalEducationUncheckedUpdateWithoutMedicalCertificatesInput>
  }

  export type StudentUpdateOneRequiredWithoutMedicalCertificatesNestedInput = {
    create?: XOR<StudentCreateWithoutMedicalCertificatesInput, StudentUncheckedCreateWithoutMedicalCertificatesInput>
    connectOrCreate?: StudentCreateOrConnectWithoutMedicalCertificatesInput
    upsert?: StudentUpsertWithoutMedicalCertificatesInput
    connect?: StudentWhereUniqueInput
    update?: XOR<XOR<StudentUpdateToOneWithWhereWithoutMedicalCertificatesInput, StudentUpdateWithoutMedicalCertificatesInput>, StudentUncheckedUpdateWithoutMedicalCertificatesInput>
  }

  export type MedicalCertificateHistoryUncheckedUpdateManyWithoutMedicalCertificateNestedInput = {
    create?: XOR<MedicalCertificateHistoryCreateWithoutMedicalCertificateInput, MedicalCertificateHistoryUncheckedCreateWithoutMedicalCertificateInput> | MedicalCertificateHistoryCreateWithoutMedicalCertificateInput[] | MedicalCertificateHistoryUncheckedCreateWithoutMedicalCertificateInput[]
    connectOrCreate?: MedicalCertificateHistoryCreateOrConnectWithoutMedicalCertificateInput | MedicalCertificateHistoryCreateOrConnectWithoutMedicalCertificateInput[]
    upsert?: MedicalCertificateHistoryUpsertWithWhereUniqueWithoutMedicalCertificateInput | MedicalCertificateHistoryUpsertWithWhereUniqueWithoutMedicalCertificateInput[]
    createMany?: MedicalCertificateHistoryCreateManyMedicalCertificateInputEnvelope
    set?: MedicalCertificateHistoryWhereUniqueInput | MedicalCertificateHistoryWhereUniqueInput[]
    disconnect?: MedicalCertificateHistoryWhereUniqueInput | MedicalCertificateHistoryWhereUniqueInput[]
    delete?: MedicalCertificateHistoryWhereUniqueInput | MedicalCertificateHistoryWhereUniqueInput[]
    connect?: MedicalCertificateHistoryWhereUniqueInput | MedicalCertificateHistoryWhereUniqueInput[]
    update?: MedicalCertificateHistoryUpdateWithWhereUniqueWithoutMedicalCertificateInput | MedicalCertificateHistoryUpdateWithWhereUniqueWithoutMedicalCertificateInput[]
    updateMany?: MedicalCertificateHistoryUpdateManyWithWhereWithoutMedicalCertificateInput | MedicalCertificateHistoryUpdateManyWithWhereWithoutMedicalCertificateInput[]
    deleteMany?: MedicalCertificateHistoryScalarWhereInput | MedicalCertificateHistoryScalarWhereInput[]
  }

  export type MedicalCertificateCreateNestedOneWithoutMedicalCertificateHistoryInput = {
    create?: XOR<MedicalCertificateCreateWithoutMedicalCertificateHistoryInput, MedicalCertificateUncheckedCreateWithoutMedicalCertificateHistoryInput>
    connectOrCreate?: MedicalCertificateCreateOrConnectWithoutMedicalCertificateHistoryInput
    connect?: MedicalCertificateWhereUniqueInput
  }

  export type HealthGroupCreateNestedOneWithoutMedicalCertificateHistoryInput = {
    create?: XOR<HealthGroupCreateWithoutMedicalCertificateHistoryInput, HealthGroupUncheckedCreateWithoutMedicalCertificateHistoryInput>
    connectOrCreate?: HealthGroupCreateOrConnectWithoutMedicalCertificateHistoryInput
    connect?: HealthGroupWhereUniqueInput
  }

  export type PhysicalEducationCreateNestedOneWithoutMedicalCertificateHistoryInput = {
    create?: XOR<PhysicalEducationCreateWithoutMedicalCertificateHistoryInput, PhysicalEducationUncheckedCreateWithoutMedicalCertificateHistoryInput>
    connectOrCreate?: PhysicalEducationCreateOrConnectWithoutMedicalCertificateHistoryInput
    connect?: PhysicalEducationWhereUniqueInput
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type MedicalCertificateUpdateOneRequiredWithoutMedicalCertificateHistoryNestedInput = {
    create?: XOR<MedicalCertificateCreateWithoutMedicalCertificateHistoryInput, MedicalCertificateUncheckedCreateWithoutMedicalCertificateHistoryInput>
    connectOrCreate?: MedicalCertificateCreateOrConnectWithoutMedicalCertificateHistoryInput
    upsert?: MedicalCertificateUpsertWithoutMedicalCertificateHistoryInput
    connect?: MedicalCertificateWhereUniqueInput
    update?: XOR<XOR<MedicalCertificateUpdateToOneWithWhereWithoutMedicalCertificateHistoryInput, MedicalCertificateUpdateWithoutMedicalCertificateHistoryInput>, MedicalCertificateUncheckedUpdateWithoutMedicalCertificateHistoryInput>
  }

  export type HealthGroupUpdateOneWithoutMedicalCertificateHistoryNestedInput = {
    create?: XOR<HealthGroupCreateWithoutMedicalCertificateHistoryInput, HealthGroupUncheckedCreateWithoutMedicalCertificateHistoryInput>
    connectOrCreate?: HealthGroupCreateOrConnectWithoutMedicalCertificateHistoryInput
    upsert?: HealthGroupUpsertWithoutMedicalCertificateHistoryInput
    disconnect?: HealthGroupWhereInput | boolean
    delete?: HealthGroupWhereInput | boolean
    connect?: HealthGroupWhereUniqueInput
    update?: XOR<XOR<HealthGroupUpdateToOneWithWhereWithoutMedicalCertificateHistoryInput, HealthGroupUpdateWithoutMedicalCertificateHistoryInput>, HealthGroupUncheckedUpdateWithoutMedicalCertificateHistoryInput>
  }

  export type PhysicalEducationUpdateOneWithoutMedicalCertificateHistoryNestedInput = {
    create?: XOR<PhysicalEducationCreateWithoutMedicalCertificateHistoryInput, PhysicalEducationUncheckedCreateWithoutMedicalCertificateHistoryInput>
    connectOrCreate?: PhysicalEducationCreateOrConnectWithoutMedicalCertificateHistoryInput
    upsert?: PhysicalEducationUpsertWithoutMedicalCertificateHistoryInput
    disconnect?: PhysicalEducationWhereInput | boolean
    delete?: PhysicalEducationWhereInput | boolean
    connect?: PhysicalEducationWhereUniqueInput
    update?: XOR<XOR<PhysicalEducationUpdateToOneWithWhereWithoutMedicalCertificateHistoryInput, PhysicalEducationUpdateWithoutMedicalCertificateHistoryInput>, PhysicalEducationUncheckedUpdateWithoutMedicalCertificateHistoryInput>
  }

  export type CourseCreateNestedOneWithoutGroupsInput = {
    create?: XOR<CourseCreateWithoutGroupsInput, CourseUncheckedCreateWithoutGroupsInput>
    connectOrCreate?: CourseCreateOrConnectWithoutGroupsInput
    connect?: CourseWhereUniqueInput
  }

  export type StudentCreateNestedManyWithoutGroupInput = {
    create?: XOR<StudentCreateWithoutGroupInput, StudentUncheckedCreateWithoutGroupInput> | StudentCreateWithoutGroupInput[] | StudentUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: StudentCreateOrConnectWithoutGroupInput | StudentCreateOrConnectWithoutGroupInput[]
    createMany?: StudentCreateManyGroupInputEnvelope
    connect?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
  }

  export type UserCreateNestedManyWithoutGroupInput = {
    create?: XOR<UserCreateWithoutGroupInput, UserUncheckedCreateWithoutGroupInput> | UserCreateWithoutGroupInput[] | UserUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: UserCreateOrConnectWithoutGroupInput | UserCreateOrConnectWithoutGroupInput[]
    createMany?: UserCreateManyGroupInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type StudentHistoryCreateNestedManyWithoutGroupInput = {
    create?: XOR<StudentHistoryCreateWithoutGroupInput, StudentHistoryUncheckedCreateWithoutGroupInput> | StudentHistoryCreateWithoutGroupInput[] | StudentHistoryUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: StudentHistoryCreateOrConnectWithoutGroupInput | StudentHistoryCreateOrConnectWithoutGroupInput[]
    createMany?: StudentHistoryCreateManyGroupInputEnvelope
    connect?: StudentHistoryWhereUniqueInput | StudentHistoryWhereUniqueInput[]
  }

  export type StudentUncheckedCreateNestedManyWithoutGroupInput = {
    create?: XOR<StudentCreateWithoutGroupInput, StudentUncheckedCreateWithoutGroupInput> | StudentCreateWithoutGroupInput[] | StudentUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: StudentCreateOrConnectWithoutGroupInput | StudentCreateOrConnectWithoutGroupInput[]
    createMany?: StudentCreateManyGroupInputEnvelope
    connect?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutGroupInput = {
    create?: XOR<UserCreateWithoutGroupInput, UserUncheckedCreateWithoutGroupInput> | UserCreateWithoutGroupInput[] | UserUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: UserCreateOrConnectWithoutGroupInput | UserCreateOrConnectWithoutGroupInput[]
    createMany?: UserCreateManyGroupInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type StudentHistoryUncheckedCreateNestedManyWithoutGroupInput = {
    create?: XOR<StudentHistoryCreateWithoutGroupInput, StudentHistoryUncheckedCreateWithoutGroupInput> | StudentHistoryCreateWithoutGroupInput[] | StudentHistoryUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: StudentHistoryCreateOrConnectWithoutGroupInput | StudentHistoryCreateOrConnectWithoutGroupInput[]
    createMany?: StudentHistoryCreateManyGroupInputEnvelope
    connect?: StudentHistoryWhereUniqueInput | StudentHistoryWhereUniqueInput[]
  }

  export type CourseUpdateOneRequiredWithoutGroupsNestedInput = {
    create?: XOR<CourseCreateWithoutGroupsInput, CourseUncheckedCreateWithoutGroupsInput>
    connectOrCreate?: CourseCreateOrConnectWithoutGroupsInput
    upsert?: CourseUpsertWithoutGroupsInput
    connect?: CourseWhereUniqueInput
    update?: XOR<XOR<CourseUpdateToOneWithWhereWithoutGroupsInput, CourseUpdateWithoutGroupsInput>, CourseUncheckedUpdateWithoutGroupsInput>
  }

  export type StudentUpdateManyWithoutGroupNestedInput = {
    create?: XOR<StudentCreateWithoutGroupInput, StudentUncheckedCreateWithoutGroupInput> | StudentCreateWithoutGroupInput[] | StudentUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: StudentCreateOrConnectWithoutGroupInput | StudentCreateOrConnectWithoutGroupInput[]
    upsert?: StudentUpsertWithWhereUniqueWithoutGroupInput | StudentUpsertWithWhereUniqueWithoutGroupInput[]
    createMany?: StudentCreateManyGroupInputEnvelope
    set?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
    disconnect?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
    delete?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
    connect?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
    update?: StudentUpdateWithWhereUniqueWithoutGroupInput | StudentUpdateWithWhereUniqueWithoutGroupInput[]
    updateMany?: StudentUpdateManyWithWhereWithoutGroupInput | StudentUpdateManyWithWhereWithoutGroupInput[]
    deleteMany?: StudentScalarWhereInput | StudentScalarWhereInput[]
  }

  export type UserUpdateManyWithoutGroupNestedInput = {
    create?: XOR<UserCreateWithoutGroupInput, UserUncheckedCreateWithoutGroupInput> | UserCreateWithoutGroupInput[] | UserUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: UserCreateOrConnectWithoutGroupInput | UserCreateOrConnectWithoutGroupInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutGroupInput | UserUpsertWithWhereUniqueWithoutGroupInput[]
    createMany?: UserCreateManyGroupInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutGroupInput | UserUpdateWithWhereUniqueWithoutGroupInput[]
    updateMany?: UserUpdateManyWithWhereWithoutGroupInput | UserUpdateManyWithWhereWithoutGroupInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type StudentHistoryUpdateManyWithoutGroupNestedInput = {
    create?: XOR<StudentHistoryCreateWithoutGroupInput, StudentHistoryUncheckedCreateWithoutGroupInput> | StudentHistoryCreateWithoutGroupInput[] | StudentHistoryUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: StudentHistoryCreateOrConnectWithoutGroupInput | StudentHistoryCreateOrConnectWithoutGroupInput[]
    upsert?: StudentHistoryUpsertWithWhereUniqueWithoutGroupInput | StudentHistoryUpsertWithWhereUniqueWithoutGroupInput[]
    createMany?: StudentHistoryCreateManyGroupInputEnvelope
    set?: StudentHistoryWhereUniqueInput | StudentHistoryWhereUniqueInput[]
    disconnect?: StudentHistoryWhereUniqueInput | StudentHistoryWhereUniqueInput[]
    delete?: StudentHistoryWhereUniqueInput | StudentHistoryWhereUniqueInput[]
    connect?: StudentHistoryWhereUniqueInput | StudentHistoryWhereUniqueInput[]
    update?: StudentHistoryUpdateWithWhereUniqueWithoutGroupInput | StudentHistoryUpdateWithWhereUniqueWithoutGroupInput[]
    updateMany?: StudentHistoryUpdateManyWithWhereWithoutGroupInput | StudentHistoryUpdateManyWithWhereWithoutGroupInput[]
    deleteMany?: StudentHistoryScalarWhereInput | StudentHistoryScalarWhereInput[]
  }

  export type StudentUncheckedUpdateManyWithoutGroupNestedInput = {
    create?: XOR<StudentCreateWithoutGroupInput, StudentUncheckedCreateWithoutGroupInput> | StudentCreateWithoutGroupInput[] | StudentUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: StudentCreateOrConnectWithoutGroupInput | StudentCreateOrConnectWithoutGroupInput[]
    upsert?: StudentUpsertWithWhereUniqueWithoutGroupInput | StudentUpsertWithWhereUniqueWithoutGroupInput[]
    createMany?: StudentCreateManyGroupInputEnvelope
    set?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
    disconnect?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
    delete?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
    connect?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
    update?: StudentUpdateWithWhereUniqueWithoutGroupInput | StudentUpdateWithWhereUniqueWithoutGroupInput[]
    updateMany?: StudentUpdateManyWithWhereWithoutGroupInput | StudentUpdateManyWithWhereWithoutGroupInput[]
    deleteMany?: StudentScalarWhereInput | StudentScalarWhereInput[]
  }

  export type UserUncheckedUpdateManyWithoutGroupNestedInput = {
    create?: XOR<UserCreateWithoutGroupInput, UserUncheckedCreateWithoutGroupInput> | UserCreateWithoutGroupInput[] | UserUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: UserCreateOrConnectWithoutGroupInput | UserCreateOrConnectWithoutGroupInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutGroupInput | UserUpsertWithWhereUniqueWithoutGroupInput[]
    createMany?: UserCreateManyGroupInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutGroupInput | UserUpdateWithWhereUniqueWithoutGroupInput[]
    updateMany?: UserUpdateManyWithWhereWithoutGroupInput | UserUpdateManyWithWhereWithoutGroupInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type StudentHistoryUncheckedUpdateManyWithoutGroupNestedInput = {
    create?: XOR<StudentHistoryCreateWithoutGroupInput, StudentHistoryUncheckedCreateWithoutGroupInput> | StudentHistoryCreateWithoutGroupInput[] | StudentHistoryUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: StudentHistoryCreateOrConnectWithoutGroupInput | StudentHistoryCreateOrConnectWithoutGroupInput[]
    upsert?: StudentHistoryUpsertWithWhereUniqueWithoutGroupInput | StudentHistoryUpsertWithWhereUniqueWithoutGroupInput[]
    createMany?: StudentHistoryCreateManyGroupInputEnvelope
    set?: StudentHistoryWhereUniqueInput | StudentHistoryWhereUniqueInput[]
    disconnect?: StudentHistoryWhereUniqueInput | StudentHistoryWhereUniqueInput[]
    delete?: StudentHistoryWhereUniqueInput | StudentHistoryWhereUniqueInput[]
    connect?: StudentHistoryWhereUniqueInput | StudentHistoryWhereUniqueInput[]
    update?: StudentHistoryUpdateWithWhereUniqueWithoutGroupInput | StudentHistoryUpdateWithWhereUniqueWithoutGroupInput[]
    updateMany?: StudentHistoryUpdateManyWithWhereWithoutGroupInput | StudentHistoryUpdateManyWithWhereWithoutGroupInput[]
    deleteMany?: StudentHistoryScalarWhereInput | StudentHistoryScalarWhereInput[]
  }

  export type CourseCreateNestedManyWithoutDepartmentInput = {
    create?: XOR<CourseCreateWithoutDepartmentInput, CourseUncheckedCreateWithoutDepartmentInput> | CourseCreateWithoutDepartmentInput[] | CourseUncheckedCreateWithoutDepartmentInput[]
    connectOrCreate?: CourseCreateOrConnectWithoutDepartmentInput | CourseCreateOrConnectWithoutDepartmentInput[]
    createMany?: CourseCreateManyDepartmentInputEnvelope
    connect?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
  }

  export type CourseUncheckedCreateNestedManyWithoutDepartmentInput = {
    create?: XOR<CourseCreateWithoutDepartmentInput, CourseUncheckedCreateWithoutDepartmentInput> | CourseCreateWithoutDepartmentInput[] | CourseUncheckedCreateWithoutDepartmentInput[]
    connectOrCreate?: CourseCreateOrConnectWithoutDepartmentInput | CourseCreateOrConnectWithoutDepartmentInput[]
    createMany?: CourseCreateManyDepartmentInputEnvelope
    connect?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
  }

  export type CourseUpdateManyWithoutDepartmentNestedInput = {
    create?: XOR<CourseCreateWithoutDepartmentInput, CourseUncheckedCreateWithoutDepartmentInput> | CourseCreateWithoutDepartmentInput[] | CourseUncheckedCreateWithoutDepartmentInput[]
    connectOrCreate?: CourseCreateOrConnectWithoutDepartmentInput | CourseCreateOrConnectWithoutDepartmentInput[]
    upsert?: CourseUpsertWithWhereUniqueWithoutDepartmentInput | CourseUpsertWithWhereUniqueWithoutDepartmentInput[]
    createMany?: CourseCreateManyDepartmentInputEnvelope
    set?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    disconnect?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    delete?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    connect?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    update?: CourseUpdateWithWhereUniqueWithoutDepartmentInput | CourseUpdateWithWhereUniqueWithoutDepartmentInput[]
    updateMany?: CourseUpdateManyWithWhereWithoutDepartmentInput | CourseUpdateManyWithWhereWithoutDepartmentInput[]
    deleteMany?: CourseScalarWhereInput | CourseScalarWhereInput[]
  }

  export type CourseUncheckedUpdateManyWithoutDepartmentNestedInput = {
    create?: XOR<CourseCreateWithoutDepartmentInput, CourseUncheckedCreateWithoutDepartmentInput> | CourseCreateWithoutDepartmentInput[] | CourseUncheckedCreateWithoutDepartmentInput[]
    connectOrCreate?: CourseCreateOrConnectWithoutDepartmentInput | CourseCreateOrConnectWithoutDepartmentInput[]
    upsert?: CourseUpsertWithWhereUniqueWithoutDepartmentInput | CourseUpsertWithWhereUniqueWithoutDepartmentInput[]
    createMany?: CourseCreateManyDepartmentInputEnvelope
    set?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    disconnect?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    delete?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    connect?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    update?: CourseUpdateWithWhereUniqueWithoutDepartmentInput | CourseUpdateWithWhereUniqueWithoutDepartmentInput[]
    updateMany?: CourseUpdateManyWithWhereWithoutDepartmentInput | CourseUpdateManyWithWhereWithoutDepartmentInput[]
    deleteMany?: CourseScalarWhereInput | CourseScalarWhereInput[]
  }

  export type DepartmentCreateNestedOneWithoutCoursesInput = {
    create?: XOR<DepartmentCreateWithoutCoursesInput, DepartmentUncheckedCreateWithoutCoursesInput>
    connectOrCreate?: DepartmentCreateOrConnectWithoutCoursesInput
    connect?: DepartmentWhereUniqueInput
  }

  export type GroupCreateNestedManyWithoutCourseInput = {
    create?: XOR<GroupCreateWithoutCourseInput, GroupUncheckedCreateWithoutCourseInput> | GroupCreateWithoutCourseInput[] | GroupUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: GroupCreateOrConnectWithoutCourseInput | GroupCreateOrConnectWithoutCourseInput[]
    createMany?: GroupCreateManyCourseInputEnvelope
    connect?: GroupWhereUniqueInput | GroupWhereUniqueInput[]
  }

  export type GroupUncheckedCreateNestedManyWithoutCourseInput = {
    create?: XOR<GroupCreateWithoutCourseInput, GroupUncheckedCreateWithoutCourseInput> | GroupCreateWithoutCourseInput[] | GroupUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: GroupCreateOrConnectWithoutCourseInput | GroupCreateOrConnectWithoutCourseInput[]
    createMany?: GroupCreateManyCourseInputEnvelope
    connect?: GroupWhereUniqueInput | GroupWhereUniqueInput[]
  }

  export type DepartmentUpdateOneRequiredWithoutCoursesNestedInput = {
    create?: XOR<DepartmentCreateWithoutCoursesInput, DepartmentUncheckedCreateWithoutCoursesInput>
    connectOrCreate?: DepartmentCreateOrConnectWithoutCoursesInput
    upsert?: DepartmentUpsertWithoutCoursesInput
    connect?: DepartmentWhereUniqueInput
    update?: XOR<XOR<DepartmentUpdateToOneWithWhereWithoutCoursesInput, DepartmentUpdateWithoutCoursesInput>, DepartmentUncheckedUpdateWithoutCoursesInput>
  }

  export type GroupUpdateManyWithoutCourseNestedInput = {
    create?: XOR<GroupCreateWithoutCourseInput, GroupUncheckedCreateWithoutCourseInput> | GroupCreateWithoutCourseInput[] | GroupUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: GroupCreateOrConnectWithoutCourseInput | GroupCreateOrConnectWithoutCourseInput[]
    upsert?: GroupUpsertWithWhereUniqueWithoutCourseInput | GroupUpsertWithWhereUniqueWithoutCourseInput[]
    createMany?: GroupCreateManyCourseInputEnvelope
    set?: GroupWhereUniqueInput | GroupWhereUniqueInput[]
    disconnect?: GroupWhereUniqueInput | GroupWhereUniqueInput[]
    delete?: GroupWhereUniqueInput | GroupWhereUniqueInput[]
    connect?: GroupWhereUniqueInput | GroupWhereUniqueInput[]
    update?: GroupUpdateWithWhereUniqueWithoutCourseInput | GroupUpdateWithWhereUniqueWithoutCourseInput[]
    updateMany?: GroupUpdateManyWithWhereWithoutCourseInput | GroupUpdateManyWithWhereWithoutCourseInput[]
    deleteMany?: GroupScalarWhereInput | GroupScalarWhereInput[]
  }

  export type GroupUncheckedUpdateManyWithoutCourseNestedInput = {
    create?: XOR<GroupCreateWithoutCourseInput, GroupUncheckedCreateWithoutCourseInput> | GroupCreateWithoutCourseInput[] | GroupUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: GroupCreateOrConnectWithoutCourseInput | GroupCreateOrConnectWithoutCourseInput[]
    upsert?: GroupUpsertWithWhereUniqueWithoutCourseInput | GroupUpsertWithWhereUniqueWithoutCourseInput[]
    createMany?: GroupCreateManyCourseInputEnvelope
    set?: GroupWhereUniqueInput | GroupWhereUniqueInput[]
    disconnect?: GroupWhereUniqueInput | GroupWhereUniqueInput[]
    delete?: GroupWhereUniqueInput | GroupWhereUniqueInput[]
    connect?: GroupWhereUniqueInput | GroupWhereUniqueInput[]
    update?: GroupUpdateWithWhereUniqueWithoutCourseInput | GroupUpdateWithWhereUniqueWithoutCourseInput[]
    updateMany?: GroupUpdateManyWithWhereWithoutCourseInput | GroupUpdateManyWithWhereWithoutCourseInput[]
    deleteMany?: GroupScalarWhereInput | GroupScalarWhereInput[]
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type GroupCreateWithoutUserInput = {
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    course: CourseCreateNestedOneWithoutGroupsInput
    students?: StudentCreateNestedManyWithoutGroupInput
    StudentHistory?: StudentHistoryCreateNestedManyWithoutGroupInput
  }

  export type GroupUncheckedCreateWithoutUserInput = {
    id?: number
    name: string
    courseId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    students?: StudentUncheckedCreateNestedManyWithoutGroupInput
    StudentHistory?: StudentHistoryUncheckedCreateNestedManyWithoutGroupInput
  }

  export type GroupCreateOrConnectWithoutUserInput = {
    where: GroupWhereUniqueInput
    create: XOR<GroupCreateWithoutUserInput, GroupUncheckedCreateWithoutUserInput>
  }

  export type GroupUpsertWithoutUserInput = {
    update: XOR<GroupUpdateWithoutUserInput, GroupUncheckedUpdateWithoutUserInput>
    create: XOR<GroupCreateWithoutUserInput, GroupUncheckedCreateWithoutUserInput>
    where?: GroupWhereInput
  }

  export type GroupUpdateToOneWithWhereWithoutUserInput = {
    where?: GroupWhereInput
    data: XOR<GroupUpdateWithoutUserInput, GroupUncheckedUpdateWithoutUserInput>
  }

  export type GroupUpdateWithoutUserInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    course?: CourseUpdateOneRequiredWithoutGroupsNestedInput
    students?: StudentUpdateManyWithoutGroupNestedInput
    StudentHistory?: StudentHistoryUpdateManyWithoutGroupNestedInput
  }

  export type GroupUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    courseId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    students?: StudentUncheckedUpdateManyWithoutGroupNestedInput
    StudentHistory?: StudentHistoryUncheckedUpdateManyWithoutGroupNestedInput
  }

  export type MedicalCertificateCreateWithoutStudentInput = {
    startDate: Date | string
    finishDate: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    MedicalCertificateHistory?: MedicalCertificateHistoryCreateNestedManyWithoutMedicalCertificateInput
    healthGroup: HealthGroupCreateNestedOneWithoutMedicalCertificatesInput
    physicalEducation: PhysicalEducationCreateNestedOneWithoutMedicalCertificatesInput
  }

  export type MedicalCertificateUncheckedCreateWithoutStudentInput = {
    id?: number
    startDate: Date | string
    finishDate: Date | string
    healthGroupId: number
    physicalEducationId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    MedicalCertificateHistory?: MedicalCertificateHistoryUncheckedCreateNestedManyWithoutMedicalCertificateInput
  }

  export type MedicalCertificateCreateOrConnectWithoutStudentInput = {
    where: MedicalCertificateWhereUniqueInput
    create: XOR<MedicalCertificateCreateWithoutStudentInput, MedicalCertificateUncheckedCreateWithoutStudentInput>
  }

  export type MedicalCertificateCreateManyStudentInputEnvelope = {
    data: MedicalCertificateCreateManyStudentInput | MedicalCertificateCreateManyStudentInput[]
    skipDuplicates?: boolean
  }

  export type GroupCreateWithoutStudentsInput = {
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    course: CourseCreateNestedOneWithoutGroupsInput
    User?: UserCreateNestedManyWithoutGroupInput
    StudentHistory?: StudentHistoryCreateNestedManyWithoutGroupInput
  }

  export type GroupUncheckedCreateWithoutStudentsInput = {
    id?: number
    name: string
    courseId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    User?: UserUncheckedCreateNestedManyWithoutGroupInput
    StudentHistory?: StudentHistoryUncheckedCreateNestedManyWithoutGroupInput
  }

  export type GroupCreateOrConnectWithoutStudentsInput = {
    where: GroupWhereUniqueInput
    create: XOR<GroupCreateWithoutStudentsInput, GroupUncheckedCreateWithoutStudentsInput>
  }

  export type StudentHistoryCreateWithoutStudentInput = {
    createdAt?: Date | string
    group?: GroupCreateNestedOneWithoutStudentHistoryInput
  }

  export type StudentHistoryUncheckedCreateWithoutStudentInput = {
    id?: number
    groupId?: number | null
    createdAt?: Date | string
  }

  export type StudentHistoryCreateOrConnectWithoutStudentInput = {
    where: StudentHistoryWhereUniqueInput
    create: XOR<StudentHistoryCreateWithoutStudentInput, StudentHistoryUncheckedCreateWithoutStudentInput>
  }

  export type StudentHistoryCreateManyStudentInputEnvelope = {
    data: StudentHistoryCreateManyStudentInput | StudentHistoryCreateManyStudentInput[]
    skipDuplicates?: boolean
  }

  export type MedicalCertificateUpsertWithWhereUniqueWithoutStudentInput = {
    where: MedicalCertificateWhereUniqueInput
    update: XOR<MedicalCertificateUpdateWithoutStudentInput, MedicalCertificateUncheckedUpdateWithoutStudentInput>
    create: XOR<MedicalCertificateCreateWithoutStudentInput, MedicalCertificateUncheckedCreateWithoutStudentInput>
  }

  export type MedicalCertificateUpdateWithWhereUniqueWithoutStudentInput = {
    where: MedicalCertificateWhereUniqueInput
    data: XOR<MedicalCertificateUpdateWithoutStudentInput, MedicalCertificateUncheckedUpdateWithoutStudentInput>
  }

  export type MedicalCertificateUpdateManyWithWhereWithoutStudentInput = {
    where: MedicalCertificateScalarWhereInput
    data: XOR<MedicalCertificateUpdateManyMutationInput, MedicalCertificateUncheckedUpdateManyWithoutStudentInput>
  }

  export type MedicalCertificateScalarWhereInput = {
    AND?: MedicalCertificateScalarWhereInput | MedicalCertificateScalarWhereInput[]
    OR?: MedicalCertificateScalarWhereInput[]
    NOT?: MedicalCertificateScalarWhereInput | MedicalCertificateScalarWhereInput[]
    id?: IntFilter<"MedicalCertificate"> | number
    startDate?: DateTimeFilter<"MedicalCertificate"> | Date | string
    finishDate?: DateTimeFilter<"MedicalCertificate"> | Date | string
    studentId?: IntFilter<"MedicalCertificate"> | number
    healthGroupId?: IntFilter<"MedicalCertificate"> | number
    physicalEducationId?: IntFilter<"MedicalCertificate"> | number
    createdAt?: DateTimeFilter<"MedicalCertificate"> | Date | string
    updatedAt?: DateTimeFilter<"MedicalCertificate"> | Date | string
  }

  export type GroupUpsertWithoutStudentsInput = {
    update: XOR<GroupUpdateWithoutStudentsInput, GroupUncheckedUpdateWithoutStudentsInput>
    create: XOR<GroupCreateWithoutStudentsInput, GroupUncheckedCreateWithoutStudentsInput>
    where?: GroupWhereInput
  }

  export type GroupUpdateToOneWithWhereWithoutStudentsInput = {
    where?: GroupWhereInput
    data: XOR<GroupUpdateWithoutStudentsInput, GroupUncheckedUpdateWithoutStudentsInput>
  }

  export type GroupUpdateWithoutStudentsInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    course?: CourseUpdateOneRequiredWithoutGroupsNestedInput
    User?: UserUpdateManyWithoutGroupNestedInput
    StudentHistory?: StudentHistoryUpdateManyWithoutGroupNestedInput
  }

  export type GroupUncheckedUpdateWithoutStudentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    courseId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    User?: UserUncheckedUpdateManyWithoutGroupNestedInput
    StudentHistory?: StudentHistoryUncheckedUpdateManyWithoutGroupNestedInput
  }

  export type StudentHistoryUpsertWithWhereUniqueWithoutStudentInput = {
    where: StudentHistoryWhereUniqueInput
    update: XOR<StudentHistoryUpdateWithoutStudentInput, StudentHistoryUncheckedUpdateWithoutStudentInput>
    create: XOR<StudentHistoryCreateWithoutStudentInput, StudentHistoryUncheckedCreateWithoutStudentInput>
  }

  export type StudentHistoryUpdateWithWhereUniqueWithoutStudentInput = {
    where: StudentHistoryWhereUniqueInput
    data: XOR<StudentHistoryUpdateWithoutStudentInput, StudentHistoryUncheckedUpdateWithoutStudentInput>
  }

  export type StudentHistoryUpdateManyWithWhereWithoutStudentInput = {
    where: StudentHistoryScalarWhereInput
    data: XOR<StudentHistoryUpdateManyMutationInput, StudentHistoryUncheckedUpdateManyWithoutStudentInput>
  }

  export type StudentHistoryScalarWhereInput = {
    AND?: StudentHistoryScalarWhereInput | StudentHistoryScalarWhereInput[]
    OR?: StudentHistoryScalarWhereInput[]
    NOT?: StudentHistoryScalarWhereInput | StudentHistoryScalarWhereInput[]
    id?: IntFilter<"StudentHistory"> | number
    studentId?: IntFilter<"StudentHistory"> | number
    groupId?: IntNullableFilter<"StudentHistory"> | number | null
    createdAt?: DateTimeFilter<"StudentHistory"> | Date | string
  }

  export type StudentCreateWithoutStudentHistoryInput = {
    name: string
    surname: string
    secondName?: string | null
    birthDate: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    isExpelled?: boolean
    medicalCertificates?: MedicalCertificateCreateNestedManyWithoutStudentInput
    group?: GroupCreateNestedOneWithoutStudentsInput
  }

  export type StudentUncheckedCreateWithoutStudentHistoryInput = {
    id?: number
    name: string
    surname: string
    secondName?: string | null
    birthDate: Date | string
    groupId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    isExpelled?: boolean
    medicalCertificates?: MedicalCertificateUncheckedCreateNestedManyWithoutStudentInput
  }

  export type StudentCreateOrConnectWithoutStudentHistoryInput = {
    where: StudentWhereUniqueInput
    create: XOR<StudentCreateWithoutStudentHistoryInput, StudentUncheckedCreateWithoutStudentHistoryInput>
  }

  export type GroupCreateWithoutStudentHistoryInput = {
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    course: CourseCreateNestedOneWithoutGroupsInput
    students?: StudentCreateNestedManyWithoutGroupInput
    User?: UserCreateNestedManyWithoutGroupInput
  }

  export type GroupUncheckedCreateWithoutStudentHistoryInput = {
    id?: number
    name: string
    courseId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    students?: StudentUncheckedCreateNestedManyWithoutGroupInput
    User?: UserUncheckedCreateNestedManyWithoutGroupInput
  }

  export type GroupCreateOrConnectWithoutStudentHistoryInput = {
    where: GroupWhereUniqueInput
    create: XOR<GroupCreateWithoutStudentHistoryInput, GroupUncheckedCreateWithoutStudentHistoryInput>
  }

  export type StudentUpsertWithoutStudentHistoryInput = {
    update: XOR<StudentUpdateWithoutStudentHistoryInput, StudentUncheckedUpdateWithoutStudentHistoryInput>
    create: XOR<StudentCreateWithoutStudentHistoryInput, StudentUncheckedCreateWithoutStudentHistoryInput>
    where?: StudentWhereInput
  }

  export type StudentUpdateToOneWithWhereWithoutStudentHistoryInput = {
    where?: StudentWhereInput
    data: XOR<StudentUpdateWithoutStudentHistoryInput, StudentUncheckedUpdateWithoutStudentHistoryInput>
  }

  export type StudentUpdateWithoutStudentHistoryInput = {
    name?: StringFieldUpdateOperationsInput | string
    surname?: StringFieldUpdateOperationsInput | string
    secondName?: NullableStringFieldUpdateOperationsInput | string | null
    birthDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isExpelled?: BoolFieldUpdateOperationsInput | boolean
    medicalCertificates?: MedicalCertificateUpdateManyWithoutStudentNestedInput
    group?: GroupUpdateOneWithoutStudentsNestedInput
  }

  export type StudentUncheckedUpdateWithoutStudentHistoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    surname?: StringFieldUpdateOperationsInput | string
    secondName?: NullableStringFieldUpdateOperationsInput | string | null
    birthDate?: DateTimeFieldUpdateOperationsInput | Date | string
    groupId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isExpelled?: BoolFieldUpdateOperationsInput | boolean
    medicalCertificates?: MedicalCertificateUncheckedUpdateManyWithoutStudentNestedInput
  }

  export type GroupUpsertWithoutStudentHistoryInput = {
    update: XOR<GroupUpdateWithoutStudentHistoryInput, GroupUncheckedUpdateWithoutStudentHistoryInput>
    create: XOR<GroupCreateWithoutStudentHistoryInput, GroupUncheckedCreateWithoutStudentHistoryInput>
    where?: GroupWhereInput
  }

  export type GroupUpdateToOneWithWhereWithoutStudentHistoryInput = {
    where?: GroupWhereInput
    data: XOR<GroupUpdateWithoutStudentHistoryInput, GroupUncheckedUpdateWithoutStudentHistoryInput>
  }

  export type GroupUpdateWithoutStudentHistoryInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    course?: CourseUpdateOneRequiredWithoutGroupsNestedInput
    students?: StudentUpdateManyWithoutGroupNestedInput
    User?: UserUpdateManyWithoutGroupNestedInput
  }

  export type GroupUncheckedUpdateWithoutStudentHistoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    courseId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    students?: StudentUncheckedUpdateManyWithoutGroupNestedInput
    User?: UserUncheckedUpdateManyWithoutGroupNestedInput
  }

  export type MedicalCertificateCreateWithoutHealthGroupInput = {
    startDate: Date | string
    finishDate: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    MedicalCertificateHistory?: MedicalCertificateHistoryCreateNestedManyWithoutMedicalCertificateInput
    physicalEducation: PhysicalEducationCreateNestedOneWithoutMedicalCertificatesInput
    student: StudentCreateNestedOneWithoutMedicalCertificatesInput
  }

  export type MedicalCertificateUncheckedCreateWithoutHealthGroupInput = {
    id?: number
    startDate: Date | string
    finishDate: Date | string
    studentId: number
    physicalEducationId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    MedicalCertificateHistory?: MedicalCertificateHistoryUncheckedCreateNestedManyWithoutMedicalCertificateInput
  }

  export type MedicalCertificateCreateOrConnectWithoutHealthGroupInput = {
    where: MedicalCertificateWhereUniqueInput
    create: XOR<MedicalCertificateCreateWithoutHealthGroupInput, MedicalCertificateUncheckedCreateWithoutHealthGroupInput>
  }

  export type MedicalCertificateCreateManyHealthGroupInputEnvelope = {
    data: MedicalCertificateCreateManyHealthGroupInput | MedicalCertificateCreateManyHealthGroupInput[]
    skipDuplicates?: boolean
  }

  export type MedicalCertificateHistoryCreateWithoutHealthGroupInput = {
    startDate?: Date | string | null
    finishDate?: Date | string | null
    createdAt?: Date | string
    medicalCertificate: MedicalCertificateCreateNestedOneWithoutMedicalCertificateHistoryInput
    physicalEducation?: PhysicalEducationCreateNestedOneWithoutMedicalCertificateHistoryInput
  }

  export type MedicalCertificateHistoryUncheckedCreateWithoutHealthGroupInput = {
    id?: number
    medicalCertificateId: number
    startDate?: Date | string | null
    finishDate?: Date | string | null
    physicalEducationId?: number | null
    createdAt?: Date | string
  }

  export type MedicalCertificateHistoryCreateOrConnectWithoutHealthGroupInput = {
    where: MedicalCertificateHistoryWhereUniqueInput
    create: XOR<MedicalCertificateHistoryCreateWithoutHealthGroupInput, MedicalCertificateHistoryUncheckedCreateWithoutHealthGroupInput>
  }

  export type MedicalCertificateHistoryCreateManyHealthGroupInputEnvelope = {
    data: MedicalCertificateHistoryCreateManyHealthGroupInput | MedicalCertificateHistoryCreateManyHealthGroupInput[]
    skipDuplicates?: boolean
  }

  export type MedicalCertificateUpsertWithWhereUniqueWithoutHealthGroupInput = {
    where: MedicalCertificateWhereUniqueInput
    update: XOR<MedicalCertificateUpdateWithoutHealthGroupInput, MedicalCertificateUncheckedUpdateWithoutHealthGroupInput>
    create: XOR<MedicalCertificateCreateWithoutHealthGroupInput, MedicalCertificateUncheckedCreateWithoutHealthGroupInput>
  }

  export type MedicalCertificateUpdateWithWhereUniqueWithoutHealthGroupInput = {
    where: MedicalCertificateWhereUniqueInput
    data: XOR<MedicalCertificateUpdateWithoutHealthGroupInput, MedicalCertificateUncheckedUpdateWithoutHealthGroupInput>
  }

  export type MedicalCertificateUpdateManyWithWhereWithoutHealthGroupInput = {
    where: MedicalCertificateScalarWhereInput
    data: XOR<MedicalCertificateUpdateManyMutationInput, MedicalCertificateUncheckedUpdateManyWithoutHealthGroupInput>
  }

  export type MedicalCertificateHistoryUpsertWithWhereUniqueWithoutHealthGroupInput = {
    where: MedicalCertificateHistoryWhereUniqueInput
    update: XOR<MedicalCertificateHistoryUpdateWithoutHealthGroupInput, MedicalCertificateHistoryUncheckedUpdateWithoutHealthGroupInput>
    create: XOR<MedicalCertificateHistoryCreateWithoutHealthGroupInput, MedicalCertificateHistoryUncheckedCreateWithoutHealthGroupInput>
  }

  export type MedicalCertificateHistoryUpdateWithWhereUniqueWithoutHealthGroupInput = {
    where: MedicalCertificateHistoryWhereUniqueInput
    data: XOR<MedicalCertificateHistoryUpdateWithoutHealthGroupInput, MedicalCertificateHistoryUncheckedUpdateWithoutHealthGroupInput>
  }

  export type MedicalCertificateHistoryUpdateManyWithWhereWithoutHealthGroupInput = {
    where: MedicalCertificateHistoryScalarWhereInput
    data: XOR<MedicalCertificateHistoryUpdateManyMutationInput, MedicalCertificateHistoryUncheckedUpdateManyWithoutHealthGroupInput>
  }

  export type MedicalCertificateHistoryScalarWhereInput = {
    AND?: MedicalCertificateHistoryScalarWhereInput | MedicalCertificateHistoryScalarWhereInput[]
    OR?: MedicalCertificateHistoryScalarWhereInput[]
    NOT?: MedicalCertificateHistoryScalarWhereInput | MedicalCertificateHistoryScalarWhereInput[]
    id?: IntFilter<"MedicalCertificateHistory"> | number
    medicalCertificateId?: IntFilter<"MedicalCertificateHistory"> | number
    startDate?: DateTimeNullableFilter<"MedicalCertificateHistory"> | Date | string | null
    finishDate?: DateTimeNullableFilter<"MedicalCertificateHistory"> | Date | string | null
    healthGroupId?: IntNullableFilter<"MedicalCertificateHistory"> | number | null
    physicalEducationId?: IntNullableFilter<"MedicalCertificateHistory"> | number | null
    createdAt?: DateTimeFilter<"MedicalCertificateHistory"> | Date | string
  }

  export type MedicalCertificateCreateWithoutPhysicalEducationInput = {
    startDate: Date | string
    finishDate: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    MedicalCertificateHistory?: MedicalCertificateHistoryCreateNestedManyWithoutMedicalCertificateInput
    healthGroup: HealthGroupCreateNestedOneWithoutMedicalCertificatesInput
    student: StudentCreateNestedOneWithoutMedicalCertificatesInput
  }

  export type MedicalCertificateUncheckedCreateWithoutPhysicalEducationInput = {
    id?: number
    startDate: Date | string
    finishDate: Date | string
    studentId: number
    healthGroupId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    MedicalCertificateHistory?: MedicalCertificateHistoryUncheckedCreateNestedManyWithoutMedicalCertificateInput
  }

  export type MedicalCertificateCreateOrConnectWithoutPhysicalEducationInput = {
    where: MedicalCertificateWhereUniqueInput
    create: XOR<MedicalCertificateCreateWithoutPhysicalEducationInput, MedicalCertificateUncheckedCreateWithoutPhysicalEducationInput>
  }

  export type MedicalCertificateCreateManyPhysicalEducationInputEnvelope = {
    data: MedicalCertificateCreateManyPhysicalEducationInput | MedicalCertificateCreateManyPhysicalEducationInput[]
    skipDuplicates?: boolean
  }

  export type MedicalCertificateHistoryCreateWithoutPhysicalEducationInput = {
    startDate?: Date | string | null
    finishDate?: Date | string | null
    createdAt?: Date | string
    medicalCertificate: MedicalCertificateCreateNestedOneWithoutMedicalCertificateHistoryInput
    healthGroup?: HealthGroupCreateNestedOneWithoutMedicalCertificateHistoryInput
  }

  export type MedicalCertificateHistoryUncheckedCreateWithoutPhysicalEducationInput = {
    id?: number
    medicalCertificateId: number
    startDate?: Date | string | null
    finishDate?: Date | string | null
    healthGroupId?: number | null
    createdAt?: Date | string
  }

  export type MedicalCertificateHistoryCreateOrConnectWithoutPhysicalEducationInput = {
    where: MedicalCertificateHistoryWhereUniqueInput
    create: XOR<MedicalCertificateHistoryCreateWithoutPhysicalEducationInput, MedicalCertificateHistoryUncheckedCreateWithoutPhysicalEducationInput>
  }

  export type MedicalCertificateHistoryCreateManyPhysicalEducationInputEnvelope = {
    data: MedicalCertificateHistoryCreateManyPhysicalEducationInput | MedicalCertificateHistoryCreateManyPhysicalEducationInput[]
    skipDuplicates?: boolean
  }

  export type MedicalCertificateUpsertWithWhereUniqueWithoutPhysicalEducationInput = {
    where: MedicalCertificateWhereUniqueInput
    update: XOR<MedicalCertificateUpdateWithoutPhysicalEducationInput, MedicalCertificateUncheckedUpdateWithoutPhysicalEducationInput>
    create: XOR<MedicalCertificateCreateWithoutPhysicalEducationInput, MedicalCertificateUncheckedCreateWithoutPhysicalEducationInput>
  }

  export type MedicalCertificateUpdateWithWhereUniqueWithoutPhysicalEducationInput = {
    where: MedicalCertificateWhereUniqueInput
    data: XOR<MedicalCertificateUpdateWithoutPhysicalEducationInput, MedicalCertificateUncheckedUpdateWithoutPhysicalEducationInput>
  }

  export type MedicalCertificateUpdateManyWithWhereWithoutPhysicalEducationInput = {
    where: MedicalCertificateScalarWhereInput
    data: XOR<MedicalCertificateUpdateManyMutationInput, MedicalCertificateUncheckedUpdateManyWithoutPhysicalEducationInput>
  }

  export type MedicalCertificateHistoryUpsertWithWhereUniqueWithoutPhysicalEducationInput = {
    where: MedicalCertificateHistoryWhereUniqueInput
    update: XOR<MedicalCertificateHistoryUpdateWithoutPhysicalEducationInput, MedicalCertificateHistoryUncheckedUpdateWithoutPhysicalEducationInput>
    create: XOR<MedicalCertificateHistoryCreateWithoutPhysicalEducationInput, MedicalCertificateHistoryUncheckedCreateWithoutPhysicalEducationInput>
  }

  export type MedicalCertificateHistoryUpdateWithWhereUniqueWithoutPhysicalEducationInput = {
    where: MedicalCertificateHistoryWhereUniqueInput
    data: XOR<MedicalCertificateHistoryUpdateWithoutPhysicalEducationInput, MedicalCertificateHistoryUncheckedUpdateWithoutPhysicalEducationInput>
  }

  export type MedicalCertificateHistoryUpdateManyWithWhereWithoutPhysicalEducationInput = {
    where: MedicalCertificateHistoryScalarWhereInput
    data: XOR<MedicalCertificateHistoryUpdateManyMutationInput, MedicalCertificateHistoryUncheckedUpdateManyWithoutPhysicalEducationInput>
  }

  export type MedicalCertificateHistoryCreateWithoutMedicalCertificateInput = {
    startDate?: Date | string | null
    finishDate?: Date | string | null
    createdAt?: Date | string
    healthGroup?: HealthGroupCreateNestedOneWithoutMedicalCertificateHistoryInput
    physicalEducation?: PhysicalEducationCreateNestedOneWithoutMedicalCertificateHistoryInput
  }

  export type MedicalCertificateHistoryUncheckedCreateWithoutMedicalCertificateInput = {
    id?: number
    startDate?: Date | string | null
    finishDate?: Date | string | null
    healthGroupId?: number | null
    physicalEducationId?: number | null
    createdAt?: Date | string
  }

  export type MedicalCertificateHistoryCreateOrConnectWithoutMedicalCertificateInput = {
    where: MedicalCertificateHistoryWhereUniqueInput
    create: XOR<MedicalCertificateHistoryCreateWithoutMedicalCertificateInput, MedicalCertificateHistoryUncheckedCreateWithoutMedicalCertificateInput>
  }

  export type MedicalCertificateHistoryCreateManyMedicalCertificateInputEnvelope = {
    data: MedicalCertificateHistoryCreateManyMedicalCertificateInput | MedicalCertificateHistoryCreateManyMedicalCertificateInput[]
    skipDuplicates?: boolean
  }

  export type HealthGroupCreateWithoutMedicalCertificatesInput = {
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    MedicalCertificateHistory?: MedicalCertificateHistoryCreateNestedManyWithoutHealthGroupInput
  }

  export type HealthGroupUncheckedCreateWithoutMedicalCertificatesInput = {
    id?: number
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    MedicalCertificateHistory?: MedicalCertificateHistoryUncheckedCreateNestedManyWithoutHealthGroupInput
  }

  export type HealthGroupCreateOrConnectWithoutMedicalCertificatesInput = {
    where: HealthGroupWhereUniqueInput
    create: XOR<HealthGroupCreateWithoutMedicalCertificatesInput, HealthGroupUncheckedCreateWithoutMedicalCertificatesInput>
  }

  export type PhysicalEducationCreateWithoutMedicalCertificatesInput = {
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    MedicalCertificateHistory?: MedicalCertificateHistoryCreateNestedManyWithoutPhysicalEducationInput
  }

  export type PhysicalEducationUncheckedCreateWithoutMedicalCertificatesInput = {
    id?: number
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    MedicalCertificateHistory?: MedicalCertificateHistoryUncheckedCreateNestedManyWithoutPhysicalEducationInput
  }

  export type PhysicalEducationCreateOrConnectWithoutMedicalCertificatesInput = {
    where: PhysicalEducationWhereUniqueInput
    create: XOR<PhysicalEducationCreateWithoutMedicalCertificatesInput, PhysicalEducationUncheckedCreateWithoutMedicalCertificatesInput>
  }

  export type StudentCreateWithoutMedicalCertificatesInput = {
    name: string
    surname: string
    secondName?: string | null
    birthDate: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    isExpelled?: boolean
    group?: GroupCreateNestedOneWithoutStudentsInput
    StudentHistory?: StudentHistoryCreateNestedManyWithoutStudentInput
  }

  export type StudentUncheckedCreateWithoutMedicalCertificatesInput = {
    id?: number
    name: string
    surname: string
    secondName?: string | null
    birthDate: Date | string
    groupId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    isExpelled?: boolean
    StudentHistory?: StudentHistoryUncheckedCreateNestedManyWithoutStudentInput
  }

  export type StudentCreateOrConnectWithoutMedicalCertificatesInput = {
    where: StudentWhereUniqueInput
    create: XOR<StudentCreateWithoutMedicalCertificatesInput, StudentUncheckedCreateWithoutMedicalCertificatesInput>
  }

  export type MedicalCertificateHistoryUpsertWithWhereUniqueWithoutMedicalCertificateInput = {
    where: MedicalCertificateHistoryWhereUniqueInput
    update: XOR<MedicalCertificateHistoryUpdateWithoutMedicalCertificateInput, MedicalCertificateHistoryUncheckedUpdateWithoutMedicalCertificateInput>
    create: XOR<MedicalCertificateHistoryCreateWithoutMedicalCertificateInput, MedicalCertificateHistoryUncheckedCreateWithoutMedicalCertificateInput>
  }

  export type MedicalCertificateHistoryUpdateWithWhereUniqueWithoutMedicalCertificateInput = {
    where: MedicalCertificateHistoryWhereUniqueInput
    data: XOR<MedicalCertificateHistoryUpdateWithoutMedicalCertificateInput, MedicalCertificateHistoryUncheckedUpdateWithoutMedicalCertificateInput>
  }

  export type MedicalCertificateHistoryUpdateManyWithWhereWithoutMedicalCertificateInput = {
    where: MedicalCertificateHistoryScalarWhereInput
    data: XOR<MedicalCertificateHistoryUpdateManyMutationInput, MedicalCertificateHistoryUncheckedUpdateManyWithoutMedicalCertificateInput>
  }

  export type HealthGroupUpsertWithoutMedicalCertificatesInput = {
    update: XOR<HealthGroupUpdateWithoutMedicalCertificatesInput, HealthGroupUncheckedUpdateWithoutMedicalCertificatesInput>
    create: XOR<HealthGroupCreateWithoutMedicalCertificatesInput, HealthGroupUncheckedCreateWithoutMedicalCertificatesInput>
    where?: HealthGroupWhereInput
  }

  export type HealthGroupUpdateToOneWithWhereWithoutMedicalCertificatesInput = {
    where?: HealthGroupWhereInput
    data: XOR<HealthGroupUpdateWithoutMedicalCertificatesInput, HealthGroupUncheckedUpdateWithoutMedicalCertificatesInput>
  }

  export type HealthGroupUpdateWithoutMedicalCertificatesInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    MedicalCertificateHistory?: MedicalCertificateHistoryUpdateManyWithoutHealthGroupNestedInput
  }

  export type HealthGroupUncheckedUpdateWithoutMedicalCertificatesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    MedicalCertificateHistory?: MedicalCertificateHistoryUncheckedUpdateManyWithoutHealthGroupNestedInput
  }

  export type PhysicalEducationUpsertWithoutMedicalCertificatesInput = {
    update: XOR<PhysicalEducationUpdateWithoutMedicalCertificatesInput, PhysicalEducationUncheckedUpdateWithoutMedicalCertificatesInput>
    create: XOR<PhysicalEducationCreateWithoutMedicalCertificatesInput, PhysicalEducationUncheckedCreateWithoutMedicalCertificatesInput>
    where?: PhysicalEducationWhereInput
  }

  export type PhysicalEducationUpdateToOneWithWhereWithoutMedicalCertificatesInput = {
    where?: PhysicalEducationWhereInput
    data: XOR<PhysicalEducationUpdateWithoutMedicalCertificatesInput, PhysicalEducationUncheckedUpdateWithoutMedicalCertificatesInput>
  }

  export type PhysicalEducationUpdateWithoutMedicalCertificatesInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    MedicalCertificateHistory?: MedicalCertificateHistoryUpdateManyWithoutPhysicalEducationNestedInput
  }

  export type PhysicalEducationUncheckedUpdateWithoutMedicalCertificatesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    MedicalCertificateHistory?: MedicalCertificateHistoryUncheckedUpdateManyWithoutPhysicalEducationNestedInput
  }

  export type StudentUpsertWithoutMedicalCertificatesInput = {
    update: XOR<StudentUpdateWithoutMedicalCertificatesInput, StudentUncheckedUpdateWithoutMedicalCertificatesInput>
    create: XOR<StudentCreateWithoutMedicalCertificatesInput, StudentUncheckedCreateWithoutMedicalCertificatesInput>
    where?: StudentWhereInput
  }

  export type StudentUpdateToOneWithWhereWithoutMedicalCertificatesInput = {
    where?: StudentWhereInput
    data: XOR<StudentUpdateWithoutMedicalCertificatesInput, StudentUncheckedUpdateWithoutMedicalCertificatesInput>
  }

  export type StudentUpdateWithoutMedicalCertificatesInput = {
    name?: StringFieldUpdateOperationsInput | string
    surname?: StringFieldUpdateOperationsInput | string
    secondName?: NullableStringFieldUpdateOperationsInput | string | null
    birthDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isExpelled?: BoolFieldUpdateOperationsInput | boolean
    group?: GroupUpdateOneWithoutStudentsNestedInput
    StudentHistory?: StudentHistoryUpdateManyWithoutStudentNestedInput
  }

  export type StudentUncheckedUpdateWithoutMedicalCertificatesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    surname?: StringFieldUpdateOperationsInput | string
    secondName?: NullableStringFieldUpdateOperationsInput | string | null
    birthDate?: DateTimeFieldUpdateOperationsInput | Date | string
    groupId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isExpelled?: BoolFieldUpdateOperationsInput | boolean
    StudentHistory?: StudentHistoryUncheckedUpdateManyWithoutStudentNestedInput
  }

  export type MedicalCertificateCreateWithoutMedicalCertificateHistoryInput = {
    startDate: Date | string
    finishDate: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    healthGroup: HealthGroupCreateNestedOneWithoutMedicalCertificatesInput
    physicalEducation: PhysicalEducationCreateNestedOneWithoutMedicalCertificatesInput
    student: StudentCreateNestedOneWithoutMedicalCertificatesInput
  }

  export type MedicalCertificateUncheckedCreateWithoutMedicalCertificateHistoryInput = {
    id?: number
    startDate: Date | string
    finishDate: Date | string
    studentId: number
    healthGroupId: number
    physicalEducationId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MedicalCertificateCreateOrConnectWithoutMedicalCertificateHistoryInput = {
    where: MedicalCertificateWhereUniqueInput
    create: XOR<MedicalCertificateCreateWithoutMedicalCertificateHistoryInput, MedicalCertificateUncheckedCreateWithoutMedicalCertificateHistoryInput>
  }

  export type HealthGroupCreateWithoutMedicalCertificateHistoryInput = {
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    medicalCertificates?: MedicalCertificateCreateNestedManyWithoutHealthGroupInput
  }

  export type HealthGroupUncheckedCreateWithoutMedicalCertificateHistoryInput = {
    id?: number
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    medicalCertificates?: MedicalCertificateUncheckedCreateNestedManyWithoutHealthGroupInput
  }

  export type HealthGroupCreateOrConnectWithoutMedicalCertificateHistoryInput = {
    where: HealthGroupWhereUniqueInput
    create: XOR<HealthGroupCreateWithoutMedicalCertificateHistoryInput, HealthGroupUncheckedCreateWithoutMedicalCertificateHistoryInput>
  }

  export type PhysicalEducationCreateWithoutMedicalCertificateHistoryInput = {
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    medicalCertificates?: MedicalCertificateCreateNestedManyWithoutPhysicalEducationInput
  }

  export type PhysicalEducationUncheckedCreateWithoutMedicalCertificateHistoryInput = {
    id?: number
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    medicalCertificates?: MedicalCertificateUncheckedCreateNestedManyWithoutPhysicalEducationInput
  }

  export type PhysicalEducationCreateOrConnectWithoutMedicalCertificateHistoryInput = {
    where: PhysicalEducationWhereUniqueInput
    create: XOR<PhysicalEducationCreateWithoutMedicalCertificateHistoryInput, PhysicalEducationUncheckedCreateWithoutMedicalCertificateHistoryInput>
  }

  export type MedicalCertificateUpsertWithoutMedicalCertificateHistoryInput = {
    update: XOR<MedicalCertificateUpdateWithoutMedicalCertificateHistoryInput, MedicalCertificateUncheckedUpdateWithoutMedicalCertificateHistoryInput>
    create: XOR<MedicalCertificateCreateWithoutMedicalCertificateHistoryInput, MedicalCertificateUncheckedCreateWithoutMedicalCertificateHistoryInput>
    where?: MedicalCertificateWhereInput
  }

  export type MedicalCertificateUpdateToOneWithWhereWithoutMedicalCertificateHistoryInput = {
    where?: MedicalCertificateWhereInput
    data: XOR<MedicalCertificateUpdateWithoutMedicalCertificateHistoryInput, MedicalCertificateUncheckedUpdateWithoutMedicalCertificateHistoryInput>
  }

  export type MedicalCertificateUpdateWithoutMedicalCertificateHistoryInput = {
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    finishDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    healthGroup?: HealthGroupUpdateOneRequiredWithoutMedicalCertificatesNestedInput
    physicalEducation?: PhysicalEducationUpdateOneRequiredWithoutMedicalCertificatesNestedInput
    student?: StudentUpdateOneRequiredWithoutMedicalCertificatesNestedInput
  }

  export type MedicalCertificateUncheckedUpdateWithoutMedicalCertificateHistoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    finishDate?: DateTimeFieldUpdateOperationsInput | Date | string
    studentId?: IntFieldUpdateOperationsInput | number
    healthGroupId?: IntFieldUpdateOperationsInput | number
    physicalEducationId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HealthGroupUpsertWithoutMedicalCertificateHistoryInput = {
    update: XOR<HealthGroupUpdateWithoutMedicalCertificateHistoryInput, HealthGroupUncheckedUpdateWithoutMedicalCertificateHistoryInput>
    create: XOR<HealthGroupCreateWithoutMedicalCertificateHistoryInput, HealthGroupUncheckedCreateWithoutMedicalCertificateHistoryInput>
    where?: HealthGroupWhereInput
  }

  export type HealthGroupUpdateToOneWithWhereWithoutMedicalCertificateHistoryInput = {
    where?: HealthGroupWhereInput
    data: XOR<HealthGroupUpdateWithoutMedicalCertificateHistoryInput, HealthGroupUncheckedUpdateWithoutMedicalCertificateHistoryInput>
  }

  export type HealthGroupUpdateWithoutMedicalCertificateHistoryInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    medicalCertificates?: MedicalCertificateUpdateManyWithoutHealthGroupNestedInput
  }

  export type HealthGroupUncheckedUpdateWithoutMedicalCertificateHistoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    medicalCertificates?: MedicalCertificateUncheckedUpdateManyWithoutHealthGroupNestedInput
  }

  export type PhysicalEducationUpsertWithoutMedicalCertificateHistoryInput = {
    update: XOR<PhysicalEducationUpdateWithoutMedicalCertificateHistoryInput, PhysicalEducationUncheckedUpdateWithoutMedicalCertificateHistoryInput>
    create: XOR<PhysicalEducationCreateWithoutMedicalCertificateHistoryInput, PhysicalEducationUncheckedCreateWithoutMedicalCertificateHistoryInput>
    where?: PhysicalEducationWhereInput
  }

  export type PhysicalEducationUpdateToOneWithWhereWithoutMedicalCertificateHistoryInput = {
    where?: PhysicalEducationWhereInput
    data: XOR<PhysicalEducationUpdateWithoutMedicalCertificateHistoryInput, PhysicalEducationUncheckedUpdateWithoutMedicalCertificateHistoryInput>
  }

  export type PhysicalEducationUpdateWithoutMedicalCertificateHistoryInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    medicalCertificates?: MedicalCertificateUpdateManyWithoutPhysicalEducationNestedInput
  }

  export type PhysicalEducationUncheckedUpdateWithoutMedicalCertificateHistoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    medicalCertificates?: MedicalCertificateUncheckedUpdateManyWithoutPhysicalEducationNestedInput
  }

  export type CourseCreateWithoutGroupsInput = {
    number: number
    createdAt?: Date | string
    updatedAt?: Date | string
    department: DepartmentCreateNestedOneWithoutCoursesInput
  }

  export type CourseUncheckedCreateWithoutGroupsInput = {
    id?: number
    number: number
    departmentId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CourseCreateOrConnectWithoutGroupsInput = {
    where: CourseWhereUniqueInput
    create: XOR<CourseCreateWithoutGroupsInput, CourseUncheckedCreateWithoutGroupsInput>
  }

  export type StudentCreateWithoutGroupInput = {
    name: string
    surname: string
    secondName?: string | null
    birthDate: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    isExpelled?: boolean
    medicalCertificates?: MedicalCertificateCreateNestedManyWithoutStudentInput
    StudentHistory?: StudentHistoryCreateNestedManyWithoutStudentInput
  }

  export type StudentUncheckedCreateWithoutGroupInput = {
    id?: number
    name: string
    surname: string
    secondName?: string | null
    birthDate: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    isExpelled?: boolean
    medicalCertificates?: MedicalCertificateUncheckedCreateNestedManyWithoutStudentInput
    StudentHistory?: StudentHistoryUncheckedCreateNestedManyWithoutStudentInput
  }

  export type StudentCreateOrConnectWithoutGroupInput = {
    where: StudentWhereUniqueInput
    create: XOR<StudentCreateWithoutGroupInput, StudentUncheckedCreateWithoutGroupInput>
  }

  export type StudentCreateManyGroupInputEnvelope = {
    data: StudentCreateManyGroupInput | StudentCreateManyGroupInput[]
    skipDuplicates?: boolean
  }

  export type UserCreateWithoutGroupInput = {
    login: string
    password: string
    isAdmin?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUncheckedCreateWithoutGroupInput = {
    id?: number
    login: string
    password: string
    isAdmin?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserCreateOrConnectWithoutGroupInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutGroupInput, UserUncheckedCreateWithoutGroupInput>
  }

  export type UserCreateManyGroupInputEnvelope = {
    data: UserCreateManyGroupInput | UserCreateManyGroupInput[]
    skipDuplicates?: boolean
  }

  export type StudentHistoryCreateWithoutGroupInput = {
    createdAt?: Date | string
    student: StudentCreateNestedOneWithoutStudentHistoryInput
  }

  export type StudentHistoryUncheckedCreateWithoutGroupInput = {
    id?: number
    studentId: number
    createdAt?: Date | string
  }

  export type StudentHistoryCreateOrConnectWithoutGroupInput = {
    where: StudentHistoryWhereUniqueInput
    create: XOR<StudentHistoryCreateWithoutGroupInput, StudentHistoryUncheckedCreateWithoutGroupInput>
  }

  export type StudentHistoryCreateManyGroupInputEnvelope = {
    data: StudentHistoryCreateManyGroupInput | StudentHistoryCreateManyGroupInput[]
    skipDuplicates?: boolean
  }

  export type CourseUpsertWithoutGroupsInput = {
    update: XOR<CourseUpdateWithoutGroupsInput, CourseUncheckedUpdateWithoutGroupsInput>
    create: XOR<CourseCreateWithoutGroupsInput, CourseUncheckedCreateWithoutGroupsInput>
    where?: CourseWhereInput
  }

  export type CourseUpdateToOneWithWhereWithoutGroupsInput = {
    where?: CourseWhereInput
    data: XOR<CourseUpdateWithoutGroupsInput, CourseUncheckedUpdateWithoutGroupsInput>
  }

  export type CourseUpdateWithoutGroupsInput = {
    number?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    department?: DepartmentUpdateOneRequiredWithoutCoursesNestedInput
  }

  export type CourseUncheckedUpdateWithoutGroupsInput = {
    id?: IntFieldUpdateOperationsInput | number
    number?: IntFieldUpdateOperationsInput | number
    departmentId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StudentUpsertWithWhereUniqueWithoutGroupInput = {
    where: StudentWhereUniqueInput
    update: XOR<StudentUpdateWithoutGroupInput, StudentUncheckedUpdateWithoutGroupInput>
    create: XOR<StudentCreateWithoutGroupInput, StudentUncheckedCreateWithoutGroupInput>
  }

  export type StudentUpdateWithWhereUniqueWithoutGroupInput = {
    where: StudentWhereUniqueInput
    data: XOR<StudentUpdateWithoutGroupInput, StudentUncheckedUpdateWithoutGroupInput>
  }

  export type StudentUpdateManyWithWhereWithoutGroupInput = {
    where: StudentScalarWhereInput
    data: XOR<StudentUpdateManyMutationInput, StudentUncheckedUpdateManyWithoutGroupInput>
  }

  export type StudentScalarWhereInput = {
    AND?: StudentScalarWhereInput | StudentScalarWhereInput[]
    OR?: StudentScalarWhereInput[]
    NOT?: StudentScalarWhereInput | StudentScalarWhereInput[]
    id?: IntFilter<"Student"> | number
    name?: StringFilter<"Student"> | string
    surname?: StringFilter<"Student"> | string
    secondName?: StringNullableFilter<"Student"> | string | null
    birthDate?: DateTimeFilter<"Student"> | Date | string
    groupId?: IntNullableFilter<"Student"> | number | null
    createdAt?: DateTimeFilter<"Student"> | Date | string
    updatedAt?: DateTimeFilter<"Student"> | Date | string
    isExpelled?: BoolFilter<"Student"> | boolean
  }

  export type UserUpsertWithWhereUniqueWithoutGroupInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutGroupInput, UserUncheckedUpdateWithoutGroupInput>
    create: XOR<UserCreateWithoutGroupInput, UserUncheckedCreateWithoutGroupInput>
  }

  export type UserUpdateWithWhereUniqueWithoutGroupInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutGroupInput, UserUncheckedUpdateWithoutGroupInput>
  }

  export type UserUpdateManyWithWhereWithoutGroupInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutGroupInput>
  }

  export type UserScalarWhereInput = {
    AND?: UserScalarWhereInput | UserScalarWhereInput[]
    OR?: UserScalarWhereInput[]
    NOT?: UserScalarWhereInput | UserScalarWhereInput[]
    id?: IntFilter<"User"> | number
    login?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    isAdmin?: BoolFilter<"User"> | boolean
    groupId?: IntNullableFilter<"User"> | number | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
  }

  export type StudentHistoryUpsertWithWhereUniqueWithoutGroupInput = {
    where: StudentHistoryWhereUniqueInput
    update: XOR<StudentHistoryUpdateWithoutGroupInput, StudentHistoryUncheckedUpdateWithoutGroupInput>
    create: XOR<StudentHistoryCreateWithoutGroupInput, StudentHistoryUncheckedCreateWithoutGroupInput>
  }

  export type StudentHistoryUpdateWithWhereUniqueWithoutGroupInput = {
    where: StudentHistoryWhereUniqueInput
    data: XOR<StudentHistoryUpdateWithoutGroupInput, StudentHistoryUncheckedUpdateWithoutGroupInput>
  }

  export type StudentHistoryUpdateManyWithWhereWithoutGroupInput = {
    where: StudentHistoryScalarWhereInput
    data: XOR<StudentHistoryUpdateManyMutationInput, StudentHistoryUncheckedUpdateManyWithoutGroupInput>
  }

  export type CourseCreateWithoutDepartmentInput = {
    number: number
    createdAt?: Date | string
    updatedAt?: Date | string
    groups?: GroupCreateNestedManyWithoutCourseInput
  }

  export type CourseUncheckedCreateWithoutDepartmentInput = {
    id?: number
    number: number
    createdAt?: Date | string
    updatedAt?: Date | string
    groups?: GroupUncheckedCreateNestedManyWithoutCourseInput
  }

  export type CourseCreateOrConnectWithoutDepartmentInput = {
    where: CourseWhereUniqueInput
    create: XOR<CourseCreateWithoutDepartmentInput, CourseUncheckedCreateWithoutDepartmentInput>
  }

  export type CourseCreateManyDepartmentInputEnvelope = {
    data: CourseCreateManyDepartmentInput | CourseCreateManyDepartmentInput[]
    skipDuplicates?: boolean
  }

  export type CourseUpsertWithWhereUniqueWithoutDepartmentInput = {
    where: CourseWhereUniqueInput
    update: XOR<CourseUpdateWithoutDepartmentInput, CourseUncheckedUpdateWithoutDepartmentInput>
    create: XOR<CourseCreateWithoutDepartmentInput, CourseUncheckedCreateWithoutDepartmentInput>
  }

  export type CourseUpdateWithWhereUniqueWithoutDepartmentInput = {
    where: CourseWhereUniqueInput
    data: XOR<CourseUpdateWithoutDepartmentInput, CourseUncheckedUpdateWithoutDepartmentInput>
  }

  export type CourseUpdateManyWithWhereWithoutDepartmentInput = {
    where: CourseScalarWhereInput
    data: XOR<CourseUpdateManyMutationInput, CourseUncheckedUpdateManyWithoutDepartmentInput>
  }

  export type CourseScalarWhereInput = {
    AND?: CourseScalarWhereInput | CourseScalarWhereInput[]
    OR?: CourseScalarWhereInput[]
    NOT?: CourseScalarWhereInput | CourseScalarWhereInput[]
    id?: IntFilter<"Course"> | number
    number?: IntFilter<"Course"> | number
    departmentId?: IntFilter<"Course"> | number
    createdAt?: DateTimeFilter<"Course"> | Date | string
    updatedAt?: DateTimeFilter<"Course"> | Date | string
  }

  export type DepartmentCreateWithoutCoursesInput = {
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DepartmentUncheckedCreateWithoutCoursesInput = {
    id?: number
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DepartmentCreateOrConnectWithoutCoursesInput = {
    where: DepartmentWhereUniqueInput
    create: XOR<DepartmentCreateWithoutCoursesInput, DepartmentUncheckedCreateWithoutCoursesInput>
  }

  export type GroupCreateWithoutCourseInput = {
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    students?: StudentCreateNestedManyWithoutGroupInput
    User?: UserCreateNestedManyWithoutGroupInput
    StudentHistory?: StudentHistoryCreateNestedManyWithoutGroupInput
  }

  export type GroupUncheckedCreateWithoutCourseInput = {
    id?: number
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    students?: StudentUncheckedCreateNestedManyWithoutGroupInput
    User?: UserUncheckedCreateNestedManyWithoutGroupInput
    StudentHistory?: StudentHistoryUncheckedCreateNestedManyWithoutGroupInput
  }

  export type GroupCreateOrConnectWithoutCourseInput = {
    where: GroupWhereUniqueInput
    create: XOR<GroupCreateWithoutCourseInput, GroupUncheckedCreateWithoutCourseInput>
  }

  export type GroupCreateManyCourseInputEnvelope = {
    data: GroupCreateManyCourseInput | GroupCreateManyCourseInput[]
    skipDuplicates?: boolean
  }

  export type DepartmentUpsertWithoutCoursesInput = {
    update: XOR<DepartmentUpdateWithoutCoursesInput, DepartmentUncheckedUpdateWithoutCoursesInput>
    create: XOR<DepartmentCreateWithoutCoursesInput, DepartmentUncheckedCreateWithoutCoursesInput>
    where?: DepartmentWhereInput
  }

  export type DepartmentUpdateToOneWithWhereWithoutCoursesInput = {
    where?: DepartmentWhereInput
    data: XOR<DepartmentUpdateWithoutCoursesInput, DepartmentUncheckedUpdateWithoutCoursesInput>
  }

  export type DepartmentUpdateWithoutCoursesInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DepartmentUncheckedUpdateWithoutCoursesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GroupUpsertWithWhereUniqueWithoutCourseInput = {
    where: GroupWhereUniqueInput
    update: XOR<GroupUpdateWithoutCourseInput, GroupUncheckedUpdateWithoutCourseInput>
    create: XOR<GroupCreateWithoutCourseInput, GroupUncheckedCreateWithoutCourseInput>
  }

  export type GroupUpdateWithWhereUniqueWithoutCourseInput = {
    where: GroupWhereUniqueInput
    data: XOR<GroupUpdateWithoutCourseInput, GroupUncheckedUpdateWithoutCourseInput>
  }

  export type GroupUpdateManyWithWhereWithoutCourseInput = {
    where: GroupScalarWhereInput
    data: XOR<GroupUpdateManyMutationInput, GroupUncheckedUpdateManyWithoutCourseInput>
  }

  export type GroupScalarWhereInput = {
    AND?: GroupScalarWhereInput | GroupScalarWhereInput[]
    OR?: GroupScalarWhereInput[]
    NOT?: GroupScalarWhereInput | GroupScalarWhereInput[]
    id?: IntFilter<"Group"> | number
    name?: StringFilter<"Group"> | string
    courseId?: IntFilter<"Group"> | number
    createdAt?: DateTimeFilter<"Group"> | Date | string
    updatedAt?: DateTimeFilter<"Group"> | Date | string
  }

  export type MedicalCertificateCreateManyStudentInput = {
    id?: number
    startDate: Date | string
    finishDate: Date | string
    healthGroupId: number
    physicalEducationId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type StudentHistoryCreateManyStudentInput = {
    id?: number
    groupId?: number | null
    createdAt?: Date | string
  }

  export type MedicalCertificateUpdateWithoutStudentInput = {
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    finishDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    MedicalCertificateHistory?: MedicalCertificateHistoryUpdateManyWithoutMedicalCertificateNestedInput
    healthGroup?: HealthGroupUpdateOneRequiredWithoutMedicalCertificatesNestedInput
    physicalEducation?: PhysicalEducationUpdateOneRequiredWithoutMedicalCertificatesNestedInput
  }

  export type MedicalCertificateUncheckedUpdateWithoutStudentInput = {
    id?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    finishDate?: DateTimeFieldUpdateOperationsInput | Date | string
    healthGroupId?: IntFieldUpdateOperationsInput | number
    physicalEducationId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    MedicalCertificateHistory?: MedicalCertificateHistoryUncheckedUpdateManyWithoutMedicalCertificateNestedInput
  }

  export type MedicalCertificateUncheckedUpdateManyWithoutStudentInput = {
    id?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    finishDate?: DateTimeFieldUpdateOperationsInput | Date | string
    healthGroupId?: IntFieldUpdateOperationsInput | number
    physicalEducationId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StudentHistoryUpdateWithoutStudentInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    group?: GroupUpdateOneWithoutStudentHistoryNestedInput
  }

  export type StudentHistoryUncheckedUpdateWithoutStudentInput = {
    id?: IntFieldUpdateOperationsInput | number
    groupId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StudentHistoryUncheckedUpdateManyWithoutStudentInput = {
    id?: IntFieldUpdateOperationsInput | number
    groupId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MedicalCertificateCreateManyHealthGroupInput = {
    id?: number
    startDate: Date | string
    finishDate: Date | string
    studentId: number
    physicalEducationId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MedicalCertificateHistoryCreateManyHealthGroupInput = {
    id?: number
    medicalCertificateId: number
    startDate?: Date | string | null
    finishDate?: Date | string | null
    physicalEducationId?: number | null
    createdAt?: Date | string
  }

  export type MedicalCertificateUpdateWithoutHealthGroupInput = {
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    finishDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    MedicalCertificateHistory?: MedicalCertificateHistoryUpdateManyWithoutMedicalCertificateNestedInput
    physicalEducation?: PhysicalEducationUpdateOneRequiredWithoutMedicalCertificatesNestedInput
    student?: StudentUpdateOneRequiredWithoutMedicalCertificatesNestedInput
  }

  export type MedicalCertificateUncheckedUpdateWithoutHealthGroupInput = {
    id?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    finishDate?: DateTimeFieldUpdateOperationsInput | Date | string
    studentId?: IntFieldUpdateOperationsInput | number
    physicalEducationId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    MedicalCertificateHistory?: MedicalCertificateHistoryUncheckedUpdateManyWithoutMedicalCertificateNestedInput
  }

  export type MedicalCertificateUncheckedUpdateManyWithoutHealthGroupInput = {
    id?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    finishDate?: DateTimeFieldUpdateOperationsInput | Date | string
    studentId?: IntFieldUpdateOperationsInput | number
    physicalEducationId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MedicalCertificateHistoryUpdateWithoutHealthGroupInput = {
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    finishDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    medicalCertificate?: MedicalCertificateUpdateOneRequiredWithoutMedicalCertificateHistoryNestedInput
    physicalEducation?: PhysicalEducationUpdateOneWithoutMedicalCertificateHistoryNestedInput
  }

  export type MedicalCertificateHistoryUncheckedUpdateWithoutHealthGroupInput = {
    id?: IntFieldUpdateOperationsInput | number
    medicalCertificateId?: IntFieldUpdateOperationsInput | number
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    finishDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    physicalEducationId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MedicalCertificateHistoryUncheckedUpdateManyWithoutHealthGroupInput = {
    id?: IntFieldUpdateOperationsInput | number
    medicalCertificateId?: IntFieldUpdateOperationsInput | number
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    finishDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    physicalEducationId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MedicalCertificateCreateManyPhysicalEducationInput = {
    id?: number
    startDate: Date | string
    finishDate: Date | string
    studentId: number
    healthGroupId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MedicalCertificateHistoryCreateManyPhysicalEducationInput = {
    id?: number
    medicalCertificateId: number
    startDate?: Date | string | null
    finishDate?: Date | string | null
    healthGroupId?: number | null
    createdAt?: Date | string
  }

  export type MedicalCertificateUpdateWithoutPhysicalEducationInput = {
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    finishDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    MedicalCertificateHistory?: MedicalCertificateHistoryUpdateManyWithoutMedicalCertificateNestedInput
    healthGroup?: HealthGroupUpdateOneRequiredWithoutMedicalCertificatesNestedInput
    student?: StudentUpdateOneRequiredWithoutMedicalCertificatesNestedInput
  }

  export type MedicalCertificateUncheckedUpdateWithoutPhysicalEducationInput = {
    id?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    finishDate?: DateTimeFieldUpdateOperationsInput | Date | string
    studentId?: IntFieldUpdateOperationsInput | number
    healthGroupId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    MedicalCertificateHistory?: MedicalCertificateHistoryUncheckedUpdateManyWithoutMedicalCertificateNestedInput
  }

  export type MedicalCertificateUncheckedUpdateManyWithoutPhysicalEducationInput = {
    id?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    finishDate?: DateTimeFieldUpdateOperationsInput | Date | string
    studentId?: IntFieldUpdateOperationsInput | number
    healthGroupId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MedicalCertificateHistoryUpdateWithoutPhysicalEducationInput = {
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    finishDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    medicalCertificate?: MedicalCertificateUpdateOneRequiredWithoutMedicalCertificateHistoryNestedInput
    healthGroup?: HealthGroupUpdateOneWithoutMedicalCertificateHistoryNestedInput
  }

  export type MedicalCertificateHistoryUncheckedUpdateWithoutPhysicalEducationInput = {
    id?: IntFieldUpdateOperationsInput | number
    medicalCertificateId?: IntFieldUpdateOperationsInput | number
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    finishDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    healthGroupId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MedicalCertificateHistoryUncheckedUpdateManyWithoutPhysicalEducationInput = {
    id?: IntFieldUpdateOperationsInput | number
    medicalCertificateId?: IntFieldUpdateOperationsInput | number
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    finishDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    healthGroupId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MedicalCertificateHistoryCreateManyMedicalCertificateInput = {
    id?: number
    startDate?: Date | string | null
    finishDate?: Date | string | null
    healthGroupId?: number | null
    physicalEducationId?: number | null
    createdAt?: Date | string
  }

  export type MedicalCertificateHistoryUpdateWithoutMedicalCertificateInput = {
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    finishDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    healthGroup?: HealthGroupUpdateOneWithoutMedicalCertificateHistoryNestedInput
    physicalEducation?: PhysicalEducationUpdateOneWithoutMedicalCertificateHistoryNestedInput
  }

  export type MedicalCertificateHistoryUncheckedUpdateWithoutMedicalCertificateInput = {
    id?: IntFieldUpdateOperationsInput | number
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    finishDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    healthGroupId?: NullableIntFieldUpdateOperationsInput | number | null
    physicalEducationId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MedicalCertificateHistoryUncheckedUpdateManyWithoutMedicalCertificateInput = {
    id?: IntFieldUpdateOperationsInput | number
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    finishDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    healthGroupId?: NullableIntFieldUpdateOperationsInput | number | null
    physicalEducationId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StudentCreateManyGroupInput = {
    id?: number
    name: string
    surname: string
    secondName?: string | null
    birthDate: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    isExpelled?: boolean
  }

  export type UserCreateManyGroupInput = {
    id?: number
    login: string
    password: string
    isAdmin?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type StudentHistoryCreateManyGroupInput = {
    id?: number
    studentId: number
    createdAt?: Date | string
  }

  export type StudentUpdateWithoutGroupInput = {
    name?: StringFieldUpdateOperationsInput | string
    surname?: StringFieldUpdateOperationsInput | string
    secondName?: NullableStringFieldUpdateOperationsInput | string | null
    birthDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isExpelled?: BoolFieldUpdateOperationsInput | boolean
    medicalCertificates?: MedicalCertificateUpdateManyWithoutStudentNestedInput
    StudentHistory?: StudentHistoryUpdateManyWithoutStudentNestedInput
  }

  export type StudentUncheckedUpdateWithoutGroupInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    surname?: StringFieldUpdateOperationsInput | string
    secondName?: NullableStringFieldUpdateOperationsInput | string | null
    birthDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isExpelled?: BoolFieldUpdateOperationsInput | boolean
    medicalCertificates?: MedicalCertificateUncheckedUpdateManyWithoutStudentNestedInput
    StudentHistory?: StudentHistoryUncheckedUpdateManyWithoutStudentNestedInput
  }

  export type StudentUncheckedUpdateManyWithoutGroupInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    surname?: StringFieldUpdateOperationsInput | string
    secondName?: NullableStringFieldUpdateOperationsInput | string | null
    birthDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isExpelled?: BoolFieldUpdateOperationsInput | boolean
  }

  export type UserUpdateWithoutGroupInput = {
    login?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateWithoutGroupInput = {
    id?: IntFieldUpdateOperationsInput | number
    login?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyWithoutGroupInput = {
    id?: IntFieldUpdateOperationsInput | number
    login?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StudentHistoryUpdateWithoutGroupInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    student?: StudentUpdateOneRequiredWithoutStudentHistoryNestedInput
  }

  export type StudentHistoryUncheckedUpdateWithoutGroupInput = {
    id?: IntFieldUpdateOperationsInput | number
    studentId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StudentHistoryUncheckedUpdateManyWithoutGroupInput = {
    id?: IntFieldUpdateOperationsInput | number
    studentId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CourseCreateManyDepartmentInput = {
    id?: number
    number: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CourseUpdateWithoutDepartmentInput = {
    number?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    groups?: GroupUpdateManyWithoutCourseNestedInput
  }

  export type CourseUncheckedUpdateWithoutDepartmentInput = {
    id?: IntFieldUpdateOperationsInput | number
    number?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    groups?: GroupUncheckedUpdateManyWithoutCourseNestedInput
  }

  export type CourseUncheckedUpdateManyWithoutDepartmentInput = {
    id?: IntFieldUpdateOperationsInput | number
    number?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GroupCreateManyCourseInput = {
    id?: number
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GroupUpdateWithoutCourseInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    students?: StudentUpdateManyWithoutGroupNestedInput
    User?: UserUpdateManyWithoutGroupNestedInput
    StudentHistory?: StudentHistoryUpdateManyWithoutGroupNestedInput
  }

  export type GroupUncheckedUpdateWithoutCourseInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    students?: StudentUncheckedUpdateManyWithoutGroupNestedInput
    User?: UserUncheckedUpdateManyWithoutGroupNestedInput
    StudentHistory?: StudentHistoryUncheckedUpdateManyWithoutGroupNestedInput
  }

  export type GroupUncheckedUpdateManyWithoutCourseInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use StudentCountOutputTypeDefaultArgs instead
     */
    export type StudentCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = StudentCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use HealthGroupCountOutputTypeDefaultArgs instead
     */
    export type HealthGroupCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = HealthGroupCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PhysicalEducationCountOutputTypeDefaultArgs instead
     */
    export type PhysicalEducationCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PhysicalEducationCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use MedicalCertificateCountOutputTypeDefaultArgs instead
     */
    export type MedicalCertificateCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = MedicalCertificateCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use GroupCountOutputTypeDefaultArgs instead
     */
    export type GroupCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = GroupCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use DepartmentCountOutputTypeDefaultArgs instead
     */
    export type DepartmentCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = DepartmentCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CourseCountOutputTypeDefaultArgs instead
     */
    export type CourseCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CourseCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserDefaultArgs instead
     */
    export type UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserDefaultArgs<ExtArgs>
    /**
     * @deprecated Use StudentDefaultArgs instead
     */
    export type StudentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = StudentDefaultArgs<ExtArgs>
    /**
     * @deprecated Use StudentHistoryDefaultArgs instead
     */
    export type StudentHistoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = StudentHistoryDefaultArgs<ExtArgs>
    /**
     * @deprecated Use HealthGroupDefaultArgs instead
     */
    export type HealthGroupArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = HealthGroupDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PhysicalEducationDefaultArgs instead
     */
    export type PhysicalEducationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PhysicalEducationDefaultArgs<ExtArgs>
    /**
     * @deprecated Use MedicalCertificateDefaultArgs instead
     */
    export type MedicalCertificateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = MedicalCertificateDefaultArgs<ExtArgs>
    /**
     * @deprecated Use MedicalCertificateHistoryDefaultArgs instead
     */
    export type MedicalCertificateHistoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = MedicalCertificateHistoryDefaultArgs<ExtArgs>
    /**
     * @deprecated Use GroupDefaultArgs instead
     */
    export type GroupArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = GroupDefaultArgs<ExtArgs>
    /**
     * @deprecated Use DepartmentDefaultArgs instead
     */
    export type DepartmentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = DepartmentDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CourseDefaultArgs instead
     */
    export type CourseArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CourseDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}