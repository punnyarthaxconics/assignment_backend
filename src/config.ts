type ENV = {
  PORT: number;
  DATABASE_URL: string;
};

export const env: ENV = {
  PORT: 3000,
  DATABASE_URL: process.env.DATABASE_URL!,
};

export enum STATUSCODES {
  clientErrorCode = 400,
  serverErrorCode = 500,
}
