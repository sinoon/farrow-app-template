import React from 'react';
export declare type LayoutProps = {
    title?: string;
    keywords?: string[];
    description?: string;
};
export declare const Layout: React.FC<LayoutProps>;
export declare const useLayoutView: () => {
    render: <T extends JSX.Element>(element: T, props?: LayoutProps | undefined) => import("farrow-http").Response;
};
