export interface IConfig {
  port: number;
  token: string;
  allowedOrigin: string[];
  refreshToken: string;
  database: IDatabase;
  host: string;
  googleClientId: string;
}

export interface IDatabase {
  host: string;
  port: number;
  username: string;
  type: "mysql" | "postgress";
  password: string;
  database: string;
}
