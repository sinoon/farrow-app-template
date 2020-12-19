import { Middleware } from 'farrow-pipeline';
import { MaybeAsyncResponse } from 'farrow-http';
export declare const NoCache: () => Middleware<any, MaybeAsyncResponse>;
