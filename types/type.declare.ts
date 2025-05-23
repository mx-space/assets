// THIS FILE FOR MONACO EDITOR CODE COMPLETION
// TYPE DECLARATION FOR SERVERLESS FUNCTION
declare interface FunctionContextResponse {
  throws(code: number, message: any): void
  type(type: string): FunctionContextResponse
  status(code: number, statusMessage?: string): FunctionContextResponse
  send(data: any): void
}
declare interface FunctionContextRequest {
  query: Record<string, string>
  headers: Record<string, string>
  params: Record<string, string>
  method: string
}

declare interface FastifyRequest extends FunctionContextRequest {
  body: any
  [k: string]: any
}

declare interface ServiceGetter {
  getService(name: 'http'): {
    axios: any
    requestWithCatch: (url: string) => Promise<any>
  }
  getService(name: 'config'): {
    get: (key: string) => Promise<any>
  }
}

declare interface Context
  extends FunctionContextRequest,
    FunctionContextResponse,
    ServiceGetter {
  req: FunctionContextRequest & FastifyRequest
  res: FunctionContextResponse

  isAuthenticated: boolean
  model: SnippetModel
  document: SnippetModel & { [key: string]: any }
  getMaster: () => Promise<UserModel>

  storage: IStorage

  name: string
  reference: string

  writeAsset: (path: string, data: any, options: any) => void
  readAsset: (path: string, options: any) => void

  secret: Record<string, any>

  broadcast: (event: string, data: any) => void
}

declare interface IDb {
  get<T = any>(key: string): Promise<T>
  set(key: string, value: any): Promise<void>
  find<T = any>(condition: Record<string, any>): Promise<T[]>
  del(key: string): Promise<void>
  insert(key: string, value: any): Promise<void>
  update(key: string, value: any): Promise<void>
}

declare interface IStorage {
  db: IDb
  cache: {
    /**
     * value 自动反序列化，JSON.Parse
     * @param key
     */
    get<T>(key: string): Promise<T>

    set(key: string, value: string | object, ttl?: number): Promise<string>
    del(key: string): Promise<string>
  }
  dangerousAccessDbInstance: () => any
}

declare const __dirname: string
declare const __filename: ''

declare class Buffer {
  constructor(...args: any[])
  from(...args: any[]): Buffer
  [x: string]: any
}

declare const logger: Console

declare const process: {
  env: Record<string, string>
  nextTick: (func: Function) => any
}
declare const context: Context

declare enum SnippetType {
  JSON = 'json',
  Function = 'function',
  Text = 'text',
  YAML = 'yaml',
}

declare interface SnippetModel extends BaseModel {
  type: SnippetType
  private: boolean
  raw: string
  name: string
  reference: string
  comment?: string
  metatype?: string
}

declare class BaseModel {
  created?: Date
  id?: string
}

declare class UserModel {
  username: string

  name: string

  introduce?: string

  avatar?: string

  mail?: string

  url?: string

  lastLoginTime?: Date

  lastLoginIp?: string

  socialIds?: any
}

declare function require(id: string, useCache?: boolean): Promise<any>
