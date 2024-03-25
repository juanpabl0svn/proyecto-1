import { SupabaseAuthStrategy } from 'nestjs-supabase-auth';
declare const SupabaseStrategy_base: new (...args: any[]) => SupabaseAuthStrategy;
export declare class SupabaseStrategy extends SupabaseStrategy_base {
    constructor();
    validate(payload: any): Promise<any>;
    authenticate(req: any): void;
}
export {};
