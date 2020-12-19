import { Response } from 'farrow-http';
import { JsonType } from 'farrow-schema';
export declare const router: import("farrow-http").RouterPipeline;
export declare const ok: (data: JsonType) => Response;
export declare const err: (message: string) => Response;
