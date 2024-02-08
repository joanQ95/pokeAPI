export interface EnvironmentVariables {
    environment: string;
    port: number;
    dbUrl: string;
    //mailConfig: MailConfiguration;
}

    
export const configuration = (): EnvironmentVariables => ({
    
    environment: process.env.NODE_ENV,
    port: parseInt(process.env.PORT, 10),
    dbUrl: process.env.DB_URL,
    // mailConfig: {
    //     host: process.env.MAIL_HOST,
    //     port: parseInt(process.env.MAIL_PORT, 10),
    //     user: process.env.MAIL_USER,
    //     password: process.env.MAIL_PASSWORD,
    //     from: process.env.MAIL_FROM,
    // },
});