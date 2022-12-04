// This file automatically generated. All content will be rewritten after build.
// Use .env file to update content here

export interface EnvConfig {
    PHOQER_APP_HOST: string;
    PHOQER_BE_HOST: string;
}

export const env: EnvConfig = {
    PHOQER_APP_HOST: 'http://localhost:{{cookiecutter.port}}',
    PHOQER_BE_HOST: 'http://api.phoqer.com',
};
